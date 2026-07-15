'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import type { Feature } from '@/types';
import { features } from '@/lib/data';
import { useFeaturesScroll } from '@/hooks/useFeaturesScroll';
import { Container, SectionHeader } from '@/components/ui/primitives';

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.article
      ref={ref}
      className="group relative overflow-hidden rounded border border-border bg-surface p-8 transition-all duration-300 hover:border-white/10 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)]"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
    >
      <div
        className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border text-xl"
        style={{ background: `${feature.color}20`, borderColor: `${feature.color}40` }}
      >
        <span>{feature.icon}</span>
      </div>
      <h3 className="mb-2 font-display text-lg font-semibold tracking-tight">{feature.title}</h3>
      <p className="text-sm leading-relaxed text-text-muted">{feature.description}</p>
      <div
        className="pointer-events-none absolute -bottom-10 -right-10 h-[120px] w-[120px] rounded-full opacity-0 blur-[40px] transition-opacity duration-400 group-hover:opacity-15"
        style={{ background: feature.color }}
      />
    </motion.article>
  );
}

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { bgY } = useFeaturesScroll(sectionRef);

  return (
    <section ref={sectionRef} id="features" className="relative overflow-hidden py-section">
      <motion.div
        className="pointer-events-none absolute left-1/2 top-[10%] h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(108,92,231,0.08)_0%,transparent_60%)] will-change-transform"
        style={{ y: bgY }}
      />

      <Container>
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeader
            label="Features"
            title={
              <>
                Everything you need,
                <br />
                nothing you don&apos;t
              </>
            }
            subtitle="Powerful tools designed to simplify your financial life — from everyday spending to long-term wealth building."
          />
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
