'use client';

import { motion } from 'framer-motion';
import { useScrollProgress } from '@/hooks/useScrollProgress';

export default function ScrollProgress() {
  const { scaleX } = useScrollProgress();

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[9999] h-[3px] origin-left bg-gradient-to-r from-accent to-teal"
      style={{ scaleX }}
    />
  );
}
