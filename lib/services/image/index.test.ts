import * as GCS from "@google-cloud/storage";
import { PassThrough } from "node:stream";
import { expect, it, vi } from "vitest";

import { uploadImage } from ".";

it("should reject if no bucket name is set", async () => {
  const mockStream = new PassThrough();

  vi.stubEnv("GOOGLE_STORAGE_BUCKET_NAME", undefined);
  vi.spyOn(GCS.File.prototype, "createWriteStream").mockImplementation(
    () => mockStream,
  );

  const image = new File(["ヽ(^o^)ρ┳┻┳°σ(^o^)/"], "pp.png", {
    type: "image/png",
  });

  await expect(() => uploadImage(image)).rejects.toEqual(
    new Error("GOOGLE_STORAGE_BUCKET_NAME is not set"),
  );
});

it("should reject with error in write stream", async () => {
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

  await expect(() => uploadImage(image)).rejects.toBe(
    "Unable to upload image. Something went wrong.",
  );
});

it("should return URL of uploaded image", async () => {
  const mockStream = new PassThrough();

  vi.stubEnv("GOOGLE_STORAGE_BUCKET_NAME", "bucket");
  vi.spyOn(GCS.File.prototype, "createWriteStream").mockImplementation(
    () => mockStream,
  );

  const image = new File(["ヽ(^o^)ρ┳┻┳°σ(^o^)/"], "pp.png", {
    type: "image/png",
  });

  const url = await uploadImage(image);

  expect(url).toMatch(
    /^https:\/\/storage\.googleapis\.com\/bucket\/uploads\/[a-f0-9]{16}.png$/,
  );
});
