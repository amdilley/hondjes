import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it, vi } from "vitest";

import type { Pet } from "@/db/schema";

import { PetForm } from "./PetForm";

it("should populate fields with initial pet data", () => {
  render(
    <PetForm
      pet={{ name: "Fido", description: "Fluffy" } as unknown as Pet}
      onSubmit={vi.fn()}
    />,
  );

  const nameInput = screen.getByRole<HTMLInputElement>("textbox", {
    name: "Name",
  });
  const descriptionInput = screen.getByRole<HTMLInputElement>("textbox", {
    name: "Description",
  });

  expect(nameInput.value).toBe("Fido");
  expect(descriptionInput.value).toBe("Fluffy");
});

it("should submit with input pet data", async () => {
  const submitSpy = vi.fn();

  render(<PetForm onSubmit={submitSpy} />);

  const nameInput = screen.getByRole<HTMLInputElement>("textbox", {
    name: "Name",
  });
  const descriptionInput = screen.getByRole<HTMLInputElement>("textbox", {
    name: "Description",
  });
  const imageInput = screen.getByRole<HTMLInputElement>("button", {
    name: "Upload image",
  });
  const submit = screen.getByRole("button", { name: "Submit" });

  const image = new File(["ヽ(^o^)ρ┳┻┳°σ(^o^)/"], "pp.png", {
    type: "image/png",
  });

  nameInput.focus();

  await userEvent.keyboard("Fido");
  await userEvent.tab();
  await userEvent.keyboard("Fluffy");
  await userEvent.upload(imageInput, image);

  expect(nameInput.value).toBe("Fido");
  expect(descriptionInput.value).toBe("Fluffy");
  expect(imageInput.value).toMatch(/pp\.png$/);

  await userEvent.click(submit);

  const formData = new FormData();

  formData.append("name", "Fido");
  formData.append("description", "Fluffy");
  formData.append("image", image);

  expect(submitSpy).toHaveBeenCalledTimes(1);
  expect(submitSpy).toHaveBeenNthCalledWith(1, formData);
});

it("should show required field errors on input blur", async () => {
  render(<PetForm onSubmit={vi.fn()} />);

  const nameInput = screen.getByRole<HTMLInputElement>("textbox", {
    name: "Name",
  });
  const descriptionInput = screen.getByRole<HTMLInputElement>("textbox", {
    name: "Description",
  });

  nameInput.focus();

  await userEvent.tab();
  await userEvent.keyboard("Fluffy");

  expect(nameInput.ariaInvalid).toBe("true");
  expect(descriptionInput.value).toBe("Fluffy");
});

it("should focus first invalid field on submit", async () => {
  const image = new File(["ヽ(^o^)ρ┳┻┳°σ(^o^)/"], "pp.png", {
    type: "image/png",
  });

  render(<PetForm maxSize={image.size - 1} onSubmit={vi.fn()} />);

  const nameInput = screen.getByRole<HTMLInputElement>("textbox", {
    name: "Name",
  });
  const imageInput = screen.getByRole<HTMLInputElement>("button", {
    name: "Upload image",
  });
  const submit = screen.getByRole("button", { name: "Submit" });

  nameInput.focus();

  await userEvent.tab();
  await userEvent.keyboard("Fluffy");
  await userEvent.upload(imageInput, image);

  expect(nameInput.ariaInvalid).toBe("true");
  expect(imageInput.ariaInvalid).toBe("true");

  // Should use userEvent.click(button) but event isn't triggered
  // https://github.com/testing-library/user-event/issues/1075
  fireEvent.submit(submit);

  expect(document.activeElement).toEqual(nameInput);
});
