import { useMemo } from "react";
import { useParams } from "react-router-dom";
import Lanyard from "../blocks/Components/Lanyard/Lanyard";
import {
  GUESTS,
  LANYARD_PROPS_DESKTOP,
  LANYARD_PROPS_MOBILE,
} from "../lib/consts";
import { NotFoundPage } from "./404";

export default function GuestCard() {
  const { slug } = useParams();

  const guest = useMemo(() => GUESTS.find((g) => g.slug === slug), [slug]);

  if (!guest) return NotFoundPage();

  return (
    <div className="w-full h-screen overflow-hidden">
      <Lanyard {...LANYARD_PROPS_DESKTOP} cardGLB={guest.glb} />
      <Lanyard {...LANYARD_PROPS_MOBILE} cardGLB={guest.glb} />
    </div>
  );
}
