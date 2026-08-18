import { eq } from "drizzle-orm";

import { db } from "@/db";
import { pet as petTable } from "@/db/schema";

export async function getPetById(id: string) {
  const pets = await db.select().from(petTable).where(eq(petTable.id, id));

  return pets?.[0];
}
