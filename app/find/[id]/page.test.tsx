import { screen } from "@testing-library/react";
import { expect, it } from "vitest";
import FindPetPage from "./page";
import { renderServerComponent } from "@/test-util/renderServerComponent";

it("should render a QR code", async () => {
  const params = Promise.resolve({
    id: "1234567",
  });

  await renderServerComponent(<FindPetPage params={params} />);

  const qrCodeWrapper = screen.getByLabelText(
    "http://localhost:3000/find/1234567",
  );

  expect(qrCodeWrapper.querySelector("svg")).toBeDefined();
});
