import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../utils/cn'

type Variant = 'primary' | 'secondary' | 'ghost'

export function Button({
  variant = 'primary',
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; children: ReactNode }) {
  const base =
    'inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-brand-400/60 disabled:opacity-60 disabled:pointer-events-none'

  const styles: Record<Variant, string> = {
    primary: 'bg-brand-500 text-white hover:bg-brand-400',
    secondary: 'bg-white/10 text-white hover:bg-white/15 ring-1 ring-white/10',
    ghost: 'bg-transparent text-white hover:bg-white/10',
  }

  return (
    <button className={cn(base, styles[variant], className)} {...props}>
      {children}
    </button>
  )
}

