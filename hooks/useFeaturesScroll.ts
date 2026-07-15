import { type RefObject } from 'react';
import { useScroll, useTransform } from 'framer-motion';

export function useFeaturesScroll(ref: RefObject<HTMLElement | null>) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return { bgY };
}
