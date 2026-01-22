import { motion, useReducedMotion } from 'framer-motion'

export function Background() {
  const reduceMotion = useReducedMotion()

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute left-1/2 top-[-120px] h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl"
        animate={
          reduceMotion
            ? undefined
            : { y: [0, 18, 0], scale: [1, 1.03, 1], opacity: [0.75, 1, 0.8] }
        }
        transition={reduceMotion ? undefined : { duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-160px] right-[-120px] h-[520px] w-[520px] rounded-full bg-fuchsia-500/10 blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, -14, 0], y: [0, 10, 0] }}
        transition={reduceMotion ? undefined : { duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute left-[-160px] top-[40%] h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, 18, 0], y: [0, -10, 0] }}
        transition={reduceMotion ? undefined : { duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.06),transparent_50%),radial-gradient(circle_at_bottom,rgba(14,165,233,0.05),transparent_45%)]" />
    </div>
  )
}

