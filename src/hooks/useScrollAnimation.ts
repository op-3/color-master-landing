import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ScrollAnimationProps {
  trigger?: string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
  animation?: gsap.TweenVars;
}

export const useScrollAnimation = ({
  trigger = ".animate-section",
  start = "top 80%",
  end = "bottom 20%",
  scrub = false,
  markers = false,
  animation = {
    opacity: 0,
    y: 50,
    duration: 1,
  },
}: ScrollAnimationProps = {}) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start,
        end,
        scrub,
        markers,
        toggleActions: "play none none reverse",
      },
    });

    tl.from(element, animation);

    return () => {
      tl.kill();
    };
  }, [trigger, start, end, scrub, markers, animation]);

  return elementRef;
};
