import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import { cn } from '../utils/cn'

type NavItem = { label: string; href: string }

export function Navbar({
  companyName,
  initials = 'SC',
  logoSrc,
}: {
  companyName: string
  initials?: string
  logoSrc?: string
}) {
  const [open, setOpen] = useState(false)
  const reduceMotion = useReducedMotion()

  const nav = useMemo<NavItem[]>(
    () => [
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Work', href: '#work' },
      { label: 'Industries', href: '#industries' },
      { label: 'Process', href: '#process' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact', href: '#contact' },
    ],
    [],
  )

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="bg-slate-950/60 backdrop-blur supports-[backdrop-filter]:bg-slate-950/40">
        <div className="container-page">
          <div className="flex h-16 items-center justify-between">
            <a href="#top" className="flex items-center gap-2 font-bold tracking-tight text-white">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white p-1.5 ring-1 ring-white/15 sm:h-12 sm:w-12">
                {logoSrc ? (
                  <img
                    src={logoSrc}
                    alt={`${companyName} logo`}
                    className="h-full w-full object-contain"
                    loading="eager"
                  />
                ) : (
                  <span className="text-sm font-extrabold text-slate-900">{initials}</span>
                )}
              </span>
              <span className="hidden sm:inline">{companyName}</span>
            </a>

            <nav className="hidden items-center gap-6 md:flex">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-semibold text-slate-200/90 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-400"
              >
                Get a quote
              </a>
            </nav>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-xl p-2 text-slate-200 ring-1 ring-white/10 hover:bg-white/10 md:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className={cn('md:hidden border-b border-white/10 bg-slate-950/80 backdrop-blur')}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={reduceMotion ? { duration: 0.01 } : { duration: 0.22, ease: 'easeOut' }}
          >
            <div className="container-page py-3">
              <div className="flex flex-col gap-2">
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-200 hover:bg-white/10 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-1 rounded-xl bg-brand-500 px-3 py-2 text-sm font-semibold text-white hover:bg-brand-400"
                >
                  Get a quote
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

