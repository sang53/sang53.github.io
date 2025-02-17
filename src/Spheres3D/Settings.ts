export const SETTINGS = {
  sphereGen: {
    num: 300,
    sphereProps: [1, 12, 5],
    zMinMax: [-100, -400],
    wireframe: true,
  },
  sphereAnim: {
    colourDamp: 0.2,
    colourLerp: 0.1,
    colourMax: 0xfefefe,
    colourThresh: 10,
    rotateFactor: 0.015,
  },
  sphereMove: {
    posDamp: 50,
    maxSpeed: 2,
    proxThresh: 50,
    zDepthFocus: 50,
  },
  camera: {
    fov: 45,
    position: [0, 0, 0],
  },
  cursorSpot: {
    colour: 0xffffff,
    intensity: 20000,
    angle: 0.3,
    penumbra: 0.8,
    decay: 1.85,
    distance: 0,
  },
  directLights: {
    posOffset: Math.tan(Math.PI / 4) * 1000,
    zDepth: 1000,
    intensity: 2,
  },
} as const;
