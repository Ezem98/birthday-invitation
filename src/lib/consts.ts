import type { LetterGlitchProps } from "../blocks/Backgrounds/LetterGlitch/LetterGlitch";
import type { LightRaysProps } from "../blocks/Backgrounds/LightRays/LightRays";
import type { LanyardProps } from "../blocks/Components/Lanyard/Lanyard";
import type { DecryptedTextProps } from "../blocks/TextAnimations/DecryptedText/DecryptedText";
import type { FuzzyTextProps } from "../blocks/TextAnimations/FuzzyText/FuzzyText";
import bautistaCampetelliGLB from "./cards/bautista-campetelli.glb";
import cardGLB from "./cards/card.glb";
import carlosChonaGLB from "./cards/carlos-chona.glb";
import diegoCarboneGLB from "./cards/diego-carbone.glb";
import elizabethGamarraGLB from "./cards/elizabeth-gamarra.glb";
import familiaLeguizamonGLB from "./cards/familia-leguizamon.glb";
import federicoMaidanaGLB from "./cards/federico-maidana.glb";
import gonzaloDacostaGLB from "./cards/gonzalo-dacosta.glb";
import ibrahimTaherGLB from "./cards/ibrahim-taher.glb";
import juanGamarraGLB from "./cards/juan-gamarra.glb";
import leandroAlfonsoGLB from "./cards/leandro-alfonso.glb";
import lucilaCarboneGLB from "./cards/lucila-carbone.glb";
import mauricioHerreraGLB from "./cards/mauricio-herrera.glb";
import mauroCarmonaGLB from "./cards/mauro-carmona.glb";
import melanieMachadoGLB from "./cards/melanie-machado.glb";
import nancyGimenezGLB from "./cards/nancy-gimenez.glb";
import santiagoDallaglioGLB from "./cards/santiago-dallaglio.glb";
import sheilaLeguizamonGLB from "./cards/sheila-leguizamon.glb";
import tereRuloGLB from "./cards/tere-rulo.glb";
import valentinMiragayaGLB from "./cards/valentin-miragaya.glb";

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
  glitchColors: ["#49645765", "#7cc7a765", "#7caecc65"],
};

export const GUESTS = [
  {
    slug: "melanie-machado",
    glb: melanieMachadoGLB,
  },
  {
    slug: "bautista-campetelli",
    glb: bautistaCampetelliGLB,
  },
  {
    slug: "card",
    glb: cardGLB,
  },
  {
    slug: "carlos-chona",
    glb: carlosChonaGLB,
  },
  {
    slug: "diego-carbone",
    glb: diegoCarboneGLB,
  },
  {
    slug: "elizabeth-gamarra",
    glb: elizabethGamarraGLB,
  },
  {
    slug: "familia-leguizamon",
    glb: familiaLeguizamonGLB,
  },
  {
    slug: "federico-maidana",
    glb: federicoMaidanaGLB,
  },
  {
    slug: "gonzalo-dacosta",
    glb: gonzaloDacostaGLB,
  },
  {
    slug: "ibrahim-taher",
    glb: ibrahimTaherGLB,
  },
  {
    slug: "juan-gamarra",
    glb: juanGamarraGLB,
  },
  {
    slug: "leandro-alfonso",
    glb: leandroAlfonsoGLB,
  },
  {
    slug: "lucila-carbone",
    glb: lucilaCarboneGLB,
  },
  {
    slug: "mauricio-herrera",
    glb: mauricioHerreraGLB,
  },
  {
    slug: "mauro-carmona",
    glb: mauroCarmonaGLB,
  },
  {
    slug: "nancy-gimenez",
    glb: nancyGimenezGLB,
  },
  {
    slug: "santiago-dallaglio",
    glb: santiagoDallaglioGLB,
  },
  {
    slug: "sheila-leguizamon",
    glb: sheilaLeguizamonGLB,
  },
  {
    slug: "tere-rulo",
    glb: tereRuloGLB,
  },
  {
    slug: "valentin-miragaya",
    glb: valentinMiragayaGLB,
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

export const DECRYPTED_TEXT_PROPS: DecryptedTextProps = {
  text: "Invitado no encontrado",
};

export const DECRYPTED_TEXTS = [
  ">Accediendo a la base de datos...",
  ">Autenticación completada ✅",
  ">Descargando lista de agentes...",
];

export const GUEST_LIST = [
  {
    image: "https://i.pravatar.cc/300?img=1",
    title: "Sarah Johnson",
    subtitle: "Frontend Developer",
    handle: "@sarahjohnson",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/sarahjohnson",
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen",
  },
  {
    image: "https://i.pravatar.cc/300?img=1",
    title: "Sarah Johnson",
    subtitle: "Frontend Developer",
    handle: "@sarahjohnson",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/sarahjohnson",
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen",
  },
  {
    image: "https://i.pravatar.cc/300?img=1",
    title: "Sarah Johnson",
    subtitle: "Frontend Developer",
    handle: "@sarahjohnson",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/sarahjohnson",
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen",
  },
  {
    image: "https://i.pravatar.cc/300?img=1",
    title: "Sarah Johnson",
    subtitle: "Frontend Developer",
    handle: "@sarahjohnson",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/sarahjohnson",
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen",
  },
  {
    image: "https://i.pravatar.cc/300?img=1",
    title: "Sarah Johnson",
    subtitle: "Frontend Developer",
    handle: "@sarahjohnson",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/sarahjohnson",
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen",
  },
  {
    image: "https://i.pravatar.cc/300?img=1",
    title: "Sarah Johnson",
    subtitle: "Frontend Developer",
    handle: "@sarahjohnson",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/sarahjohnson",
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen",
  },
];
