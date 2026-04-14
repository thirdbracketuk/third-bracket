'use client'

import { Search } from '@/search/Component'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  RiCheckLine,
  RiArrowRightLine,
  RiMapPinLine,
  RiStarLine,
  RiAwardLine,
  RiTeamLine,
  RiSearchLine,
  RiShoppingCart2Line,
  RiBriefcaseLine,
  RiRocketLine,
  RiMoneyPoundCircleLine,
  RiBarChartLine,
  RiShieldCheckLine,
  RiLightbulbLine,
  RiToolsLine,
  RiGlobalLine,
} from 'react-icons/ri'
import { SiNextdotjs, SiWordpress, SiElementor, SiGoogleanalytics } from 'react-icons/si'
import image from 'next/image'

// ─── Inline TB mark ───────────────────────────────────────────────────────────
const TBMark = ({ size = 28, className = '' }: { size?: number; className?: string }) => (
  <svg
    viewBox="0 0 800 800"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
    aria-hidden
  >
    <path d="m56.332 0c-31.266 0.28956-56.33 25.554-56.33 56.888v686.22c0 31.343 25.112 56.615 56.387 56.89h576.27l-335.33-160.72v-478.55l335.33-160.72zm743.62 56.442-363.4 183.22 1.3358 322.17 362.11 181.73v-685.72c-0.01-0.46391 0-0.928 0-1.3891z" />
  </svg>
)

