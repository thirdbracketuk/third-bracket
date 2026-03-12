'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  FaShieldAlt,
  FaLock,
  FaEnvelope,
  FaTachometerAlt,
  FaDatabase,
  FaGithub,
  FaServer,
  FaCubes,
  FaTerminal,
  FaSearch,
  FaChartLine,
  FaWordpress,
  FaChevronLeft,
  FaChevronRight,
  FaSitemap,
  FaBoxOpen,
  FaCloudUploadAlt,
  FaLayerGroup,
} from 'react-icons/fa'
import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiCloudflare,
  SiRedis,
  SiPayloadcms,
} from 'react-icons/si'
import { MdApi, MdDesignServices, MdAnalytics } from 'react-icons/md'

// ── Ring gauge — percentage only ─────────────────────────────────────────────

function RingGauge({ value, label }: { value: number; label: string }) {
  const r = 28
  const circ = 2 * Math.PI * r
  const fill = (value / 100) * circ
  const color = value >= 90 ? '#16a34a' : value >= 50 ? '#f59e0b' : '#dc2626'
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-[68px] h-[68px]">
        <svg viewBox="0 0 68 68" className="w-full h-full -rotate-90">
          <circle
            cx="34"
            cy="34"
            r={r}
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            className="text-secondary-100 dark:text-secondary-800"
          />
          <circle
            cx="34"
            cy="34"
            r={r}
            fill="none"
            stroke={color}
            strokeWidth="5"
            strokeDasharray={`${fill} ${circ - fill}`}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[15px] font-extrabold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text tabular-nums leading-none">
            {value}
          </span>
        </div>
      </div>
      <span className="text-[11px] text-secondary-500 dark:text-secondary-400 font-medium text-center leading-tight">
        {label}
      </span>
    </div>
  )
}

// ── Plain stat — any text value, no decorative container ─────────────────────

function PlainStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-[68px] h-[68px] flex items-center justify-center">
        <span className="text-[22px] font-extrabold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text leading-none tabular-nums text-center">
          {value}
        </span>
      </div>
      <span className="text-[11px] text-secondary-500 dark:text-secondary-400 font-medium text-center leading-tight">
        {label}
      </span>
    </div>
  )
}

// ── Category data ────────────────────────────────────────────────────────────

type Metric =
  | { shape: 'ring'; value: number; label: string }
  | { shape: 'plain'; value: string; label: string }

