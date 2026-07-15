'use client';

import { motion } from 'framer-motion';
import { navLinks } from '@/lib/data';
import { Container } from '@/components/ui/primitives';

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-6 max-sm:flex-col max-sm:text-center">
          <div>
            <span className="font-display text-lg font-bold text-accent-light">◆ NovaPay</span>
            <p className="mt-1 text-[0.8125rem] text-text-muted">
              Built as a Frontend Technical Assignment
            </p>
          </div>

          <nav className="flex gap-8 max-sm:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-text-muted transition-colors hover:text-text"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <motion.p
            className="mt-2 w-full border-t border-border pt-6 text-center text-xs text-text-muted"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} NovaPay Demo. All rights reserved.
          </motion.p>
        </div>
      </Container>
    </footer>
  );
}
