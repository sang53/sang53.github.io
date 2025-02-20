import { RootState, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group, PerspectiveCamera } from "three";
import { initVectorHelpers, resetCamera } from "../Helpers/Vector3Helpers";

export function useContainerHook() {
  const state = useThree<RootState & { camera: PerspectiveCamera }>();

  // to reference group during raycast
  const groupRef = useRef<Group>(null);

  initVectorHelpers(state.camera);

  // make sure camera is gc on dismount
  useEffect(() => {
    initVectorHelpers(state.camera);
    return () => {
      resetCamera();
    };
  }, [state.camera, state.viewport]);

  return [state.camera, state.raycaster, groupRef] as const;
}
