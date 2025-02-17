import { Canvas } from "@react-three/fiber";
import Spheres3DContainer from "../Spheres3D/Container/Spheres3DContainer";
import CursorSpotlight from "../Spheres3D/CursorSpotlight/CursorSpotlight";
import DirectLights from "../Spheres3D/DirectLights/DirectLights";
import { SETTINGS } from "../Spheres3D/Settings";
import classes from "./Background.module.css";

const { camera } = SETTINGS;

export default function Background() {
  return (
    <div id="background-container" className={classes.container}>
      <Canvas camera={{ position: camera.position, fov: camera.fov }}>
        <CursorSpotlight />
        <Spheres3DContainer />
        <DirectLights />
      </Canvas>
    </div>
  );
}
