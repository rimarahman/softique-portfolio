import type { ReactNode } from 'react'
import { cn } from '../utils/cn'

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  right,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  right?: ReactNode
}) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        {eyebrow ? (
          <div className="text-sm font-semibold text-brand-200/90">{eyebrow}</div>
        ) : null}
        <h2 className={cn('text-balance text-2xl font-bold tracking-tight text-white sm:text-3xl')}>
          {title}
        </h2>
        {subtitle ? <p className="mt-2 text-sm text-slate-300 sm:text-base">{subtitle}</p> : null}
      </div>
      {right ? <div className="shrink-0">{right}</div> : null}
    </div>
  )
}

