import { redirect } from "next/navigation";

import { createPet } from "@/services/pet";
import { getSession } from "@/session";

export default async function Page() {
  const session = await getSession();
  const ownerId = session!.user.id; // session exists since otherwise redirect happens
  const petId = await createPet(ownerId);

  return redirect(`/pet/${petId}`);
}
