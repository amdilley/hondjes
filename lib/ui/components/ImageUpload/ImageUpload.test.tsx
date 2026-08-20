import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it, vi } from "vitest";

import { ImageUpload } from "./ImageUpload";

it("should upload selected image file", async () => {
  const fetchSpy = vi.fn();
  const successSpy = vi.fn();
  const image = new File(["ヽ(^o^)ρ┳┻┳°σ(^o^)/"], "pp.png", {
    type: "image/png",
  });
  const formData = new FormData();

  formData.append("image", image);

  render(
    <ImageUpload
      uploadPath="/api/profile"
      fetcher={fetchSpy}
      onSuccess={successSpy}
    />,
  );

  const input = screen.getByRole("button");

  await userEvent.upload(input, image);

  expect(fetchSpy).toHaveBeenCalledTimes(1);
  expect(fetchSpy).toHaveBeenNthCalledWith(1, "/api/profile", {
    method: "POST",
    body: formData,
  });

  expect(successSpy).toHaveBeenCalledTimes(1);
});

it("should fail if image size exceeds max specified", async () => {
  const exceedSpy = vi.fn();
  const image = new File(["ヽ(^o^)ρ┳┻┳°σ(^o^)/"], "pp.png", {
    type: "image/png",
  });

  render(
    <ImageUpload
      uploadPath="/api/profile"
      maxSize={image.size - 1}
      onExceedMaxSize={exceedSpy}
    />,
  );

  const input = screen.getByRole("button");

  await userEvent.upload(input, image);

  expect(exceedSpy).toHaveBeenCalledTimes(1);
});

it("should fail if fetcher rejects", async () => {
  const fetcherSpy = vi.fn(() => Promise.reject("Upload failed"));
  const errorSpy = vi.fn();
  const image = new File(["ヽ(^o^)ρ┳┻┳°σ(^o^)/"], "pp.png", {
    type: "image/png",
  });

  render(
    <ImageUpload
      uploadPath="/api/profile"
      fetcher={fetcherSpy}
      onError={errorSpy}
    />,
  );

  const input = screen.getByRole("button");

  await userEvent.upload(input, image);

  expect(errorSpy).toHaveBeenCalledTimes(1);
  expect(errorSpy).toHaveBeenNthCalledWith(1, "Upload failed");
});
