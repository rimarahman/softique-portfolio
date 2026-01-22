import { Send } from 'lucide-react'
import { useMemo, useState } from 'react'
import { companyProfile } from '../content/companyProfile'

type FieldProps = {
  label: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  type?: string
}

function Field({ label, value, onChange, placeholder, type = 'text' }: FieldProps) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-slate-200">{label}</span>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="h-11 rounded-xl bg-white/5 px-3 text-sm text-white placeholder:text-slate-500 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-brand-400/60"
      />
    </label>
  )
}

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`Project inquiry — ${name || 'New lead'}`)
    const body = encodeURIComponent(
      [
        `Name: ${name || '-'}`,
        `Email: ${email || '-'}`,
        '',
        message || '',
      ].join('\n'),
    )
    return `mailto:${companyProfile.contact.email}?subject=${subject}&body=${body}`
  }, [email, message, name])

  return (
    <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
      <div className="text-lg font-bold text-white">Tell us about your project</div>
      <p className="mt-1 text-sm text-slate-300">
        This opens your email client with a pre-filled message.
      </p>

      <div className="mt-6 grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Name" value={name} onChange={setName} placeholder="Your name" />
          <Field
            label="Email"
            value={email}
            onChange={setEmail}
            placeholder="you@company.com"
            type="email"
          />
        </div>
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-slate-200">Message</span>
          <textarea
            value={message}
            placeholder="What do you want to build? Theme, app, fixes, speed improvements..."
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className="rounded-xl bg-white/5 px-3 py-3 text-sm text-white placeholder:text-slate-500 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-brand-400/60"
          />
        </label>

        <a
          href={mailto}
          className="inline-flex w-full items-center justify-center rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/60"
        >
          <Send className="mr-2 h-4 w-4" />
          Send email
        </a>
      </div>
    </div>
  )
}

