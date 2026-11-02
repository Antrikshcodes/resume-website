import { gsap, ScrollTrigger, EASES } from './gsapConfig';

export const createScrollReveal = (
  target: HTMLElement | string,
  options: {
    start?: string;
    delay?: number;
    yOffset?: number;
    stagger?: number;
    once?: boolean;
  } = {}
) => {
  const {
    start = 'top 85%',
    delay = 0,
    yOffset = 40,
    stagger = 0.08,
    once = true
  } = options;

  return gsap.from(target, {
    scrollTrigger: {
      trigger: target,
      start,
      once,
      toggleActions: once ? 'play none none none' : 'play reverse play reverse'
    },
    y: yOffset,
    opacity: 0,
    duration: 1.1,
    delay,
    stagger,
    ease: EASES.editorial
  });
};

export const createSectionHeaderReveal = (
  container: HTMLElement | string
) => {
  return gsap.from(container, {
    scrollTrigger: {
      trigger: container,
      start: 'top 82%',
      once: true
    },
    y: 35,
    opacity: 0,
    duration: 1,
    ease: EASES.editorial
  });
};

export const createTimelineLineAnimation = (
  lineElement: HTMLElement | string,
  triggerElement: HTMLElement | string
) => {
  return gsap.fromTo(
    lineElement,
    { scaleY: 0, transformOrigin: 'top center' },
    {
      scaleY: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: triggerElement,
        start: 'top 75%',
        end: 'bottom 85%',
        scrub: 0.8
      }
    }
  );
};

// ScrollTrigger scrub optimizations
