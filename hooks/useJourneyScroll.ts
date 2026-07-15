import { type RefObject } from 'react';
import { type MotionValue, useScroll, useTransform } from 'framer-motion';

export function useJourneyScroll(ref: RefObject<HTMLElement | null>) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return { scrollYProgress, lineHeight };
}

export function useJourneyStepScroll(ref: RefObject<HTMLElement | null>) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);
  const x = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [20, 0, 0, -20]);

  return { opacity, x };
}

export function usePhoneScreenScroll(scrollYProgress: MotionValue<number>, index: number) {
  const start = index * 0.22;
  const mid = start + 0.15;
  const end = start + 0.3;

  const opacity = useTransform(scrollYProgress, [start, mid, end], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [start, mid, end], [0.85, 1, 0.85]);

  return { opacity, scale };
}
