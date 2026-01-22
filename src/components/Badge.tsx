import type { ReactNode } from 'react'
import { cn } from '../utils/cn'

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/10',
        className,
      )}
    >
      {children}
    </span>
  )
}

