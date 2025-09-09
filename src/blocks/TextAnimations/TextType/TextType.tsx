/*
	Installed from https://reactbits.dev/ts/tailwind/
*/

"use client";

import { gsap } from "gsap";
import {
  createElement,
  type ElementType,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

interface TextTypeProps {
  className?: string;
  showCursor?: boolean;
  hideCursorWhileTyping?: boolean;
  cursorCharacter?: string | React.ReactNode;
  cursorBlinkDuration?: number;
  cursorClassName?: string;
  text: string | string[];
  as?: ElementType;
  typingSpeed?: number;
  initialDelay?: number;
  pauseDuration?: number;
  deletingSpeed?: number;
  loop?: boolean;
  textColors?: string[];
  variableSpeed?: { min: number; max: number };
  onSentenceComplete?: (sentence: string, index: number) => void;
  startOnVisible?: boolean;
  reverseMode?: boolean;
  enableTypewriterSound?: boolean;
  typewriterSoundUrl?: string;
  soundVolume?: number;
  soundVariation?: boolean;
}

const TextType = ({
  text,
  as: Component = "div",
  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = true,
  className = "",
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = "|",
  cursorClassName = "",
  cursorBlinkDuration = 0.5,
  textColors = [],
  variableSpeed,
  onSentenceComplete,
  startOnVisible = false,
  reverseMode = false,
  enableTypewriterSound = false,
  typewriterSoundUrl,
  soundVolume = 0.3,
  soundVariation = true,
  ...props
}: TextTypeProps & React.HTMLAttributes<HTMLElement>) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnVisible);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const audioPoolRef = useRef<HTMLAudioElement[]>([]);
  const currentAudioIndexRef = useRef(0);

  const textArray = useMemo(
    () => (Array.isArray(text) ? text : [text]),
    [text]
  );

  const getRandomSpeed = useCallback(() => {
    if (!variableSpeed) return typingSpeed;
    const { min, max } = variableSpeed;
    return Math.random() * (max - min) + min;
  }, [variableSpeed, typingSpeed]);

  const getCurrentTextColor = () => {
    if (textColors.length === 0) return "#ffffff";
    return textColors[currentTextIndex % textColors.length];
  };

  // Initialize audio pool for typewriter sounds
  useEffect(() => {
    if (!enableTypewriterSound) return;

    const poolSize = 5; // Multiple audio instances to prevent overlap issues
    const audioPool: HTMLAudioElement[] = [];

    for (let i = 0; i < poolSize; i++) {
      const audio = new Audio(typewriterSoundUrl || "/typewriter-click.wav");
      audio.volume = soundVolume;
      audio.preload = "auto";
      
      // Add error handling for audio loading
      audio.addEventListener('error', (e) => {
        console.warn('Failed to load typewriter sound:', e);
      });
      
      audio.addEventListener('canplaythrough', () => {
        console.log('Typewriter sound loaded successfully');
      });
      
      audioPool.push(audio);
    }

    audioPoolRef.current = audioPool;
    console.log('Audio pool initialized with', poolSize, 'instances');
  }, [enableTypewriterSound, typewriterSoundUrl, soundVolume]);

  // Enable audio on first user interaction
  useEffect(() => {
    if (!enableTypewriterSound || audioEnabled) return;

    const enableAudio = async () => {
      try {
        // Try to play a silent audio to unlock audio context
        if (audioPoolRef.current.length > 0) {
          const testAudio = audioPoolRef.current[0];
          testAudio.volume = 0;
          await testAudio.play();
          testAudio.pause();
          testAudio.currentTime = 0;
          testAudio.volume = soundVolume;
          setAudioEnabled(true);
          console.log('Audio context unlocked successfully');
        }
      } catch {
        console.log('Audio unlock failed, will retry on user interaction');
      }
    };

    const handleUserInteraction = () => {
      enableAudio();
      // Remove listeners after first interaction
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };

    // Add event listeners for user interaction
    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
  }, [enableTypewriterSound, audioEnabled, soundVolume]);

  const playTypewriterSound = useCallback(() => {
    if (!enableTypewriterSound || audioPoolRef.current.length === 0 || !isTyping) return;

    const audio = audioPoolRef.current[currentAudioIndexRef.current];
    currentAudioIndexRef.current =
      (currentAudioIndexRef.current + 1) % audioPoolRef.current.length;

    // Stop any previous playback to prevent overlap
    audio.pause();
    audio.currentTime = 0;

    // Add slight variation to pitch and volume if enabled
    if (soundVariation) {
      audio.playbackRate = 0.9 + Math.random() * 0.2; // 0.9 to 1.1
      audio.volume = soundVolume * (0.8 + Math.random() * 0.4); // 80% to 120% of base volume
    } else {
      audio.playbackRate = 1;
      audio.volume = soundVolume;
    }

    // Use a shorter, more immediate play approach
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.warn('Audio play failed:', error);
      });
    }
  }, [enableTypewriterSound, soundVariation, soundVolume, isTyping]);

  useEffect(() => {
    if (!startOnVisible || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [startOnVisible]);

  useEffect(() => {
    if (showCursor && cursorRef.current) {
      gsap.set(cursorRef.current, { opacity: 1 });
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: cursorBlinkDuration,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }
  }, [showCursor, cursorBlinkDuration]);

  useEffect(() => {
    if (!isVisible) return;

    let timeout: NodeJS.Timeout;

    const currentText = textArray[currentTextIndex];
    const processedText = reverseMode
      ? currentText.split("").reverse().join("")
      : currentText;

    const executeTypingAnimation = () => {
      if (isDeleting) {
        setIsTyping(false); // Stop typing sounds during deletion
        if (displayedText === "") {
          setIsDeleting(false);
          if (currentTextIndex === textArray.length - 1 && !loop) {
            setIsTyping(false); // Animation completely finished
            return;
          }

          if (onSentenceComplete) {
            onSentenceComplete(textArray[currentTextIndex], currentTextIndex);
          }

          setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
          setCurrentCharIndex(0);
          timeout = setTimeout(() => {}, pauseDuration);
        } else {
          timeout = setTimeout(() => {
            setDisplayedText((prev) => prev.slice(0, -1));
          }, deletingSpeed);
        }
      } else {
        if (currentCharIndex < processedText.length) {
          setIsTyping(true); // Enable typing sounds
          timeout = setTimeout(
            () => {
              setDisplayedText(
                (prev) => prev + processedText[currentCharIndex]
              );
              setCurrentCharIndex((prev) => prev + 1);
              playTypewriterSound();
            },
            variableSpeed ? getRandomSpeed() : typingSpeed
          );
        } else if (textArray.length > 1) {
          setIsTyping(false); // Pause between sentences
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, pauseDuration);
        } else {
          setIsTyping(false); // Single text finished
        }
      }
    };

    if (currentCharIndex === 0 && !isDeleting && displayedText === "") {
      timeout = setTimeout(executeTypingAnimation, initialDelay);
    } else {
      executeTypingAnimation();
    }

    return () => clearTimeout(timeout);
  }, [
    currentCharIndex,
    displayedText,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    textArray,
    currentTextIndex,
    loop,
    initialDelay,
    isVisible,
    reverseMode,
    variableSpeed,
    onSentenceComplete,
    getRandomSpeed,
    playTypewriterSound,
  ]);

  const shouldHideCursor =
    hideCursorWhileTyping &&
    (currentCharIndex < textArray[currentTextIndex].length || isDeleting);

  return createElement(
    Component,
    {
      ref: containerRef,
      className: `inline-block whitespace-pre-wrap tracking-tight ${className}`,
      ...props,
    },
    <span className="inline" style={{ color: getCurrentTextColor() }}>
      {displayedText}
    </span>,
    showCursor && (
      <span
        ref={cursorRef}
        className={`ml-1 inline-block opacity-100 ${
          shouldHideCursor ? "hidden" : ""
        } ${cursorClassName}`}
      >
        {cursorCharacter}
      </span>
    )
  );
};

export default TextType;
