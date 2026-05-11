'use client'

import Link from 'next/link'
import { useState, useRef } from 'react'
import PageHeader from '@/components/PageHeader'
import CTASection from '@/components/CTASection'
import { Bracket, Card } from '@thirdbracket/bracketui'
import {
  RiCheckLine,
  RiLayout2Line,
  RiBracesLine,
  RiShoppingCart2Line,
  RiRefreshLine,
  RiToolsLine,
  RiSpeedLine,
  RiExchangeLine,
  RiArrowRightSLine,
  RiArrowLeftSLine,
  RiRocketLine,
  RiShieldLine,
  RiCodeLine,
  RiSettings3Line,
  RiDatabase2Line,
  RiGlobalLine,
  RiFlashlightLine,
  RiPaletteLine,
  RiServerLine,
  RiLockLine,
  RiArrowRightLine,
  RiCheckDoubleLine,
  RiSearchLine,
  RiTimeLine,
  RiFileTextLine,
  RiBuildingLine,
  RiStackLine,
  RiTerminalLine,
} from 'react-icons/ri'
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiGithub,
  SiPayloadcms,
  SiVercel,
  SiWordpress,
  SiWoo,
  SiElementor,
  SiCloudflare,
  SiRedis,
  SiEslint,
} from 'react-icons/si'
import { ConcentricRings, GridDots, RadialDashes, ServiceSection } from '../ServiceSection'
import { LuLayers } from 'react-icons/lu'
import { PiHandshakeLight } from 'react-icons/pi'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Development for SMEs (Next.js & WordPress)',
  description:
    'We build high-performance websites and ecommerce platforms for SMEs using Next.js and WordPress. Clean builds, scalable architecture, and full ownership from day one.',
  openGraph: {
    title: 'Web Development for SMEs (Next.js & WordPress)',
    description:
      'High-performance website and ecommerce development built on Next.js and WordPress. Engineered properly, delivered without agency overhead, and built for long-term growth.',
    url: '/services/web-development',
    images: [
      {
        url: '/og/web-dev-og.webp',
        width: 1200,
        height: 630,
        alt: 'Web Development for SMEs with Next.js and WordPress by ThirdBracket',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og/web-development.jpg'],
  },
}

// ─── TB Icon (inline, no external import) ────────────────────────────────────
const TBIcon = ({ size = 32, className = '' }: { size?: number; className?: string }) => (
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

// ─── Hero Illustration , idea icons → TB mark → Next.js & WordPress ──────────
const HeroIllustration = () => (
  <div className="w-full h-full flex items-center justify-center p-4 select-none" aria-hidden>
    <svg viewBox="0 0 380 240" className="w-full h-full" fill="none">
      {/* Dot grid */}
      <GridDots cols={14} rows={9} gap={28} ox={-4} oy={4} />

      {/* ── Left: two input idea icons stacked ── */}
      {/* Performance icon */}
      <rect
        x="8"
        y="54"
        width="52"
        height="52"
        rx="10"
        className="fill-primary-50 dark:fill-primary-950 stroke-primary-200 dark:stroke-primary-800"
        strokeWidth="1"
      />
      <g className="text-primary-600 dark:text-primary-400">
        <rect x="22" y="68" width="6" height="18" rx="2" fill="currentColor" opacity="0.4" />
        <rect x="31" y="63" width="6" height="23" rx="2" fill="currentColor" opacity="0.7" />
        <rect x="40" y="72" width="6" height="14" rx="2" fill="currentColor" />
      </g>

      {/* Budget / cost icon */}
      <rect
        x="8"
        y="134"
        width="52"
        height="52"
        rx="10"
        className="fill-primary-50 dark:fill-primary-950 stroke-primary-200 dark:stroke-primary-800"
        strokeWidth="1"
      />
      <text
        x="34"
        y="167"
        textAnchor="middle"
        fontSize="20"
        fontWeight="600"
        className="fill-primary-600 dark:fill-primary-400"
      >
        £
      </text>

      {/* Lines from icons converging to centre TB mark */}
      {/* Top icon → TB */}
      <path
        d="M60 80 Q110 80 136 120"
        className="stroke-primary-300 dark:stroke-primary-700"
        strokeWidth="1.2"
        strokeDasharray="3 3"
        fill="none"
      />
      {/* Bottom icon → TB */}
      <path
        d="M60 160 Q110 160 136 120"
        className="stroke-primary-300 dark:stroke-primary-700"
        strokeWidth="1.2"
        strokeDasharray="3 3"
        fill="none"
      />

      {/* ── Centre: TB mark , no container, raw SVG ── */}
      <g transform="translate(120, 104) scale(0.038)">
        <path
          d="m56.332 0c-31.266 0.28956-56.33 25.554-56.33 56.888v686.22c0 31.343 25.112 56.615 56.387 56.89h576.27l-335.33-160.72v-478.55l335.33-160.72zm743.62 56.442-363.4 183.22 1.3358 322.17 362.11 181.73v-685.72c-0.01-0.46391 0-0.928 0-1.3891z"
          className="fill-primary-900 dark:fill-primary-100"
        />
      </g>

      {/* Lines from TB mark → two output boxes */}
      {/* TB → Next.js box */}
      <path
        d="M158 120 Q200 120 222 80"
        className="stroke-primary-400 dark:stroke-primary-600"
        strokeWidth="1.2"
        fill="none"
      />
      {/* TB → WordPress box */}
      <path
        d="M158 120 Q200 120 222 160"
        className="stroke-primary-400 dark:stroke-primary-600"
        strokeWidth="1.2"
        fill="none"
      />

      {/* ── Right: Next.js output container ── */}
      <rect
        x="222"
        y="30"
        width="148"
        height="88"
        rx="10"
        className="fill-primary-50 dark:fill-primary-950 stroke-primary-200 dark:stroke-primary-800"
        strokeWidth="1"
      />
      {/* Next.js header row */}
      <g transform="translate(234, 42)">
        <rect width="124" height="20" rx="4" className="fill-primary-900 dark:fill-primary-100" />
        {/* NX text */}
        <text
          x="10"
          y="14"
          fontSize="9"
          fontWeight="700"
          fontFamily="monospace"
          className="fill-white dark:fill-black"
        >
          Next.js
        </text>
        {/* dots */}
        <circle cx="96" cy="10" r="2.5" className="fill-white/40 dark:fill-black/40" />
        <circle cx="104" cy="10" r="2.5" className="fill-white/40 dark:fill-black/40" />
        <circle cx="112" cy="10" r="2.5" className="fill-white/40 dark:fill-black/40" />
      </g>
      {/* Next.js features */}
      {['App Router', 'TypeScript', 'Payload CMS', 'Vercel Edge'].map((f, i) => (
        <g key={f} transform={`translate(234, ${68 + i * 10})`}>
          <circle cx="4" cy="4" r="2" className="fill-accent-500 dark:fill-accent-400" />
          <text x="10" y="7.5" fontSize="7.5" className="fill-primary-600 dark:fill-primary-400">
            {f}
          </text>
        </g>
      ))}

      {/* ── Right: WordPress output container ── */}
      <rect
        x="222"
        y="122"
        width="148"
        height="88"
        rx="10"
        className="fill-primary-50 dark:fill-primary-950 stroke-primary-200 dark:stroke-primary-800"
        strokeWidth="1"
      />
      {/* WP header row */}
      <g transform="translate(234, 134)">
        <rect width="124" height="20" rx="4" className="fill-primary-700 dark:fill-primary-300" />
        <text
          x="10"
          y="14"
          fontSize="9"
          fontWeight="700"
          fontFamily="monospace"
          className="fill-white dark:fill-black"
        >
          WordPress
        </text>
        <circle cx="96" cy="10" r="2.5" className="fill-white/40 dark:fill-black/40" />
        <circle cx="104" cy="10" r="2.5" className="fill-white/40 dark:fill-black/40" />
        <circle cx="112" cy="10" r="2.5" className="fill-white/40 dark:fill-black/40" />
      </g>
      {/* WP features */}
      {['Elementor Pro', 'WooCommerce', 'LiteSpeed', 'Cloudflare'].map((f, i) => (
        <g key={f} transform={`translate(234, ${160 + i * 10})`}>
          <circle cx="4" cy="4" r="2" className="fill-primary-400 dark:fill-primary-600" />
          <text x="10" y="7.5" fontSize="7.5" className="fill-primary-600 dark:fill-primary-400">
            {f}
          </text>
        </g>
      ))}

      {/* Ready badge , bottom right */}
      <g transform="translate(286, 218)">
        <rect
          width="84"
          height="18"
          rx="9"
          className="fill-accent-50 dark:fill-accent-950/60 stroke-accent-200 dark:stroke-accent-800/40"
          strokeWidth="1"
        />
        <circle cx="12" cy="9" r="3" className="fill-accent-500 dark:fill-accent-400" />
        <text
          x="20"
          y="13"
          fontSize="8"
          fontWeight="600"
          className="fill-accent-700 dark:fill-accent-300"
        >
          Ready to deploy
        </text>
      </g>
    </svg>
  </div>
)

// ─── Card illustrations ───────────────────────────────────────────────────────

const DesignCardIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-5">
    <svg viewBox="0 0 200 160" className="absolute inset-0 w-full h-full" aria-hidden>
      <GridDots cols={8} rows={7} gap={26} ox={4} oy={4} />
      <path
        d="M54 24 L44 24 L44 136 L54 136"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-accent-500/35 dark:text-accent-400/30"
      />
      <path
        d="M146 24 L156 24 L156 136 L146 136"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-accent-500/35 dark:text-accent-400/30"
      />
    </svg>
    <div className="relative z-10 flex flex-col items-center gap-2.5 w-[140px]">
      <div className="w-full h-7 rounded-lg bg-primary-100/50 dark:bg-primary-800/30 border border-primary-200/70 dark:border-primary-700/50 scale-[0.93] flex items-center px-3 gap-2">
        <div className="w-2.5 h-2.5 rounded-sm bg-accent-400/40" />
        <div className="flex-1 h-1 rounded-full bg-primary-300/30" />
      </div>
      <div className="w-full h-7 rounded-lg bg-primary-50 dark:bg-primary-900 border border-primary-200 dark:border-primary-700 flex items-center px-3 gap-2 -mt-2">
        <div className="w-2.5 h-2.5 rounded-sm bg-accent-500/50" />
        <div className="flex-1 h-1 rounded-full bg-primary-200/50" />
        <div className="w-5 h-1 rounded-full bg-accent-300/40" />
      </div>
      <div className="w-full h-10 rounded-xl bg-white dark:bg-black border border-primary-200 dark:border-primary-700 shadow-md flex items-center px-3 gap-2 -mt-2 ring-1 ring-accent-500/15">
        <div className="w-5 h-5 rounded-md bg-accent-500 dark:bg-accent-400 flex items-center justify-center flex-shrink-0">
          <RiBracesLine size={9} className="text-white dark:text-black" />
        </div>
        <div className="flex-1">
          <div className="h-1.5 w-14 rounded-full bg-primary-200 dark:bg-primary-700 mb-1" />
          <div className="h-1 w-9 rounded-full bg-primary-100 dark:bg-primary-800" />
        </div>
        <RiCheckLine size={11} className="text-accent-500" />
      </div>
    </div>
  </div>
)

const NextJsCardIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-5">
    <svg viewBox="0 0 200 160" className="absolute inset-0 w-full h-full" aria-hidden>
      <ConcentricRings cx={100} cy={80} accentClass="text-primary-400" />
    </svg>
    <div className="relative z-10 flex flex-col items-center gap-4">
      <div className="w-14 h-14 rounded-2xl bg-black dark:bg-white border border-primary-200 dark:border-primary-800 shadow-md flex items-center justify-center">
        <SiNextdotjs size={26} className="text-white dark:text-black" />
      </div>
      <div className="flex flex-col gap-1.5 items-center">
        {['App Router', 'Edge Runtime', 'ISR & SSG'].map((l) => (
          <div
            key={l}
            className="flex items-center gap-1.5 bg-primary-50 dark:bg-primary-950 border border-primary-100 dark:border-primary-800 rounded-full px-2.5 py-0.5"
          >
            <RiRocketLine size={9} className="text-accent-500 dark:text-accent-400" />
            <span className="text-[9px] font-medium text-primary-600 dark:text-primary-400">
              {l}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const WordPressCardIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-5">
    <svg viewBox="0 0 200 160" className="absolute inset-0 w-full h-full" aria-hidden>
      <GridDots cols={8} rows={7} gap={26} ox={4} oy={4} />
    </svg>
    <div className="relative z-10 flex flex-col items-center gap-4">
      <div className="w-14 h-14 rounded-2xl bg-primary-50 dark:bg-primary-950 border border-primary-200 dark:border-primary-800 shadow-md flex items-center justify-center">
        <SiWordpress size={26} className="text-primary-700 dark:text-primary-300" />
      </div>
      <div className="flex flex-col gap-1.5 items-center">
        {['Custom themes', 'ACF', 'Easy editing'].map((l) => (
          <div
            key={l}
            className="flex items-center gap-1.5 bg-primary-50 dark:bg-primary-950 border border-primary-100 dark:border-primary-800 rounded-full px-2.5 py-0.5"
          >
            <RiCheckLine size={9} className="text-accent-500 dark:text-accent-400" />
            <span className="text-[9px] font-medium text-primary-600 dark:text-primary-400">
              {l}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const EcommerceCardIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-5">
    <svg viewBox="0 0 200 160" className="absolute inset-0 w-full h-full" aria-hidden>
      <RadialDashes cx={100} cy={80} r1={50} r2={60} accentClass="text-accent-500" />
    </svg>
    <div className="relative z-10 flex flex-col items-center gap-4">
      <div className="w-14 h-14 rounded-2xl bg-primary-50 dark:bg-primary-950 border border-primary-200 dark:border-primary-800 shadow-md flex items-center justify-center">
        <RiShoppingCart2Line size={26} className="text-accent-500 dark:text-accent-400" />
      </div>
      <div className="flex gap-2.5">
        {[1, 2].map((i) => (
          <div
            key={i}
            className="w-16 rounded-lg bg-white dark:bg-black border border-primary-100 dark:border-primary-800 p-2 shadow-sm"
          >
            <div className="w-full h-7 rounded-md bg-primary-100 dark:bg-primary-800 mb-1.5" />
            <div className="h-1 w-10 rounded-full bg-primary-200 dark:bg-primary-700 mb-1" />
            <div className="h-1.5 w-6 rounded-full bg-accent-400/60" />
          </div>
        ))}
      </div>
    </div>
  </div>
)

const RedesignCardIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-5">
    <svg viewBox="0 0 200 160" className="absolute inset-0 w-full h-full" aria-hidden>
      <GridDots cols={8} rows={7} gap={26} ox={4} oy={4} />
      <path
        d="M72 80 L128 80"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="3 3"
        className="text-accent-500/30"
        strokeLinecap="round"
      />
      <path
        d="M122 75 L130 80 L122 85"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-accent-500/40"
      />
    </svg>
    <div className="relative z-10 flex items-center gap-5">
      <div className="flex flex-col gap-1.5 items-center">
        <div className="w-18 h-12 rounded-lg bg-primary-100/60 dark:bg-primary-800/40 border border-primary-200 dark:border-primary-700 p-1.5 opacity-60">
          <div className="w-full h-3.5 rounded-sm bg-primary-300/40 dark:bg-primary-600/40 mb-1" />
          <div className="w-10 h-1.5 rounded-sm bg-primary-200/40" />
        </div>
        <span className="text-[9px] text-primary-400 dark:text-primary-600 font-medium">
          Before
        </span>
      </div>
      <div className="flex flex-col gap-1.5 items-center">
        <div className="w-18 h-12 rounded-xl bg-white dark:bg-black border border-primary-200 dark:border-primary-700 shadow-md p-1.5 ring-1 ring-accent-500/15">
          <div className="w-full h-3.5 rounded-md bg-accent-100 dark:bg-accent-900/30 mb-1 flex items-center px-1">
            <div className="w-1.5 h-1.5 rounded-sm bg-accent-500/60" />
          </div>
          <div className="w-10 h-1.5 rounded-sm bg-primary-200 dark:bg-primary-700" />
        </div>
        <span className="text-[9px] text-accent-500 dark:text-accent-400 font-medium">After</span>
      </div>
    </div>
  </div>
)

const OptimisationCardIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-5">
    <svg viewBox="0 0 200 160" className="absolute inset-0 w-full h-full" aria-hidden>
      <GridDots cols={8} rows={7} gap={26} ox={4} oy={4} />
    </svg>
    <div className="relative z-10 flex flex-col items-center gap-3 w-[140px]">
      {[
        { label: 'LCP', pct: 92, c: 'bg-green-500/70' },
        { label: 'FID', pct: 97, c: 'bg-accent-500/70' },
        { label: 'CLS', pct: 88, c: 'bg-green-400/70' },
      ].map(({ label, pct, c }) => (
        <div key={label} className="w-full flex items-center gap-2">
          <span className="text-[9px] font-mono font-medium text-primary-500 dark:text-primary-400 w-6">
            {label}
          </span>
          <div className="flex-1 h-2 rounded-full bg-primary-100 dark:bg-primary-800 overflow-hidden">
            <div className={`h-full rounded-full ${c}`} style={{ width: `${pct}%` }} />
          </div>
          <span className="text-[9px] font-medium text-primary-500 w-4 text-right">{pct}</span>
        </div>
      ))}
      <div className="mt-1 flex items-center gap-1.5 bg-green-50 dark:bg-green-950/30 border border-green-200/60 dark:border-green-700/40 rounded-full px-2.5 py-0.5">
        <RiCheckLine size={9} className="text-green-600 dark:text-green-400" />
        <span className="text-[9px] font-medium text-green-700 dark:text-green-400">
          Core Web Vitals pass
        </span>
      </div>
    </div>
  </div>
)

const MigrationCardIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-5">
    <svg viewBox="0 0 200 160" className="absolute inset-0 w-full h-full" aria-hidden>
      <GridDots cols={8} rows={7} gap={26} ox={4} oy={4} />
      <path
        d="M62 80 L138 80"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeDasharray="3 3"
        className="text-accent-500/25"
      />
      <path
        d="M132 75 L140 80 L132 85"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-accent-500/35"
      />
    </svg>
    <div className="relative z-10 flex items-center gap-5">
      <div className="w-12 h-12 rounded-xl bg-primary-100/70 dark:bg-primary-800/50 border border-primary-200 dark:border-primary-700 flex items-center justify-center">
        <RiServerLine size={20} className="text-primary-500 dark:text-primary-400" />
      </div>
      <div className="w-12 h-12 rounded-xl bg-black dark:bg-white border border-primary-200 dark:border-primary-800 shadow-md flex items-center justify-center">
        <SiNextdotjs size={20} className="text-white dark:text-black" />
      </div>
    </div>
  </div>
)

const RepairCardIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-5">
    <svg viewBox="0 0 200 160" className="absolute inset-0 w-full h-full" aria-hidden>
      <RadialDashes cx={100} cy={80} r1={44} r2={54} accentClass="text-primary-400" />
    </svg>
    <div className="relative z-10 flex flex-col items-center gap-4">
      <div className="w-14 h-14 rounded-2xl bg-primary-50 dark:bg-primary-950 border border-primary-200 dark:border-primary-800 shadow-md flex items-center justify-center relative">
        <RiToolsLine size={24} className="text-primary-700 dark:text-primary-300" />
        <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-green-500 border-2 border-white dark:border-black flex items-center justify-center">
          <RiCheckLine size={9} className="text-white" />
        </div>
      </div>
      <div className="flex flex-col gap-1.5 items-start">
        {['Bug diagnosed', 'Fix deployed', 'Documented'].map((s) => (
          <div key={s} className="flex items-center gap-1.5">
            <RiCheckLine size={10} className="text-green-500 flex-shrink-0" />
            <span className="text-[9px] font-medium text-primary-600 dark:text-primary-400">
              {s}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
)

// ─── Stack data ───────────────────────────────────────────────────────────────

const nextjsStack = [
  { icon: SiNextdotjs, label: 'Next.js' },
  { icon: SiReact, label: 'React' },
  { icon: SiTypescript, label: 'TypeScript' },
  { icon: SiTailwindcss, label: 'Tailwind CSS' },
  { icon: SiPayloadcms, label: 'Payload CMS' },
  { icon: SiGithub, label: 'GitHub' },
  { icon: SiVercel, label: 'Vercel' },
  { icon: SiEslint, label: 'ESLint' },
]
const wordpressStack = [
  { icon: SiWordpress, label: 'WordPress' },
  { icon: SiElementor, label: 'Elementor' },
  { icon: SiWoo, label: 'WooCommerce' },
  { icon: SiCloudflare, label: 'Cloudflare' },
  { icon: SiRedis, label: 'Redis' },
]
const nextjsFeatures = [
  { icon: RiRocketLine, text: 'Blazing-fast load times , Lighthouse 95+ out of the box' },
  { icon: RiBracesLine, text: 'App Router with React Server Components for performance' },
  { icon: RiDatabase2Line, text: 'Payload CMS for structured, developer-controlled content' },
  { icon: RiShieldLine, text: 'TypeScript end-to-end , fewer bugs, better maintainability' },
  { icon: LuLayers, text: 'BracketUI component library for consistent, fast UI' },
  { icon: RiGlobalLine, text: 'Edge deployment via Vercel , global CDN, instant rollbacks' },
  { icon: RiCodeLine, text: 'Custom portals, dashboards, and web apps at any scale' },
]
const wordpressFeatures = [
  { icon: RiSettings3Line, text: 'Custom server stack , Hetzner VPS, LiteSpeed, Redis cache' },
  {
    icon: RiPaletteLine,
    text: 'Custom Elementor templates built to your brand, not stock designs',
  },
  { icon: RiShoppingCart2Line, text: 'WooCommerce with conversion-focused checkout flows' },
  {
    icon: RiFlashlightLine,
    text: 'Sub-2s load times on shared infrastructure , properly configured',
  },
  { icon: RiLockLine, text: 'Full admin access , your site, your data, no lock-in' },
  { icon: RiGlobalLine, text: 'Cloudflare for DNS, CDN, and DDoS protection included' },
  { icon: LuLayers, text: 'Easy to manage , your team can update content without a developer' },
]

// ─── Services ─────────────────────────────────────────────────────────────────

const services = [
  {
    id: 'bespoke-web-design',
    badge: 'Design',
    title: 'Bespoke Web Design',
    description:
      'Designed from scratch around your brand. No templates, no shortcuts. Every layout crafted to guide visitors toward the actions that matter.',
    features: [
      'Custom from scratch',
      'Brand-aligned layouts',
      'Mobile-first',
      'BracketUI components',
    ],
    illustration: <DesignCardIllustration />,
    flip: false,
  },
  {
    id: 'bespoke-web-development',
    badge: 'Development',
    title: 'Bespoke Web Development',
    description:
      'Custom portals, admin dashboards, booking systems. Whatever your business logic requires, built on Next.js or WordPress.',
    features: ['Next.js or WordPress', 'Custom business logic', 'CMS integration', 'TypeScript'],
    illustration: <NextJsCardIllustration />,
    flip: true,
  },
  {
    id: 'ecommerce-development',
    badge: 'Ecommerce',
    title: 'E-commerce Development',
    description:
      'Online stores that convert. WooCommerce or custom Next.js storefronts, built with fast load times and conversion-focused design.',
    features: [
      'WooCommerce',
      'Custom Next.js stores',
      'Checkout optimisation',
      'Inventory management',
    ],
    illustration: <EcommerceCardIllustration />,
    flip: false,
  },
  {
    id: 'website-redesign',
    badge: 'Redesign',
    title: 'Website Redesign',
    description:
      'Outdated site? We audit what you have, keep what works, and rebuild the rest properly. Code-first, improved UX, faster performance.',
    features: ['Full audit first', 'Code-first rebuild', 'UX improvements', 'SEO preservation'],
    illustration: <RedesignCardIllustration />,
    flip: true,
  },
  {
    id: 'wordpress-development',
    badge: 'WordPress',
    title: 'WordPress Development',
    description:
      'Clean, fast WordPress sites your team can actually manage. No bloated themes. Built on our custom server stack.',
    features: ['Custom themes', 'ACF integration', 'WooCommerce ready', 'Performance tuned'],
    illustration: <WordPressCardIllustration />,
    flip: false,
  },
  {
    id: 'website-optimisation',
    badge: 'Performance',
    title: 'Website Optimisation',
    description:
      'We audit against Core Web Vitals and fix every layer , images, caching, server config, code splitting. Lighthouse 90+ minimum.',
    features: ['Core Web Vitals', 'Lighthouse audit', 'Image optimisation', 'Caching strategy'],
    illustration: <OptimisationCardIllustration />,
    flip: true,
  },
  {
    id: 'website-migration',
    badge: 'Migration',
    title: 'Website Migration',
    description:
      'Moving platforms without the pain. Zero data loss, redirects mapped, SEO equity preserved, minimal downtime.',
    features: ['Zero data loss', 'Redirect mapping', 'SEO preserved', 'Zero downtime'],
    illustration: <MigrationCardIllustration />,
    flip: false,
  },
  {
    id: 'website-repair',
    badge: 'Support',
    title: 'Website Repair',
    description:
      'Broken builds, plugin conflicts, security issues , we diagnose fast, document everything, leave the site better than we found it.',
    features: ['Next.js & WordPress', 'Security fixes', 'Plugin conflicts', 'Documentation'],
    illustration: <RepairCardIllustration />,
    flip: true,
  },
]

// ─── Process ──────────────────────────────────────────────────────────────────

const processSteps = [
  {
    icon: RiTimeLine,
    number: '01',
    title: 'Discovery',
    body: '30 minutes. We understand your goals, audience, and what you actually need. No lengthy briefs, no sales pitch.',
  },
  {
    icon: RiFileTextLine,
    number: '02',
    title: 'Proposal',
    body: 'A clear written scope , stack, timeline, cost. No vague estimates. You know exactly what you are getting before we start.',
  },
  {
    icon: RiCodeLine,
    number: '03',
    title: 'Design & build',
    body: 'We share progress regularly. You see the work developing, not just a finished product dropped on you at the end.',
  },
  {
    icon: RiSearchLine,
    number: '04',
    title: 'Review',
    body: 'Two rounds of revisions included. We resolve everything before launch , no half-finished handovers.',
  },
  {
    icon: PiHandshakeLight,
    number: '05',
    title: 'Launch & handover',
    body: 'We launch, monitor the first 48 hours, then hand over full access , admin, domain, hosting, documentation. Everything yours.',
  },
]

// ─── FAQ ──────────────────────────────────────────────────────────────────────

const webFaqData = [
  {
    question: 'Do you work with Next.js or WordPress , or both?',
    answer:
      'Both, exclusively. We specialise only in these two ecosystems. Next.js for performance-first and custom builds. WordPress for content-heavy sites and ecommerce where easy management matters. We recommend the right one based on your actual needs.',
  },
  {
    question: 'How long does a website project take?',
    answer:
      'Straightforward WordPress sites: 2 to 3 weeks. Custom Next.js builds or ecommerce: 4 to 6 weeks. We give you a specific timeline in the proposal before we start.',
  },
  {
    question: 'What do I actually own after the project?',
    answer:
      'Everything. Full admin access to the CMS, domain registrar, hosting account, and any third-party licences. We do not hold your site hostage. You can take it anywhere.',
  },
  {
    question: 'Is SEO included in a website build?',
    answer:
      'Yes , technical SEO is built in by default. Clean URL structure, meta setup, schema markup, XML sitemaps, and Core Web Vitals optimisation. Content SEO and ongoing ranking work is a separate service.',
  },
  {
    question: 'Do you offer ongoing support after launch?',
    answer:
      'Yes. Flexible maintenance packages covering content updates, plugin management for WordPress, performance monitoring, and ongoing development.',
  },
  {
    question: 'We are in Manchester , do you work with local businesses in person?',
    answer:
      "We're fully remote but focused on the Manchester market. Everything happens over Zoom and async. Our Manchester clients get the same quality as if we had an office on Deansgate, without the overhead on their invoice.",
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function WebDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div>
      {/* 1 , Page Header */}
      <PageHeader
        title="Website Development for SMEs"
        description="We build high-performance websites and ecommerce platforms using Next.js and WordPress. No templates. No agency overhead. Just properly engineered builds that your business can grow on."
      />

      {/* 2 , Illustration + ecosystem section */}
      <section className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem]">
        <Bracket fluid centered padding="small">
          <div className="md:max-w-screen-xl mx-auto">
            {/* Two-col: illustration left, heading right */}
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 lg:mb-20">
              <div className="w-full aspect-[4/3] max-w-lg mx-auto lg:max-w-none">
                <HeroIllustration />
              </div>
              <div>
                <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold leading-tight bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-5">
                  Built on two ecosystems we know inside out
                </h2>
                <p className="text-[clamp(0.9rem,1.4vw,1.05rem)] text-primary-500 dark:text-primary-400 leading-[1.8] mb-5">
                  We specialise in two stacks - Next.js and WordPress. Not because they&apos;re
                  popular, but because years of refinement in these ecosystems allow us to build
                  faster, cleaner and more reliably than generalist agencies.
                </p>
                <p className="text-[clamp(0.88rem,1.3vw,1rem)] text-primary-500 dark:text-primary-400 leading-[1.75]">
                  Need a custom, performance-first platform? Next.js.
                  <br />
                  Need a site your team can confidently manage? WordPress.
                  <br />
                  We help you choose, then we build it properly.
                </p>
              </div>
            </div>

            {/* Two-col ecosystems , dashed divider, no cards, no bg */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 divide-y lg:divide-y-0 lg:divide-x divide-dashed divide-primary-200 dark:divide-primary-800">
              {/* Next.js */}
              <div className="pb-12 lg:pb-0 lg:pr-14">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary-900 dark:bg-primary-100 flex items-center justify-center shadow-sm flex-shrink-0">
                    <SiNextdotjs size={28} className="text-white dark:text-black" />
                  </div>
                  <div>
                    <h3 className="text-[1.15rem] font-extrabold text-primary-900 dark:text-primary-50 leading-tight mb-1">
                      Next.js Development
                    </h3>
                    <p className="text-[0.8rem] text-primary-500 dark:text-primary-400 leading-relaxed">
                      Enterprise-level performance and customisation, without the enterprise price
                      tag
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-4 mb-7 text-primary-500 dark:text-primary-400">
                  {nextjsStack.map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      title={label}
                      className="flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity"
                    >
                      <Icon size={17} />
                      <span className="text-[9px] text-primary-400 dark:text-primary-600">
                        {label}
                      </span>
                    </div>
                  ))}
                  <div className="flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
                    <span className="text-[11px] font-semibold">BracketUI</span>
                    <span className="text-[9px] text-primary-400 dark:text-primary-600">
                      UI Lib
                    </span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {nextjsFeatures.map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-start gap-3">
                      <Icon
                        size={14}
                        className="text-accent-500 dark:text-accent-400 flex-shrink-0 mt-[3px]"
                      />
                      <span className="text-[0.85rem] text-primary-600 dark:text-primary-400 leading-[1.65]">
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[0.85rem] font-semibold px-5 py-3 rounded-xl border border-primary-200 dark:border-primary-700 text-primary-900 dark:text-primary-100 hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors"
                >
                  Start a Next.js project <RiArrowRightLine size={14} />
                </Link>
              </div>

              {/* WordPress */}
              <div className="pt-12 lg:pt-0 lg:pl-14">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary-900 dark:bg-primary-100 flex items-center justify-center shadow-sm flex-shrink-0">
                    <SiWordpress size={28} className="text-white dark:text-black" />
                  </div>
                  <div>
                    <h3 className="text-[1.15rem] font-extrabold text-primary-900 dark:text-primary-50 leading-tight mb-1">
                      WordPress Development
                    </h3>
                    <p className="text-[0.8rem] text-primary-500 dark:text-primary-400 leading-relaxed">
                      Fast, clean WordPress builds your team can actually manage.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-4 mb-7 text-primary-500 dark:text-primary-400">
                  {wordpressStack.map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      title={label}
                      className="flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity"
                    >
                      <Icon size={17} />
                      <span className="text-[9px] text-primary-400 dark:text-primary-600">
                        {label}
                      </span>
                    </div>
                  ))}
                  {['Hetzner', 'LiteSpeed'].map((l) => (
                    <div
                      key={l}
                      className="flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity"
                    >
                      <RiServerLine size={17} />
                      <span className="text-[9px] text-primary-400 dark:text-primary-600">{l}</span>
                    </div>
                  ))}
                </div>
                <ul className="space-y-3 mb-8">
                  {wordpressFeatures.map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-start gap-3">
                      <Icon
                        size={14}
                        className="text-accent-500 dark:text-accent-400 flex-shrink-0 mt-[3px]"
                      />
                      <span className="text-[0.85rem] text-primary-600 dark:text-primary-400 leading-[1.65]">
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[0.85rem] font-semibold px-5 py-3 rounded-xl border border-primary-200 dark:border-primary-700 text-primary-900 dark:text-primary-100 hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors"
                >
                  Start a WordPress project <RiArrowRightLine size={14} />
                </Link>
              </div>
            </div>
          </div>
        </Bracket>
      </section>

      {/* Service sections */}
      <section className="border-t border-primary-100 dark:border-primary-900/50">
        <Bracket fluid centered padding="small">
          <div className="md:max-w-screen-xl mx-auto">
            {services.map((service, i) => (
              <ServiceSection key={service.id} {...service} flip={i % 2 !== 0} />
            ))}
          </div>
        </Bracket>
      </section>

      {/* 4 , Process */}
      <section className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem] ">
        <Bracket fluid centered padding="small">
          <div className="md:max-w-screen-xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 items-start">
              <div className="lg:sticky lg:top-28">
                <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold leading-tight bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-4">
                  How a project works
                </h2>
                <p className="text-[clamp(0.95rem,1.5vw,1.1rem)] text-primary-500 dark:text-primary-400 leading-relaxed mb-8">
                  No surprises. No scope creep. No disappearing mid-project.
                </p>
                <div className="hidden lg:flex items-center justify-center w-28 h-28 relative">
                  <svg viewBox="0 0 112 112" className="absolute inset-0 w-full h-full" aria-hidden>
                    <ConcentricRings
                      cx={56}
                      cy={56}
                      accentClass="text-accent-300 dark:text-accent-200"
                    />
                  </svg>
                  <div className="w-10 h-10 rounded-full bg-primary-900 dark:bg-primary-100 flex items-center justify-center z-10">
                    <RiCheckDoubleLine size={16} className="text-white dark:text-black" />
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute left-[19px] top-6 bottom-6 w-px border-l border-dashed border-primary-200 dark:border-primary-800" />
                <div className="flex flex-col gap-10">
                  {processSteps.map((step, i) => (
                    <div key={i} className="flex gap-6 relative">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-50 dark:bg-primary-950 border border-primary-200 dark:border-primary-800 flex items-center justify-center z-10">
                        <step.icon size={15} className="text-accent-500 dark:text-accent-400" />
                      </div>
                      <div className="pt-1 pb-2">
                        <div className="flex items-baseline gap-2 mb-1.5">
                          <span className="text-[10px] font-mono font-bold text-accent-500 dark:text-accent-400">
                            {step.number}
                          </span>
                          <h3 className="text-[1.15rem] font-extrabold text-primary-900 dark:text-primary-50">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-[0.83rem] text-primary-500 dark:text-primary-400 leading-[1.7]">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Bracket>
      </section>

      {/* 5 , FAQ */}
      <section className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem] ">
        <Bracket fluid centered padding="small">
          <div className="md:max-w-screen-xl mx-auto">
            <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] leading-tight font-extrabold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text text-center mb-12 lg:mb-14">
              Common questions
            </h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              {webFaqData.map((item, i) => (
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
        </Bracket>
      </section>

      {/* 6 , CTA */}
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
    </div>
  )
}
