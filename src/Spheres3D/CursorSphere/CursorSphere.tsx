import { Color, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { SETTINGS } from "../Settings";
import { sphereType, Tuple } from "../Types";
import {
  getPointerCoordsAtZ,
  updatePointerVector,
} from "../Helpers/Vector3Helpers";

export default function CursorSphere({
  depth = -SETTINGS.sphereGen.zMinMax[0],
  sphereProps,
}: Props) {
  const sphereRef = useRef<sphereType>(null);

  useFrame(({ pointer }) => {
    if (!sphereRef.current) return;

    // update pointerWorld Vector3 to line up with pointer at z = -depth
    updatePointerVector(pointer);
    const cursorPos = getPointerCoordsAtZ(depth);
    sphereRef.current.position.set(cursorPos.x, cursorPos.y, cursorPos.z);
  });

  return (
    <mesh ref={sphereRef} visible={false} name="cursorSphere">
      <sphereGeometry args={sphereProps} />
      <meshStandardMaterial />
    </mesh>
  );
}

interface Props {
  depth?: number;
  colour?: Color;
  wireframe?: boolean;
  sphereProps?: Readonly<Tuple<number>>;
  visible?: boolean;
}
