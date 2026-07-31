"use client";

import * as THREE from "three";

import { useSceneContext } from "../Scene/SceneContext.tsx";
import type { Position } from "../types.ts";
import { useMounted } from "@/hooks/useMounted.tsx";

type Props = {
  color: THREE.ColorRepresentation;
  position?: Partial<Position>;
};

export function Cube({ color, position = {} }: Props) {
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshPhongMaterial({ color });
  const cube = new THREE.Mesh(geometry, material);
  const { camera, renderer, scene } = useSceneContext();

  if (position.x) {
    cube.position.x = position.x;
  }

  if (position.y) {
    cube.position.y = position.y;
  }

  if (position.z) {
    cube.position.z = position.z;
  }

  useMounted(() => {
    scene.add(cube);
  });

  const rotateCube = () => {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
    requestAnimationFrame(rotateCube);
  };

  rotateCube();

  return undefined;
}
