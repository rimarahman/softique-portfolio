import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '../utils/cn'

export function Card({
  children,
  className,
  hoverLift = true,
}: {
  children: ReactNode
  className?: string
  hoverLift?: boolean
}) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      whileHover={hoverLift && !reduceMotion ? { y: -6 } : undefined}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      className={cn(
        'rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 transition hover:bg-white/7 hover:ring-white/20',
        className,
      )}
    >
      {children}
    </motion.div>
  )
}

