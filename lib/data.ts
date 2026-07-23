import type { Feature, FloatingOrb, JourneyStep, NavLink, PhoneScreen, Stat, TrustItem } from '@/types';

export const navLinks: NavLink[] = [
  { label: 'Features', href: '#features' },
  { label: 'Journey', href: '#journey' },
  { label: 'Get Started', href: '#cta' },
];

export const floatingOrbs: FloatingOrb[] = [
  { size: 320, x: '10%', y: '20%', color: 'rgba(108, 92, 231, 0.4)', delay: 0 },
  { size: 200, x: '70%', y: '10%', color: 'rgba(0, 206, 201, 0.3)', delay: 0.5 },
  { size: 160, x: '80%', y: '60%', color: 'rgba(162, 155, 254, 0.25)', delay: 1 },
];

export const chartHeights = [40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100];

export const features: Feature[] = [
  {
    icon: '⚡',
    title: 'Instant Transfers',
    description: 'Send money globally in seconds with zero hidden fees and real-time tracking.',
    color: '#6c5ce7',
  },
  {
    icon: '🔒',
    title: 'Bank-Grade Security',
    description: 'Multi-layer encryption and biometric authentication keep your assets protected 24/7.',
    color: '#00cec9',
  },
  {
    icon: '📊',
    title: 'Smart Analytics',
    description: 'AI-powered insights help you understand spending patterns and optimize savings.',
    color: '#fd79a8',
  },
  {
    icon: '🌍',
    title: 'Global Access',
    description: 'Use NovaPay in 150+ countries with competitive exchange rates and local support.',
    color: '#fdcb6e',
  },
  {
    icon: '💳',
    title: 'Virtual Cards',
    description: 'Create unlimited virtual cards for subscriptions, shopping, and budget control.',
    color: '#74b9ff',
  },
  {
    icon: '🎯',
    title: 'Goal Tracking',
    description: 'Set financial goals and watch your progress with beautiful visual milestones.',
    color: '#a29bfe',
  },
];

export const journeySteps: JourneyStep[] = [
  {
    number: '01',
    title: 'Sign up in 60 seconds',
    description: 'Create your account with just an email. No paperwork, no waiting — your digital wallet is ready instantly.',
    stat: '60s',
    statLabel: 'Average signup time',
  },
  {
    number: '02',
    title: 'Connect & customize',
    description: 'Link your bank accounts securely and personalize your dashboard. Set budgets, goals, and spending categories.',
    stat: '3',
    statLabel: 'Steps to get started',
  },
  {
    number: '03',
    title: 'Spend smarter',
    description: 'Use virtual cards, track every transaction in real-time, and get AI recommendations to optimize your finances.',
    stat: '40%',
    statLabel: 'Average savings increase',
  },
  {
    number: '04',
    title: 'Grow your wealth',
    description: 'Automated savings, investment insights, and milestone celebrations keep you motivated on your financial journey.',
    stat: '2M+',
    statLabel: 'Active users worldwide',
  },
];

export const phoneScreens: PhoneScreen[] = [
  { label: 'Welcome', emoji: '👋', text: 'Create your account' },
  { label: 'Connect', emoji: '🔗', text: 'Link your banks' },
  { label: 'Track', emoji: '📈', text: 'Monitor spending' },
  { label: 'Grow', emoji: '🚀', text: 'Build wealth' },
];

export const trustItems: TrustItem[] = [
  { label: '4.9/5 rating', icon: 'star' },
  { label: 'Bank-level security', icon: 'shield' },
  { label: 'Free forever plan', icon: 'plus' },
];

export const stats: Stat[] = [
  {
    icon: '👥',
    value: 2,
    suffix: 'M+',
    label: 'Active Users',
    sublabel: 'And growing every day',
    color: '#6c5ce7',
  },
  {
    icon: '💰',
    value: 50,
    prefix: '$',
    suffix: 'B',
    label: 'Processed',
    sublabel: 'In secure transactions',
    color: '#00cec9',
  },
  {
    icon: '🌍',
    value: 150,
    suffix: '+',
    label: 'Countries',
    sublabel: 'Global coverage',
    color: '#fd79a8',
  },
  {
    icon: '⭐',
    value: 4.9,
    label: 'User Rating',
    sublabel: 'Across 100k+ reviews',
    color: '#fdcb6e',
  },
];