const categories = [
  {
    id: 'perf',
    tab: 'Performance & Security',
    screenshot: null as string | null,
    bg: 'from-[#0a1520] to-[#040a10]',
    headline: 'Every route secured. Every score documented.',
    copy: 'Cloudflare edge rules, reCAPTCHA v3, SPF/DKIM/BIMI authentication and Lighthouse 98+ across every route. Security and performance are engineered into the architecture — not retrofitted after launch.',
    tags: ['Cloudflare', 'reCAPTCHA v3', 'BIMI / DKIM', 'SPF', 'WAF', 'PageSpeed'],
    metricsLabel: 'Lighthouse — swap with your real scores',
    metrics: [
      { shape: 'ring' as const, value: 98, label: 'Performance' },
      { shape: 'ring' as const, value: 100, label: 'SEO' },
      { shape: 'ring' as const, value: 95, label: 'Accessibility' },
      { shape: 'ring' as const, value: 100, label: 'Best Practices' },
    ] as Metric[],
  },
  {
    id: 'fullstack',
    tab: 'Full-Stack Dev',
    screenshot: null as string | null,
    bg: 'from-[#0d1420] to-[#050810]',
    headline: 'Zero to production — the whole stack owned.',
    copy: 'Enterprise admin panels, multi-tenant architecture, GitHub Actions pipelines, custom Next.js deployment workflows, REST APIs and Framer Motion — all in 100% TypeScript, running on Hetzner VPS instances configured from scratch.',
    tags: [
      'Next.js',
      'PayloadCMS',
      'TypeScript',
      'GitHub Actions',
      'Hetzner',
      'Coolify',
      'Framer Motion',
    ],
    metricsLabel: 'Engineering standards',
    metrics: [
      { shape: 'plain' as const, value: '100%', label: 'TypeScript' },
      { shape: 'plain' as const, value: 'CI/CD', label: 'Automated deploy' },
      { shape: 'plain' as const, value: 'VPS', label: 'Bare metal infra' },
      { shape: 'plain' as const, value: 'API', label: 'REST & webhooks' },
    ] as Metric[],
  },
  {
    id: 'design',
    tab: 'Design System',
    screenshot: null as string | null,
    bg: 'from-[#1a060d] to-[#0a0308]',
    headline: 'One system. Ships into every project.',
    copy: 'BracketUI is our proprietary component library — Tailwind v4, a custom CLI, MegaMenu, ThemeToggle and production-ready components. Published to npm, used in every build we touch.',
    tags: [
      'BracketUI',
      'Tailwind v4',
      'Custom CLI',
      'npm',
      'MegaMenu',
      'ThemeToggle',
      'TypeScript',
    ],
    metricsLabel: 'BracketUI — updated continuously',
    metrics: [
      { shape: 'plain' as const, value: '21+', label: 'Components' },
      { shape: 'plain' as const, value: 'CLI', label: 'Custom tooling' },
      { shape: 'plain' as const, value: 'v4', label: 'Tailwind' },
      { shape: 'plain' as const, value: 'npm', label: 'Published' },
    ] as Metric[],
  },
  {
    id: 'seo',
    tab: 'SEO & Discovery',
    screenshot: null as string | null,
    bg: 'from-[#0a1a0d] to-[#050a06]',
    headline: 'Ranked by design, not by chance.',
    copy: 'JSON-LD structured schema, Google Search Console, GA4, Meta Pixel and OpenGraph image generation — baked into the build from day one. Keyword strategy, content structure and robots configuration delivered alongside the code.',
    tags: ['JSON-LD', 'GA4', 'Meta Pixel', 'Google Search Console', 'OpenGraph', 'Sitemap'],
    metricsLabel: 'Built in from commit one',
    metrics: [
      { shape: 'ring' as const, value: 100, label: 'SEO Score' },
      { shape: 'plain' as const, value: 'GA4', label: 'Analytics' },
      { shape: 'plain' as const, value: 'OG', label: 'Image generation' },
      { shape: 'plain' as const, value: 'LD', label: 'Structured schema' },
    ] as Metric[],
  },
  {
    id: 'wp',
    tab: 'WordPress',
    screenshot: null as string | null,
    bg: 'from-[#1a100a] to-[#0a0603]',
    headline: 'WordPress at headless-grade performance.',
    copy: 'Ubuntu VPS, LiteSpeed, Redis object cache and Cloudflare CDN. Custom theme development and Elementor Pro templates. A WordPress stack that competes with Next.js scores — documented, repeatable and built on years of hands-on server experience.',
    tags: ['LiteSpeed', 'Redis', 'Cloudflare', 'Elementor Pro', 'Ubuntu VPS', 'Custom Theme'],
    metricsLabel: 'Performance stack — swap with real scores',
    metrics: [
      { shape: 'ring' as const, value: 95, label: 'PageSpeed' },
      { shape: 'plain' as const, value: 'Redis', label: 'Object cache' },
      { shape: 'plain' as const, value: 'CDN', label: 'Cloudflare' },
      { shape: 'plain' as const, value: 'LS', label: 'LiteSpeed' },
    ] as Metric[],
  },
]

// ── Full stack chips ─────────────────────────────────────────────────────────

const stackChips = [
  { Icon: SiNextdotjs, label: 'Next.js' },
  { Icon: SiTypescript, label: 'TypeScript' },
  { Icon: SiPayloadcms, label: 'PayloadCMS' },
  { Icon: SiMongodb, label: 'MongoDB' },
  { Icon: SiPostgresql, label: 'PostgreSQL' },
  { Icon: SiCloudflare, label: 'Cloudflare' },
  { Icon: SiRedis, label: 'Redis' },
  { Icon: SiTailwindcss, label: 'Tailwind v4' },
  { Icon: FaWordpress, label: 'WordPress' },
  { Icon: FaGithub, label: 'CI / CD' },
  { Icon: FaServer, label: 'Hetzner VPS' },
  { Icon: FaCubes, label: 'BracketUI' },
  { Icon: FaTerminal, label: 'Custom CLI' },
  { Icon: FaBoxOpen, label: 'npm package' },
  { Icon: FaCloudUploadAlt, label: 'Coolify' },
  { Icon: FaSearch, label: 'Technical SEO' },
  { Icon: FaChartLine, label: 'GA4' },
  { Icon: MdAnalytics, label: 'Meta Pixel' },
  { Icon: FaShieldAlt, label: 'Security Rules' },
  { Icon: FaLock, label: 'reCAPTCHA v3' },
  { Icon: FaEnvelope, label: 'BIMI / DKIM' },
  { Icon: MdApi, label: 'REST API' },
  { Icon: FaSitemap, label: 'JSON-LD Schema' },
  { Icon: MdDesignServices, label: 'Elementor Pro' },
  { Icon: FaTachometerAlt, label: 'PageSpeed' },
  { Icon: FaLayerGroup, label: 'Multi-tenant' },
  { Icon: FaDatabase, label: 'MongoDB Atlas' },
]

// ── Slide visual ────────────────────────────────────────────────────────────

