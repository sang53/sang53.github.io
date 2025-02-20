import { Canvas } from "@react-three/fiber";
import Spheres3DContainer from "../Spheres3D/Container/Spheres3DContainer";
import CursorSpotlight from "../Spheres3D/CursorSpotlight/CursorSpotlight";
import DirectLights from "../Spheres3D/DirectLights/DirectLights";
import { SETTINGS } from "../Spheres3D/Settings";
import classes from "./Background.module.css";
import { use } from "react";
import { BackgroundContext } from "../contexts/Background/BackgroundContext";
import { ThemeContext } from "../contexts/Theme/ThemeContext";

const { camera } = SETTINGS;

export default function Background() {
  const { three } = use(BackgroundContext);
  const { theme } = use(ThemeContext);
  return (
    <div id="background-container" className={classes.container}>
      {three && (
        <Canvas camera={{ position: camera.position, fov: camera.fov }}>
          <mesh position={[0, 0, -500]} visible={false} name="target" />
          <CursorSpotlight />
          <Spheres3DContainer />
          <DirectLights depth={theme === "dark" ? 1 : 0} />
        </Canvas>
      )}
    </div>
  );
}
