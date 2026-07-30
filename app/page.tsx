import { Cube } from "./components/elements/Cube.tsx";
import { Scene } from "./components/Scene/Scene.tsx";

export default function Page() {
  return (
    <Scene>
      <Cube color={0x00ff00} />
    </Scene>
  );
}
