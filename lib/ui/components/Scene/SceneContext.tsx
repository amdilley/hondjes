"use client";

import { createContext, useContext } from "react";
import * as THREE from "three";

type SceneContextType = {
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
};

const SceneContext = createContext<SceneContextType | undefined>(undefined);

export function useSceneContext() {
  const context = useContext(SceneContext);

  if (!context) {
    throw new Error("Missing scene context");
  }

  return context;
}

type Props = SceneContextType & {
  children: React.ReactNode;
};

export function SceneContextProvider({
  children,
  camera,
  renderer,
  scene,
}: Props) {
  return (
    <SceneContext.Provider value={{ camera, renderer, scene }}>
      {children}
    </SceneContext.Provider>
  );
}
