import * as THREE from "three";

export function flip(
  obj: THREE.Object3D<any>,
  flipX: boolean,
  flipY: boolean,
  flipZ: boolean,
) {
  const vector = new THREE.Vector3(1, 1, 1);

  if (flipX) {
    vector.setX(-1);
  }

  if (flipY) {
    vector.setY(-1);
  }

  if (flipZ) {
    vector.setZ(-1);
  }

  obj.scale.multiply(vector);

  return obj;
}

export function flipX(obj: THREE.Object3D<any>) {
  const vector = new THREE.Vector3(-1, 1, 1);

  obj.scale.multiply(vector);

  return obj;
}

export function flipY(obj: THREE.Object3D<any>) {
  const vector = new THREE.Vector3(1, -1, 1);

  obj.scale.multiply(vector);

  return obj;
}

export function flipZ(obj: THREE.Object3D<any>) {
  const vector = new THREE.Vector3(1, 1, -1);

  obj.scale.multiply(vector);

  return obj;
}