function SlideVisual({ cat, visible }: { cat: (typeof categories)[0]; visible: boolean }) {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      {cat.screenshot ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={cat.screenshot} alt={cat.tab} className="w-full h-full object-cover object-top" />
      ) : (
        <div className={`w-full h-full bg-gradient-to-br ${cat.bg} relative overflow-hidden`}>
          <svg aria-hidden className="absolute inset-0 w-full h-full opacity-[0.06]">
            <defs>
              <pattern
                id={`dot-${cat.id}`}
                x="0"
                y="0"
                width="28"
                height="28"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="1" cy="1" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#dot-${cat.id})`} />
          </svg>
          <svg
            aria-hidden
            className="absolute inset-0 w-full h-full opacity-[0.15] pointer-events-none"
          >
            <line x1="100%" y1="0" x2="0" y2="100%" stroke="#bc3a5b" strokeWidth="0.5" />
            <line x1="100%" y1="-20%" x2="-20%" y2="100%" stroke="#bc3a5b" strokeWidth="0.3" />
          </svg>
          <div className="absolute bottom-4 left-5">
            <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
              {`/public/screenshots/${cat.id}.webp`}
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

// ── Main ────────────────────────────────────────────────────────────────────

export default function WorkCapabilities() {
  const [active, setActive] = useState(0)
  const prev = () => setActive((a) => (a === 0 ? categories.length - 1 : a - 1))
  const next = () => setActive((a) => (a === categories.length - 1 ? 0 : a + 1))
  const cat = categories[active]

  return (
    <>
      {/* NDA notice */}
      <div className="flex items-start gap-2.5 py-4">
        <FaLock
          size={10}
          className="mt-[4px] flex-shrink-0 text-secondary-300 dark:text-secondary-700"
        />
        <p className="text-[12.5px] text-secondary-400 dark:text-secondary-600 font-light leading-relaxed">
          Nearly all our work is protected by NDA — what you see here is a curated sample of our own
          platforms and the few client builds we have permission to share.{' '}
          <Link
            href="/contact"
            className="text-secondary-500 dark:text-secondary-500 underline underline-offset-2 hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
          >
            Talk to us directly
          </Link>{' '}
          for deeper proof of any specific capability.
        </p>
      </div>

      {/* Delivery showcase */}
      <section className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem]">
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((c, i) => (
            <button
              key={c.id}
              onClick={() => setActive(i)}
              className={`px-3 py-1.5 rounded-lg text-[12px] font-medium transition-all duration-200 border whitespace-nowrap
                ${
                  i === active
                    ? 'bg-accent-600 dark:bg-accent-500 text-white border-transparent shadow-[0_2px_8px_rgba(188,58,91,0.3)]'
                    : 'bg-transparent text-secondary-500 dark:text-secondary-400 border-secondary-100 dark:border-secondary-800 hover:border-secondary-200 dark:hover:border-secondary-700'
                }`}
            >
              {c.tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-14 items-start">
          {/* Slide */}
          <div>
            <div
              className="relative overflow-hidden rounded-xl border border-secondary-100 dark:border-secondary-800"
              style={{ aspectRatio: '16/10' }}
            >
              {categories.map((c, i) => (
                <SlideVisual key={c.id} cat={c} visible={i === active} />
              ))}
              <button
                onClick={prev}
                aria-label="Previous"
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 text-white/25 hover:text-white/60 transition-colors duration-200"
              >
                <FaChevronLeft size={12} />
              </button>
              <button
                onClick={next}
                aria-label="Next"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-white/25 hover:text-white/60 transition-colors duration-200"
              >
                <FaChevronRight size={12} />
              </button>
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col gap-5 lg:pt-1">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-3 leading-tight">
                {cat.headline}
              </h2>
              <p className="text-base/[1.6] font-light text-primary-600 dark:text-primary-400">
                {cat.copy}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {cat.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-[11px] font-medium rounded border border-secondary-100 dark:border-secondary-800 text-secondary-500 dark:text-secondary-400 bg-secondary-50 dark:bg-secondary-950"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-secondary-300 dark:text-secondary-700 mb-4">
                {cat.metricsLabel}
              </p>
              <div className="grid grid-cols-4 gap-2">
                {cat.metrics.map((m) =>
                  m.shape === 'ring' ? (
                    <RingGauge key={m.label} value={m.value as number} label={m.label} />
                  ) : (
                    <PlainStat key={m.label} value={m.value as string} label={m.label} />
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Stack */}
      <section className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem]">
        <div className="mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-2">
            The Full Stack
          </h2>
          <p className="text-base/[1.6] font-light text-primary-600 dark:text-primary-400 max-w-lg">
            Every tool we deploy in production — no vendor preference, just the right choice for the
            build.
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {stackChips.map(({ Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-secondary-100 dark:border-secondary-800 bg-white dark:bg-secondary-950 hover:border-secondary-200 dark:hover:border-secondary-700 transition-colors duration-200"
            >
              <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                <Icon size={13} className="text-primary-700 dark:text-primary-300" />
              </div>
              <span className="text-[12px] font-medium text-secondary-600 dark:text-secondary-400">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
