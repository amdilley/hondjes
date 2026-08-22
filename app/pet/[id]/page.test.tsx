import * as navigation from "next/navigation";
import { afterEach, expect, it, vi } from "vitest";

import * as Auth from "@/auth/auth";
import {
  mockNonOwner,
  mockOwner,
  mockPet,
  mockSession,
} from "@/db/mocks/schema";
import * as PetService from "@/services/pet";
import { renderServerComponent } from "@/test-util/renderServerComponent";
import { noop } from "@/util/noop";

import { default as PetPage } from "./page";

vi.mock("next/headers", () => ({
  headers: vi.fn(() => Promise.resolve(new Headers())),
}));

vi.mock("next/navigation", () => ({
  notFound: vi.fn(),
  redirect: vi.fn((url: string) => {
    throw new Error(`NEXT_REDIRECT: ${url}`);
  }),
}));

afterEach(() => {
  vi.resetAllMocks();
});

it("should redirect to homepage if user not logged in", async () => {
  const params = Promise.resolve({ id: "12345" });
  const redirectSpy = vi
    .spyOn(navigation, "redirect")
    .mockImplementation(noop as never);

  vi.spyOn(PetService, "getPetById").mockResolvedValue(mockPet);

  await renderServerComponent(<PetPage params={params} />);

  expect(redirectSpy).toHaveBeenCalledWith("/");
});

it("should redirect to 404 if user doesn't match pet owner", async () => {
  const params = Promise.resolve({ id: "12345" });

  const notFoundSpy = vi.spyOn(navigation, "notFound");

  vi.spyOn(Auth.auth.api, "getSession").mockResolvedValue({
    session: mockSession,
    user: mockNonOwner,
  });
  vi.spyOn(PetService, "getPetById").mockResolvedValue(mockPet);

  await renderServerComponent(<PetPage params={params} />);

  expect(notFoundSpy).toHaveBeenCalled();
});

it("should render if logged in and user is pet owner", async () => {
  const params = Promise.resolve({ id: "12345" });

  vi.spyOn(Auth.auth.api, "getSession").mockResolvedValue({
    session: mockSession,
    user: mockOwner,
  });
  vi.spyOn(PetService, "getPetById").mockResolvedValue(mockPet);

  const { container } = await renderServerComponent(
    <PetPage params={params} />,
  );

  expect(container.childNodes).toHaveLength(1);
});
