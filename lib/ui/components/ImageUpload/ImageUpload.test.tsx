import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it, vi } from "vitest";

import { ImageUpload } from "./ImageUpload";

it("should upload selected image file", async () => {
  const uploadSpy = vi.fn();
  const image = new File(["ヽ(^o^)ρ┳┻┳°σ(^o^)/"], "pp.png", {
    type: "image/png",
  });

  render(<ImageUpload name="image" label="Image" onUpload={uploadSpy} />);

  const input = screen.getByRole<HTMLInputElement>("button");

  await userEvent.upload(input, image);

  expect(uploadSpy).toHaveBeenCalledTimes(1);
  expect(uploadSpy).toHaveBeenNthCalledWith(1, image);
});

it("should fail if image size exceeds max specified", async () => {
  const image = new File(["ヽ(^o^)ρ┳┻┳°σ(^o^)/"], "pp.png", {
    type: "image/png",
  });

  render(<ImageUpload name="image" label="Image" maxSize={image.size - 1} />);

  const input = screen.getByRole("button");

  expect(input.ariaInvalid).toBe("false");
  expect(screen.queryByText("File too big")).toBeNull();

  await userEvent.upload(input, image);

  expect(input.ariaInvalid).toBe("true");
  screen.getByText("File too big");
});

it("should render image if url provided", () => {
  render(
    <ImageUpload
      name="image"
      label="Image"
      image="/pp.png"
      imageAlt="ping pong emoji"
    />,
  );

  screen.getByRole("img", { name: "ping pong emoji" });
});

it("should render image with default alt text if none provided", () => {
  render(<ImageUpload name="image" label="Image" image="/pp.png" />);

  screen.getByRole("img", { name: "image" });
});
