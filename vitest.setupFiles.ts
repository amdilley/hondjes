import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

afterEach(() => {
  // needed to reset the DOM between tests
  cleanup();

  // vi.stubEnv is not unstubbed automatically via vitest.config.ts `restoreMocks: true`
  vi.unstubAllEnvs();

  // vi.stubGlobal is not unstubbed automatically via vitest.config.ts `restoreMocks: true`
  vi.unstubAllGlobals();

  // vi.useFakeTimers is not reset automatically via vitest.config.ts `restoreMocks: true`
  vi.useRealTimers();
});
