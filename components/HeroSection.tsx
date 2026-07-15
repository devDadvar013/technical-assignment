'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { chartHeights, floatingOrbs } from '@/lib/data';
import { useHeroScroll } from '@/hooks/useHeroScroll';
import { Button, Container } from '@/components/ui/primitives';

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { y, opacity, scale, cardRotate } = useHeroScroll(ref);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden py-section pt-[calc(clamp(4rem,10vw,8rem)+4rem)]"
    >
      <div className="pointer-events-none absolute inset-0">
        {floatingOrbs.map((orb, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-[40px] will-change-transform"
            style={{
              width: orb.size,
              height: orb.size,
              left: orb.x,
              top: orb.y,
              background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            }}
            animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 6 + i, repeat: Infinity, ease: 'easeInOut', delay: orb.delay }}
          />
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black_20%,transparent_70%)]" />
      </div>

      <Container>
        <motion.div
          className="relative z-10 grid items-center gap-16 lg:grid-cols-2"
          style={{ y, opacity, scale }}
        >
          <div className="text-center lg:text-left">
            <motion.div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3.5 py-1.5 text-[0.8125rem] font-medium text-accent-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-teal" />
              The future of digital finance
            </motion.div>

            <motion.h1
              className="mb-5 font-display text-[clamp(2.75rem,6vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Your money,
              <br />
              <span className="bg-gradient-to-br from-accent-light to-teal bg-clip-text text-transparent">
                reimagined
              </span>
            </motion.h1>

            <motion.p
              className="mx-auto mb-8 max-w-[480px] text-[clamp(1rem,2vw,1.125rem)] leading-relaxed text-text-muted lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              NovaPay transforms how you save, spend, and grow — one scroll at a time.
              Experience a smarter financial journey built for the modern world.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4 lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <Button href="#cta">
                Start your journey
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Button>
              <Button href="#features" variant="secondary">
                Explore features
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="mx-auto w-full max-w-[400px] rounded-lg border border-border bg-gradient-to-br from-[rgba(26,26,38,0.9)] to-[rgba(18,18,26,0.95)] p-8 shadow-card backdrop-blur-xl [box-shadow:0_24px_48px_rgba(0,0,0,0.4),inset_0_0_0_1px_rgba(255,255,255,0.05)]"
            style={{ rotateX: cardRotate }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-2 flex items-center justify-between text-[0.8125rem] text-text-muted">
              <span>Total Balance</span>
              <span className="font-mono tracking-wider">●●●● 4829</span>
            </div>
            <div className="mb-6 font-display text-[2.5rem] font-bold tracking-tight max-[480px]:text-[2rem]">
              $24,850.00
            </div>
            <div className="mb-6 flex gap-8">
              <div>
                <span className="mb-1 block text-xs text-text-muted">Income</span>
                <span className="text-[0.9375rem] font-semibold text-teal">+12.4%</span>
              </div>
              <div>
                <span className="mb-1 block text-xs text-text-muted">Savings</span>
                <span className="text-[0.9375rem] font-semibold">$8,200</span>
              </div>
            </div>
            <div className="flex h-20 items-end gap-1">
              {chartHeights.map((h, i) => (
                <motion.div
                  key={i}
                  className="min-h-1 flex-1 rounded-t bg-gradient-to-t from-accent to-accent-light opacity-80"
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 1 + i * 0.05, duration: 0.5, ease: 'easeOut' }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>

      <motion.div
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs tracking-wider text-text-muted"
        style={{ opacity }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span>Scroll to explore</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 4v12M5 11l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </section>
  );
}
