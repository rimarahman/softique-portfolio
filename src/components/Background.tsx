export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute left-1/2 top-[-120px] h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="absolute bottom-[-160px] right-[-120px] h-[520px] w-[520px] rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="absolute left-[-160px] top-[40%] h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.06),transparent_50%),radial-gradient(circle_at_bottom,rgba(14,165,233,0.05),transparent_45%)]" />
    </div>
  )
}

