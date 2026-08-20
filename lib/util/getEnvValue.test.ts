import { expect, it, vi } from "vitest";

import { getEnvValue } from "./getEnvValue";

it("throws if value isn't set", () => {
  vi.stubEnv("__TEST__", undefined);

  expect(() => getEnvValue("__TEST__")).toThrow(
    new Error("__TEST__ is not set"),
  );
});

it("returns env value when defined", () => {
  vi.stubEnv("__TEST__", "value");

  expect(getEnvValue("__TEST__")).toBe("value");
});
