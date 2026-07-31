import { useEffect, useState } from "react";

export function useMounted(callback?: () => void) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    callback?.();
  }, []);

  return hasMounted;
}
