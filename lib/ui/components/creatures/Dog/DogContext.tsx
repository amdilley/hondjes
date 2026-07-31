"use client";

import { createContext, useContext } from "react";
import * as THREE from "three";

type DogContextType = {};

const DogContext = createContext<DogContextType | undefined>(undefined);

export function useSceneContext() {
  const context = useContext(DogContext);

  if (!context) {
    throw new Error("Missing dog context");
  }

  return context;
}

type Props = DogContextType & {
  children: React.ReactNode;
};

export function SceneContextProvider({ children }: Props) {
  return <DogContext.Provider value={{}}>{children}</DogContext.Provider>;
}
