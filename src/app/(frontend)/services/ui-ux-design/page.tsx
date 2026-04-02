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
  RiBriefcaseLine,
  RiShieldLine,
  RiPrinterLine,
  RiInstagramLine,
  RiImageLine,
  RiFilmLine,
  RiPaletteLine,
  RiCheckLine,
  RiFontSize,
  RiLayoutLine,
  RiCameraLine,
  RiScissorsCutLine,
} from 'react-icons/ri'

export const metadata: Metadata = {
  title: 'Branding & Creative Design Manchester | thirdbracket',
  description:
    'Brand strategy, identity design, print, social media branding, illustration and video editing for Manchester businesses. Agency-quality creative without the agency overhead.',
  openGraph: {
    title: 'Branding & Creative Design Manchester | thirdbracket',
    description:
      'Distinctive brand identities and creative design for Manchester SMEs and startups. Brand strategy, logo, print, social media, illustrations and video editing.',
  },
}

// ─── Illustrations ────────────────────────────────────────────────────────────

const BrandStrategyIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-6">
    <svg viewBox="0 0 200 150" className="absolute inset-0 w-full h-full" aria-hidden>
      <ConcentricRings cx={100} cy={75} accentClass="text-accent-500" />
    </svg>
    <div className="relative z-10 flex flex-col items-center gap-3">
      <div className="w-14 h-14 rounded-2xl bg-primary-50 dark:bg-primary-950 border border-primary-200 dark:border-primary-800 shadow-md flex items-center justify-center">
        <RiBriefcaseLine size={26} className="text-accent-500 dark:text-accent-400" />
      </div>
      <div className="flex flex-col gap-1 items-center">
        {['Positioning', 'Audience', 'Messaging', 'Voice'].map((s) => (
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

const BrandIdentityIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-6">
    <svg viewBox="0 0 200 150" className="absolute inset-0 w-full h-full" aria-hidden>
      <GridDots cols={7} rows={5} gap={28} ox={14} oy={14} />
    </svg>
    <div className="relative z-10 flex flex-col items-center gap-3 w-full max-w-[150px]">
      {/* Colour swatches */}
      <div className="flex gap-1.5">
        <div className="w-8 h-8 rounded-lg bg-primary-900 dark:bg-primary-100 border border-primary-200 dark:border-primary-700" />
        <div className="w-8 h-8 rounded-lg bg-accent-500 border border-accent-400" />
        <div className="w-8 h-8 rounded-lg bg-primary-200 dark:bg-primary-700 border border-primary-300 dark:border-primary-600" />
        <div className="w-8 h-8 rounded-lg bg-white dark:bg-black border border-primary-200 dark:border-primary-700" />
      </div>
      {/* Type sample */}
      <div className="w-full bg-white dark:bg-black rounded-lg border border-primary-100 dark:border-primary-800 p-2 shadow-sm">
        <div className="h-3 w-20 rounded-sm bg-primary-800 dark:bg-primary-200 mb-1" />
        <div className="h-2 w-14 rounded-sm bg-primary-300 dark:bg-primary-600" />
      </div>
      <div className="flex items-center gap-1 bg-accent-50 dark:bg-accent-950/50 border border-accent-200/60 dark:border-accent-700/40 rounded-full px-2 py-0.5">
        <RiPaletteLine size={9} className="text-accent-600 dark:text-accent-400" />
        <span className="text-[9px] font-medium text-accent-700 dark:text-accent-300">
          Brand system
        </span>
      </div>
    </div>
  </div>
)

const PrintIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-6">
    <svg viewBox="0 0 200 150" className="absolute inset-0 w-full h-full" aria-hidden>
      <GridDots cols={7} rows={5} gap={28} ox={14} oy={14} />
    </svg>
    <div className="relative z-10 flex items-end gap-2">
      {/* Business card */}
      <div className="w-20 h-12 rounded-lg bg-primary-900 dark:bg-primary-100 border border-primary-700 dark:border-primary-300 shadow-md p-2 flex flex-col justify-between">
        <div className="w-6 h-1.5 rounded-sm bg-accent-500/80" />
        <div>
          <div className="w-12 h-1 rounded-sm bg-white/40 dark:bg-black/40 mb-0.5" />
          <div className="w-8 h-0.5 rounded-sm bg-white/25 dark:bg-black/25" />
        </div>
      </div>
      {/* Flyer */}
      <div className="w-14 h-20 rounded-lg bg-white dark:bg-black border border-primary-200 dark:border-primary-700 shadow-sm p-2 flex flex-col gap-1.5">
        <div className="w-full h-8 rounded-md bg-primary-100 dark:bg-primary-800" />
        <div className="w-full h-1 rounded-sm bg-primary-200 dark:bg-primary-700" />
        <div className="w-8 h-1 rounded-sm bg-primary-100 dark:bg-primary-800" />
        <div className="w-5 h-2.5 rounded-sm bg-accent-500/60 mt-auto" />
      </div>
    </div>
  </div>
)

const SocialBrandingIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-6">
    <svg viewBox="0 0 200 150" className="absolute inset-0 w-full h-full" aria-hidden>
      <RadialDashes cx={100} cy={75} r1={50} r2={60} accentClass="text-accent-500" />
    </svg>
    <div className="relative z-10 flex flex-col items-center gap-3 w-full max-w-[140px]">
      {/* Social grid */}
      <div className="grid grid-cols-3 gap-1.5">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className={`w-10 h-10 rounded-lg border ${
              i === 0
                ? 'bg-accent-500/15 border-accent-400/40'
                : i === 4
                  ? 'bg-primary-100 dark:bg-primary-800 border-primary-200 dark:border-primary-700'
                  : 'bg-primary-50 dark:bg-primary-900 border-primary-100 dark:border-primary-800'
            } flex items-center justify-center`}
          >
            {i === 0 && (
              <RiInstagramLine size={16} className="text-accent-500 dark:text-accent-400" />
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-1 bg-primary-50 dark:bg-primary-950 border border-primary-100 dark:border-primary-800 rounded-full px-2 py-0.5">
        <span className="text-[9px] font-medium text-primary-500 dark:text-primary-400">
          Consistent across platforms
        </span>
      </div>
    </div>
  </div>
)

const IllustrationIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-6">
    <svg viewBox="0 0 200 150" className="absolute inset-0 w-full h-full" aria-hidden>
      <GridDots cols={7} rows={5} gap={28} ox={14} oy={14} />
      {/* Decorative shapes */}
      <circle
        cx={60}
        cy={55}
        r="12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-accent-500/20"
      />
      <rect
        x="130"
        y="45"
        width="20"
        height="20"
        rx="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-primary-400/20"
      />
      <path
        d="M80 100 L100 75 L120 100 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-accent-500/15"
      />
    </svg>
    <div className="relative z-10 flex flex-col items-center gap-3">
      <div className="w-14 h-14 rounded-2xl bg-primary-50 dark:bg-primary-950 border border-primary-200 dark:border-primary-800 shadow-md flex items-center justify-center">
        <RiImageLine size={26} className="text-accent-500 dark:text-accent-400" />
      </div>
      <div className="flex gap-2">
        {['Icons', 'SVG', 'Custom'].map((s) => (
          <span
            key={s}
            className="text-[9px] font-medium px-1.5 py-0.5 rounded-md bg-primary-50 dark:bg-primary-950 border border-primary-100 dark:border-primary-800 text-primary-500 dark:text-primary-400"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  </div>
)

const VideoIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-6">
    <svg viewBox="0 0 200 150" className="absolute inset-0 w-full h-full" aria-hidden>
      <GridDots cols={7} rows={5} gap={28} ox={14} oy={14} />
    </svg>
    <div className="relative z-10 flex flex-col items-center gap-3">
      {/* Video timeline mockup */}
      <div className="w-36 h-20 rounded-xl bg-black border border-primary-200 dark:border-primary-700 shadow-md overflow-hidden relative flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 to-primary-800/30" />
        <div className="relative w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
          <div className="w-0 h-0 border-t-[5px] border-b-[5px] border-l-[9px] border-transparent border-l-white ml-0.5" />
        </div>
      </div>
      {/* Timeline bar */}
      <div className="w-36 h-4 rounded-lg bg-primary-50 dark:bg-primary-950 border border-primary-100 dark:border-primary-800 overflow-hidden relative px-1.5 flex items-center gap-0.5">
        {Array.from({ length: 18 }).map((_, i) => (
          <div
            key={i}
            className={`flex-1 h-2 rounded-sm ${i < 7 ? 'bg-accent-500/60 dark:bg-accent-400/50' : 'bg-primary-200 dark:bg-primary-700'}`}
          />
        ))}
      </div>
      <div className="flex items-center gap-1 bg-primary-50 dark:bg-primary-950 border border-primary-100 dark:border-primary-800 rounded-full px-2 py-0.5">
        <RiScissorsCutLine size={9} className="text-primary-500 dark:text-primary-400" />
        <span className="text-[9px] font-medium text-primary-500 dark:text-primary-400">
          Social-ready cuts
        </span>
      </div>
    </div>
  </div>
)

// ─── Page ─────────────────────────────────────────────────────────────────────

const services = [
  {
    id: 'brand-strategy',
    badge: 'Strategy',
    title: 'Brand Strategy',
    description:
      "Before anything gets designed, we need to know who you are, who you're talking to, and what makes you worth choosing. Brand strategy answers those questions. We define your positioning, map your audience, and build a messaging framework that every piece of creative work flows from. The result is a brand that feels coherent and intentional, not assembled.",
    features: [
      'Positioning framework',
      'Audience definition',
      'Competitor analysis',
      'Messaging framework',
      'Brand voice',
    ],
    illustration: <BrandStrategyIllustration />,
    flip: false,
  },
  {
    id: 'brand-identity',
    badge: 'Identity',
    title: 'Brand Identity',
    description:
      "A brand identity is more than a logo. It's the complete visual system — logo, colour palette, typography, icon set, and the rules for how they work together. We design identities built for longevity, not trends. Everything is delivered in formats ready for web, print, and digital use, alongside clear usage guidelines.",
    features: ['Logo design', 'Colour system', 'Typography', 'Icon set', 'Usage guidelines'],
    illustration: <BrandIdentityIllustration />,
    flip: true,
  },
  {
    id: 'print-signage',
    badge: 'Print',
    title: 'Print & Signage Design',
    description:
      'Physical materials need the same care as digital ones. Business cards, flyers, brochures, banners, signage, packaging — we design everything to the same standard as your website. Print-ready files, correct colour profiles, bleed and margin handled properly. No back-and-forth with the printer.',
    features: [
      'Business cards',
      'Flyers & brochures',
      'Banners & signage',
      'Print-ready files',
      'CMYK profiles',
    ],
    illustration: <PrintIllustration />,
    flip: false,
  },
  {
    id: 'social-media-branding',
    badge: 'Social',
    title: 'Social Media Branding',
    description:
      'Your social media presence should look like your brand, not like a template from a free tool. We design profile assets, post templates, story formats, and banner graphics for every platform you use — so every touchpoint looks consistent and intentional. We can also provide a content kit so your team can create on-brand posts without a designer.',
    features: [
      'Profile assets',
      'Post templates',
      'Story formats',
      'Banner graphics',
      'Content kit',
    ],
    illustration: <SocialBrandingIllustration />,
    flip: true,
  },
  {
    id: 'illustration-graphics',
    badge: 'Illustration',
    title: 'Illustration & Graphics',
    description:
      'Custom illustrations and graphic assets that are distinctly yours. We create icon sets, custom illustrations for web and print, infographics, and decorative SVG assets. Particularly useful for web projects where generic stock imagery would undermine the quality of the design around it.',
    features: [
      'Custom illustrations',
      'Icon sets',
      'SVG assets',
      'Infographics',
      'Web & print formats',
    ],
    illustration: <IllustrationIllustration />,
    flip: false,
  },
  {
    id: 'video-editing',
    badge: 'Video',
    title: 'Video Editing',
    description:
      'Footage editing and social-ready video production. We work with your raw footage — brand videos, product clips, testimonials, behind-the-scenes content — and turn it into properly paced, well-cut output ready to publish. Social formats, captions, and aspect ratios for every platform handled.',
    features: [
      'Footage editing',
      'Social formats',
      'Captions',
      'Colour grade',
      'Multi-platform cuts',
    ],
    illustration: <VideoIllustration />,
    flip: true,
  },
]

const quickIcons = [
  RiBriefcaseLine,
  RiShieldLine,
  RiPrinterLine,
  RiInstagramLine,
  RiImageLine,
  RiFilmLine,
]

const quickItems = services.map((s, i) => ({
  icon: quickIcons[i],
  title: s.title,
  href: `/services/ui-ux-design#${s.id}`,
  features: s.features.slice(0, 3),
}))

export default function BrandingCreativePage() {
  return (
    <section>
      <PageHeader
        title="Branding & Creative Design"
        description="Identity systems that mean something. From brand strategy to every visual touchpoint, built for consistency and recognition across Manchester and beyond."
      />

      <Bracket fluid centered padding="small">
        <div className="md:max-w-screen-xl mx-auto">
          {services.map((service, i) => (
            <ServiceSection key={service.id} {...service} flip={i % 2 !== 0} />
          ))}

          <QuickServicesStrip title="All Branding & Creative Services" items={quickItems} />
        </div>
      </Bracket>

      <Bracket fluid centered padding="small">
        <div className="md:max-w-screen-xl mx-auto">
          <CTASection
            title="Ready to Build a Brand That Stands Out?"
            description="We define who you are before we design anything. Strategy-first, identity-led, built to last."
            primary={{ label: 'Start a project', href: '/contact' }}
            secondary={{ label: 'See our work', href: '/work' }}
          />
        </div>
      </Bracket>
    </section>
  )
}
