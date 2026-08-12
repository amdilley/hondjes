"use client";

import { useMounted } from "@/hooks/useMounted";

type Props = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
};

/**
 * Some components despite including the "use client"
 * directive are still embedded within server components
 * meaning they will be rendered on the server. useState
 * and useEffect are transferrable between the server
 * and the client. We can maintain a mounted state that
 * will only become true once the client executes the
 * useEffect callback. This allows us to set a server-
 * side fallback while preventing the wrapped children
 * from rendering until on the client.
 */
export function ClientOnly({
  children,
  fallback = undefined,
}: Readonly<Props>) {
  const hasMounted = useMounted();

  return hasMounted ? children : fallback;
}
