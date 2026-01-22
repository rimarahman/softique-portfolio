import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export function Stagger({
  children,
  stagger = 0.06,
  delayChildren = 0,
}: {
  children: ReactNode
  stagger?: number
  delayChildren?: number
}) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: reduceMotion ? 0 : stagger,
            delayChildren,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: reduceMotion ? 0 : 14 },
        show: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0.01 : 0.45 } },
      }}
    >
      {children}
    </motion.div>
  )
}

