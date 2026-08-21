import * as navigation from "next/navigation";
import { afterEach, expect, it, vi } from "vitest";

import { noop } from "@/util/noop";

import { getSession } from ".";

vi.mock("next/headers", () => ({
  headers: vi.fn(() => Promise.resolve(new Headers())),
}));

vi.mock("next/navigation", () => ({
  redirect: vi.fn((url: string) => {
    throw new Error(`NEXT_REDIRECT: ${url}`);
  }),
}));

afterEach(() => {
  vi.resetAllMocks();
});

it("should redirect when auth is required", async () => {
  const redirectSpy = vi
    .spyOn(navigation, "redirect")
    .mockImplementation(noop as never);

  await getSession();

  expect(redirectSpy).toHaveBeenCalledTimes(1);
  expect(redirectSpy).toHaveBeenNthCalledWith(1, "/");
});

it("should not redirect when auth not required", async () => {
  const redirectSpy = vi.spyOn(navigation, "redirect");

  await getSession(false);

  expect(redirectSpy).not.toHaveBeenCalled();
});
