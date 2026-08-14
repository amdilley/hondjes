import { expect, it } from "vitest";
import { getCenter } from "./getCenter";

it("should return the same position if only one position provided", () => {
  const center = getCenter([[53.1, -42.0]]);

  expect(center[0]).toBeCloseTo(53.1, 10);
  expect(center[1]).toBeCloseTo(-42.0, 10);
});

it("should return the center for all positions provided", () => {
  const center = getCenter([
    [0, 0],
    [0, 90],
    [90, 90],
  ]);

  expect(center[0]).toBeCloseTo(35.264389682754654, 10);
  expect(center[1]).toBe(45);
});
