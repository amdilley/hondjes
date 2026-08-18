import { render, screen } from "@testing-library/react";
import L from "leaflet";
import { expect, it, vi } from "vitest";

import { TrackerMap } from "./TrackerMap";

it("should render map with zoom navigation", () => {
  render(<TrackerMap title="Recent sightings" markers={[]} />);

  screen.getByLabelText("Recent sightings");
  screen.getByRole("button", { name: "Zoom in" });
  screen.getByRole("button", { name: "Zoom out" });
});

it("shouldn't reinitialize map", () => {
  const mapSpy = vi.spyOn(L, "map");

  render(<TrackerMap title="Recent sightings" markers={[]} />);

  screen.getByRole("button", { name: "Zoom in" });

  expect(mapSpy).toHaveBeenCalledTimes(1);
});
