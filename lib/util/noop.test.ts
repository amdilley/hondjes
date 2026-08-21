import { expect, it } from "vitest";

import { asyncNoop, noop } from "./noop";

it("should do nothing", () => {
  expect(noop()).toBeUndefined();
});

it("should do nothing async", async () => {
  await expect(asyncNoop()).resolves.toBeUndefined();
});
