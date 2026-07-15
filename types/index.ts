export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
  color: string;
}

export interface JourneyStep {
  number: string;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}

export interface PhoneScreen {
  label: string;
  emoji: string;
  text: string;
}

export interface FloatingOrb {
  size: number;
  x: string;
  y: string;
  color: string;
  delay: number;
}

export interface TrustItem {
  label: string;
  icon: 'star' | 'shield' | 'plus';
}
