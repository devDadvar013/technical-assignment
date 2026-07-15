import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0f',
        'bg-elevated': '#12121a',
        surface: '#1a1a26',
        border: 'rgba(255, 255, 255, 0.08)',
        text: '#f0f0f5',
        'text-muted': '#8888a0',
        accent: '#6c5ce7',
        'accent-light': '#a29bfe',
        teal: '#00cec9',
      },
      fontFamily: {
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '16px',
        lg: '24px',
      },
      spacing: {
        section: 'clamp(4rem, 10vw, 8rem)',
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        'accent-glow': '0 4px 24px rgba(108, 92, 231, 0.4)',
        'accent-glow-lg': '0 8px 32px rgba(108, 92, 231, 0.4)',
        card: '0 24px 48px rgba(0, 0, 0, 0.4)',
        phone: '0 40px 80px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
      },
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.3)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
