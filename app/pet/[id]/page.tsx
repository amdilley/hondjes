import { notFound, redirect } from "next/navigation";

import { getPetById } from "@/services/pet";
import { getSession } from "@/session";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: Props) {
  const { id } = await params;

  const [pet, session] = await Promise.all([getPetById(id), getSession()]);

  if (!session) {
    return redirect("/");
  }

  // only pet owners can access pet pages
  if (session.user.id !== pet?.ownerId) {
    return notFound();
  }

  return <div />;
}
