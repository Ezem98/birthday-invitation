import { useEffect, useState } from "react";
import FuzzyText from "../blocks/TextAnimations/FuzzyText/FuzzyText";
import {
  FUZZY_TEXT_NOT_FOUND_DESKTOP_PROPS,
  FUZZY_TEXT_NOT_FOUND_MOBILE_PROPS,
} from "../lib/consts";

export const NotFoundPage = () => {
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

  const fuzzyTextProps = isMobile
    ? FUZZY_TEXT_NOT_FOUND_MOBILE_PROPS
    : FUZZY_TEXT_NOT_FOUND_DESKTOP_PROPS;

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
};
