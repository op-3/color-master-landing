import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const fadeInUp = (element: string | Element, delay: number = 0) => {
  return gsap.from(element, {
    opacity: 0,
    y: 60,
    duration: 1,
    delay,
    ease: "power3.out",
  });
};

export const fadeIn = (element: string | Element, delay: number = 0) => {
  return gsap.from(element, {
    opacity: 0,
    duration: 1,
    delay,
    ease: "power3.out",
  });
};

export const staggerFadeInUp = (
  elements: string | Element[],
  stagger: number = 0.2
) => {
  return gsap.from(elements, {
    opacity: 0,
    y: 60,
    duration: 1,
    stagger,
    ease: "power3.out",
  });
};

export const scrollTriggerFadeIn = (element: string | Element) => {
  return gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 50,
    duration: 1,
  });
};
