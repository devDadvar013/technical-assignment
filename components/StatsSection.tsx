'use client';

import { motion } from 'framer-motion';
import { stats } from '@/lib/data';
import { useStatsCounter } from '@/hooks/useStatsCounter';
import { Container } from '@/components/ui/primitives';
import type { Stat } from '@/types';

function StatCard({ stat, index }: { stat: Stat; index: number }) {
  const { ref, count } = useStatsCounter(stat.value);

  return (
    <motion.div
      ref={ref}
      className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-surface/60 to-bg-elevated/60 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-accent-glow-lg"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="absolute -top-20 -right-20 h-40 w-40 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
        style={{ background: stat.color }}
        aria-hidden="true"
      />

      <div className="relative">
        <div className="mb-3 text-3xl" aria-hidden="true">
          {stat.icon}
        </div>
        <div
          className="mb-2 font-display text-5xl font-extrabold tracking-tight max-[480px]:text-4xl"
          style={{ color: stat.color }}
        >
          {stat.prefix ?? ''}
          {count.toLocaleString()}
          {stat.suffix ?? ''}
        </div>
        <div className="text-sm font-semibold text-text">{stat.label}</div>
        <div className="mt-1 text-xs text-text-muted">{stat.sublabel}</div>
      </div>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section
      id="stats"
      className="relative overflow-hidden border-y border-border bg-gradient-to-b from-bg via-bg-elevated/40 to-bg py-section"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(108, 92, 231, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(0, 206, 201, 0.15) 0%, transparent 50%)',
        }}
        aria-hidden="true"
      />

      <Container>
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal/25 bg-teal/10 px-3.5 py-1.5 text-[0.8125rem] font-medium text-teal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-teal" />
            Trusted by millions
          </motion.div>

          <h2 className="mb-4 font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight">
            Numbers that{' '}
            <span className="bg-gradient-to-br from-accent-light to-teal bg-clip-text text-transparent">
              speak for themselves
            </span>
          </h2>
          <p className="mx-auto max-w-[560px] text-text-muted">
            Real metrics from real users — see why millions of people choose NovaPay every day.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}