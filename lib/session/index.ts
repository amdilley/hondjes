"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/auth/auth";

export async function getSession(requireAuth = true) {
  const session = await auth.api.getSession({ headers: await headers() });

  if (requireAuth && !session) {
    redirect("/");
  }

  return session;
}
