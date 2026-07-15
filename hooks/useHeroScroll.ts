import { type RefObject } from 'react';
import { useScroll, useTransform } from 'framer-motion';

export function useHeroScroll(ref: RefObject<HTMLElement | null>) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const cardRotate = useTransform(scrollYProgress, [0, 1], [0, -8]);

  return { y, opacity, scale, cardRotate };
}
