import { cn } from '@/lib/utils';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  return (
    <a
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[0.9375rem] font-semibold transition-all duration-200',
        variant === 'primary' &&
          'bg-gradient-to-br from-accent to-[#5a4bd1] text-white shadow-accent-glow hover:-translate-y-0.5 hover:shadow-accent-glow-lg active:translate-y-0',
        variant === 'secondary' &&
          'border border-border font-medium text-text hover:border-white/15 hover:bg-white/5',
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}

interface SectionLabelProps {
  children: React.ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent-light">
      <span className="h-0.5 w-6 rounded-sm bg-accent" />
      {children}
    </span>
  );
}

interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  subtitle: string;
  centered?: boolean;
}

export function SectionHeader({ label, title, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <div className={cn(centered && 'text-center')}>
      <SectionLabel>{label}</SectionLabel>
      <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight tracking-tight">
        {title}
      </h2>
      <p
        className={cn(
          'mt-4 max-w-[540px] text-[clamp(1rem,2vw,1.125rem)] leading-relaxed text-text-muted',
          centered && 'mx-auto'
        )}
      >
        {subtitle}
      </p>
    </div>
  );
}

export function SubmitButton({ className, children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="submit"
      className={cn(
        'inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-accent to-[#5a4bd1] px-7 py-3.5 text-[0.9375rem] font-semibold text-white shadow-accent-glow transition-all duration-200 hover:-translate-y-0.5 hover:shadow-accent-glow-lg active:translate-y-0',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn('mx-auto w-full max-w-container px-4', className)}>
      {children}
    </div>
  );
}
