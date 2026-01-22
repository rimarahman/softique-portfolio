import { ArrowRight, CheckCircle2, Mail, MapPin, Phone } from 'lucide-react'
import { Badge } from './components/Badge'
import { Background } from './components/Background'
import { Button } from './components/Button'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Reveal } from './components/Reveal'
import { SectionHeading } from './components/SectionHeading'
import { companyProfile } from './content/companyProfile'

function App() {
  return (
    <div id="top">
      <Background />
      <Navbar companyName={companyProfile.name} />

      <main className="pt-20">
        <section className="py-16 sm:py-20">
          <div className="container-page">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-7">
                <Reveal>
                  <Badge className="bg-brand-500/15 text-brand-100 ring-brand-400/20">
                    Shopify experts • Themes • Apps
                  </Badge>
                  <h1 className="mt-5 text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                    {companyProfile.name}
                    <span className="text-brand-300">.</span>
                    <br />
                    <span className="text-slate-200">{companyProfile.tagline}</span>
                  </h1>
                  <p className="mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
                    {companyProfile.shortBio}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <a href={companyProfile.primaryCta.href}>
                      <Button>
                        {companyProfile.primaryCta.label}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                    <a href={companyProfile.secondaryCta.href}>
                      <Button variant="secondary">{companyProfile.secondaryCta.label}</Button>
                    </a>
                  </div>
                </Reveal>
              </div>

              <div className="lg:col-span-5">
                <Reveal delay={0.1}>
                  <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
                    <div className="text-sm font-semibold text-slate-200">Why brands choose us</div>
                    <div className="mt-4 grid gap-4">
                      {companyProfile.stats.map((s) => (
                        <div
                          key={s.label}
                          className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10"
                        >
                          <div className="text-sm font-semibold text-slate-200">{s.label}</div>
                          <div className="text-sm font-bold text-white">{s.value}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 text-xs text-slate-400">
                      Tip: update this content in <code>src/content/companyProfile.ts</code>.
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 sm:py-20">
          <div className="container-page">
            <SectionHeading
              eyebrow="Services"
              title="Everything you need to build and grow on Shopify"
              subtitle="From pixel-perfect themes to reliable apps and performance-focused improvements."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {companyProfile.services.map((service, idx) => (
                <Reveal key={service.title} delay={idx * 0.05}>
                  <div className="h-full rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
                    <div className="text-lg font-bold text-white">{service.title}</div>
                    <p className="mt-2 text-sm text-slate-300">{service.description}</p>
                    <ul className="mt-5 grid gap-3">
                      {service.bullets.map((b) => (
                        <li key={b} className="flex gap-2 text-sm text-slate-200">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-300" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="py-16 sm:py-20">
          <div className="container-page">
            <SectionHeading
              eyebrow="Work"
              title="Selected case studies"
              subtitle="Replace these with real projects, theme names, and app links."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {companyProfile.caseStudies.map((cs, idx) => (
                <Reveal key={cs.title} delay={idx * 0.05}>
                  <div className="h-full rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
                    <div className="flex items-start justify-between gap-4">
                      <div className="text-lg font-bold text-white">{cs.title}</div>
                      <Badge className="shrink-0">{cs.category}</Badge>
                    </div>
                    <p className="mt-2 text-sm text-slate-300">{cs.summary}</p>
                    <div className="mt-5 grid gap-2">
                      {cs.highlights.map((h) => (
                        <div key={h} className="text-sm text-slate-200">
                          - {h}
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="py-16 sm:py-20">
          <div className="container-page">
            <SectionHeading
              eyebrow="Process"
              title="Clear communication. Fast delivery. Reliable quality."
              subtitle="A simple, proven workflow that keeps Shopify projects on track."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-4">
              {[
                { t: 'Discovery', d: 'Understand goals, scope, and timelines.' },
                { t: 'Design & plan', d: 'Wireframes, components, and architecture.' },
                { t: 'Build', d: 'Theme/app development with regular updates.' },
                { t: 'Launch & support', d: 'QA, rollout, and post-launch improvements.' },
              ].map((s, idx) => (
                <Reveal key={s.t} delay={idx * 0.05}>
                  <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
                    <div className="text-sm font-semibold text-brand-200/90">
                      Step {idx + 1}
                    </div>
                    <div className="mt-2 text-lg font-bold text-white">{s.t}</div>
                    <div className="mt-2 text-sm text-slate-300">{s.d}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-16 sm:py-20">
          <div className="container-page">
            <SectionHeading
              eyebrow="Testimonials"
              title="Clients like working with Softique IT"
              subtitle="Swap these with real reviews once you have them."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {companyProfile.testimonials.map((t, idx) => (
                <Reveal key={`${t.name}-${idx}`} delay={idx * 0.05}>
                  <div className="h-full rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
                    <div className="text-sm text-slate-200">“{t.quote}”</div>
                    <div className="mt-5 text-sm font-semibold text-white">{t.name}</div>
                    <div className="text-sm text-slate-400">
                      {[t.role, t.company].filter(Boolean).join(' • ')}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="container-page">
            <SectionHeading
              eyebrow="Tech"
              title="Modern Shopify stack"
              subtitle="Tools we commonly use to ship maintainable work."
            />
            <div className="mt-8 flex flex-wrap gap-2">
              {companyProfile.techStack.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 sm:py-20">
          <div className="container-page">
            <SectionHeading
              eyebrow="Contact"
              title="Let’s build something great on Shopify"
              subtitle="Share your goals — we’ll respond with a clear plan and timeline."
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <Reveal>
                  <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
                    <div className="text-lg font-bold text-white">Reach us</div>
                    <div className="mt-4 grid gap-3 text-sm text-slate-200">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-brand-300" />
                        <a
                          className="font-semibold hover:text-white"
                          href={`mailto:${companyProfile.contact.email}`}
                        >
                          {companyProfile.contact.email}
                        </a>
                      </div>
                      {companyProfile.contact.phone ? (
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-brand-300" />
                          <span className="font-semibold">{companyProfile.contact.phone}</span>
                        </div>
                      ) : null}
                      {companyProfile.contact.location ? (
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-brand-300" />
                          <span className="font-semibold">{companyProfile.contact.location}</span>
                        </div>
                      ) : null}
                    </div>

                    <div className="mt-6 grid gap-2">
                      {companyProfile.links.linkedIn ? (
                        <a
                          href={companyProfile.links.linkedIn}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-xl bg-white/5 px-4 py-3 text-sm font-semibold text-slate-200 ring-1 ring-white/10 hover:bg-white/10 hover:text-white"
                        >
                          LinkedIn
                        </a>
                      ) : null}
                      {companyProfile.links.shopifyDirectory ? (
                        <a
                          href={companyProfile.links.shopifyDirectory}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-xl bg-white/5 px-4 py-3 text-sm font-semibold text-slate-200 ring-1 ring-white/10 hover:bg-white/10 hover:text-white"
                        >
                          Shopify directory
                        </a>
                      ) : null}
                      {companyProfile.links.website ? (
                        <a
                          href={companyProfile.links.website}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-xl bg-white/5 px-4 py-3 text-sm font-semibold text-slate-200 ring-1 ring-white/10 hover:bg-white/10 hover:text-white"
                        >
                          Website
                        </a>
                      ) : null}
                    </div>
                  </div>
                </Reveal>
              </div>

              <div className="lg:col-span-7">
                <Reveal delay={0.05}>
                  <ContactForm />
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
