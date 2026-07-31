import * as THREE from "three";
import { describe, it, expect } from "vitest";
import { flip, flipX, flipY, flipZ } from "./flip.ts";

describe("flip", () => {
  it("should invert object along each specified axis", () => {
    const obj = new THREE.Object3D();

    obj.applyMatrix4(new THREE.Matrix4().makeScale(3, 4, 5));

    expect(obj.scale).toEqual({ x: 3, y: 4, z: 5 });

    flip(obj, true, false, true);

    expect(obj.scale).toEqual({ x: -3, y: 4, z: -5 });
  });
});

describe("flipX", () => {
  it("should invert object along x-axis", () => {
    const obj = new THREE.Object3D();

    obj.applyMatrix4(new THREE.Matrix4().makeScale(3, 4, 5));

    expect(obj.scale).toEqual({ x: 3, y: 4, z: 5 });

    flipX(obj);

    expect(obj.scale).toEqual({ x: -3, y: 4, z: 5 });
  });
});

describe("flipY", () => {
  it("should invert object along y-axis", () => {
    const obj = new THREE.Object3D();

    obj.applyMatrix4(new THREE.Matrix4().makeScale(3, 4, 5));

    expect(obj.scale).toEqual({ x: 3, y: 4, z: 5 });

    flipY(obj);

    expect(obj.scale).toEqual({ x: 3, y: -4, z: 5 });
  });
});

describe("flipZ", () => {
  it("should invert object along z-axis", () => {
    const obj = new THREE.Object3D();

    obj.applyMatrix4(new THREE.Matrix4().makeScale(3, 4, 5));

    expect(obj.scale).toEqual({ x: 3, y: 4, z: 5 });

    flipZ(obj);

    expect(obj.scale).toEqual({ x: 3, y: 4, z: -5 });
  });
});
