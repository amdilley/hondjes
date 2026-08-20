import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import { getEnvValue } from "@/util/getEnvValue";

import * as schema from "./schema";

const connectionString = getEnvValue("POSTGRES_URL");
const client = postgres(connectionString);

export const db = drizzle(client, { schema });
