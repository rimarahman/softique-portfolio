export type SocialLink = {
  label: string
  href: string
}

export type Service = {
  title: string
  description: string
  bullets: string[]
}

export type CaseStudy = {
  title: string
  category: 'Theme' | 'App' | 'Storefront' | 'Optimization'
  summary: string
  highlights: string[]
}

export type Testimonial = {
  quote: string
  name: string
  role?: string
  company?: string
}

export type Outcome = {
  value: string
  label: string
  detail?: string
}

export type EngagementModel = {
  title: string
  description: string
  bullets: string[]
}

export type FAQ = {
  q: string
  a: string
}

export type PartnerInfo = {
  tierLabel: string
  description: string
  badgeImageSrc: string
  badgeAlt: string
}

export type FeaturedWork = {
  name: string
  url: string
  summary: string
  tags: string[]
}

export type CompanyProfile = {
  name: string
  initials: string
  tagline: string
  shortBio: string
  businessDescription: string
  partner: PartnerInfo
  primaryCta: {
    label: string
    href: string
  }
  secondaryCta: {
    label: string
    href: string
  }
  ctaStrip: {
    title: string
    subtitle: string
    primaryLabel: string
    primaryHref: string
  }
  contact: {
    email: string
    phone?: string
    location?: string
  }
  links: {
    website?: string
    linkedIn?: string
    shopifyDirectory?: string
  }
  socialLinks: SocialLink[]
  trustedBy: string[]
  industries: string[]
  featuredWork: FeaturedWork[]
  stats: Array<{ label: string; value: string }>
  outcomes: Outcome[]
  services: Service[]
  caseStudies: CaseStudy[]
  engagementModels: EngagementModel[]
  testimonials: Testimonial[]
  faqs: FAQ[]
  techStack: string[]
}

