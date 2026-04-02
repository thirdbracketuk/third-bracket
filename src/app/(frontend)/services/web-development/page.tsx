import PageHeader from '@/components/PageHeader'
import CTASection from '@/components/CTASection'
import { Bracket } from '@thirdbracket/bracketui'
import { Metadata } from 'next'
import {
  ServiceSection,
  QuickServicesStrip,
  ConcentricRings,
  GridDots,
  RadialDashes,
} from '../ServiceSection'
import {
  RiLayout2Line,
  RiBracesLine,
  RiShoppingCart2Line,
  RiRefreshLine,
  RiToolsLine,
  RiSpeedLine,
  RiExchangeLine,
  RiCodeLine,
  RiServerLine,
  RiCheckLine,
  RiRocketLine,
  RiSearchLine,
  RiShieldLine,
  RiGlobalLine,
} from 'react-icons/ri'
import { SiNextdotjs, SiWordpress } from 'react-icons/si'

export const metadata: Metadata = {
  title: 'Website Design & Ecommerce Development Manchester | thirdbracket',
  description:
    'Bespoke web design and ecommerce development for Manchester businesses. Next.js and WordPress specialists. SEO-first builds, fast delivery, no vendor lock-in.',
  openGraph: {
    title: 'Web Design & Ecommerce Development Manchester | thirdbracket',
    description:
      'Custom websites and online stores for Manchester SMEs and startups. Built on Next.js or WordPress, SEO-ready from day one, delivered without the agency overhead.',
  },
}

// ─── Illustrations ────────────────────────────────────────────────────────────

const BespokeDesignIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-6">
    <svg viewBox="0 0 200 150" className="absolute inset-0 w-full h-full" aria-hidden>
      <GridDots cols={8} rows={6} gap={26} ox={8} oy={8} />
      {/* Bracket motifs */}
      <path
        d="M52 28 L42 28 L42 122 L52 122"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-accent-500/35 dark:text-accent-400/30"
      />
      <path
        d="M148 28 L158 28 L158 122 L148 122"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-accent-500/35 dark:text-accent-400/30"
      />
    </svg>
    {/* Stacked UI panels */}
    <div className="relative z-10 flex flex-col items-center gap-2 w-36">
      <div className="w-full h-7 rounded-lg bg-primary-100/50 dark:bg-primary-800/30 border border-primary-200/70 dark:border-primary-700/50 translate-y-1 scale-95 flex items-center px-3 gap-2">
        <div className="w-2.5 h-2.5 rounded-sm bg-accent-400/40" />
        <div className="flex-1 h-1 rounded-full bg-primary-300/30 dark:bg-primary-600/30" />
      </div>
      <div className="w-full h-7 rounded-lg bg-primary-50 dark:bg-primary-900 border border-primary-200 dark:border-primary-700 shadow-sm flex items-center px-3 gap-2 -mt-2">
        <div className="w-2.5 h-2.5 rounded-sm bg-accent-500/50" />
        <div className="flex-1 h-1 rounded-full bg-primary-200/50 dark:bg-primary-700/50" />
        <div className="w-5 h-1 rounded-full bg-accent-300/40" />
      </div>
      <div className="w-full h-9 rounded-xl bg-white dark:bg-black border border-primary-200 dark:border-primary-700 shadow-md flex items-center px-3 gap-2 -mt-2 ring-1 ring-accent-500/15">
        <div className="w-5 h-5 rounded-md bg-accent-500 dark:bg-accent-400 flex items-center justify-center flex-shrink-0">
          <RiBracesLine size={10} className="text-white dark:text-black" />
        </div>
        <div className="flex-1">
          <div className="h-1 w-12 rounded-full bg-primary-200 dark:bg-primary-700 mb-1" />
          <div className="h-1 w-8 rounded-full bg-primary-100 dark:bg-primary-800" />
        </div>
        <RiCheckLine size={11} className="text-accent-500 dark:text-accent-400" />
      </div>
    </div>
    <div className="absolute bottom-3 right-4 flex items-center gap-1 bg-primary-50 dark:bg-primary-950 border border-primary-100 dark:border-primary-800 rounded-full px-2 py-0.5">
      <span className="text-[9px] font-medium text-primary-500 dark:text-primary-400">
        No templates
      </span>
    </div>
  </div>
)

const NextJsIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-6">
    <svg viewBox="0 0 200 150" className="absolute inset-0 w-full h-full" aria-hidden>
      <ConcentricRings cx={100} cy={75} accentClass="text-primary-400" />
      {/* Speed lines */}
      <line
        x1="20"
        y1="50"
        x2="58"
        y2="50"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        className="text-accent-500/25"
      />
      <line
        x1="14"
        y1="62"
        x2="52"
        y2="62"
        stroke="currentColor"
        strokeWidth="0.7"
        strokeLinecap="round"
        className="text-accent-500/18"
      />
      <line
        x1="20"
        y1="74"
        x2="58"
        y2="74"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        className="text-accent-500/25"
      />
    </svg>
    <div className="relative z-10 flex flex-col items-center gap-4">
      <div className="w-14 h-14 rounded-2xl bg-black dark:bg-white border border-primary-200 dark:border-primary-800 shadow-md flex items-center justify-center">
        <SiNextdotjs size={28} className="text-white dark:text-black" />
      </div>
      <div className="flex flex-col gap-1.5 items-center">
        {['App Router', 'Edge Runtime', 'ISR & SSG'].map((label) => (
          <div
            key={label}
            className="flex items-center gap-1.5 bg-primary-50 dark:bg-primary-950 border border-primary-100 dark:border-primary-800 rounded-full px-2.5 py-0.5"
          >
            <RiRocketLine size={9} className="text-accent-500 dark:text-accent-400 flex-shrink-0" />
            <span className="text-[9px] font-medium text-primary-600 dark:text-primary-400">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const WordPressIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-6">
    <svg viewBox="0 0 200 150" className="absolute inset-0 w-full h-full" aria-hidden>
      <GridDots cols={7} rows={5} gap={28} ox={14} oy={14} />
    </svg>
    <div className="relative z-10 flex flex-col items-center gap-4">
      <div className="w-14 h-14 rounded-2xl bg-primary-50 dark:bg-primary-950 border border-primary-200 dark:border-primary-800 shadow-md flex items-center justify-center">
        <SiWordpress size={28} className="text-primary-700 dark:text-primary-300" />
      </div>
      <div className="flex flex-col gap-1.5 items-center">
        {['Custom themes', 'ACF integration', 'Easy to manage'].map((label) => (
          <div
            key={label}
            className="flex items-center gap-1.5 bg-primary-50 dark:bg-primary-950 border border-primary-100 dark:border-primary-800 rounded-full px-2.5 py-0.5"
          >
            <RiCheckLine size={9} className="text-accent-500 dark:text-accent-400 flex-shrink-0" />
            <span className="text-[9px] font-medium text-primary-600 dark:text-primary-400">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const EcommerceIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-6">
    <svg viewBox="0 0 200 150" className="absolute inset-0 w-full h-full" aria-hidden>
      <RadialDashes cx={100} cy={75} r1={52} r2={62} accentClass="text-accent-500" />
    </svg>
    <div className="relative z-10 flex flex-col items-center gap-3">
      <div className="w-14 h-14 rounded-2xl bg-primary-50 dark:bg-primary-950 border border-primary-200 dark:border-primary-800 shadow-md flex items-center justify-center">
        <RiShoppingCart2Line size={26} className="text-accent-500 dark:text-accent-400" />
      </div>
      {/* Mini product cards */}
      <div className="flex gap-2">
        {[1, 2].map((i) => (
          <div
            key={i}
            className="w-16 rounded-lg bg-white dark:bg-black border border-primary-100 dark:border-primary-800 p-2 shadow-sm"
          >
            <div className="w-full h-6 rounded-md bg-primary-100 dark:bg-primary-800 mb-1.5" />
            <div className="h-1 w-10 rounded-full bg-primary-200 dark:bg-primary-700 mb-1" />
            <div className="h-1.5 w-6 rounded-full bg-accent-400/60" />
          </div>
        ))}
      </div>
    </div>
  </div>
)

const OptimisationIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-6">
    <svg viewBox="0 0 200 150" className="absolute inset-0 w-full h-full" aria-hidden>
      <GridDots cols={7} rows={5} gap={28} ox={14} oy={14} />
    </svg>
    <div className="relative z-10 flex flex-col items-center gap-3 w-full max-w-[140px]">
      {/* Speed gauge bars */}
      {[
        { label: 'LCP', pct: 92, color: 'bg-green-500/70' },
        { label: 'FID', pct: 97, color: 'bg-accent-500/70' },
        { label: 'CLS', pct: 88, color: 'bg-green-400/70' },
      ].map(({ label, pct, color }) => (
        <div key={label} className="w-full flex items-center gap-2">
          <span className="text-[9px] font-mono font-medium text-primary-500 dark:text-primary-400 w-6">
            {label}
          </span>
          <div className="flex-1 h-2 rounded-full bg-primary-100 dark:bg-primary-800 overflow-hidden">
            <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
          </div>
          <span className="text-[9px] font-medium text-primary-600 dark:text-primary-400 w-5 text-right">
            {pct}
          </span>
        </div>
      ))}
      <div className="mt-1 flex items-center gap-1 bg-green-50 dark:bg-green-950/30 border border-green-200/60 dark:border-green-700/40 rounded-full px-2 py-0.5">
        <RiCheckLine size={9} className="text-green-600 dark:text-green-400" />
        <span className="text-[9px] font-medium text-green-700 dark:text-green-400">
          Core Web Vitals pass
        </span>
      </div>
    </div>
  </div>
)

const MigrationIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-6">
    <svg viewBox="0 0 200 150" className="absolute inset-0 w-full h-full" aria-hidden>
      <GridDots cols={7} rows={5} gap={28} ox={14} oy={14} />
      {/* Arrow */}
      <path
        d="M60 75 L140 75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="4 3"
        className="text-accent-500/30"
      />
      <path
        d="M132 68 L142 75 L132 82"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-accent-500/40"
      />
    </svg>
    <div className="relative z-10 flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-primary-100/70 dark:bg-primary-800/50 border border-primary-200 dark:border-primary-700 flex items-center justify-center">
        <RiServerLine size={20} className="text-primary-500 dark:text-primary-400" />
      </div>
      <div className="w-12 h-12 rounded-xl bg-black dark:bg-white border border-primary-200 dark:border-primary-800 shadow-md flex items-center justify-center">
        <SiNextdotjs size={20} className="text-white dark:text-black" />
      </div>
    </div>
    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-primary-50 dark:bg-primary-950 border border-primary-100 dark:border-primary-800 rounded-full px-2 py-0.5">
      <span className="text-[9px] font-medium text-primary-500 dark:text-primary-400">
        Zero data loss
      </span>
    </div>
  </div>
)

const RepairIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-6">
    <svg viewBox="0 0 200 150" className="absolute inset-0 w-full h-full" aria-hidden>
      <RadialDashes cx={100} cy={75} r1={48} r2={56} accentClass="text-primary-400" />
    </svg>
    <div className="relative z-10 flex flex-col items-center gap-3">
      <div className="w-14 h-14 rounded-2xl bg-primary-50 dark:bg-primary-950 border border-primary-200 dark:border-primary-800 shadow-md flex items-center justify-center relative">
        <RiToolsLine size={24} className="text-primary-700 dark:text-primary-300" />
        <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-green-500 border-2 border-white dark:border-black flex items-center justify-center">
          <RiCheckLine size={9} className="text-white" />
        </div>
      </div>
      <div className="flex flex-col gap-1 items-start">
        {['Bug diagnosed', 'Fix deployed', 'Documented'].map((s) => (
          <div key={s} className="flex items-center gap-1.5">
            <RiCheckLine size={9} className="text-green-500 flex-shrink-0" />
            <span className="text-[9px] font-medium text-primary-600 dark:text-primary-400">
              {s}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
)

// ─── Page ─────────────────────────────────────────────────────────────────────

const services = [
  {
    id: 'bespoke-web-design',
    badge: 'Design',
    title: 'Bespoke Web Design',
    description:
      'We design every website from scratch around your brand, not from a template library. The result is a site that looks and feels like yours — not like everyone else in your industry. We work within your visual identity or help you build one, crafting layouts that guide visitors toward the actions that matter.',
    features: [
      'No templates',
      'Brand-aligned layouts',
      'Mobile-first',
      'Figma to code',
      'BracketUI components',
    ],
    illustration: <BespokeDesignIllustration />,
    flip: false,
  },
  {
    id: 'bespoke-web-development',
    badge: 'Development',
    title: 'Bespoke Web Development',
    description:
      "When off-the-shelf platforms aren't enough, we build from the ground up. Custom portals, admin dashboards, booking systems, multi-step forms — whatever your business logic requires. We work exclusively in Next.js and WordPress ecosystems, so every build is fast, maintainable and built on a stack that scales.",
    features: [
      'Next.js or WordPress',
      'Custom business logic',
      'REST & CMS integration',
      'Admin panels',
      'TypeScript',
    ],
    illustration: <NextJsIllustration />,
    flip: true,
  },
  {
    id: 'wordpress-development',
    badge: 'WordPress',
    title: 'WordPress Development',
    description:
      'For businesses that need to manage their own content without needing a developer, we build clean, fast WordPress sites. No bloated themes, no unnecessary plugins. Just a well-structured CMS that you can actually use — and that ranks well because the code underneath is solid.',
    features: [
      'Custom themes',
      'ACF integration',
      'Plugin development',
      'Performance tuning',
      'WooCommerce ready',
    ],
    illustration: <WordPressIllustration />,
    flip: false,
  },
  {
    id: 'ecommerce-development',
    badge: 'Ecommerce',
    title: 'E-commerce Development',
    description:
      'We build online stores that convert. Whether you need WooCommerce on WordPress or a custom Next.js storefront, we handle everything from product catalogue structure to checkout flow. Every store ships with mobile-first design, fast load times, and the technical foundations to rank for product and category keywords.',
    features: [
      'WooCommerce',
      'Custom Next.js stores',
      'Checkout optimisation',
      'Inventory management',
      'Conversion-focused',
    ],
    illustration: <EcommerceIllustration />,
    flip: true,
  },
  {
    id: 'website-redesign',
    badge: 'Redesign',
    title: 'Website Redesign',
    description:
      "If your current site looks dated, loads slowly, or isn't converting visitors, a redesign is likely overdue. We audit what you have, keep what works, and rebuild the rest properly. Code-first approach, improved UX, faster performance, and a design that reflects where your business is today.",
    features: [
      'Full audit first',
      'Code-first rebuild',
      'UX improvements',
      'Performance gains',
      'SEO preservation',
    ],
    illustration: <BespokeDesignIllustration />,
    flip: false,
  },
  {
    id: 'website-optimisation',
    badge: 'Performance',
    title: 'Website Optimisation',
    description:
      "Slow websites lose visitors and rankings. We audit your site against Core Web Vitals, Lighthouse scores, and Google's performance benchmarks, then fix what's holding you back. From image optimisation and caching strategy to server configuration and code splitting — we address every layer.",
    features: [
      'Core Web Vitals',
      'Lighthouse audit',
      'Image optimisation',
      'Caching strategy',
      'Code splitting',
    ],
    illustration: <OptimisationIllustration />,
    flip: true,
  },
  {
    id: 'website-migration',
    badge: 'Migration',
    title: 'Website Migration',
    description:
      "Moving from an old platform to a modern stack doesn't have to be painful. We handle platform migrations with zero data loss and minimal downtime — whether you're moving from legacy CMS to WordPress, or from WordPress to Next.js. All redirects, SEO equity, and content preserved.",
    features: [
      'Zero data loss',
      'SEO equity preserved',
      'Redirect mapping',
      'Zero downtime',
      'Full documentation',
    ],
    illustration: <MigrationIllustration />,
    flip: false,
  },
  {
    id: 'website-repair',
    badge: 'Support',
    title: 'Website Repair',
    description:
      'Broken builds, plugin conflicts, layout issues, security vulnerabilities — we diagnose and fix quickly. We work on both Next.js and WordPress sites, document what we find and what we changed, and leave the site in better shape than we found it.',
    features: [
      'Next.js & WordPress',
      'Security fixes',
      'Plugin conflicts',
      'Deployment issues',
      'Full documentation',
    ],
    illustration: <RepairIllustration />,
    flip: true,
  },
]

const quickItems = services.map((s) => ({
  icon: [
    RiLayout2Line,
    RiCodeLine,
    SiWordpress as any,
    RiShoppingCart2Line,
    RiRefreshLine,
    RiSpeedLine,
    RiExchangeLine,
    RiToolsLine,
  ][services.indexOf(s)],
  title: s.title,
  href: `/services/web-development#${s.id}`,
  features: s.features.slice(0, 3),
}))

export default function WebDevelopmentPage() {
  return (
    <section>
      <PageHeader
        title="Website & Ecommerce Development"
        description="Bespoke websites and online stores for Manchester businesses. Built on Next.js or WordPress, SEO-ready from day one, delivered without the agency overhead."
      />

      <Bracket fluid centered padding="small">
        <div className="md:max-w-screen-xl mx-auto">
          {services.map((service, i) => (
            <ServiceSection key={service.id} {...service} flip={i % 2 !== 0} />
          ))}

          <QuickServicesStrip title="All Web & Ecommerce Services" items={quickItems} />
        </div>
      </Bracket>

      <Bracket fluid centered padding="small">
        <div className="md:max-w-screen-xl mx-auto">
          <CTASection
            title="Ready to Build Your Website?"
            description="We build brands, not just websites. SEO-first, agency-quality work without the agency price tag."
            primary={{ label: 'Start a project', href: '/contact' }}
            secondary={{ label: 'See our work', href: '/work' }}
          />
        </div>
      </Bracket>
    </section>
  )
}
