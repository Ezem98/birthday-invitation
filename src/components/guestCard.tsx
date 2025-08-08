import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Lanyard from "../blocks/Components/Lanyard/Lanyard";
import FuzzyText from "../blocks/TextAnimations/FuzzyText/FuzzyText";
import {
  FUZZY_TEXT_NOT_FOUND_DESKTOP_PROPS,
  FUZZY_TEXT_NOT_FOUND_MOBILE_PROPS,
  GUESTS,
  LANYARD_PROPS_DESKTOP,
  LANYARD_PROPS_MOBILE,
} from "../lib/consts";

export default function GuestCard() {
  const { slug } = useParams();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const guest = GUESTS.find((g) => g.slug === slug);

  const fuzzyTextProps = isMobile
    ? FUZZY_TEXT_NOT_FOUND_MOBILE_PROPS
    : FUZZY_TEXT_NOT_FOUND_DESKTOP_PROPS;

  if (!guest) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center gap-y-8 relative ">
        <FuzzyText
          baseIntensity={0.2}
          hoverIntensity={0.5}
          enableHover={!isMobile}
          fontSize="12rem"
        >
          404
        </FuzzyText>
        <FuzzyText {...fuzzyTextProps} enableHover={!isMobile} />
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
