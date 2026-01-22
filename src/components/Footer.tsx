import { companyProfile } from '../content/companyProfile'

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container-page">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-semibold text-white">{companyProfile.name}</div>
            <div className="mt-1 text-sm text-slate-400">{companyProfile.tagline}</div>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {companyProfile.socialLinks
              .filter((s) => Boolean(s.href))
              .map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-slate-300 hover:text-white"
                >
                  {s.label}
                </a>
              ))}
          </div>
        </div>
        <div className="mt-8 text-xs text-slate-500">
          © {new Date().getFullYear()} {companyProfile.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

