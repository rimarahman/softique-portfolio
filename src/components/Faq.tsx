import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { cn } from '../utils/cn'

export function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  const reduceMotion = useReducedMotion()

  return (
    <div className="rounded-2xl bg-white/5 ring-1 ring-white/10">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <div className="text-sm font-semibold text-white sm:text-base">{q}</div>
        <motion.span
          animate={open ? { rotate: 180 } : { rotate: 0 }}
          transition={reduceMotion ? { duration: 0.01 } : { duration: 0.18 }}
          className="shrink-0 text-slate-300"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={reduceMotion ? { duration: 0.01 } : { duration: 0.22, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className={cn('px-5 pb-5 text-sm text-slate-300 sm:text-base')}>{a}</div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

