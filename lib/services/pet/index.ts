import { eq } from "drizzle-orm";
import assert from "node:assert";

import { db } from "@/db";
import { pet as petTable } from "@/db/schema";
import { getEnvValue } from "@/util/getEnvValue";

export async function getPetById(id: string) {
  assert.ok(getEnvValue("POSTGRES_URL"));

  const pets = await db.select().from(petTable).where(eq(petTable.id, id));

  return pets?.[0];
}