// ─── Hero illustration ────────────────────────────────────────────────────────
// Concept: Manchester skyline outline (Beetham Tower, CIS Tower simplified)
// with a grid overlay and organic growth lines connecting to brand icons
const ManchesterIllustration = () => (
  <div className="w-full h-full flex items-center justify-center select-none" aria-hidden>
    <svg viewBox="0 0 420 280" className="w-full h-full" fill="none">
      {/* Dot grid */}
      {Array.from({ length: 15 }).map((_, col) =>
        Array.from({ length: 10 }).map((_, row) => (
          <circle
            key={`${col}-${row}`}
            cx={14 + col * 28}
            cy={14 + row * 28}
            r="1"
            className="fill-primary-300/20 dark:fill-primary-700/20"
          />
        )),
      )}

      {/* Manchester skyline — simplified geometric silhouette */}
      {/* Ground line */}
      <line
        x1="20"
        y1="200"
        x2="400"
        y2="200"
        className="stroke-primary-200 dark:stroke-primary-800"
        strokeWidth="1"
      />

      {/* Buildings — left cluster */}
      <rect
        x="30"
        y="155"
        width="18"
        height="45"
        rx="1"
        className="fill-primary-100 dark:fill-primary-900 stroke-primary-200 dark:stroke-primary-800"
        strokeWidth="0.75"
      />
      <rect
        x="52"
        y="140"
        width="22"
        height="60"
        rx="1"
        className="fill-primary-100 dark:fill-primary-900 stroke-primary-200 dark:stroke-primary-800"
        strokeWidth="0.75"
      />
      {/* Beetham Tower (tallest) */}
      <rect
        x="80"
        y="80"
        width="16"
        height="120"
        rx="1"
        className="fill-primary-50 dark:fill-primary-950 stroke-primary-300 dark:stroke-primary-700"
        strokeWidth="1"
      />
      <rect
        x="82"
        y="78"
        width="12"
        height="6"
        rx="0.5"
        className="fill-primary-200 dark:fill-primary-800"
      />
      {/* Windows on Beetham */}
      {[90, 102, 114, 126, 138, 150, 162].map((y) => (
        <g key={y}>
          <rect
            x="83"
            y={y}
            width="4"
            height="5"
            rx="0.5"
            className="fill-primary-200/60 dark:fill-primary-700/60"
          />
          <rect
            x="89"
            y={y}
            width="4"
            height="5"
            rx="0.5"
            className="fill-primary-200/60 dark:fill-primary-700/60"
          />
        </g>
      ))}

      {/* Mid cluster */}
      <rect
        x="102"
        y="130"
        width="20"
        height="70"
        rx="1"
        className="fill-primary-100 dark:fill-primary-900 stroke-primary-200 dark:stroke-primary-800"
        strokeWidth="0.75"
      />
      <rect
        x="126"
        y="110"
        width="24"
        height="90"
        rx="1"
        className="fill-primary-100 dark:fill-primary-900 stroke-primary-200 dark:stroke-primary-800"
        strokeWidth="0.75"
      />
      {/* CIS Tower style */}
      <rect
        x="155"
        y="90"
        width="18"
        height="110"
        rx="1"
        className="fill-primary-50 dark:fill-primary-950 stroke-primary-300 dark:stroke-primary-700"
        strokeWidth="1"
      />
      <rect
        x="157"
        y="88"
        width="14"
        height="8"
        className="fill-primary-200 dark:fill-primary-800"
      />

      {/* Right cluster */}
      <rect
        x="180"
        y="145"
        width="20"
        height="55"
        rx="1"
        className="fill-primary-100 dark:fill-primary-900 stroke-primary-200 dark:stroke-primary-800"
        strokeWidth="0.75"
      />
      <rect
        x="205"
        y="120"
        width="22"
        height="80"
        rx="1"
        className="fill-primary-100 dark:fill-primary-900 stroke-primary-200 dark:stroke-primary-800"
        strokeWidth="0.75"
      />
      <rect
        x="232"
        y="155"
        width="16"
        height="45"
        rx="1"
        className="fill-primary-100 dark:fill-primary-900 stroke-primary-200 dark:stroke-primary-800"
        strokeWidth="0.75"
      />
      <rect
        x="252"
        y="135"
        width="18"
        height="65"
        rx="1"
        className="fill-primary-100 dark:fill-primary-900 stroke-primary-200 dark:stroke-primary-800"
        strokeWidth="0.75"
      />
      <rect
        x="275"
        y="165"
        width="14"
        height="35"
        rx="1"
        className="fill-primary-100 dark:fill-primary-900 stroke-primary-200 dark:stroke-primary-800"
        strokeWidth="0.75"
      />

      {/* Growth lines from city rising up-right */}
      <path
        d="M160 140 Q260 100 320 60"
        className="stroke-accent-500/40 dark:stroke-accent-400/30"
        strokeWidth="1.5"
        strokeDasharray="4 3"
        strokeLinecap="round"
      />
      <path
        d="M140 150 Q240 110 310 80"
        className="stroke-primary-400/30 dark:stroke-primary-600/30"
        strokeWidth="1"
        strokeDasharray="3 4"
        strokeLinecap="round"
      />

      {/* Floating output icons — top right */}
      {/* Website icon */}
      <g>
        <rect
          x="294"
          y="30"
          width="44"
          height="44"
          rx="10"
          className="fill-primary-50 dark:fill-primary-950 stroke-primary-200 dark:stroke-primary-800"
          strokeWidth="1"
        />
        <rect
          x="302"
          y="40"
          width="28"
          height="20"
          rx="3"
          className="fill-none stroke-primary-600 dark:stroke-primary-400"
          strokeWidth="1.2"
        />
        <line
          x1="302"
          y1="46"
          x2="330"
          y2="46"
          className="stroke-primary-400 dark:stroke-primary-600"
          strokeWidth="0.75"
        />
        <rect
          x="309"
          y="62"
          width="6"
          height="3"
          rx="1"
          className="fill-primary-300 dark:fill-primary-700"
        />
        <line
          x1="305"
          y1="67"
          x2="325"
          y2="67"
          className="stroke-primary-200 dark:stroke-primary-800"
          strokeWidth="1"
        />
      </g>

      {/* Ranking badge */}
      <g>
        <rect
          x="348"
          y="44"
          width="56"
          height="34"
          rx="8"
          className="fill-accent-50 dark:fill-accent-950/70 stroke-accent-200 dark:stroke-accent-700/50"
          strokeWidth="1"
        />
        <text
          x="376"
          y="57"
          textAnchor="middle"
          fontSize="9"
          fontWeight="700"
          className="fill-accent-700 dark:fill-accent-300"
        >
          #1
        </text>
        <text
          x="376"
          y="69"
          textAnchor="middle"
          fontSize="7"
          className="fill-accent-600 dark:fill-accent-400"
        >
          Manchester
        </text>
      </g>

      {/* SEO upward arrow */}
      <g>
        <rect
          x="310"
          y="88"
          width="36"
          height="36"
          rx="8"
          className="fill-primary-50 dark:fill-primary-950 stroke-primary-200 dark:stroke-primary-800"
          strokeWidth="1"
        />
        {/* Mini bar chart going up */}
        {[16, 22, 14, 28].map((h, i) => (
          <rect
            key={i}
            x={316 + i * 7}
            y={124 - h}
            width="5"
            height={h}
            rx="1"
            className={i === 3 ? 'fill-accent-500/80' : 'fill-primary-200 dark:fill-primary-700'}
          />
        ))}
      </g>

      {/* £ ROI pill */}
      <g>
        <rect
          x="350"
          y="94"
          width="60"
          height="22"
          rx="11"
          className="fill-primary-900 dark:fill-primary-100"
        />
        <text
          x="380"
          y="109"
          textAnchor="middle"
          fontSize="8"
          fontWeight="600"
          className="fill-white dark:fill-black"
        >
          Real results
        </text>
      </g>

      {/* Manchester label */}
      <g>
        <rect
          x="56"
          y="212"
          width="86"
          height="18"
          rx="9"
          className="fill-primary-50 dark:fill-primary-950 stroke-primary-200 dark:stroke-primary-800"
          strokeWidth="1"
        />
        <circle cx="69" cy="221" r="3" className="fill-accent-500 dark:fill-accent-400" />
        <text
          x="78"
          y="225"
          fontSize="8"
          fontWeight="500"
          className="fill-primary-600 dark:fill-primary-400"
        >
          Manchester, UK
        </text>
      </g>
    </svg>
  </div>
)

