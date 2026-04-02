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
  RiSearchLine,
  RiMapPinLine,
  RiCodeLine,
  RiGlobalLine,
  RiMoneyDollarCircleLine,
  RiStoreLine,
  RiDatabase2Line,
  RiShoppingBag2Line,
  RiBarChartLine,
  RiCheckLine,
} from 'react-icons/ri'
import { SiWordpress, SiGoogleanalytics, SiGooglesearchconsole } from 'react-icons/si'

export const metadata: Metadata = {
  title: 'SEO Services Manchester | SEO & Growth | thirdbracket',
  description:
    'SEO services for Manchester businesses. WordPress SEO, WooCommerce SEO, Local SEO, GEO, and full digital foundation setup. Technical SEO built into every website we deliver.',
  openGraph: {
    title: 'SEO Services Manchester | thirdbracket',
    description:
      'Organic growth that compounds. Manchester SEO agency specialising in WordPress, WooCommerce, Local SEO and GEO. Technical SEO-first on every build.',
  },
}

// ─── Illustrations ────────────────────────────────────────────────────────────

const WordPressSEOIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-6">
    <svg viewBox="0 0 200 150" className="absolute inset-0 w-full h-full" aria-hidden>
      <GridDots cols={7} rows={5} gap={28} ox={14} oy={14} />
    </svg>
    <div className="relative z-10 flex flex-col items-center gap-3">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-950 border border-primary-200 dark:border-primary-800 flex items-center justify-center shadow-md">
          <SiWordpress size={22} className="text-primary-700 dark:text-primary-300" />
        </div>
        <div className="flex flex-col gap-1">
          <RiCheckLine size={12} className="text-accent-500 dark:text-accent-400" />
          <RiSearchLine size={12} className="text-primary-500 dark:text-primary-400" />
        </div>
        <div className="w-10 h-10 rounded-xl bg-white dark:bg-black border border-primary-100 dark:border-primary-800 shadow-sm flex items-center justify-center">
          <RiBarChartLine size={18} className="text-accent-500 dark:text-accent-400" />
        </div>
      </div>
      <div className="flex flex-col gap-1 items-center mt-1">
        {['Schema markup', 'Clean architecture', 'Fast load times'].map((s) => (
          <div
            key={s}
            className="flex items-center gap-1.5 bg-primary-50 dark:bg-primary-950 border border-primary-100 dark:border-primary-800 rounded-full px-2.5 py-0.5"
          >
            <RiCheckLine size={9} className="text-accent-500 dark:text-accent-400 flex-shrink-0" />
            <span className="text-[9px] font-medium text-primary-600 dark:text-primary-400">
              {s}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const LocalSEOIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-6">
    <svg viewBox="0 0 200 150" className="absolute inset-0 w-full h-full" aria-hidden>
      <ConcentricRings cx={100} cy={75} accentClass="text-accent-500" />
    </svg>
    <div className="relative z-10 flex flex-col items-center gap-3">
      <div className="w-14 h-14 rounded-2xl bg-primary-50 dark:bg-primary-950 border border-primary-200 dark:border-primary-800 shadow-md flex items-center justify-center relative">
        <RiMapPinLine size={26} className="text-accent-500 dark:text-accent-400" />
        <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-accent-500 dark:bg-accent-400 border-2 border-white dark:border-black flex items-center justify-center">
          <span className="text-[7px] font-bold text-white dark:text-black">#1</span>
        </div>
      </div>
      <div className="flex items-center gap-1 bg-accent-50 dark:bg-accent-950/50 border border-accent-200/60 dark:border-accent-700/40 rounded-full px-2 py-0.5">
        <span className="w-1.5 h-1.5 rounded-full bg-accent-500 dark:bg-accent-400" />
        <span className="text-[9px] font-medium text-accent-700 dark:text-accent-300">
          Manchester
        </span>
      </div>
    </div>
  </div>
)

const GEOIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-6">
    <svg viewBox="0 0 200 150" className="absolute inset-0 w-full h-full" aria-hidden>
      <GridDots cols={7} rows={5} gap={28} ox={14} oy={14} />
    </svg>
    <div className="relative z-10 flex flex-col items-center gap-3 w-full max-w-[150px]">
      <div className="w-14 h-14 rounded-2xl bg-primary-50 dark:bg-primary-950 border border-primary-200 dark:border-primary-800 shadow-md flex items-center justify-center">
        <RiGlobalLine size={26} className="text-primary-700 dark:text-primary-300" />
      </div>
      {/* AI chat bubbles */}
      <div className="w-full space-y-1.5">
        <div className="bg-primary-100 dark:bg-primary-800 rounded-lg rounded-tl-sm px-2.5 py-1.5 self-start">
          <div className="h-1 w-16 rounded-full bg-primary-400/40 dark:bg-primary-500/40 mb-1" />
          <div className="h-1 w-10 rounded-full bg-primary-400/30 dark:bg-primary-500/30" />
        </div>
        <div className="bg-accent-50 dark:bg-accent-950/60 border border-accent-200/50 dark:border-accent-700/30 rounded-lg rounded-tr-sm px-2.5 py-1.5 ml-auto w-24">
          <div className="flex items-center gap-1 mb-0.5">
            <RiCheckLine size={8} className="text-accent-500 dark:text-accent-400" />
            <span className="text-[8px] font-medium text-accent-700 dark:text-accent-300">
              thirdbracket
            </span>
          </div>
          <div className="h-1 w-12 rounded-full bg-accent-300/40" />
        </div>
      </div>
    </div>
  </div>
)

const PPCIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-6">
    <svg viewBox="0 0 200 150" className="absolute inset-0 w-full h-full" aria-hidden>
      <RadialDashes cx={100} cy={75} r1={50} r2={60} accentClass="text-accent-500" />
    </svg>
    <div className="relative z-10 flex flex-col items-center gap-3 w-full max-w-[140px]">
      {/* Bar chart */}
      <div className="flex items-end gap-1.5 h-16">
        {[40, 55, 48, 70, 62, 85].map((h, i) => (
          <div
            key={i}
            className={`w-4 rounded-t-sm ${i === 5 ? 'bg-accent-500/80 dark:bg-accent-400/70' : 'bg-primary-200 dark:bg-primary-700'}`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="flex items-center gap-1.5 bg-accent-50 dark:bg-accent-950/50 border border-accent-200/60 dark:border-accent-700/40 rounded-full px-2 py-0.5">
        <RiMoneyDollarCircleLine size={9} className="text-accent-600 dark:text-accent-400" />
        <span className="text-[9px] font-medium text-accent-700 dark:text-accent-300">
          ROI optimised
        </span>
      </div>
    </div>
  </div>
)

const GoogleBusinessIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-6">
    <svg viewBox="0 0 200 150" className="absolute inset-0 w-full h-full" aria-hidden>
      <GridDots cols={7} rows={5} gap={28} ox={14} oy={14} />
    </svg>
    <div className="relative z-10 flex flex-col items-center gap-3">
      <div className="w-14 h-14 rounded-2xl bg-primary-50 dark:bg-primary-950 border border-primary-200 dark:border-primary-800 shadow-md flex items-center justify-center">
        <RiStoreLine size={26} className="text-accent-500 dark:text-accent-400" />
      </div>
      {/* Star rating */}
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <svg key={i} className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="text-[9px] font-medium text-primary-500 dark:text-primary-400 ml-1">
          5.0
        </span>
      </div>
    </div>
  </div>
)

const DigitalFoundationIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-6">
    <svg viewBox="0 0 200 150" className="absolute inset-0 w-full h-full" aria-hidden>
      <GridDots cols={7} rows={5} gap={28} ox={14} oy={14} />
    </svg>
    <div className="relative z-10 flex flex-col items-center gap-2">
      <div className="flex gap-2">
        <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-950 border border-primary-100 dark:border-primary-800 flex items-center justify-center shadow-sm">
          <SiGoogleanalytics size={16} className="text-primary-600 dark:text-primary-400" />
        </div>
        <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-950 border border-primary-100 dark:border-primary-800 flex items-center justify-center shadow-sm">
          <SiGooglesearchconsole size={16} className="text-primary-600 dark:text-primary-400" />
        </div>
        <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-950 border border-primary-100 dark:border-primary-800 flex items-center justify-center shadow-sm">
          <RiDatabase2Line size={16} className="text-primary-600 dark:text-primary-400" />
        </div>
      </div>
      <div className="flex flex-col gap-1 items-center">
        {['GA4 configured', 'Search Console linked', 'Branded email'].map((s) => (
          <div key={s} className="flex items-center gap-1.5">
            <RiCheckLine size={9} className="text-accent-500 dark:text-accent-400 flex-shrink-0" />
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
    id: 'wordpress-seo',
    badge: 'WordPress',
    title: 'WordPress SEO',
    description:
      'Most WordPress sites underperform in search not because of weak content, but because of weak foundations. We fix that — proper site architecture, clean URL structure, schema markup, XML sitemaps, meta handling, and Core Web Vitals optimisation. Every WordPress site we build ships SEO-ready by default.',
    features: [
      'Site architecture',
      'Schema markup',
      'XML sitemaps',
      'Meta optimisation',
      'Core Web Vitals',
    ],
    illustration: <WordPressSEOIllustration />,
    flip: false,
  },
  {
    id: 'woocommerce-seo',
    badge: 'WooCommerce',
    title: 'WooCommerce SEO',
    description:
      'Ecommerce SEO is different from blog SEO. Product pages, category pages, faceted navigation, duplicate content — WooCommerce creates all of these challenges. We handle product schema, category keyword targeting, breadcrumb structure, and pagination correctly so your store ranks for the searches that actually convert.',
    features: [
      'Product schema',
      'Category targeting',
      'Breadcrumb structure',
      'Faceted nav handling',
      'Conversion focus',
    ],
    illustration: <WordPressSEOIllustration />,
    flip: true,
  },
  {
    id: 'custom-ecommerce-seo',
    badge: 'Custom Ecommerce',
    title: 'Custom Ecommerce SEO',
    description:
      'For Next.js-powered stores, SEO needs to be built into the architecture from the start — not bolted on after launch. We handle server-side rendering strategy, dynamic metadata generation, structured data implementation, and performance optimisation so your custom store competes from day one.',
    features: [
      'SSR strategy',
      'Dynamic metadata',
      'Structured data',
      'Performance-first',
      'Crawl-friendly',
    ],
    illustration: <GEOIllustration />,
    flip: false,
  },
  {
    id: 'local-seo',
    badge: 'Local',
    title: 'Local SEO',
    description:
      'For Manchester businesses, showing up in local search is often the highest-value SEO investment you can make. We optimise your Google Business profile, build consistent local citations, create location-specific landing pages, and target the exact keywords your local customers are typing.',
    features: [
      'Google Business',
      'Local citations',
      'Location pages',
      'Map pack targeting',
      'Review management',
    ],
    illustration: <LocalSEOIllustration />,
    flip: true,
  },
  {
    id: 'geo',
    badge: 'GEO',
    title: 'Generative Engine Optimisation',
    description:
      "Search is changing. AI-powered answers — ChatGPT, Perplexity, Google AI Overviews — now surface before traditional results for many queries. GEO is the practice of structuring your content so it's cited by these systems. We help you position your business as the authoritative answer in your market.",
    features: [
      'AI citation strategy',
      'Answer-focused content',
      'Entity optimisation',
      'Structured Q&A',
      'Authority signals',
    ],
    illustration: <GEOIllustration />,
    flip: false,
  },
  {
    id: 'seo-ppc',
    badge: 'SEO & PPC',
    title: 'SEO & PPC Combined',
    description:
      'Organic SEO compounds over time but takes months. PPC generates traffic immediately but costs money every click. The strongest strategy uses both — PPC to fill the gap while SEO builds, and SEO data to improve PPC targeting. We align both channels around your actual business goals.',
    features: [
      'Google Ads',
      'Keyword alignment',
      'Landing page sync',
      'Bid strategy',
      'Conversion tracking',
    ],
    illustration: <PPCIllustration />,
    flip: true,
  },
  {
    id: 'google-business',
    badge: 'Google',
    title: 'Google Business Setup',
    description:
      'Your Google Business profile is often the first thing a potential customer sees. We set it up properly — all categories, attributes, services, and photos configured. We also help you build a consistent review strategy and keep the profile active with posts and updates that signal trust to Google.',
    features: [
      'Full profile setup',
      'Category optimisation',
      'Photo strategy',
      'Review system',
      'Regular posts',
    ],
    illustration: <GoogleBusinessIllustration />,
    flip: false,
  },
  {
    id: 'digital-foundation',
    badge: 'Setup',
    title: 'Digital Foundation',
    description:
      "Before any SEO work can succeed, the measurement and technical infrastructure needs to be correct. We configure GA4, Google Search Console, and GTag properly — so you know what's actually happening on your site. We also set up branded email with SPF/DKIM/DMARC and automated review collection so your online reputation builds passively.",
    features: ['GA4 setup', 'Search Console', 'GTag / GTM', 'Branded email', 'Review automation'],
    illustration: <DigitalFoundationIllustration />,
    flip: true,
  },
]

const quickItems = services.map((s, i) => ({
  icon: [
    SiWordpress as any,
    RiShoppingBag2Line,
    RiCodeLine,
    RiMapPinLine,
    RiGlobalLine,
    RiMoneyDollarCircleLine,
    RiStoreLine,
    RiDatabase2Line,
  ][i],
  title: s.title,
  href: `/services/digital-marketing#${s.id}`,
  features: s.features.slice(0, 3),
}))

export default function DigitalMarketingPage() {
  return (
    <section>
      <PageHeader
        title="SEO & Growth Services"
        description="Organic growth that compounds. We build the technical and content foundation that gets Manchester businesses found on Google."
      />

      <Bracket fluid centered padding="small">
        <div className="md:max-w-screen-xl mx-auto">
          {services.map((service, i) => (
            <ServiceSection key={service.id} {...service} flip={i % 2 !== 0} />
          ))}

          <QuickServicesStrip title="All SEO & Growth Services" items={quickItems} />
        </div>
      </Bracket>

      <Bracket fluid centered padding="small">
        <div className="md:max-w-screen-xl mx-auto">
          <CTASection
            title="Ready to Grow Your Rankings?"
            description="SEO-first from day one. Every site we build ships with the technical foundations your rankings need."
            primary={{ label: 'Start a project', href: '/contact' }}
            secondary={{ label: 'See our work', href: '/work' }}
          />
        </div>
      </Bracket>
    </section>
  )
}
