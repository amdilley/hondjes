import * as GCS from "@google-cloud/storage";
import type { NextRequest } from "next/server";
import { PassThrough } from "node:stream";
import { expect, it, vi } from "vitest";

import { POST } from "./route";

it("returns error when GOOGLE_STORAGE_BUCKET_NAME isn't set", async () => {
  const mockStream = new PassThrough();

  vi.stubEnv("GOOGLE_STORAGE_BUCKET_NAME", undefined);
  vi.spyOn(GCS.File.prototype, "createWriteStream").mockImplementation(
    () => mockStream,
  );

  const image = new File(["ヽ(^o^)ρ┳┻┳°σ(^o^)/"], "pp.png", {
    type: "image/png",
  });
  const formData = new FormData();

  formData.append("image", image);

  const result = POST(
    {
      formData: () => Promise.resolve(formData),
    } as unknown as NextRequest,
    {
      params: Promise.resolve({ id: "12345" }),
    },
  ).then((r) => r.json());

  await expect(result).resolves.toEqual({
    error: "GOOGLE_STORAGE_BUCKET_NAME is not set",
  });
});

it("returns error when GCS fails", async () => {
  const mockStream = new PassThrough();

  mockStream.on("data", () => {
    mockStream.emit("error");
  });

  vi.stubEnv("GOOGLE_STORAGE_BUCKET_NAME", "bucket");
  vi.spyOn(GCS.File.prototype, "createWriteStream").mockImplementation(
    () => mockStream,
  );

  const image = new File(["ヽ(^o^)ρ┳┻┳°σ(^o^)/"], "pp.png", {
    type: "image/png",
  });
  const formData = new FormData();

  formData.append("image", image);

  const result = POST(
    {
      formData: () => Promise.resolve(formData),
    } as unknown as NextRequest,
    {
      params: Promise.resolve({ id: "12345" }),
    },
  ).then((r) => r.json());

  await expect(result).resolves.toEqual({
    error: "Unable to upload image. Something went wrong.",
  });
});

it("returns error when no image data", async () => {
  const mockStream = new PassThrough();

  vi.stubEnv("GOOGLE_STORAGE_BUCKET_NAME", "bucket");
  vi.spyOn(GCS.File.prototype, "createWriteStream").mockImplementation(
    () => mockStream,
  );

  const formData = new FormData();

  const result = POST(
    {
      formData: () => Promise.resolve(formData),
    } as unknown as NextRequest,
    {
      params: Promise.resolve({ id: "12345" }),
    },
  ).then((r) => r.json());

  await expect(result).resolves.toEqual({
    error: "No image data",
  });
});

it("returns error when image data is not a file", async () => {
  const mockStream = new PassThrough();

  vi.stubEnv("GOOGLE_STORAGE_BUCKET_NAME", "bucket");
  vi.spyOn(GCS.File.prototype, "createWriteStream").mockImplementation(
    () => mockStream,
  );

  const formData = new FormData();

  formData.append("image", "abc0435");

  const result = POST(
    {
      formData: () => Promise.resolve(formData),
    } as unknown as NextRequest,
    {
      params: Promise.resolve({ id: "12345" }),
    },
  ).then((r) => r.json());

  await expect(result).resolves.toEqual({
    error: "Uploaded image data must be a file",
  });
});

it("returns uploaded URL of image", async () => {
  const mockStream = new PassThrough();

  vi.stubEnv("GOOGLE_STORAGE_BUCKET_NAME", "bucket");
  vi.spyOn(GCS.File.prototype, "createWriteStream").mockImplementation(
    () => mockStream,
  );

  const image = new File(["ヽ(^o^)ρ┳┻┳°σ(^o^)/"], "pp.png", {
    type: "image/png",
  });
  const formData = new FormData();

  formData.append("image", image);

  const result = POST(
    {
      formData: () => Promise.resolve(formData),
    } as unknown as NextRequest,
    {
      params: Promise.resolve({ id: "12345" }),
    },
  ).then((r) => r.json());

  await expect(result).resolves.toEqual({
    message: "Upload successful",
    url: expect.stringMatching(
      /^https:\/\/storage\.googleapis\.com\/bucket\/uploads\/[a-f0-9]{16}.png$/,
    ),
  });
});
