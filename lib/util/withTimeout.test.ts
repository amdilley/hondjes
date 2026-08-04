import { expect, it } from "vitest";
import { withTimeout } from "./withTimeout";

it("should reject after timeout", async () => {
  const p = new Promise((res) => setTimeout(res, 10_000));

  await expect(withTimeout(p, { timeout: 30 })).rejects.toEqual(
    new Error("Promise timed out"),
  );
});

it("should reject after timeout with provided error message", async () => {
  const p = new Promise((res) => setTimeout(res, 10_000));

  await expect(
    withTimeout(p, { timeout: 30, timeoutError: "Took too long" }),
  ).rejects.toEqual(new Error("Took too long"));
});

it("should resolve within the timeout", async () => {
  const awaitedValue = 42;
  const p = new Promise((res) => setTimeout(res, 10, awaitedValue));

  await expect(
    withTimeout(p, { timeout: 30, timeoutError: "Took too long" }),
  ).resolves.toEqual(42);
});
