import { type RefObject } from 'react';
import { type MotionValue, useScroll, useTransform } from 'framer-motion';

const STEP_COUNT = 4;
const SEGMENT = 1 / STEP_COUNT;

export function useJourneyScroll(ref: RefObject<HTMLElement | null>) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return { scrollYProgress, lineHeight };
}

function getStepThresholds(index: number) {
  const start = index * SEGMENT;
  const activateEnd = start + SEGMENT * 0.45;
  return { start, activateEnd };
}

export function useJourneyStepProgress(scrollYProgress: MotionValue<number>, index: number) {
  const { start, activateEnd } = getStepThresholds(index);

  const opacity = useTransform(scrollYProgress, (progress) => {
    if (progress >= activateEnd) return 1;
    if (progress <= start) return 0.3;
    return 0.3 + ((progress - start) / (activateEnd - start)) * 0.7;
  });

  const titleColor = useTransform(scrollYProgress, (progress) => {
    if (progress >= activateEnd) return '#f0f0f5';
    if (progress <= start) return 'rgba(240, 240, 245, 0.3)';
    const t = (progress - start) / (activateEnd - start);
    return `rgba(240, 240, 245, ${0.3 + t * 0.7})`;
  });

  const descColor = useTransform(scrollYProgress, (progress) => {
    if (progress >= activateEnd) return '#a8a8bc';
    if (progress <= start) return 'rgba(136, 136, 160, 0.35)';
    const t = (progress - start) / (activateEnd - start);
    return `rgba(168, 168, 188, ${0.35 + t * 0.65})`;
  });

  const circleBorder = useTransform(scrollYProgress, (progress) =>
    progress >= start + SEGMENT * 0.1 ? '#6c5ce7' : 'rgba(255, 255, 255, 0.12)'
  );

  const circleBg = useTransform(scrollYProgress, (progress) =>
    progress >= activateEnd ? '#1a1a26' : 'rgba(26, 26, 38, 0.6)'
  );

  return { opacity, titleColor, descColor, circleBorder, circleBg };
}

export function usePhoneScreenScroll(scrollYProgress: MotionValue<number>, index: number) {
  const { start, activateEnd } = getStepThresholds(index);
  const end = start + SEGMENT;

  const opacity = useTransform(scrollYProgress, [start, activateEnd, end], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [start, activateEnd, end], [0.85, 1, 0.85]);

  return { opacity, scale };
}
