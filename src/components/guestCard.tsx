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
    <div className="w-full h-screen overflow-hidden relative">
      <Lanyard {...LANYARD_PROPS_DESKTOP} cardGLB={guest.glb} />
      <Lanyard {...LANYARD_PROPS_MOBILE} cardGLB={guest.glb} />
      <footer className="w-full h-16 text-amber-[#f5e9da] font-bold absolute bottom-0 flex items-center justify-center">
        <p>Tocar rápido dos veces la tarjeta para ver el detalle.</p>
      </footer>
    </div>
  );
}
