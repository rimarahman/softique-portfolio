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

export type CompanyProfile = {
  name: string
  tagline: string
  shortBio: string
  primaryCta: {
    label: string
    href: string
  }
  secondaryCta: {
    label: string
    href: string
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
  stats: Array<{ label: string; value: string }>
  services: Service[]
  caseStudies: CaseStudy[]
  testimonials: Testimonial[]
  techStack: string[]
}

/**
 * Update this file to make the site match Softique IT exactly.
 * If you share Softique IT's Shopify directory + LinkedIn URLs, I can prefill them here.
 */
export const companyProfile: CompanyProfile = {
  name: 'Softique IT',
  tagline: 'Shopify theme & app development company',
  shortBio:
    'We help Shopify brands launch fast, convert better, and scale with custom theme builds, app development, and performance-focused improvements.',
  primaryCta: {
    label: 'Book a call',
    href: '#contact',
  },
  secondaryCta: {
    label: 'See services',
    href: '#services',
  },
  contact: {
    email: 'hello@softiqueit.com',
    phone: '',
    location: '',
  },
  links: {
    website: '',
    linkedIn: '',
    shopifyDirectory: '',
  },
  socialLinks: [
    { label: 'LinkedIn', href: '' },
    { label: 'Shopify directory', href: '' },
  ],
  stats: [
    { label: 'Shopify focus', value: '100%' },
    { label: 'Turnaround', value: 'Fast & reliable' },
    { label: 'Quality', value: 'Pixel-perfect UI' },
  ],
  services: [
    {
      title: 'Shopify theme development',
      description:
        'Custom storefronts that match your brand, load fast, and are easy for your team to manage.',
      bullets: [
        'Theme customization & new theme builds',
        'Sections, blocks, and reusable components',
        'Performance, Core Web Vitals, SEO basics',
      ],
    },
    {
      title: 'Shopify app development',
      description:
        'Public or custom apps that automate operations and unlock new revenue.',
      bullets: [
        'Shopify admin apps (embedded)',
        'API integrations and data sync',
        'Billing, auth, and reliable deployment',
      ],
    },
    {
      title: 'Conversion optimization',
      description:
        'Make the site easier to buy from: improved UX, better merchandising, and faster pages.',
      bullets: [
        'Landing pages and PDP improvements',
        'Checkout and cart UX enhancements',
        'Analytics-friendly implementations',
      ],
    },
  ],
  caseStudies: [
    {
      title: 'High-converting fashion storefront',
      category: 'Theme',
      summary:
        'A clean, mobile-first theme rebuild with faster performance and better merchandising.',
      highlights: ['Reusable sections', 'Improved navigation', 'Performance uplift'],
    },
    {
      title: 'Operations automation app',
      category: 'App',
      summary:
        'An embedded app that streamlined order workflows and reduced manual support work.',
      highlights: ['Admin UI', 'Integrations', 'Reliable background jobs'],
    },
    {
      title: 'Speed & SEO optimization sprint',
      category: 'Optimization',
      summary:
        'A targeted improvement pass focused on Core Web Vitals, images, and theme code quality.',
      highlights: ['Asset optimization', 'Cleaner Liquid', 'Better UX'],
    },
  ],
  testimonials: [
    {
      quote:
        'Softique IT delivered exactly what we needed — fast communication, clean code, and a storefront that looks premium.',
      name: 'Client Name',
      role: 'Founder',
      company: 'Shopify Brand',
    },
    {
      quote:
        'The app workflow saved our team hours every week. Smooth delivery from start to finish.',
      name: 'Client Name',
      role: 'Operations Lead',
      company: 'Ecommerce Team',
    },
  ],
  techStack: [
    'Shopify Liquid',
    'Shopify App APIs',
    'React',
    'TypeScript',
    'Node.js',
    'GraphQL',
    'Polaris (Shopify UI)',
  ],
}

