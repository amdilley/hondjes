import { render, screen } from "@testing-library/react";
import ReactDOMServer from "react-dom/server";
import { expect, it } from "vitest";

import { renderServerComponent } from "@/test-util/renderServerComponent";

import { ClientOnly } from "./ClientOnly";

it("should return undefined on SSR by default", () => {
  const container = document.createElement("div");

  document.body.append(container);

  render(
    ReactDOMServer.renderToString(
      <ClientOnly>
        <h2>Title</h2>
      </ClientOnly>,
    ),
    { hydrate: false, container },
  );

  expect(container.textContent).toBe("");
});

it("should return specified fallback on SSR", () => {
  const container = document.createElement("div");

  document.body.append(container);

  render(
    ReactDOMServer.renderToString(
      <ClientOnly fallback={<h2>Server title</h2>}>
        <h2>Title</h2>
      </ClientOnly>,
    ),
    { hydrate: false, container },
  );

  expect(container.textContent).toBe("<h2>Server title</h2>");
});

it("should render child component on client", async () => {
  await renderServerComponent(
    <ClientOnly>
      <h2>Title</h2>
    </ClientOnly>,
  );

  screen.getByRole("heading", { level: 2, name: "Title" });
});
