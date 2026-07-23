'use client';

import { motion } from 'framer-motion';
import { testimonials } from '@/lib/data';
import { Container } from '@/components/ui/primitives';
import type { Testimonial } from '@/types';

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill={i < count ? '#fdcb6e' : 'rgba(255, 255, 255, 0.15)'}
          aria-hidden="true"
        >
          <path d="M8 0l2.5 5.5L16 6.3l-4 4 1 5.7L8 13.5 3 16l1-5.7-4-4 5.5-.8L8 0z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  return (
    <motion.figure
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-surface/80 to-bg-elevated/60 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-accent-glow-lg"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Quote mark watermark */}
      <div
        className="absolute -top-2 right-4 font-display text-[7rem] leading-none opacity-[0.06] transition-opacity duration-500 group-hover:opacity-[0.12]"
        style={{ color: testimonial.color }}
        aria-hidden="true"
      >
        &ldquo;
      </div>

      {/* Glow effect */}
      <div
        className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full opacity-15 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
        style={{ background: testimonial.color }}
        aria-hidden="true"
      />

      <div className="relative flex h-full flex-col">
        <StarRating count={testimonial.rating} />

        <blockquote className="mt-5 flex-1 text-[0.9375rem] leading-relaxed text-text/90">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>

        <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
          <div
            className="flex h-11 w-11 items-center justify-center rounded-full font-display text-sm font-bold tracking-wide"
            style={{
              background: `linear-gradient(135deg, ${testimonial.color}40, ${testimonial.color}10)`,
              color: testimonial.color,
              border: `1px solid ${testimonial.color}40`,
            }}
            aria-hidden="true"
          >
            {testimonial.initials}
          </div>
          <div>
            <div className="text-sm font-semibold text-text">{testimonial.name}</div>
            <div className="text-xs text-text-muted">{testimonial.role}</div>
          </div>
        </figcaption>
      </div>
    </motion.figure>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-section"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 0%, rgba(253, 121, 168, 0.12) 0%, transparent 50%)',
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
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3.5 py-1.5 text-[0.8125rem] font-medium text-accent-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-accent-light" />
            Loved by people worldwide
          </motion.div>

          <h2 className="mb-4 font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight">
            What our users{' '}
            <span className="bg-gradient-to-br from-pink to-accent-light bg-clip-text text-transparent">
              are saying
            </span>
          </h2>
          <p className="mx-auto max-w-[560px] text-text-muted">
            Real stories from real people — see how NovaPay fits into their daily lives.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}