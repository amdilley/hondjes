"use client";

import { useState } from "react";
import * as THREE from "three";

import { useMounted } from "../../hooks/useMounted.tsx";
import { SceneContextProvider } from "./SceneContext.tsx";

export function Scene({ children }: { children: React.ReactNode }) {
  const [camera, setCamera] = useState<THREE.PerspectiveCamera>();
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer>();
  const [scene, setScene] = useState<THREE.Scene>();

  useMounted(() => {
    const _renderer = new THREE.WebGLRenderer();
    const _scene = new THREE.Scene();
    const _camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );

    _renderer.setSize(window.innerWidth, window.innerWidth);
    window.document.body.append(_renderer.domElement);
    _camera.position.z = 5;

    _renderer.render(_scene, _camera);

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      _camera.aspect = width / height;
      _camera.updateProjectionMatrix();

      _renderer.setSize(width, height);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    setCamera(_camera);
    setRenderer(_renderer);
    setScene(_scene);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  if (camera === undefined || renderer === undefined || scene === undefined) {
    return;
  }

  return (
    <SceneContextProvider camera={camera} renderer={renderer} scene={scene}>
      {children}
    </SceneContextProvider>
  );
}
