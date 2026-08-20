import { Storage } from "@google-cloud/storage";
import path from "node:path";

import { getEnvValue } from "@/util/getEnvValue";

const serviceKey = path.join(import.meta.dirname, "hondjes-8c50328e347a.json");

export const storage = new Storage();

export function getBucket() {
  const bucketName = getEnvValue("GOOGLE_STORAGE_BUCKET_NAME");

  return storage.bucket(bucketName);
}

export function getBucketFileUrl(fileName: string) {
  const bucketName = getEnvValue("GOOGLE_STORAGE_BUCKET_NAME");

  return `https://storage.googleapis.com/${bucketName}/${fileName}`;
}
