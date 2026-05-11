'use client'

import PageHeader from '@/components/PageHeader'
import CTASection from '@/components/CTASection'
import { ClientTestimonials } from '@/components/ClientTestomonial'
import { Bracket, Button, Card } from '@thirdbracket/bracketui'
import Link from 'next/link'
import { useState } from 'react'
import {
  FaMobileAlt,
  FaShieldAlt,
  FaBug,
  FaTachometerAlt,
  FaCheckCircle,
  FaWhatsapp,
} from 'react-icons/fa'
import { MdSpeed, MdOutlineSearchOff } from 'react-icons/md'
import { RiAlertLine } from 'react-icons/ri'

// ─── Constants ────────────────────────────────────────────────────────────────
const WHATSAPP_NUMBER = '447377389817'
const WHATSAPP_MSG = encodeURIComponent(
  "Hi, I'd like to claim my free website audit from Third Bracket.",
)
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`

// ─── Data ─────────────────────────────────────────────────────────────────────
const issues = [
  {
    icon: FaMobileAlt,
    title: 'Poor Mobile Score',
    badge: 'Below 50/100',
    description:
      "Google suppresses low-scoring sites in local search. Most of your customers search on mobile , if your score is below 50, you're invisible to them.",
  },
  {
    icon: MdSpeed,
    title: 'Slow Load Speed',
    badge: 'LCP over 2.5s',
    description:
      "Visitors leave before your phone number loads. You never know they were there. Google's threshold is 2.5 seconds , anything slower hurts your ranking.",
  },
  {
    icon: FaShieldAlt,
    title: 'SSL / Security Error',
    badge: 'Not Secure',
    description:
      'Chrome shows "Your connection is not private." Most people hit back immediately without reading another word , and Google de-ranks you for it.',
  },
  {
    icon: FaBug,
    title: 'Broken Pages',
    badge: '404 Errors',
    description:
      "Customers click to contact you and hit a dead end. They don't try again , they just call the next person on the list.",
  },
  {
    icon: FaTachometerAlt,
    title: 'Poor Desktop Score',
    badge: 'Below 50/100',
    description:
      'Slow desktop sites lose conversions from business owners researching you on a laptop. A bad score affects ranking across all devices.',
  },
  {
    icon: MdOutlineSearchOff,
    title: 'Redirect Chains',
    badge: 'Multiple Hops',
    description:
      'Each redirect delays your page and dilutes your SEO equity. They usually build up after a platform migration and quietly pull rankings down over time.',
  },
]

const included = [
  "Mobile performance score + what's dragging it down",
  "Page load speed (LCP) vs Google's 2.5s threshold",
  'SSL / security certificate status',
  '404 broken page scan across key URLs',
  'Desktop performance score',
  'Redirect chain analysis',
  'Plain-English summary , what to fix first and why',
]

const beforeMetrics = [
  { label: 'Mobile Score', value: '31/100', sub: 'Bottom tier for your area' },
  { label: 'Load Speed (LCP)', value: '6.2s', sub: 'Google threshold: 2.5s' },
  { label: 'SSL Status', value: 'Error', sub: 'Browsers blocking visitors' },
  { label: 'Desktop Score', value: '44/100', sub: 'Affects local rankings' },
]

const afterMetrics = [
  { label: 'Mobile Score', value: '91/100', sub: 'Above industry benchmark' },
  { label: 'Load Speed (LCP)', value: '1.3s', sub: '48% faster than before' },
  { label: 'SSL Status', value: 'Secure ✓', sub: 'No more browser warnings' },
  { label: 'Desktop Score', value: '94/100', sub: 'Top tier performance' },
]

// ─── Before / After Toggle ────────────────────────────────────────────────────
function BeforeAfter() {
  const [shown, setShown] = useState<'before' | 'after'>('before')
  const isBefore = shown === 'before'
  const metrics = isBefore ? beforeMetrics : afterMetrics

  return (
    <div className="border border-primary-200 dark:border-primary-800 rounded-2xl overflow-hidden bg-white dark:bg-black">
      {/* Toggle tabs */}
      <div className="grid grid-cols-2 border-b border-primary-200 dark:border-primary-800">
        {(['before', 'after'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setShown(tab)}
            className={`py-3 text-sm font-semibold transition-colors duration-150 focus:outline-none ${
              shown === tab
                ? 'bg-accent-600 dark:bg-accent-500 text-white'
                : 'bg-primary-50 dark:bg-primary-950 text-primary-400 dark:text-primary-500 hover:text-primary-700 dark:hover:text-primary-300'
            }`}
          >
            {tab === 'before' ? '  Before the fix' : '  After the fix'}
          </button>
        ))}
      </div>

      {/* Metrics */}
      <div className="divide-y divide-primary-100 dark:divide-primary-800/50">
        {metrics.map(({ label, value, sub }) => (
          <div key={label} className="flex items-center justify-between px-6 py-4">
            <div>
              <p className="text-sm font-medium text-primary-900 dark:text-primary-100">{label}</p>
              <p className="text-xs text-primary-400 dark:text-primary-500 mt-0.5">{sub}</p>
            </div>
            <span
              className={`text-xl font-black tabular-nums ${
                isBefore
                  ? 'text-accent-600 dark:text-accent-400'
                  : 'text-green-600 dark:text-green-400'
              }`}
            >
              {value}
            </span>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="px-6 py-4 border-t border-primary-100 dark:border-primary-800/50 bg-primary-50/50 dark:bg-primary-950/30">
        <p className="text-xs text-primary-500 dark:text-primary-400">
          {isBefore
            ? 'Real numbers from a Manchester trades site we audited.'
            : 'Same site, 6 weeks later. Enquiries up. Ranking improved.'}
        </p>
      </div>
    </div>
  )
}

// ─── Score Card (mirrors email score card aesthetic) ─────────────────────────
function ScoreCard({
  label,
  value,
  sub,
  bad,
}: {
  label: string
  value: string
  sub: string
  bad: boolean
}) {
  return (
    <div className="border border-primary-200 dark:border-primary-800 rounded-xl p-5 bg-white dark:bg-black text-center">
      <p className="text-[10px] font-bold uppercase tracking-widest text-primary-400 dark:text-primary-500 mb-2">
        {label}
      </p>
      <p
        className={`text-4xl font-black leading-none mb-2 ${
          bad ? 'text-accent-600 dark:text-accent-400' : 'text-primary-900 dark:text-primary-100'
        }`}
      >
        {value}
      </p>
      <p className="text-xs text-primary-400 dark:text-primary-500">{sub}</p>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function FreeAuditPage() {
  return (
    <section>
      <Bracket fluid centered padding="small">
        <div className="md:max-w-screen-xl mx-auto">
          {/* ── Page Header ───────────────────────────────────────── */}
          <PageHeader
            title="Free Website Audit"
            description="We audited thousands of trades websites across Manchester. Most had at least one critical issue costing them enquiries every day. Find out exactly what is holding yours back."
            actions={
              <>
                <Button
                  as={Link}
                  href={WHATSAPP_URL}
                  size="md"
                  theme={{
                    background: 'bg-accent-600 dark:bg-accent-500',
                    hoverBackground:
                      '[@media(hover:hover)]:hover:bg-accent-700 dark:[@media(hover:hover)]:hover:bg-accent-400 [@media(hover:hover)]:hover:-translate-y-[1px]',
                    focusRing: 'focus:ring-accent-500 dark:focus:ring-accent-400',
                    text: 'text-white',
                  }}
                  className="px-[22px] py-[11px] text-[0.9rem]"
                >
                  <FaWhatsapp className="mr-2 w-[15px] h-[15px]" />
                  Claim Your Free Audit
                </Button>
              </>
            }
          />

          {/* ── Issues we check ───────────────────────────────────── */}
          <section className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem]" id="what-we-check">
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl text-center font-bold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-4">
                6 issues that cost trades businesses work every day
              </h2>
              <p className="text-base/[1.6] md:text-lg/[1.75rem] font-light text-primary-600 dark:text-primary-400 max-w-2xl text-center mx-auto">
                These are the most common problems we find when auditing Manchester trades websites.
                Every single one directly affects how many enquiries your site generates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {issues.map((issue) => (
                <Card
                  key={issue.title}
                  size="xl"
                  isIcon
                  theme={{
                    background: 'bg-white dark:bg-black',
                    border:
                      'border-opacity-50 border-primary-500 dark:shadow-[0_0_2px_rgba(224,227,230,0.20)] shadow-[0_0_2px_rgba(11,13,15,0.10)]',
                    hover:
                      '[@media(hover:hover)]:hover:border-opacity-100 [@media(hover:hover)]:hover:shadow-[0_0_3px_rgba(11,13,15,0.15)] focus-within:border-opacity-100 active:border-opacity-100',
                    text: 'text-primary-500 font-normal leading-[1.45]',
                  }}
                  cover={
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 flex items-center justify-center border border-primary-400/20 bg-white dark:bg-black rounded-lg">
                        <issue.icon size={26} className="text-primary-700 dark:text-primary-300" />
                      </div>
                      <span className="text-[11px] font-semibold px-2 py-1 bg-accent-100 dark:bg-accent-900/40 text-accent-700 dark:text-accent-300 rounded-md border border-accent-200/50 dark:border-accent-700/30">
                        {issue.badge}
                      </span>
                    </div>
                  }
                  header={issue.title}
                >
                  <p className="text-sm text-primary-500 dark:text-primary-400 leading-relaxed">
                    {issue.description}
                  </p>
                </Card>
              ))}
            </div>
          </section>

          {/* ── Before / After + score cards ──────────────────────── */}
          <section className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem]" id="results">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              {/* Left: copy + score cards */}
              <div className="lg:w-1/2">
                <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-4">
                  From invisible to ranking on page one.
                </h2>
                <p className="text-base/[1.6] md:text-lg/[1.75rem] text-primary-500 dark:text-primary-400 mb-8">
                  We&apos;ve fixed websites for electricians, roofers, plumbers, and builders across
                  Greater Manchester. The issues are almost always the same , and they&apos;re
                  fixable. The audit tells you exactly where to start.
                </p>

                {/* Score display , same visual language as the email score cards */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  <ScoreCard
                    label="Mobile Score"
                    value="31"
                    sub="Before , bottom tier"
                    bad={true}
                  />
                  <ScoreCard label="Mobile Score" value="91" sub="After , top tier" bad={false} />
                  <ScoreCard label="Load Speed" value="6.2s" sub="Before , failing" bad={true} />
                  <ScoreCard label="Load Speed" value="1.3s" sub="After , passing" bad={false} />
                </div>

                <ul className="space-y-3">
                  {[
                    'Plain-English breakdown, no jargon',
                    'Prioritised , fix the most important thing first',
                    'We can fix it for you, or you can take it to anyone',
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <FaCheckCircle
                        size={16}
                        className="text-accent-500 dark:text-accent-400 mt-0.5 flex-shrink-0"
                      />
                      <span className="text-sm text-primary-600 dark:text-primary-400">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: interactive before/after toggle */}
              <div className="lg:w-1/2 w-full">
                <BeforeAfter />
              </div>
            </div>
          </section>

          {/* ── What's included + CTA card ────────────────────────── */}
          <section className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem]" id="whats-included">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left: checklist */}
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-4">
                  What&apos;s included in your free audit
                </h2>
                <p className="text-base/[1.6] md:text-lg/[1.75rem] text-primary-500 dark:text-primary-400 mb-8">
                  We run your site through a full technical check and send you the results with a
                  plain-English breakdown , no spreadsheet dumps, no upsell deck.
                </p>
                <ul className="space-y-4">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <FaCheckCircle
                        size={16}
                        className="text-accent-500 dark:text-accent-400 mt-0.5 flex-shrink-0"
                      />
                      <span className="text-sm text-primary-600 dark:text-primary-400 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: accent CTA card , mirrors CTASection interior styling */}
              <div className="relative overflow-hidden rounded-3xl p-10 sm:p-12 bg-gradient-to-br from-accent-50/50 via-white to-accent-50/30 dark:from-accent-950/10 dark:via-black dark:to-accent-950/5 border border-accent-200 dark:border-accent-800/30 shadow-[0_0_0_1px_rgba(188,58,91,0.06),0_8px_32px_-8px_rgba(188,58,91,0.12)] dark:shadow-[0_0_0_1px_rgba(215,93,130,0.08),0_8px_40px_-8px_rgba(215,93,130,0.16)]">
                <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-accent-100/60 dark:bg-accent-900/10 blur-3xl pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <RiAlertLine size={18} className="text-accent-500 dark:text-accent-400" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400">
                      100% Free , No Strings
                    </span>
                  </div>
                  <h3 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-extrabold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-3 leading-tight">
                    See exactly what&apos;s wrong with your site.
                  </h3>
                  <p className="text-sm leading-relaxed text-primary-500 dark:text-primary-400 mb-8">
                    Message us on WhatsApp with your website URL. We run the audit and send you the
                    full breakdown , usually within 24 hours. We can fix it for you or you can take
                    it to anyone.
                  </p>
                  <div className="flex flex-col gap-3">
                    <Button
                      as={Link}
                      href={WHATSAPP_URL}
                      size="md"
                      theme={{
                        background: 'bg-accent-600 dark:bg-accent-500',
                        hoverBackground:
                          '[@media(hover:hover)]:hover:bg-accent-700 dark:[@media(hover:hover)]:hover:bg-accent-400 [@media(hover:hover)]:hover:-translate-y-[1px]',
                        focusRing: 'focus:ring-accent-500 dark:focus:ring-accent-400',
                        text: 'text-white',
                      }}
                      className="px-[18px] py-[10px] text-[0.875rem] w-full justify-center"
                    >
                      <FaWhatsapp className="mr-2" size={16} />
                      Get My Free Audit Now
                    </Button>
                    <Button
                      as={Link}
                      href="/contact"
                      outline
                      size="md"
                      theme={{
                        border: 'border-primary-200 dark:border-primary-700',
                        hoverBackground:
                          'hover:bg-primary-50 dark:hover:bg-primary-900 [@media(hover:hover)]:hover:-translate-y-[1px]',
                        focusRing: 'focus:ring-primary-700 dark:focus:ring-secondary-300',
                        text: 'text-primary-700 dark:text-primary-300',
                      }}
                      className="px-[18px] py-[10px] text-[0.875rem] w-full justify-center"
                    >
                      Or email hello@thirdbracket.co.uk
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── How it works ──────────────────────────────────────── */}
          <section className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem]" id="how-it-works">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-4">
                How it works
              </h2>
              <p className="text-base/[1.6] md:text-lg/[1.75rem] font-light text-primary-600 dark:text-primary-400 max-w-2xl mx-auto">
                Three steps. No back and forth. You&apos;ll have your audit results before most
                agencies have responded to your initial enquiry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: '01',
                  title: 'Message us on WhatsApp',
                  description:
                    "Send us your website URL on WhatsApp. That's it. No forms, no phone calls, no waiting on hold.",
                },
                {
                  step: '02',
                  title: 'We run the audit',
                  description:
                    'We check your site across six technical areas and put together a clear breakdown of everything we find.',
                },
                {
                  step: '03',
                  title: 'You get the results',
                  description:
                    'We send you the full report within 24–48 hours. Plain English, prioritised, with a clear next step if you want our help.',
                },
              ].map((s) => (
                <div
                  key={s.step}
                  className="border border-primary-200 dark:border-primary-800 rounded-xl p-6 bg-white dark:bg-black"
                >
                  <span className="text-[2.5rem] font-black leading-none bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text">
                    {s.step}
                  </span>
                  <h3 className="font-semibold text-primary-900 dark:text-primary-100 mt-3 mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-primary-500 dark:text-primary-400 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Testimonials ──────────────────────────────────────── */}
          <ClientTestimonials />

          {/* ── CTA ───────────────────────────────────────────────── */}
          <CTASection
            title="Find out what's costing you enquiries."
            description="Free for Manchester trades businesses. Message us your URL on WhatsApp and we'll have your audit back within 24 hours."
            primary={{
              label: 'Claim Your Free Audit',
              href: WHATSAPP_URL,
            }}
            secondary={{
              label: 'View Our Services',
              href: '/services',
            }}
          />
        </div>
      </Bracket>
    </section>
  )
}
