import type { NextRequest } from "next/server";
import { beforeEach, expect, it, vi } from "vitest";

import * as API from "@/services/pet";

import { GET } from "./route";

beforeEach(() => {
  vi.restoreAllMocks();
});

it("returns error when POSTGRES_URL isn't set", async () => {
  vi.stubEnv("POSTGRES_URL", undefined);

  const result = GET({} as NextRequest, {
    params: Promise.resolve({ id: "12345" }),
  }).then((r) => r.json());

  await expect(result).resolves.toEqual({ error: "POSTGRES_URL is not set" });
});

it("returns error when getPetById times out", async () => {
  vi.useFakeTimers();
  vi.spyOn(API, "getPetById").mockImplementation(
    (_id: string) => new Promise((res) => setTimeout(res, 10_000)),
  );

  const result = GET({} as NextRequest, {
    params: Promise.resolve({ id: "12345" }),
  }).then((r) => r.json());

  await vi.advanceTimersByTimeAsync(10_000);

  await expect(result).resolves.toEqual({
    error: "Database connection timeout (5s)",
  });
});

it("returns error when getPetById throws", async () => {
  vi.spyOn(API, "getPetById").mockImplementation((_id: string) =>
    Promise.reject(new Error("ERROR")),
  );

  const result = GET({} as NextRequest, {
    params: Promise.resolve({ id: "12345" }),
  }).then((r) => r.json());

  await expect(result).resolves.toEqual({ error: "ERROR" });
});

it("returns pet from db", async () => {
  const d = new Date();
  const mockPet = {
    id: "12345",
    name: "Boots",
    ownerId: "54321",
    description: "Fluffy and cute",
    imageUrl: null,
    createdAt: d,
    updatedAt: d,
  };

  vi.spyOn(API, "getPetById").mockImplementation((_id: string) =>
    Promise.resolve(mockPet),
  );

  const result = GET({} as NextRequest, {
    params: Promise.resolve({ id: "12345" }),
  }).then((r) => r.json());

  await expect(result).resolves.toEqual({
    ...mockPet,
    createdAt: d.toISOString(),
    updatedAt: d.toISOString(),
  });
});
