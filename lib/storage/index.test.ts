import { Bucket } from "@google-cloud/storage";
import { describe, expect, it, vi } from "vitest";

import { getBucket, getBucketFileUrl } from ".";

describe("getBucket", () => {
  it("should throw if no bucket name is set", () => {
    vi.stubEnv("GOOGLE_STORAGE_BUCKET_NAME", undefined);

    expect(() => getBucket()).toThrow(
      new Error("GOOGLE_STORAGE_BUCKET_NAME is not set"),
    );
  });

  it("should return the bucket instance", () => {
    vi.stubEnv("GOOGLE_STORAGE_BUCKET_NAME", "bucket");

    const bucket = getBucket();

    expect(bucket).toBeInstanceOf(Bucket);
    expect(bucket.name).toBe("bucket");
  });
});

describe("getBucketFileUrl", () => {
  it("should throw if no bucket name is set", () => {
    vi.stubEnv("GOOGLE_STORAGE_BUCKET_NAME", undefined);

    expect(() => getBucketFileUrl("file.pdf")).toThrow(
      new Error("GOOGLE_STORAGE_BUCKET_NAME is not set"),
    );
  });

  it("should return file URL based on env bucket name", () => {
    vi.stubEnv("GOOGLE_STORAGE_BUCKET_NAME", "bucket");

    expect(getBucketFileUrl("file.pdf")).toBe(
      "https://storage.googleapis.com/bucket/file.pdf",
    );
  });
});
