import type { Pet, Session, User } from "../schema";

export const mockPet: Pet = {
  id: "12345",
  ownerId: "98765",
  name: "Fido",
  description: "Fluffy",
  imageUrl: "/pp.png",
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const mockSession: Session = {
  id: "abcdef",
  token: "1111111",
  userId: "98765",
  userAgent: undefined,
  ipAddress: undefined,
  expiresAt: new Date(),
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const mockOwner: User = {
  id: "98765",
  name: "Aaron",
  email: "aaron@hondj.es",
  emailVerified: true,
  image: undefined,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const mockNonOwner: User = {
  id: "99999",
  name: "Ladro",
  email: "ladro@example.com",
  emailVerified: true,
  image: undefined,
  createdAt: new Date(),
  updatedAt: new Date(),
};
