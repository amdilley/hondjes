import { render, screen } from "@testing-library/react";
import { it } from "vitest";
import { TrackerMap } from "./TrackerMap";

it("should render map with zoom navigation", () => {
  render(<TrackerMap title="Recent sightings" markers={[]} />);

  screen.getByLabelText("Recent sightings");
  screen.getByRole("button", { name: "Zoom in" });
  screen.getByRole("button", { name: "Zoom out" });
});
