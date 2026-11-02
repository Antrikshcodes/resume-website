import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const EASES = {
  // Hamol Studio style cubic-bezier easing
  editorial: 'cubic-bezier(0.16, 1, 0.3, 1)',
  smooth: 'power3.out',
  cinematic: 'power4.out',
  slowMotion: 'expo.out',
  fluid: 'sine.out'
};

export const TRANSITION_DEFAULTS = {
  duration: 1.1,
  ease: EASES.editorial
};

export { gsap, ScrollTrigger };
