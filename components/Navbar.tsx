'use client';

import { motion } from 'framer-motion';
import { navLinks } from '@/lib/data';
import { useNavbar } from '@/hooks/useNavbar';
import { cn } from '@/lib/utils';
import { Container } from '@/components/ui/primitives';

export default function Navbar() {
  const { scrolled, menuOpen, toggleMenu, closeMenu } = useNavbar();

  return (
    <motion.header
      className={cn(
        'fixed inset-x-0 top-0 z-[1000] py-5 transition-all duration-300',
        scrolled && 'border-b border-border bg-bg/85 py-3.5 backdrop-blur-xl'
      )}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Container className="flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-display text-xl font-bold tracking-tight">
          <span className="text-accent-light">◆</span>
          NovaPay
        </a>

        <nav
          className={cn(
            'flex items-center gap-8 max-md:fixed max-md:inset-y-0 max-md:right-0 max-md:w-[min(280px,80vw)] max-md:flex-col max-md:justify-center max-md:gap-8 max-md:border-l max-md:border-border max-md:bg-bg-elevated max-md:p-8 max-md:transition-transform max-md:duration-300',
            menuOpen ? 'max-md:translate-x-0' : 'max-md:translate-x-full'
          )}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="group relative text-sm font-medium text-text-muted transition-colors hover:text-text max-md:text-lg"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent-light transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="hidden flex-col gap-1.5 p-1 max-md:flex"
        >
          <span className={cn('block h-0.5 w-[22px] rounded-sm bg-text transition-all', menuOpen && 'translate-y-[7px] rotate-45')} />
          <span className={cn('block h-0.5 w-[22px] rounded-sm bg-text transition-all', menuOpen && 'opacity-0')} />
          <span className={cn('block h-0.5 w-[22px] rounded-sm bg-text transition-all', menuOpen && '-translate-y-[7px] -rotate-45')} />
        </button>
      </Container>
    </motion.header>
  );
}
