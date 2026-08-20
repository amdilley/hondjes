import crypto from "node:crypto";
import path from "node:path";

import { getBucket, getBucketFileUrl } from "@/storage";

export async function uploadImage(imageFile: File) {
  return new Promise(async (resolve, reject) => {
    const uid = crypto.randomBytes(8).toString("hex");
    const ext = path.extname(imageFile.name);
    const destinationPath = `uploads/${uid}${ext}`;

    try {
      const gcsFile = getBucket().file(destinationPath);
      const writeStream = gcsFile.createWriteStream({
        metadata: { contentType: "image/*" },
        resumable: false,
      });

      const buffer = Buffer.from(await imageFile.arrayBuffer());

      writeStream
        .on("finish", () => {
          resolve(getBucketFileUrl(destinationPath));
        })
        .on("error", () => {
          reject("Unable to upload image. Something went wrong.");
        })
        .end(buffer);
    } catch (error) {
      reject(error);
    }
  });
}
