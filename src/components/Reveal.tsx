import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '../utils/cn'

export function Reveal({
  children,
  delay = 0,
  from = 'up',
  distance = 16,
  duration = 0.5,
  className,
}: {
  children: ReactNode
  delay?: number
  from?: 'up' | 'down' | 'left' | 'right' | 'none'
  distance?: number
  duration?: number
  className?: string
}) {
  const reduceMotion = useReducedMotion()
  const d = reduceMotion ? 0 : distance

  const initial =
    from === 'none'
      ? { opacity: 0 }
      : from === 'up'
        ? { opacity: 0, y: d }
        : from === 'down'
          ? { opacity: 0, y: -d }
          : from === 'left'
            ? { opacity: 0, x: d }
            : { opacity: 0, x: -d }

  return (
    <motion.div
      className={cn(className)}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: reduceMotion ? 0.01 : duration, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}