// ─── Services offered ─────────────────────────────────────────────────────────
const services = [
  {
    icon: RiRocketLine,
    title: 'Bespoke Website Design',
    description:
      'Custom-designed from scratch. Built to represent your business properly not from a £99 template.',
    href: '/services/web-development',
  },
  {
    icon: RiShoppingCart2Line,
    title: 'Ecommerce Development',
    description:
      'Online stores that actually sell. WooCommerce or custom-built, with checkout flows designed to convert.',
    href: '/services/web-development#ecommerce-development',
  },
  {
    icon: RiSearchLine,
    title: 'SEO & Local Search',
    description:
      'When someone in Manchester searches for what you offer, we make sure they find you — not your competitor.',
    href: '/services/digital-marketing',
  },
  {
    icon: RiBriefcaseLine,
    title: 'Brand Identity',
    description:
      'Logo, colours, typography, and the visual language that makes your business look the part.',
    href: '/services/ui-ux-design',
  },
  {
    icon: RiBarChartLine,
    title: 'Google Business & Reviews',
    description:
      'Your Google presence set up properly — categories, photos, review strategy, local visibility sorted.',
    href: '/services/digital-marketing#google-business',
  },
  {
    icon: RiToolsLine,
    title: 'Website Redesign',
    description:
      'Got a site that looks old or loads slowly? We rebuild it properly — better UX, better speed, better rankings.',
    href: '/services/web-development#website-redesign',
  },
]

