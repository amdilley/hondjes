import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it, vi } from "vitest";

import { Input } from "./Input";

it("should populate input with initial value when specified", () => {
  render(<Input name="test" initialValue="123" label="Test value" />);

  const input = screen.getByRole<HTMLInputElement>("textbox", {
    name: "Test value",
  });

  expect(input.value).toBe("123");
});

it("should render input as required when specified", () => {
  render(<Input name="test" label="Test value" required />);

  const input = screen.getByRole<HTMLInputElement>("textbox", {
    name: "Test value",
  });

  expect(input.required).toBe(true);
});

it("should not show error message when validation passes", async () => {
  const validator = vi.fn((value: string) => value.startsWith("123"));

  render(
    <Input
      name="test"
      label="Test value"
      errorText="Invalid text"
      validator={validator}
    />,
  );

  const input = screen.getByRole<HTMLInputElement>("textbox", {
    name: "Test value",
  });

  expect(screen.queryByText("Invalid text")).toBeNull();

  input.focus();

  await userEvent.keyboard("123");

  input.blur();

  expect(screen.queryByText("Invalid text")).toBeNull();

  expect(validator).toHaveBeenCalledTimes(1);
  expect(validator).toHaveBeenNthCalledWith(1, "123");
});

it("should show error message when validation fails", async () => {
  const validator = vi.fn((value: string) => value.startsWith("123"));

  render(
    <Input
      name="test"
      label="Test value"
      errorText="Invalid text"
      validator={validator}
    />,
  );

  const input = screen.getByRole<HTMLInputElement>("textbox", {
    name: "Test value",
  });

  expect(screen.queryByText("Invalid text")).toBeNull();

  input.focus();

  await userEvent.keyboard("456");

  input.blur();

  await screen.findByText("Invalid text");

  expect(validator).toHaveBeenCalledTimes(1);
  expect(validator).toHaveBeenNthCalledWith(1, "456");
});

it("should not validate when validator not defined", async () => {
  render(<Input name="test" label="Test value" errorText="Invalid text" />);

  const input = screen.getByRole<HTMLInputElement>("textbox", {
    name: "Test value",
  });

  expect(screen.queryByText("Invalid text")).toBeNull();

  input.focus();

  await userEvent.keyboard("456");

  input.blur();

  expect(screen.queryByText("Invalid text")).toBeNull();
});

it("should error when input is required", async () => {
  render(<Input name="test" label="Test value" required />);

  const input = screen.getByRole<HTMLInputElement>("textbox", {
    name: "Test value",
  });

  expect(input.ariaInvalid).toBe("false");

  input.focus();
  input.blur();

  await waitFor(() => {
    expect(input.ariaInvalid).toBe("true");
  });
});
