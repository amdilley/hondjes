"use client";

import * as THREE from "three";

import { useSceneContext } from "../Scene/SceneContext.tsx";
import type { Position } from "../types.ts";
import { useMounted } from "../../hooks/useMounted.tsx";

type Props = {
  color: THREE.ColorRepresentation;
  intensity?: number;
  position: Position;
};

export function LightSource({ color, intensity, position }: Props) {
  const { scene } = useSceneContext();

  useMounted(() => {
    const light = new THREE.DirectionalLight(color, intensity);

    light.position.set(position.x, position.y, position.z);

    scene.add(light);
  });

  return undefined;
}
