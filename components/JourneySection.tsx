'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import type { JourneyStep as JourneyStepType, PhoneScreen } from '@/types';
import { journeySteps, phoneScreens } from '@/lib/data';
import {
  useJourneyScroll,
  useJourneyStepProgress,
  usePhoneScreenScroll,
} from '@/hooks/useJourneyScroll';
import { Container, SectionHeader } from '@/components/ui/primitives';

function JourneyStepItem({
  step,
  index,
  scrollYProgress,
}: {
  step: JourneyStepType;
  index: number;
  scrollYProgress: ReturnType<typeof useJourneyScroll>['scrollYProgress'];
}) {
  const { opacity, titleColor, descColor, circleBorder, circleBg } = useJourneyStepProgress(
    scrollYProgress,
    index
  );

  return (
    <motion.div className="flex items-start gap-6 pl-2 max-sm:flex-col max-sm:gap-3" style={{ opacity }}>
      <motion.div
        className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 font-display text-xs font-bold text-accent-light"
        style={{ borderColor: circleBorder, backgroundColor: circleBg }}
      >
        {step.number}
      </motion.div>
      <div>
        <motion.h3
          className="mb-2 font-display text-xl font-semibold tracking-tight"
          style={{ color: titleColor }}
        >
          {step.title}
        </motion.h3>
        <motion.p className="mb-3 text-sm leading-relaxed" style={{ color: descColor }}>
          {step.description}
        </motion.p>
        <div className="flex items-baseline gap-2">
          <span className="font-display text-2xl font-bold text-teal">{step.stat}</span>
          <span className="text-xs text-text-muted">{step.statLabel}</span>
        </div>
      </div>
    </motion.div>
  );
}

function PhoneScreenItem({
  screen,
  index,
  scrollYProgress,
}: {
  screen: PhoneScreen;
  index: number;
  scrollYProgress: ReturnType<typeof useJourneyScroll>['scrollYProgress'];
}) {
  const { opacity, scale } = usePhoneScreenScroll(scrollYProgress, index);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-8 text-center"
      style={{ opacity, scale }}
    >
      <span className="text-5xl">{screen.emoji}</span>
      <span className="font-display text-xl font-semibold">{screen.label}</span>
      <span className="text-sm text-text-muted">{screen.text}</span>
    </motion.div>
  );
}

export default function JourneySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress, lineHeight } = useJourneyScroll(containerRef);

  return (
    <section id="journey" className="pt-section">
      <Container className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeader
            label="Your Journey"
            title="From zero to financial freedom"
            subtitle="Follow the path millions of users have taken — a seamless journey from signup to smart money management."
          />
        </motion.div>
      </Container>

      <div ref={containerRef} className="relative h-auto lg:h-[300vh]">
        <div className="container mx-auto grid h-auto items-center gap-12 px-4 py-8 lg:sticky lg:top-0 lg:h-screen lg:grid-cols-2 lg:gap-16 lg:py-0">
          <div className="relative">
            <div className="absolute bottom-0 left-[19px] top-0 w-0.5 bg-border max-sm:hidden">
              <motion.div
                className="w-full origin-top rounded-sm bg-gradient-to-b from-accent to-teal"
                style={{ height: lineHeight }}
              />
            </div>
            <div className="flex flex-col gap-12 max-sm:gap-8">
              {journeySteps.map((step, index) => (
                <JourneyStepItem
                  key={step.number}
                  step={step}
                  index={index}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>
          </div>

          <div className="order-first flex items-center justify-center lg:order-none">
            <motion.div
              className="relative h-[480px] w-[240px] rounded-[40px] border-[3px] border-white/10 bg-bg-elevated p-3 shadow-phone sm:h-[560px] sm:w-[280px]"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute left-1/2 top-3 z-[2] h-7 w-[100px] -translate-x-1/2 rounded-b-2xl bg-bg" />
              <div className="relative h-full overflow-hidden rounded-[32px] bg-gradient-to-b from-surface to-bg">
                <div className="absolute inset-0 flex items-center justify-center">
                  {phoneScreens.map((screen, i) => (
                    <PhoneScreenItem
                      key={screen.label}
                      screen={screen}
                      index={i}
                      scrollYProgress={scrollYProgress}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
