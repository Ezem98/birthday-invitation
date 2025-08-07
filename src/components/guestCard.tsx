import { useParams } from "react-router-dom";
import Lanyard from "../blocks/Components/Lanyard/Lanyard";
import {
  GUESTS,
  LANYARD_PROPS_DESKTOP,
  LANYARD_PROPS_MOBILE,
} from "../lib/consts";

export default function GuestCard() {
  const { slug } = useParams();

  const guest = GUESTS.find((g) => g.slug === slug);

  if (!guest) {
    return (
      <div className="text-white text-center mt-10">
        Invitado no encontrado 😢
      </div>
    );
  }

  return (
    <div className="w-full h-screen overflow-hidden">
      <Lanyard {...LANYARD_PROPS_DESKTOP} cardGLB={guest.glb} />
      <Lanyard {...LANYARD_PROPS_MOBILE} cardGLB={guest.glb} />
    </div>
  );
}
