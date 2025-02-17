import { RootState, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group, PerspectiveCamera } from "three";
import { initVectorHelpers, resetCamera } from "../Helpers/Vector3Helpers";

export function useContainerHook() {
  const { camera, raycaster } = useThree<
    RootState & { camera: PerspectiveCamera }
  >();

  // set camera for Vector3Helpers
  initVectorHelpers(camera);

  // to reference group during raycast
  const groupRef = useRef<Group>(null);

  // make sure camera is gc on dismount
  useEffect(() => {
    return () => {
      resetCamera();
    };
  }, []);

  return [camera, raycaster, groupRef] as const;
}
