import { eq } from "drizzle-orm";
import assert from "node:assert";
import crypto from "node:crypto";

import { db } from "@/db";
import { pet as petTable } from "@/db/schema";
import { getEnvValue } from "@/util/getEnvValue";

export async function createPet(ownerId: string) {
  assert.ok(getEnvValue("POSTGRES_URL"));

  const id = crypto.randomUUID();

  await db.insert(petTable).values({ id, ownerId });

  return id;
}

export async function getPetById(id: string) {
  assert.ok(getEnvValue("POSTGRES_URL"));

  const pets = await db.select().from(petTable).where(eq(petTable.id, id));

  return pets?.[0];
}