// ─── Why us points ────────────────────────────────────────────────────────────
const whyPoints = [
  {
    icon: RiMoneyPoundCircleLine,
    title: 'Agency quality. Not agency pricing.',
    body: 'We’re fully remote with no Deansgate office, no account manager layer, no inflated day rates. Everything we save on overhead goes into the quality of your project.',
  },
  {
    icon: RiLightbulbLine,
    title: 'We think in outcomes, not deliverables.',
    body: 'Most of our clients don’t know what SEO is. They know they want more enquiries, more bookings, more sales. That’s what we work backwards from.',
  },
  {
    icon: RiTeamLine,
    title: 'Senior talent. Freelancer efficiency.',
    body: 'Our team is built from senior developers, designers and marketers who work independently at the top of their field. You get the people, not the junior staff they train on your project.',
  },
  {
    icon: RiShieldCheckLine,
    title: 'You own everything. No exceptions.',
    body: 'Full admin access to your site, domain, hosting and all accounts. We don’t create dependencies. If you ever want to take your project elsewhere, nothing stops you.',
  },
]

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const faqData = [
  {
    question: 'Are you actually based in Manchester?',
    answer:
      'We’re a remote-first agency with a strong Manchester focus. Our clients are predominantly Manchester businesses and we’re ranked #1 in Manchester by DesignRush out of 74 agencies. We work over Zoom and async — the same way most Manchester businesses now prefer to work.',
  },
  {
    question: 'We are a small business. Is this for us?',
    answer:
      'Yes — this is exactly who we built thirdbracket for. Small and medium Manchester businesses that want professional web design, SEO and branding but have never had access to it at a price that makes sense. Sole traders, limited companies with 5 to 20 staff — these are our best clients.',
  },
  {
    question: 'What does a website actually cost?',
    answer:
      'We don’t publish fixed prices because every project is different. What we can tell you is that our rate starts at $30/hr and we’re significantly more affordable than a traditional Manchester agency. We’ll give you a clear written quote before anything starts — no surprises.',
  },
  {
    question: 'We already have a website. Do you do redesigns?',
    answer:
      'Yes, and it’s one of the most common projects we work on. We audit what you have, keep what works, and rebuild the rest properly. Most redesigns also include technical SEO improvements that start showing results within a few months.',
  },
  {
    question: 'How long does a project take?',
    answer:
      'A standard website: 2 to 3 weeks. A full brand identity and website together: 4 to 6 weeks. We give you a clear timeline before we start and stick to it.',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function WebDesignManchesterPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="bg-overlayDot-light dark:bg-overlayDot-dark [background-size:36px_36px]">
      {/* ── Hero ── */}
      <section className="pt-[104px] pb-[3rem] sm:pb-[4rem]">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Copy */}
            <div className="max-w-xl">
              {/* Location pill */}
              <div className="inline-flex items-center gap-2 bg-accent-50 dark:bg-accent-950/50 border border-accent-200/60 dark:border-accent-700/40 text-accent-700 dark:text-accent-300 text-[0.75rem] font-semibold px-3 py-1.5 rounded-full mb-6">
                <RiMapPinLine size={12} />
                Manchester's #1 Ranked Web Design Agency
              </div>

              <h1 className="text-[clamp(2.4rem,5vw,3.8rem)] font-extrabold leading-[1.1] bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-6">
                Web Design Manchester Built for Real Business Growth
              </h1>

              <p className="text-[clamp(1rem,1.8vw,1.2rem)] text-primary-500 dark:text-primary-400 leading-[1.8] mb-4">
                Most Manchester SMEs have never had the budget for proper branding. A custom
                website, SEO that actually works, and a brand identity that makes you look the part
                — that's been out of reach.
              </p>

              <p className="text-[clamp(0.95rem,1.6vw,1.1rem)] text-primary-500 dark:text-primary-400 leading-[1.8] mb-8">
                We built thirdbracket to change that. Agency-level work, without the agency price
                tag.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-text dark:bg-gradient-text-dark text-white dark:text-primary-950 text-[0.9rem] font-semibold hover:opacity-90 transition-opacity"
                >
                  Get a free consultation
                  <RiArrowRightLine size={15} />
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-primary-200 dark:border-primary-700 text-primary-700 dark:text-primary-300 text-[0.9rem] font-semibold hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors"
                >
                  See our work
                </Link>
              </div>

              {/* Trust signals row */}
              <div className="flex flex-wrap items-center gap-5 text-[0.78rem] text-primary-500 dark:text-primary-400">
                <div className="flex items-center gap-1.5">
                  <RiAwardLine size={14} className="text-accent-500 dark:text-accent-400" />
                  Ranked #1 by DesignRush
                </div>
                <div className="flex items-center gap-1.5">
                  <RiStarLine size={14} className="text-amber-400" />
                  5.0 Google rating
                </div>
                <div className="flex items-center gap-1.5">
                  <RiShieldCheckLine size={14} className="text-accent-500 dark:text-accent-400" />
                  No lock-in contracts
                </div>
              </div>
            </div>

            {/* Illustration */}
            <div className="w-full aspect-[3/2] max-w-lg mx-auto lg:max-w-none">
              <ManchesterIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* ── DesignRush social proof ── */}
      <section className="py-[3rem] sm:py-[4rem]">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* DesignRush screenshot */}
            <div className="relative rounded-2xl overflow-hidden border border-primary-100 dark:border-primary-800/50 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4)]">
              <Image
                src="/designrush-ranking.webp"
                alt="Third Bracket ranked #1 web design agency Manchester on DesignRush"
                width={760}
                height={420}
                className="w-full h-auto"
              />
              {/* Overlay badge */}
              <div className="absolute top-4 right-4 bg-primary-900 dark:bg-primary-100 text-white dark:text-black text-[0.72rem] font-bold px-3 py-1.5 rounded-full">
                #1 in Manchester
              </div>
            </div>

            {/* Copy */}
            <div>
              <span className="text-[0.72rem] font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400 mb-3 block">
                Independent recognition
              </span>
              <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold leading-tight bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-5">
                Ranked #1 Web Design Agency in Manchester
              </h2>
              <p className="text-[clamp(0.9rem,1.4vw,1.05rem)] text-primary-500 dark:text-primary-400 leading-[1.8] mb-5">
                DesignRush evaluated 74 Manchester web design agencies on expertise, client
                feedback, portfolio quality and online reputation. Third Bracket came first.
              </p>
              <p className="text-[clamp(0.88rem,1.3vw,1rem)] text-primary-500 dark:text-primary-400 leading-[1.75] mb-7">
                We didn't buy that ranking. We earned it by doing the work properly — fast websites,
                clean code, SEO that compounds, and clients who actually get results.
              </p>
              <Link
                href="/blog/thirdbracket-ranked-1-web-design-agency-manchester-designrush"
                className="inline-flex items-center gap-2 text-[0.85rem] font-semibold text-primary-700 dark:text-primary-300 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
              >
                Read the full story
                <RiArrowRightLine size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── The real problem we solve ── */}
      <section className="py-[3rem] sm:py-[4rem]">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold leading-tight bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-5">
              Good branding has always been a luxury in Manchester. We're changing that.
            </h2>
            <p className="text-[clamp(0.9rem,1.4vw,1.05rem)] text-primary-500 dark:text-primary-400 leading-[1.8]">
              A roofer in Salford. A hair salon in Didsbury. A paving company in Trafford. These
              businesses deserve a proper website, proper SEO, and a brand that represents them well
              — not a £99 template and a disappearing freelancer. That's the gap thirdbracket was
              built to fill.
            </p>
          </div>

          {/* Three columns — the before */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                label: 'The cheap freelancer problem',
                body: "Affordable upfront, but no strategy, no SEO, no accountability. Six months later the site looks nothing like you imagined and the freelancer isn't returning messages.",
              },
              {
                label: 'The big agency problem',
                body: "The work is good but you're paying £2,000 a month for a retainer, being managed by a junior account exec, and your project is one of 40 on their books.",
              },
              {
                label: 'The do-it-yourself problem',
                body: "Wix, Squarespace, a £30 WordPress theme. It looks fine until you're side by side with a competitor who invested properly — then it doesn't.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-primary-50/50 dark:bg-primary-950/30 border border-primary-100 dark:border-primary-800/50"
              >
                <p className="text-[0.72rem] font-semibold uppercase tracking-widest text-primary-400 dark:text-primary-600 mb-3">
                  {item.label}
                </p>
                <p className="text-[0.88rem] text-primary-600 dark:text-primary-400 leading-[1.7]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          {/* The thirdbracket answer */}
          <div className="relative p-8 sm:p-10 rounded-2xl bg-primary-900 dark:bg-primary-50 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent-500/10 blur-3xl pointer-events-none" />
            <div className="relative z-10 grid lg:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <TBMark size={22} className="text-white dark:text-black opacity-80" />
                  <span className="text-[0.72rem] font-semibold uppercase tracking-widest text-white/60 dark:text-black/60">
                    The thirdbracket answer
                  </span>
                </div>
                <h3 className="text-[clamp(1.2rem,2.5vw,1.6rem)] font-extrabold text-white dark:text-black leading-tight mb-3">
                  Senior talent. Remote efficiency. No agency markup.
                </h3>
                <p className="text-[0.9rem] text-white/70 dark:text-black/70 leading-[1.75]">
                  We built a network of top-rated developers, designers and marketers who work
                  independently at the top of their field. No junior staff, no office overhead, no
                  inflated retainers. You get the quality of an agency at a price that actually
                  makes sense for a growing Manchester business.
                </p>
              </div>
              <Link
                href="/contact"
                className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-black text-primary-900 dark:text-primary-50 text-[0.85rem] font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                Start a conversation
                <RiArrowRightLine size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-[3rem] sm:py-[4rem]">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
          <div className="max-w-xl mb-12">
            <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold leading-tight bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-4">
              What Manchester businesses hire us for
            </h2>
            <p className="text-[clamp(0.88rem,1.3vw,1rem)] text-primary-500 dark:text-primary-400 leading-[1.75]">
              Every service is built around one question: what will actually move the needle for
              your business?
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <Link
                key={i}
                href={service.href}
                className="group p-6 rounded-2xl bg-white dark:bg-black border border-primary-100 dark:border-primary-800/50 shadow-[0_0_2px_rgba(11,13,15,0.08)] dark:shadow-[0_0_2px_rgba(224,227,230,0.12)] hover:border-primary-300 dark:hover:border-primary-600 hover:shadow-[0_4px_16px_rgba(11,13,15,0.08)] transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-950 border border-primary-100 dark:border-primary-800 flex items-center justify-center mb-4">
                  <service.icon size={18} className="text-accent-500 dark:text-accent-400" />
                </div>
                <h3 className="text-[0.95rem] font-bold text-primary-900 dark:text-primary-50 mb-2 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-[0.82rem] text-primary-500 dark:text-primary-400 leading-[1.65]">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why us ── */}
      <section className="py-[3rem] sm:py-[4rem]">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold leading-tight bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-5">
                Why Manchester businesses choose thirdbracket
              </h2>
              <p className="text-[clamp(0.9rem,1.4vw,1.05rem)] text-primary-500 dark:text-primary-400 leading-[1.8]">
                We've worked inside agencies. We've worked as freelancers. We know exactly what both
                get wrong — and we built thirdbracket specifically to avoid those mistakes.
              </p>
            </div>
            <div className="space-y-8">
              {whyPoints.map((point, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-950 border border-primary-100 dark:border-primary-800 flex items-center justify-center flex-shrink-0">
                    <point.icon size={17} className="text-accent-500 dark:text-accent-400" />
                  </div>
                  <div>
                    <h3 className="text-[0.95rem] font-bold text-primary-900 dark:text-primary-50 mb-1.5">
                      {point.title}
                    </h3>
                    <p className="text-[0.83rem] text-primary-500 dark:text-primary-400 leading-[1.7]">
                      {point.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stack strip ── */}
      <section className="py-[2rem] sm:py-[3rem]">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
            <p className="text-[0.78rem] font-semibold uppercase tracking-widest text-primary-400 dark:text-primary-600 flex-shrink-0">
              Built with
            </p>
            <div className="flex flex-wrap items-center gap-6 text-primary-400 dark:text-primary-600">
              {[
                { icon: SiNextdotjs, label: 'Next.js' },
                { icon: SiWordpress, label: 'WordPress' },
                { icon: SiElementor, label: 'Elementor' },
                { icon: SiGoogleanalytics, label: 'GA4' },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
                >
                  <Icon size={16} />
                  <span className="text-[0.8rem]">{label}</span>
                </div>
              ))}
              <span className="text-[0.8rem] opacity-60">
                + BracketUI, Cloudflare, Redis, LiteSpeed
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-[3rem] sm:py-[4rem]">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] leading-tight font-extrabold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text text-center mb-12">
            Questions from Manchester business owners
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqData.map((item, i) => (
              <div
                key={i}
                className="border border-primary-100 dark:border-primary-800/50 rounded-xl bg-primary-50/40 dark:bg-primary-950/20"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center px-6 py-4 font-medium text-left text-primary-900 dark:text-primary-100 focus:outline-none"
                  aria-expanded={openFaq === i}
                >
                  <span className="text-[clamp(0.9rem,1.4vw,1rem)] leading-relaxed pr-4">
                    {item.question}
                  </span>
                  <span
                    className="text-xl font-bold text-primary-400 dark:text-primary-600 transition-transform duration-300 flex-shrink-0"
                    style={{ transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`px-6 text-primary-600 dark:text-primary-400 text-sm leading-relaxed transition-all duration-300 ease-in-out overflow-hidden ${openFaq === i ? 'max-h-[400px] opacity-100 pb-5' : 'max-h-0 opacity-0 pb-0'}`}
                >
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-[3rem] sm:py-[4rem]">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl p-12 sm:p-16 bg-gradient-to-br from-accent-50/50 via-white to-accent-50/30 dark:from-accent-950/10 dark:via-black dark:to-accent-950/5 border border-accent-200 dark:border-accent-800/30 shadow-[0_0_0_1px_rgba(188,58,91,0.06),0_8px_32px_-8px_rgba(188,58,91,0.12)]">
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-accent-100/60 dark:bg-accent-900/10 blur-3xl pointer-events-none" />
            <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-10 items-center">
              <div>
                <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] leading-tight font-extrabold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-3">
                  Ready to make your Manchester business look the part?
                </h2>
                <p className="text-[clamp(0.95rem,1.5vw,1.1rem)] leading-relaxed text-primary-500 dark:text-primary-400 max-w-[480px]">
                  Tell us what you're trying to achieve. We'll tell you honestly what it will take
                  and what it will cost. No jargon, no obligation.
                </p>
              </div>
              <div className="flex flex-col gap-3 flex-shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-text dark:bg-gradient-text-dark text-white dark:text-primary-950 text-[0.9rem] font-semibold hover:opacity-90 transition-opacity"
                >
                  Start a free consultation
                  <RiArrowRightLine size={14} />
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-primary-200 dark:border-primary-700 text-primary-700 dark:text-primary-300 text-[0.9rem] font-semibold hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors"
                >
                  See our work first
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
