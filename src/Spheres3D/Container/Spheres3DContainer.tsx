import { useFrame } from "@react-three/fiber";
import { SETTINGS } from "../Settings";
import { Color } from "three";
import { sphereType } from "../Types";
import Sphere3D from "../Sphere3D/Sphere3D";
import { useContainerHook } from "./useContainerHook";
import { resetSphere } from "../Helpers/Vector3Helpers";
import { useMemo } from "react";

const { sphereGen, sphereAnim } = SETTINGS;

export default function Spheres3DContainer() {
  const [camera, raycaster, groupRef] = useContainerHook();
  let hovObjs: Array<sphereType> = [];

  const spheres = useMemo(() => {
    return Array.from({ length: sphereGen.num }, (_v, idx) => {
      return <Sphere3D key={idx} />;
    });
  }, []);

  useFrame(({ pointer }) => {
    if (!groupRef.current) return;

    // get all objects that intersects with pointer
    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects<sphereType>(
      groupRef.current.children,
      true
    );

    // previously hovered object not hit => reset position && colour
    hovObjs.forEach((hovObj) => {
      if (intersects.some((hitObj) => hitObj.object === hovObj)) return;

      // if previously hovered object not hovered anymore => reset position & colour
      resetSphere(hovObj);
    });

    // all hovered objects => speed up colour change
    intersects.forEach(({ object }) => {
      if (object.userData.destColour instanceof Color)
        object.material.color.lerp(
          object.userData.destColour,
          sphereAnim.colourLerp
        );
    });

    // reassign array of hovered objects for next frame
    hovObjs = intersects.map(({ object }) => object);
  });

  return <group ref={groupRef}>{spheres}</group>;
}
