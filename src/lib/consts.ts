import type { LightRaysProps } from "../blocks/Backgrounds/LightRays/LightRays";
import type { LanyardProps } from "../blocks/Components/Lanyard/Lanyard";

export const DESKTOP_LIGHT_RAYS: LightRaysProps = {
  raysOrigin: "top-center",
  raysColor: "#fff",
  raysSpeed: 1.5,
  lightSpread: 0.8,
  rayLength: 1.2,
  followMouse: false,
  mouseInfluence: 0.1,
  noiseAmount: 0.1,
  distortion: 0.05,
  className: "!absolute inset-0 hidden lg:block",
};

export const MOBILE_LIGHT_RAYS: LightRaysProps = {
  raysOrigin: "top-center",
  raysColor: "#fff",
  raysSpeed: 1.5,
  lightSpread: 0.8,
  rayLength: 8.0,
  followMouse: false,
  mouseInfluence: 0.1,
  noiseAmount: 0.1,
  distortion: 0.05,
  className: "!absolute inset-0 block lg:hidden",
};

export const LANYARD_PROPS: LanyardProps = {
  position: [0, 0, 15],
  gravity: [0, -30, 0],
  fov: 18,
  transparent: true,
};
