import { withTimeout } from "@/util/withTimeout";

export async function dbCheck(timeout = 5000) {
  const env = {
    POSTGRES_URL: Boolean(process.env.POSTGRES_URL),
  } as const;

  let dbConnected = false;
  let schemaApplied = false;
  let dbError: string | undefined;

  if (env.POSTGRES_URL) {
    try {
      const dbCheckPromise = (async () => {
        const [{ db }, { sql }, schema] = await Promise.all([
          import("./"),
          import("drizzle-orm"),
          import("./schema"),
        ]);

        // Ping DB - this will actually attempt to connect
        const result = await db.execute(sql`SELECT 1 as ping`);

        if (!result) {
          throw new Error("Database query returned no result");
        }

        dbConnected = true;

        try {
          // Touch a known table to verify migrations
          await db.select().from(schema.user).limit(1);
          schemaApplied = true;
        } catch {
          schemaApplied = false;

          // If we can't query the user table, it's likely migrations haven't run
          if (!dbError) {
            dbError = "Schema not applied. Run: npm run db:migrate";
          }
        }
      })();

      await withTimeout(dbCheckPromise, {
        timeout,
        timeoutError: `Database connection timeout (${Math.floor(timeout / 1000)}s)`,
      });
    } catch {
      dbConnected = false;
      schemaApplied = false;

      // Provide user-friendly error messages
      dbError =
        "Database not connected. Please start your PostgreSQL database and verify your POSTGRES_URL in .env";
    }
  } else {
    dbConnected = false;
    schemaApplied = false;
    dbError = "POSTGRES_URL is not set";
  }

  return {
    dbConnected,
    dbError,
    schemaApplied,
  };
}
