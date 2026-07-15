'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import type { TrustItem } from '@/types';
import { trustItems } from '@/lib/data';
import { useCtaScroll } from '@/hooks/useCtaScroll';
import { SubmitButton, Container } from '@/components/ui/primitives';

function TrustIcon({ icon }: { icon: TrustItem['icon'] }) {
  if (icon === 'star') {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 1l2.5 5 5.5.8-4 3.9.9 5.5L10 13.5 5.1 16.2l.9-5.5-4-3.9 5.5-.8L10 1z" fill="#00cec9" />
      </svg>
    );
  }
  if (icon === 'shield') {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 18a8 8 0 100-16 8 8 0 000 16z" stroke="#00cec9" strokeWidth="1.5" />
        <path d="M7 10l2 2 4-4" stroke="#00cec9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2v16M2 10h16" stroke="#00cec9" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function CTASection() {
  const ref = useRef<HTMLElement>(null);
  const { orbY1, orbY2, opacity } = useCtaScroll(ref);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Thanks for your interest! This is a demo project.');
  };

  return (
    <section ref={ref} id="cta" className="relative overflow-hidden py-section">
      <motion.div
        className="pointer-events-none absolute -left-[100px] -top-[100px] h-[500px] w-[500px] rounded-full bg-accent/15 blur-[60px] will-change-transform"
        style={{ y: orbY1 }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-[100px] -right-[100px] h-[400px] w-[400px] rounded-full bg-teal/10 blur-[60px] will-change-transform"
        style={{ y: orbY2 }}
      />

      <motion.div
        className="relative z-10 mx-auto max-w-[640px] text-center"
        style={{ opacity }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <Container>
          <h2 className="mb-4 font-display text-[clamp(2rem,5vw,3rem)] font-bold leading-tight tracking-tight">
            Ready to transform
            <br />
            your finances?
          </h2>
          <p className="mb-10 text-[1.0625rem] leading-relaxed text-text-muted">
            Join over 2 million users who trust NovaPay for smarter money management.
            Start free — no credit card required.
          </p>

          <form onSubmit={handleSubmit} className="mx-auto mb-8 flex max-w-[480px] gap-3 max-sm:flex-col">
            <input
              type="email"
              placeholder="Enter your email"
              required
              aria-label="Email address"
              className="flex-1 rounded-full border border-border bg-surface px-5 py-3.5 text-[0.9375rem] text-text outline-none transition-all placeholder:text-text-muted focus:border-accent focus:shadow-[0_0_0_3px_rgba(108,92,231,0.4)]"
            />
            <SubmitButton className="shrink-0 whitespace-nowrap max-sm:w-full max-sm:justify-center">
              Get early access
            </SubmitButton>
          </form>

          <div className="flex flex-wrap justify-center gap-6 max-sm:flex-col max-sm:items-center max-sm:gap-3">
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-[0.8125rem] text-text-muted">
                <TrustIcon icon={item.icon} />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </motion.div>
    </section>
  );
}
