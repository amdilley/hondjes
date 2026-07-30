import { Cube } from "./components/elements/Cube.tsx";
import { LightSource } from "./components/LightSource/LightSouce.tsx";
import { Scene } from "./components/Scene/Scene.tsx";

export default function Page() {
  return (
    <Scene>
      <LightSource
        color={0xffffff}
        intensity={3}
        position={{ x: -1, y: 2, z: 4 }}
      />
      <Cube color={0x44aa88} position={{ x: -0.8 }} />
      <Cube color={0x8844aa} position={{ x: -4, z: -4 }} />
      <Cube color={0xaa8844} position={{ x: 1, z: 2 }} />
    </Scene>
  );
}
