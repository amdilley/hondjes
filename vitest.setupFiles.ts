import { afterEach, vi } from "vitest";

afterEach(() => {
  // vi.stubEnv is not unstubbed automatically via vitest.config.ts `restoreMocks: true`
  vi.unstubAllEnvs();

  // vi.stubGlobal is not unstubbed automatically via vitest.config.ts `restoreMocks: true`
  vi.unstubAllGlobals();

  // vi.useFakeTimers is not reset automatically via vitest.config.ts `restoreMocks: true`
  vi.useRealTimers();
});
