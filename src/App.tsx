import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone } from 'lucide-react'
import { Badge } from './components/Badge'
import { Background } from './components/Background'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { ContactForm } from './components/ContactForm'
import { FaqItem } from './components/Faq'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Reveal } from './components/Reveal'
import { SectionHeading } from './components/SectionHeading'
import { Stagger, StaggerItem } from './components/Stagger'
import { companyProfile } from './content/companyProfile'
import softiqueLogo from './assets/logo/softique_logo.png'

function App() {
  const reduceMotion = useReducedMotion()

  return (
    <div id="top">
      <Background />
      <Navbar companyName={companyProfile.name} initials={companyProfile.initials} logoSrc={softiqueLogo} />

      <main className="pt-20">
        <section className="py-16 sm:py-20">
          <div className="container-page">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-7">
                <Reveal>
                  <motion.div
                    animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
                    transition={reduceMotion ? undefined : { duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    className="inline-block"
                  >
                    <Badge className="bg-brand-500/15 text-brand-100 ring-brand-400/20">
                      Shopify experts • Themes • Apps
                    </Badge>
                  </motion.div>
                  <h1 className="mt-5 text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                    {companyProfile.name}
                    <span className="text-brand-300">.</span>
                    <br />
                    <span className="text-slate-200">{companyProfile.tagline}</span>
                  </h1>
                  <p className="mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
                    {companyProfile.shortBio}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
                    <img
                      src={companyProfile.partner.badgeImageSrc}
                      alt={companyProfile.partner.badgeAlt}
                      className="h-10 w-auto"
                      loading="lazy"
                    />
      <div>
                      <div className="text-sm font-bold text-white">{companyProfile.partner.tierLabel}</div>
                      <div className="text-xs text-slate-400">{companyProfile.partner.description}</div>
                    </div>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <a href={companyProfile.primaryCta.href}>
                      <Button className="hover:translate-y-[-1px] transition-transform">
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
                  <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 transition hover:bg-white/7">
                    <div className="text-sm font-semibold text-slate-200">Why brands choose us</div>
                    <div className="mt-4 grid gap-4">
                      {companyProfile.stats.map((s) => (
                        <div
                          key={s.label}
                          className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10 transition hover:bg-white/10"
                        >
                          <div className="text-sm font-semibold text-slate-200">{s.label}</div>
                          <div className="text-sm font-bold text-white">{s.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

            {companyProfile.trustedBy.filter(Boolean).length ? (
              <div className="mt-12">
                <div className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Trusted by
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {companyProfile.trustedBy.filter(Boolean).map((name) => (
                    <Badge key={name} className="bg-white/5 text-slate-200">
                      {name}
                    </Badge>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </section>

        <section id="about" className="py-16 sm:py-20">
          <div className="container-page">
            <SectionHeading
              eyebrow="About"
              title="Shopify specialists for brands that want speed and scale"
              subtitle={companyProfile.businessDescription}
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <Card className="h-full">
                  <div className="text-lg font-bold text-white">What we do</div>
                  <div className="mt-2 text-sm text-slate-300">
                    We deliver Shopify themes, migrations, Shopify Plus support, custom apps, integrations, and
                    headless commerce—built to be fast, maintainable, and conversion-friendly.
                  </div>
                  <div className="mt-5 grid gap-2 text-sm text-slate-200">
                    {[
                      'Store build or redesign',
                      'Store migration',
                      'Custom apps and integrations',
                      'POS setup and migration',
                      'Theme customization',
                      'Headless commerce',
                    ].map((b) => (
                      <div key={b}>- {b}</div>
                    ))}
                  </div>
                </Card>
              </div>

              <div className="lg:col-span-5">
                <Card className="h-full">
                  <div className="text-lg font-bold text-white">Industries</div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {companyProfile.industries.map((i) => (
                      <Badge key={i}>{i}</Badge>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="container-page">
            <SectionHeading
              eyebrow="Outcomes"
              title="What you can expect"
              subtitle="We focus on delivery quality and Shopify outcomes—without overpromising. Add real numbers here when you have them."
            />

            <Stagger>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {companyProfile.outcomes.map((o) => (
                  <StaggerItem key={`${o.value}-${o.label}`}>
                    <Card className="h-full">
                      <div className="text-3xl font-extrabold tracking-tight text-white">
                        {o.value}
                        <span className="text-brand-300">.</span>
                      </div>
                      <div className="mt-1 text-sm font-semibold text-slate-200">{o.label}</div>
                      {o.detail ? <div className="mt-3 text-sm text-slate-300">{o.detail}</div> : null}
                    </Card>
                  </StaggerItem>
                ))}
              </div>
            </Stagger>
          </div>
        </section>

        <section id="services" className="py-16 sm:py-20">
          <div className="container-page">
            <SectionHeading
              eyebrow="Services"
              title="Everything you need to build and grow on Shopify"
              subtitle="Themes, apps, migrations, integrations, POS, Shopify Plus, and headless commerce."
            />

            <Stagger>
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {companyProfile.services.map((service) => (
                  <StaggerItem key={service.title}>
                    <Card className="h-full">
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
                    </Card>
                  </StaggerItem>
                ))}
              </div>
            </Stagger>
          </div>
        </section>

        <section id="work" className="py-16 sm:py-20">
          <div className="container-page">
            <SectionHeading
              eyebrow="Work"
              title="Featured work"
              subtitle="A few brands we’ve worked with."
            />

            <Stagger>
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {companyProfile.featuredWork.map((w) => (
                  <StaggerItem key={w.name}>
                    <Card className="h-full">
                      <div className="flex items-start justify-between gap-4">
                        <div className="text-lg font-bold text-white">{w.name}</div>
                        <a
                          href={w.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm font-semibold text-brand-200 hover:text-white"
                        >
                          View →
                        </a>
                      </div>
                      <p className="mt-2 text-sm text-slate-300">{w.summary}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {w.tags.map((t) => (
                          <Badge key={t}>{t}</Badge>
                        ))}
                      </div>
                    </Card>
                  </StaggerItem>
                ))}
              </div>
            </Stagger>
          </div>
        </section>

        <section id="industries" className="py-16 sm:py-20">
          <div className="container-page">
            <SectionHeading
              eyebrow="Industries"
              title="Experience across ecommerce categories"
              subtitle="We adapt the storefront and tooling to your product, catalog, and operational needs."
            />
            <div className="mt-8 flex flex-wrap gap-2">
              {companyProfile.industries.map((i) => (
                <Badge key={i}>{i}</Badge>
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

            <Stagger>
              <div className="mt-10 grid gap-6 md:grid-cols-4">
                {[
                  { t: 'Discovery', d: 'Understand goals, scope, and timelines.' },
                  { t: 'Design & plan', d: 'Wireframes, components, and architecture.' },
                  { t: 'Build', d: 'Theme/app development with regular updates.' },
                  { t: 'Launch & support', d: 'QA, rollout, and post-launch improvements.' },
                ].map((s, idx) => (
                  <StaggerItem key={s.t}>
                    <Card hoverLift={false}>
                      <div className="text-sm font-semibold text-brand-200/90">Step {idx + 1}</div>
                      <div className="mt-2 text-lg font-bold text-white">{s.t}</div>
                      <div className="mt-2 text-sm text-slate-300">{s.d}</div>
                    </Card>
                  </StaggerItem>
                ))}
              </div>
            </Stagger>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="container-page">
            <SectionHeading
              eyebrow="Engagement"
              title="Flexible ways to work together"
              subtitle="Choose a model that matches your scope, timelines, and team."
            />

            <Stagger>
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {companyProfile.engagementModels.map((m) => (
                  <StaggerItem key={m.title}>
                    <Card className="h-full">
                      <div className="text-lg font-bold text-white">{m.title}</div>
                      <div className="mt-2 text-sm text-slate-300">{m.description}</div>
                      <div className="mt-5 grid gap-2">
                        {m.bullets.map((b) => (
                          <div key={b} className="text-sm text-slate-200">
                            - {b}
                          </div>
                        ))}
                      </div>
                      <div className="mt-6">
                        <a href="#contact" className="text-sm font-semibold text-brand-200 hover:text-white">
                          Talk to us →
                        </a>
                      </div>
                    </Card>
                  </StaggerItem>
                ))}
              </div>
            </Stagger>
          </div>
        </section>

        {companyProfile.testimonials.length ? (
          <section id="testimonials" className="py-16 sm:py-20">
            <div className="container-page">
              <SectionHeading eyebrow="Testimonials" title="What clients say" />

              <Stagger>
                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  {companyProfile.testimonials.map((t, idx) => (
                    <StaggerItem key={`${t.name}-${idx}`}>
                      <Card className="h-full">
                        <div className="text-sm text-slate-200">“{t.quote}”</div>
                        <div className="mt-5 text-sm font-semibold text-white">{t.name}</div>
                        <div className="text-sm text-slate-400">
                          {[t.role, t.company].filter(Boolean).join(' • ')}
                        </div>
                      </Card>
                    </StaggerItem>
                  ))}
                </div>
              </Stagger>
            </div>
          </section>
        ) : null}

        <section className="py-16 sm:py-20">
          <div className="container-page">
            <SectionHeading
              eyebrow="FAQ"
              title="Common questions"
              subtitle="If you have a question that isn’t listed here, send a message."
            />

            <div id="faq" className="mt-10 grid gap-3 md:grid-cols-2">
              {companyProfile.faqs.map((f) => (
                <FaqItem key={f.q} q={f.q} a={f.a} />
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

        <section className="py-12 sm:py-14">
          <div className="container-page">
            <div className="rounded-3xl bg-gradient-to-r from-brand-500/20 via-fuchsia-500/10 to-cyan-500/10 p-8 ring-1 ring-white/10">
              <div className="grid gap-6 md:grid-cols-12 md:items-center">
                <div className="md:col-span-8">
                  <div className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                    {companyProfile.ctaStrip.title}
                  </div>
                  <div className="mt-2 text-sm text-slate-200 sm:text-base">
                    {companyProfile.ctaStrip.subtitle}
                  </div>
                </div>
                <div className="md:col-span-4 md:flex md:justify-end">
                  <a href={companyProfile.ctaStrip.primaryHref}>
                    <Button className="w-full md:w-auto">{companyProfile.ctaStrip.primaryLabel}</Button>
                  </a>
                </div>
              </div>
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
