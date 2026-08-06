import { render } from "@testing-library/react";
import { expect, it, vi } from "vitest";
import { useMounted } from "./useMounted";

it("should fire callback once on mount only", () => {
  function TestComponent({ callback }: { callback: () => {} }) {
    useMounted(callback);
    return undefined;
  }

  const spy = vi.fn();

  const { rerender } = render(<TestComponent callback={spy} />);

  expect(spy).toHaveBeenCalledTimes(1);

  rerender(<TestComponent callback={spy} />);

  expect(spy).toHaveBeenCalledTimes(1);
});
