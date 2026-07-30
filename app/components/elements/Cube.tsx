"use client";

import * as THREE from "three";

import { useSceneContext } from "../Scene/SceneContext.tsx";
import { useMounted } from "../../hooks/useMounted.tsx";

type Props = {
  color: THREE.ColorRepresentation;
};

export function Cube({ color }: Props) {
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color });
  const cube = new THREE.Mesh(geometry, material);
  const { camera, renderer, scene } = useSceneContext();

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
