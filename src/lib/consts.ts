import type { LetterGlitchProps } from "../blocks/Backgrounds/LetterGlitch/LetterGlitch";
import type { LightRaysProps } from "../blocks/Backgrounds/LightRays/LightRays";
import type { LanyardProps } from "../blocks/Components/Lanyard/Lanyard";
import type { FuzzyTextProps } from "../blocks/TextAnimations/FuzzyText/FuzzyText";
import melanieMachadoGLB from "./cards/melanie-machado.glb";

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

export const LANYARD_PROPS_DESKTOP: LanyardProps = {
  cardGLB: null,
  position: [0, 0, 15],
  gravity: [0, -30, 0],
  fov: 14,
  transparent: true,
  className: "hidden lg:block",
};

export const LANYARD_PROPS_MOBILE: LanyardProps = {
  cardGLB: null,
  position: [0, 0, 15],
  gravity: [0, -30, 0],
  fov: 16,
  transparent: true,
  className: "block lg:hidden",
};

export const LETTER_GLITCH_PROPS: LetterGlitchProps = {
  glitchSpeed: 80,
  centerVignette: false,
  outerVignette: true,
  smooth: true,
  glitchColors: ["#2b4539", "#61dca3", "#61b3dc"],
};

export const GUESTS = [
  {
    slug: "melanie-machado",
    glb: melanieMachadoGLB,
  },
];

export const FUZZY_TEXT_NOT_FOUND_DESKTOP_PROPS: FuzzyTextProps = {
  baseIntensity: 0.2,
  hoverIntensity: 0.5,
  enableHover: true,
  fontSize: "clamp(2rem, 4vw, 6rem)",
  enableWrap: true,
  children: "Invitado no encontrado",
};

export const FUZZY_TEXT_NOT_FOUND_MOBILE_PROPS: FuzzyTextProps = {
  ...FUZZY_TEXT_NOT_FOUND_DESKTOP_PROPS,
  fontSize: "clamp(2rem, 6vw, 8rem)",
};
