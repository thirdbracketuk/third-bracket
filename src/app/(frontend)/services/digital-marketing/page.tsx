// import PageHeader from '@/components/PageHeader'
// import CTASection from '@/components/CTASection'
// import { Bracket } from '@thirdbracket/bracketui'
// import { Metadata } from 'next'
// import {
//   ServiceSection,
//   QuickServicesStrip,
//   ConcentricRings,
//   GridDots,
//   RadialDashes,
// } from '../ServiceSection'
// import {
//   RiSearchLine,
//   RiMapPinLine,
//   RiCodeLine,
//   RiGlobalLine,
//   RiMoneyDollarCircleLine,
//   RiStoreLine,
//   RiDatabase2Line,
//   RiShoppingBag2Line,
//   RiBarChartLine,
//   RiCheckLine,
// } from 'react-icons/ri'
// import { SiWordpress, SiGoogleanalytics, SiGooglesearchconsole } from 'react-icons/si'

// export const metadata: Metadata = {
//   title: 'SEO Services Manchester | SEO & Growth | thirdbracket',
//   description:
//     'SEO services for Manchester businesses. WordPress SEO, WooCommerce SEO, Local SEO, GEO, and full digital foundation setup. Technical SEO built into every website we deliver.',
//   openGraph: {
//     title: 'SEO Services Manchester | thirdbracket',
//     description:
//       'Organic growth that compounds. Manchester SEO agency specialising in WordPress, WooCommerce, Local SEO and GEO. Technical SEO-first on every build.',
//   },
// }

// // ─── Illustrations ────────────────────────────────────────────────────────────

// const WordPressSEOIllustration = () => (
//   <div className="relative w-full h-full flex items-center justify-center p-6">
//     <svg viewBox="0 0 200 150" className="absolute inset-0 w-full h-full" aria-hidden>
//       <GridDots cols={7} rows={5} gap={28} ox={14} oy={14} />
//     </svg>
//     <div className="relative z-10 flex flex-col items-center gap-3">
//       <div className="flex items-center gap-3">
//         <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-950 border border-primary-200 dark:border-primary-800 flex items-center justify-center shadow-md">
//           <SiWordpress size={22} className="text-primary-700 dark:text-primary-300" />
//         </div>
//         <div className="flex flex-col gap-1">
//           <RiCheckLine size={12} className="text-accent-500 dark:text-accent-400" />
//           <RiSearchLine size={12} className="text-primary-500 dark:text-primary-400" />
//         </div>
//         <div className="w-10 h-10 rounded-xl bg-white dark:bg-black border border-primary-100 dark:border-primary-800 shadow-sm flex items-center justify-center">
//           <RiBarChartLine size={18} className="text-accent-500 dark:text-accent-400" />
//         </div>
//       </div>
//       <div className="flex flex-col gap-1 items-center mt-1">
//         {['Schema markup', 'Clean architecture', 'Fast load times'].map((s) => (
//           <div
//             key={s}
//             className="flex items-center gap-1.5 bg-primary-50 dark:bg-primary-950 border border-primary-100 dark:border-primary-800 rounded-full px-2.5 py-0.5"
//           >
//             <RiCheckLine size={9} className="text-accent-500 dark:text-accent-400 flex-shrink-0" />
//             <span className="text-[9px] font-medium text-primary-600 dark:text-primary-400">
//               {s}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// )

// const LocalSEOIllustration = () => (
//   <div className="relative w-full h-full flex items-center justify-center p-6">
//     <svg viewBox="0 0 200 150" className="absolute inset-0 w-full h-full" aria-hidden>
//       <ConcentricRings cx={100} cy={75} accentClass="text-accent-500" />
//     </svg>
//     <div className="relative z-10 flex flex-col items-center gap-3">
//       <div className="w-14 h-14 rounded-2xl bg-primary-50 dark:bg-primary-950 border border-primary-200 dark:border-primary-800 shadow-md flex items-center justify-center relative">
//         <RiMapPinLine size={26} className="text-accent-500 dark:text-accent-400" />
//         <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-accent-500 dark:bg-accent-400 border-2 border-white dark:border-black flex items-center justify-center">
//           <span className="text-[7px] font-bold text-white dark:text-black">#1</span>
//         </div>
//       </div>
//       <div className="flex items-center gap-1 bg-accent-50 dark:bg-accent-950/50 border border-accent-200/60 dark:border-accent-700/40 rounded-full px-2 py-0.5">
//         <span className="w-1.5 h-1.5 rounded-full bg-accent-500 dark:bg-accent-400" />
//         <span className="text-[9px] font-medium text-accent-700 dark:text-accent-300">
//           Manchester
//         </span>
//       </div>
//     </div>
//   </div>
// )

// const GEOIllustration = () => (
//   <div className="relative w-full h-full flex items-center justify-center p-6">
//     <svg viewBox="0 0 200 150" className="absolute inset-0 w-full h-full" aria-hidden>
//       <GridDots cols={7} rows={5} gap={28} ox={14} oy={14} />
//     </svg>
//     <div className="relative z-10 flex flex-col items-center gap-3 w-full max-w-[150px]">
//       <div className="w-14 h-14 rounded-2xl bg-primary-50 dark:bg-primary-950 border border-primary-200 dark:border-primary-800 shadow-md flex items-center justify-center">
//         <RiGlobalLine size={26} className="text-primary-700 dark:text-primary-300" />
//       </div>
//       {/* AI chat bubbles */}
//       <div className="w-full space-y-1.5">
//         <div className="bg-primary-100 dark:bg-primary-800 rounded-lg rounded-tl-sm px-2.5 py-1.5 self-start">
//           <div className="h-1 w-16 rounded-full bg-primary-400/40 dark:bg-primary-500/40 mb-1" />
//           <div className="h-1 w-10 rounded-full bg-primary-400/30 dark:bg-primary-500/30" />
//         </div>
//         <div className="bg-accent-50 dark:bg-accent-950/60 border border-accent-200/50 dark:border-accent-700/30 rounded-lg rounded-tr-sm px-2.5 py-1.5 ml-auto w-24">
//           <div className="flex items-center gap-1 mb-0.5">
//             <RiCheckLine size={8} className="text-accent-500 dark:text-accent-400" />
//             <span className="text-[8px] font-medium text-accent-700 dark:text-accent-300">
//               thirdbracket
//             </span>
//           </div>
//           <div className="h-1 w-12 rounded-full bg-accent-300/40" />
//         </div>
//       </div>
//     </div>
//   </div>
// )

// const PPCIllustration = () => (
//   <div className="relative w-full h-full flex items-center justify-center p-6">
//     <svg viewBox="0 0 200 150" className="absolute inset-0 w-full h-full" aria-hidden>
//       <RadialDashes cx={100} cy={75} r1={50} r2={60} accentClass="text-accent-500" />
//     </svg>
//     <div className="relative z-10 flex flex-col items-center gap-3 w-full max-w-[140px]">
//       {/* Bar chart */}
//       <div className="flex items-end gap-1.5 h-16">
//         {[40, 55, 48, 70, 62, 85].map((h, i) => (
//           <div
//             key={i}
//             className={`w-4 rounded-t-sm ${i === 5 ? 'bg-accent-500/80 dark:bg-accent-400/70' : 'bg-primary-200 dark:bg-primary-700'}`}
//             style={{ height: `${h}%` }}
//           />
//         ))}
//       </div>
//       <div className="flex items-center gap-1.5 bg-accent-50 dark:bg-accent-950/50 border border-accent-200/60 dark:border-accent-700/40 rounded-full px-2 py-0.5">
//         <RiMoneyDollarCircleLine size={9} className="text-accent-600 dark:text-accent-400" />
//         <span className="text-[9px] font-medium text-accent-700 dark:text-accent-300">
//           ROI optimised
//         </span>
//       </div>
//     </div>
//   </div>
// )

// const GoogleBusinessIllustration = () => (
//   <div className="relative w-full h-full flex items-center justify-center p-6">
//     <svg viewBox="0 0 200 150" className="absolute inset-0 w-full h-full" aria-hidden>
//       <GridDots cols={7} rows={5} gap={28} ox={14} oy={14} />
//     </svg>
//     <div className="relative z-10 flex flex-col items-center gap-3">
//       <div className="w-14 h-14 rounded-2xl bg-primary-50 dark:bg-primary-950 border border-primary-200 dark:border-primary-800 shadow-md flex items-center justify-center">
//         <RiStoreLine size={26} className="text-accent-500 dark:text-accent-400" />
//       </div>
//       {/* Star rating */}
//       <div className="flex items-center gap-0.5">
//         {[1, 2, 3, 4, 5].map((i) => (
//           <svg key={i} className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
//             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//           </svg>
//         ))}
//         <span className="text-[9px] font-medium text-primary-500 dark:text-primary-400 ml-1">
//           5.0
//         </span>
//       </div>
//     </div>
//   </div>
// )

// const DigitalFoundationIllustration = () => (
//   <div className="relative w-full h-full flex items-center justify-center p-6">
//     <svg viewBox="0 0 200 150" className="absolute inset-0 w-full h-full" aria-hidden>
//       <GridDots cols={7} rows={5} gap={28} ox={14} oy={14} />
//     </svg>
//     <div className="relative z-10 flex flex-col items-center gap-2">
//       <div className="flex gap-2">
//         <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-950 border border-primary-100 dark:border-primary-800 flex items-center justify-center shadow-sm">
//           <SiGoogleanalytics size={16} className="text-primary-600 dark:text-primary-400" />
//         </div>
//         <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-950 border border-primary-100 dark:border-primary-800 flex items-center justify-center shadow-sm">
//           <SiGooglesearchconsole size={16} className="text-primary-600 dark:text-primary-400" />
//         </div>
//         <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-950 border border-primary-100 dark:border-primary-800 flex items-center justify-center shadow-sm">
//           <RiDatabase2Line size={16} className="text-primary-600 dark:text-primary-400" />
//         </div>
//       </div>
//       <div className="flex flex-col gap-1 items-center">
//         {['GA4 configured', 'Search Console linked', 'Branded email'].map((s) => (
//           <div key={s} className="flex items-center gap-1.5">
//             <RiCheckLine size={9} className="text-accent-500 dark:text-accent-400 flex-shrink-0" />
//             <span className="text-[9px] font-medium text-primary-600 dark:text-primary-400">
//               {s}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// )

// // ─── Page ─────────────────────────────────────────────────────────────────────

// const services = [
//   {
//     id: 'wordpress-seo',
//     badge: 'WordPress',
//     title: 'WordPress SEO',
//     description:
//       'Most WordPress sites underperform in search not because of weak content, but because of weak foundations. We fix that — proper site architecture, clean URL structure, schema markup, XML sitemaps, meta handling, and Core Web Vitals optimisation. Every WordPress site we build ships SEO-ready by default.',
//     features: [
//       'Site architecture',
//       'Schema markup',
//       'XML sitemaps',
//       'Meta optimisation',
//       'Core Web Vitals',
//     ],
//     illustration: <WordPressSEOIllustration />,
//     flip: false,
//   },
//   {
//     id: 'woocommerce-seo',
//     badge: 'WooCommerce',
//     title: 'WooCommerce SEO',
//     description:
//       'Ecommerce SEO is different from blog SEO. Product pages, category pages, faceted navigation, duplicate content — WooCommerce creates all of these challenges. We handle product schema, category keyword targeting, breadcrumb structure, and pagination correctly so your store ranks for the searches that actually convert.',
//     features: [
//       'Product schema',
//       'Category targeting',
//       'Breadcrumb structure',
//       'Faceted nav handling',
//       'Conversion focus',
//     ],
//     illustration: <WordPressSEOIllustration />,
//     flip: true,
//   },
//   {
//     id: 'custom-ecommerce-seo',
//     badge: 'Custom Ecommerce',
//     title: 'Custom Ecommerce SEO',
//     description:
//       'For Next.js-powered stores, SEO needs to be built into the architecture from the start — not bolted on after launch. We handle server-side rendering strategy, dynamic metadata generation, structured data implementation, and performance optimisation so your custom store competes from day one.',
//     features: [
//       'SSR strategy',
//       'Dynamic metadata',
//       'Structured data',
//       'Performance-first',
//       'Crawl-friendly',
//     ],
//     illustration: <GEOIllustration />,
//     flip: false,
//   },
//   {
//     id: 'local-seo',
//     badge: 'Local',
//     title: 'Local SEO',
//     description:
//       'For Manchester businesses, showing up in local search is often the highest-value SEO investment you can make. We optimise your Google Business profile, build consistent local citations, create location-specific landing pages, and target the exact keywords your local customers are typing.',
//     features: [
//       'Google Business',
//       'Local citations',
//       'Location pages',
//       'Map pack targeting',
//       'Review management',
//     ],
//     illustration: <LocalSEOIllustration />,
//     flip: true,
//   },
//   {
//     id: 'geo',
//     badge: 'GEO',
//     title: 'Generative Engine Optimisation',
//     description:
//       "Search is changing. AI-powered answers — ChatGPT, Perplexity, Google AI Overviews — now surface before traditional results for many queries. GEO is the practice of structuring your content so it's cited by these systems. We help you position your business as the authoritative answer in your market.",
//     features: [
//       'AI citation strategy',
//       'Answer-focused content',
//       'Entity optimisation',
//       'Structured Q&A',
//       'Authority signals',
//     ],
//     illustration: <GEOIllustration />,
//     flip: false,
//   },
//   {
//     id: 'seo-ppc',
//     badge: 'SEO & PPC',
//     title: 'SEO & PPC Combined',
//     description:
//       'Organic SEO compounds over time but takes months. PPC generates traffic immediately but costs money every click. The strongest strategy uses both — PPC to fill the gap while SEO builds, and SEO data to improve PPC targeting. We align both channels around your actual business goals.',
//     features: [
//       'Google Ads',
//       'Keyword alignment',
//       'Landing page sync',
//       'Bid strategy',
//       'Conversion tracking',
//     ],
//     illustration: <PPCIllustration />,
//     flip: true,
//   },
//   {
//     id: 'google-business',
//     badge: 'Google',
//     title: 'Google Business Setup',
//     description:
//       'Your Google Business profile is often the first thing a potential customer sees. We set it up properly — all categories, attributes, services, and photos configured. We also help you build a consistent review strategy and keep the profile active with posts and updates that signal trust to Google.',
//     features: [
//       'Full profile setup',
//       'Category optimisation',
//       'Photo strategy',
//       'Review system',
//       'Regular posts',
//     ],
//     illustration: <GoogleBusinessIllustration />,
//     flip: false,
//   },
//   {
//     id: 'digital-foundation',
//     badge: 'Setup',
//     title: 'Digital Foundation',
//     description:
//       "Before any SEO work can succeed, the measurement and technical infrastructure needs to be correct. We configure GA4, Google Search Console, and GTag properly — so you know what's actually happening on your site. We also set up branded email with SPF/DKIM/DMARC and automated review collection so your online reputation builds passively.",
//     features: ['GA4 setup', 'Search Console', 'GTag / GTM', 'Branded email', 'Review automation'],
//     illustration: <DigitalFoundationIllustration />,
//     flip: true,
//   },
// ]

// const quickItems = services.map((s, i) => ({
//   icon: [
//     SiWordpress as any,
//     RiShoppingBag2Line,
//     RiCodeLine,
//     RiMapPinLine,
//     RiGlobalLine,
//     RiMoneyDollarCircleLine,
//     RiStoreLine,
//     RiDatabase2Line,
//   ][i],
//   title: s.title,
//   href: `/services/digital-marketing#${s.id}`,
//   features: s.features.slice(0, 3),
// }))

// export default function DigitalMarketingPage() {
//   return (
//     <section>
//       <PageHeader
//         title="SEO & Growth Services"
//         description="Organic growth that compounds. We build the technical and content foundation that gets Manchester businesses found on Google."
//       />

//       <Bracket fluid centered padding="small">
//         <div className="md:max-w-screen-xl mx-auto">
//           {services.map((service, i) => (
//             <ServiceSection key={service.id} {...service} flip={i % 2 !== 0} />
//           ))}

//           <QuickServicesStrip title="All SEO & Growth Services" items={quickItems} />
//         </div>
//       </Bracket>

//       <Bracket fluid centered padding="small">
//         <div className="md:max-w-screen-xl mx-auto">
//           <CTASection
//             title="Ready to Grow Your Rankings?"
//             description="SEO-first from day one. Every site we build ships with the technical foundations your rankings need."
//             primary={{ label: 'Start a project', href: '/contact' }}
//             secondary={{ label: 'See our work', href: '/work' }}
//           />
//         </div>
//       </Bracket>
//     </section>
//   )
// }

'use client'

import { useState } from 'react'
import PageHeader from '@/components/PageHeader'
import CTASection from '@/components/CTASection'
import { Bracket } from '@thirdbracket/bracketui'
import { Metadata } from 'next'
import { ServiceSection, ConcentricRings, GridDots, RadialDashes } from '../ServiceSection'
import Link from 'next/link'
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
  RiArrowRightLine,
  RiLineChartLine,
  RiTimeLine,
  RiSearchEyeLine,
  RiAwardLine,
  RiFileChartLine,
} from 'react-icons/ri'
import { SiWordpress, SiGoogleanalytics, SiGooglesearchconsole } from 'react-icons/si'

// ─── Hero Illustration — keyword research → TB mark → ranking signals ─────────
const TBMark = ({ size = 32, className = '' }: { size?: number; className?: string }) => (
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

const SEOHeroIllustration = () => (
  <div className="w-full h-full flex items-center justify-center p-4 select-none" aria-hidden>
    <svg viewBox="0 0 380 240" className="w-full h-full" fill="none">
      <GridDots cols={14} rows={9} gap={28} ox={-4} oy={4} />

      {/* Left: two inputs — search query + competitor signal */}
      {/* Search query box */}
      <rect
        x="4"
        y="50"
        width="120"
        height="52"
        rx="8"
        className="fill-primary-50 dark:fill-primary-950 stroke-primary-200 dark:stroke-primary-800"
        strokeWidth="1"
      />
      <circle cx="18" cy="64" r="3" className="fill-primary-200 dark:fill-primary-700" />
      <circle cx="27" cy="64" r="3" className="fill-primary-200 dark:fill-primary-700" />
      <circle cx="36" cy="64" r="3" className="fill-primary-200 dark:fill-primary-700" />
      <rect
        x="12"
        y="72"
        width="102"
        height="20"
        rx="4"
        className="fill-primary-100/60 dark:fill-primary-800/40 stroke-primary-200 dark:stroke-primary-700"
        strokeWidth="0.75"
      />
      <circle
        cx="22"
        cy="82"
        r="5"
        className="fill-none stroke-primary-400 dark:stroke-primary-600"
        strokeWidth="1.2"
      />
      <line
        x1="26"
        y1="86"
        x2="29"
        y2="89"
        className="stroke-primary-400 dark:stroke-primary-600"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <text
        x="36"
        y="85"
        fontSize="8"
        className="fill-primary-500 dark:fill-primary-400"
        fontFamily="monospace"
      >
        web design mcr
      </text>

      {/* Ranking signal box */}
      <rect
        x="4"
        y="136"
        width="120"
        height="52"
        rx="8"
        className="fill-primary-50 dark:fill-primary-950 stroke-primary-200 dark:stroke-primary-800"
        strokeWidth="1"
      />
      <circle cx="18" cy="150" r="3" className="fill-primary-200 dark:fill-primary-700" />
      <circle cx="27" cy="150" r="3" className="fill-primary-200 dark:fill-primary-700" />
      <circle cx="36" cy="150" r="3" className="fill-primary-200 dark:fill-primary-700" />
      {/* Mini bar chart */}
      {[14, 22, 18, 30, 26, 38].map((h, i) => (
        <rect
          key={i}
          x={14 + i * 14}
          y={190 - h}
          width="9"
          height={h}
          rx="1.5"
          className={
            i === 5
              ? 'fill-accent-500/80 dark:fill-accent-400/70'
              : 'fill-primary-200 dark:fill-primary-700'
          }
        />
      ))}

      {/* Converging dashed lines → TB mark */}
      <path
        d="M124 76 Q152 76 158 120"
        className="stroke-primary-300 dark:stroke-primary-700"
        strokeWidth="1.2"
        strokeDasharray="3 3"
        fill="none"
      />
      <path
        d="M124 162 Q152 162 158 120"
        className="stroke-primary-300 dark:stroke-primary-700"
        strokeWidth="1.2"
        strokeDasharray="3 3"
        fill="none"
      />

      {/* TB mark — raw, no container */}
      <g transform="translate(142, 104) scale(0.038)">
        <path
          d="m56.332 0c-31.266 0.28956-56.33 25.554-56.33 56.888v686.22c0 31.343 25.112 56.615 56.387 56.89h576.27l-335.33-160.72v-478.55l335.33-160.72zm743.62 56.442-363.4 183.22 1.3358 322.17 362.11 181.73v-685.72c-0.01-0.46391 0-0.928 0-1.3891z"
          className="fill-primary-900 dark:fill-primary-100"
        />
      </g>

      {/* Branching lines → output containers */}
      <path
        d="M174 120 Q200 120 220 72"
        className="stroke-primary-400 dark:stroke-primary-600"
        strokeWidth="1.2"
        fill="none"
      />
      <path
        d="M174 120 Q200 120 220 168"
        className="stroke-primary-400 dark:stroke-primary-600"
        strokeWidth="1.2"
        fill="none"
      />

      {/* Organic SEO container */}
      <rect
        x="220"
        y="26"
        width="152"
        height="88"
        rx="10"
        className="fill-primary-50 dark:fill-primary-950 stroke-primary-200 dark:stroke-primary-800"
        strokeWidth="1"
      />
      <g transform="translate(232, 38)">
        <rect width="128" height="20" rx="4" className="fill-primary-900 dark:fill-primary-100" />
        <text
          x="10"
          y="14"
          fontSize="9"
          fontWeight="700"
          fontFamily="monospace"
          className="fill-white dark:fill-black"
        >
          Organic SEO
        </text>
        <circle cx="100" cy="10" r="2.5" className="fill-white/40 dark:fill-black/40" />
        <circle cx="108" cy="10" r="2.5" className="fill-white/40 dark:fill-black/40" />
        <circle cx="116" cy="10" r="2.5" className="fill-white/40 dark:fill-black/40" />
      </g>
      {['Local SEO', 'Technical SEO', 'GEO', 'WordPress SEO'].map((f, i) => (
        <g key={f} transform={`translate(232, ${64 + i * 10})`}>
          <circle cx="4" cy="4" r="2" className="fill-accent-500 dark:fill-accent-400" />
          <text x="10" y="7.5" fontSize="7.5" className="fill-primary-600 dark:fill-primary-400">
            {f}
          </text>
        </g>
      ))}

      {/* Growth container */}
      <rect
        x="220"
        y="122"
        width="152"
        height="88"
        rx="10"
        className="fill-primary-50 dark:fill-primary-950 stroke-primary-200 dark:stroke-primary-800"
        strokeWidth="1"
      />
      <g transform="translate(232, 134)">
        <rect width="128" height="20" rx="4" className="fill-primary-700 dark:fill-primary-300" />
        <text
          x="10"
          y="14"
          fontSize="9"
          fontWeight="700"
          fontFamily="monospace"
          className="fill-white dark:fill-black"
        >
          Paid & Growth
        </text>
        <circle cx="100" cy="10" r="2.5" className="fill-white/40 dark:fill-black/40" />
        <circle cx="108" cy="10" r="2.5" className="fill-white/40 dark:fill-black/40" />
        <circle cx="116" cy="10" r="2.5" className="fill-white/40 dark:fill-black/40" />
      </g>
      {['SEO & PPC', 'Google Business', 'Digital Foundation', 'GEO'].map((f, i) => (
        <g key={f} transform={`translate(232, ${160 + i * 10})`}>
          <circle cx="4" cy="4" r="2" className="fill-primary-400 dark:fill-primary-600" />
          <text x="10" y="7.5" fontSize="7.5" className="fill-primary-600 dark:fill-primary-400">
            {f}
          </text>
        </g>
      ))}

      {/* Compounds over time badge */}
      <g transform="translate(248, 218)">
        <rect
          width="124"
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
          Compounds over time
        </text>
      </g>
    </svg>
  </div>
)

// ─── Service illustrations (untouched) ────────────────────────────────────────

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

// ─── Approach steps ───────────────────────────────────────────────────────────

const approachSteps = [
  {
    icon: RiSearchEyeLine,
    number: '01',
    title: 'Audit & baseline',
    body: 'We audit your current rankings, crawl health, backlink profile, and competitors before touching anything. You need to know where you actually stand before you can measure progress.',
  },
  {
    icon: RiFileChartLine,
    number: '02',
    title: 'Campaign strategy',
    body: 'We define the target keywords, content gaps, and quick wins specific to your market. Manchester businesses get local strategy, not a generic template.',
  },
  {
    icon: RiCodeLine,
    number: '03',
    title: 'Technical foundation',
    body: 'On-page, schema, crawlability, Core Web Vitals — the technical layer gets fixed first. Rankings built on weak foundations do not hold.',
  },
  {
    icon: RiLineChartLine,
    number: '04',
    title: 'Content & authority',
    body: 'Keyword-led content, internal linking, and backlink strategy that builds topical authority over time. SEO that compounds, not spikes.',
  },
  {
    icon: RiAwardLine,
    number: '05',
    title: 'Measure & iterate',
    body: 'Monthly reporting on what actually moved — rankings, traffic, leads. We adjust based on data, not instinct.',
  },
]

// ─── FAQ ──────────────────────────────────────────────────────────────────────

const seoFaqData = [
  {
    question: 'How long does SEO take to show results?',
    answer:
      'Honest answer: 3 to 6 months for meaningful organic movement, depending on your starting point and how competitive the keywords are. Local SEO and technical fixes can show faster results. Anyone promising page one in 30 days is not worth your money.',
  },
  {
    question: 'Do you guarantee first page rankings?',
    answer:
      'No — and you should be suspicious of anyone who does. We guarantee the work gets done properly: technical foundations solid, content strategy sound, reporting transparent. Rankings follow from that.',
  },
  {
    question: 'What is GEO and do I need it?',
    answer:
      'Generative Engine Optimisation is about structuring your content to appear in AI-powered search results — ChatGPT, Perplexity, Google AI Overviews. If your customers are using AI to research before buying, you want to be in those answers. We think most B2B and local service businesses should be paying attention to this now.',
  },
  {
    question: 'Do you do SEO for WordPress and WooCommerce specifically?',
    answer:
      'Yes — and it matters. WordPress and WooCommerce have specific technical SEO challenges (plugin conflicts, duplicate content, slow load times from shared hosting) that require a different approach from headless or custom-built sites. We build WordPress sites and we do SEO on them, so we understand both sides.',
  },
  {
    question: 'Is Local SEO different from regular SEO?',
    answer:
      'Yes. Local SEO targets people searching in a specific area — "web design agency Manchester" rather than just "web design agency". It involves Google Business optimisation, local citations, location-specific landing pages, and different keyword targeting. If you serve a geographic area, local SEO is usually the highest-return investment.',
  },
  {
    question: 'Can you fix our existing site rather than rebuild it for SEO?',
    answer:
      'Usually yes. Most SEO problems are fixable on an existing site without a full rebuild — wrong meta structure, slow load times, poor internal linking, missing schema. We audit first and tell you what actually needs changing before recommending anything drastic.',
  },
]

// ─── SEO ecosystem data ───────────────────────────────────────────────────────

const organicFeatures = [
  { icon: RiSearchLine, text: 'Keyword research specific to Manchester and UK markets' },
  { icon: RiCodeLine, text: 'Technical SEO built into every WordPress and Next.js build' },
  {
    icon: RiMapPinLine,
    text: 'Local SEO and Google Business optimisation for area-based searches',
  },
  { icon: RiGlobalLine, text: 'GEO — structured content for AI-powered search results' },
  {
    icon: RiCheckLine,
    text: 'Content strategy that targets buyer-intent keywords, not just traffic',
  },
]

const paidGrowthFeatures = [
  { icon: RiMoneyDollarCircleLine, text: 'Google Ads aligned with your organic keyword strategy' },
  {
    icon: RiBarChartLine,
    text: 'PPC fills the gap while organic builds — faster results, lower waste',
  },
  {
    icon: RiDatabase2Line,
    text: 'GA4, Search Console, GTag configured so you know what is working',
  },
  {
    icon: RiStoreLine,
    text: 'Google Business setup and review automation for local trust signals',
  },
  {
    icon: RiCheckLine,
    text: 'Monthly reporting on rankings, traffic, and actual leads — not vanity metrics',
  },
]

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

export default function DigitalMarketingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div>
      <PageHeader
        title="SEO & Growth Services"
        description="Organic growth that compounds. We build the technical and content foundation that gets Manchester businesses found on Google."
      />

      {/* Hero illustration + two-column ecosystem */}
      <section className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem]">
        <Bracket fluid centered padding="small">
          <div className="md:max-w-screen-xl mx-auto">
            {/* Two-col: illustration left, heading right */}
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 lg:mb-20">
              <div className="w-full aspect-[4/3] max-w-lg mx-auto lg:max-w-none">
                <SEOHeroIllustration />
              </div>
              <div>
                <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold leading-tight bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-5">
                  SEO that compounds, not spikes
                </h2>
                <p className="text-[clamp(0.9rem,1.4vw,1.05rem)] text-primary-500 dark:text-primary-400 leading-[1.8] mb-5">
                  Most SEO agencies sell you a monthly retainer and a ranking report. We build the
                  actual foundation — technical infrastructure, content architecture, and local
                  signals — that makes rankings stick.
                </p>
                <p className="text-[clamp(0.88rem,1.3vw,1rem)] text-primary-500 dark:text-primary-400 leading-[1.75]">
                  We work in two tracks: organic SEO that builds over time, and paid growth that
                  fills the gap while it does. Both aligned around one goal — leads, not just
                  traffic.
                </p>
              </div>
            </div>

            {/* Two-col: Organic SEO + Paid Growth */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 divide-y lg:divide-y-0 lg:divide-x divide-dashed divide-primary-200 dark:divide-primary-800">
              {/* Organic SEO */}
              <div className="pb-12 lg:pb-0 lg:pr-14">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary-900 dark:bg-primary-100 flex items-center justify-center shadow-sm flex-shrink-0">
                    <RiSearchLine size={26} className="text-white dark:text-black" />
                  </div>
                  <div>
                    <h3 className="text-[1.15rem] font-extrabold text-primary-900 dark:text-primary-50 leading-tight mb-1">
                      Organic SEO
                    </h3>
                    <p className="text-[0.8rem] text-primary-500 dark:text-primary-400 leading-relaxed">
                      Technical foundations, content strategy, and local signals that build rankings
                      that last
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {organicFeatures.map(({ icon: Icon, text }) => (
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
                  Start with an SEO audit <RiArrowRightLine size={14} />
                </Link>
              </div>

              {/* Paid & Growth */}
              <div className="pt-12 lg:pt-0 lg:pl-14">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary-900 dark:bg-primary-100 flex items-center justify-center shadow-sm flex-shrink-0">
                    <RiLineChartLine size={26} className="text-white dark:text-black" />
                  </div>
                  <div>
                    <h3 className="text-[1.15rem] font-extrabold text-primary-900 dark:text-primary-50 leading-tight mb-1">
                      Paid & Growth
                    </h3>
                    <p className="text-[0.8rem] text-primary-500 dark:text-primary-400 leading-relaxed">
                      PPC, Google Business, and digital infrastructure that drives leads while
                      organic builds
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {paidGrowthFeatures.map(({ icon: Icon, text }) => (
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
                  Discuss your growth goals <RiArrowRightLine size={14} />
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

      {/* Approach */}
      <section className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem] border-t border-primary-100 dark:border-primary-900/50">
        <Bracket fluid centered padding="small">
          <div className="md:max-w-screen-xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 items-start">
              <div className="lg:sticky lg:top-28">
                <h2 className="text-[clamp(1.4rem,2.8vw,2rem)] font-extrabold leading-tight bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-4">
                  Our SEO approach
                </h2>
                <p className="text-[clamp(0.88rem,1.3vw,1rem)] text-primary-500 dark:text-primary-400 leading-[1.75] mb-6">
                  Campaign-led. Result-specific. No vanity metrics.
                </p>
                <div className="hidden lg:flex items-center justify-center w-28 h-28 relative">
                  <svg viewBox="0 0 112 112" className="absolute inset-0 w-full h-full" aria-hidden>
                    <ConcentricRings cx={56} cy={56} accentClass="text-accent-500" />
                  </svg>
                  <div className="w-10 h-10 rounded-full bg-primary-900 dark:bg-primary-100 flex items-center justify-center z-10">
                    <RiLineChartLine size={16} className="text-white dark:text-black" />
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute left-[19px] top-6 bottom-6 w-px border-l border-dashed border-primary-200 dark:border-primary-800" />
                <div className="flex flex-col gap-10">
                  {approachSteps.map((step, i) => (
                    <div key={i} className="flex gap-6 relative">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-50 dark:bg-primary-950 border border-primary-200 dark:border-primary-800 flex items-center justify-center z-10">
                        <step.icon size={15} className="text-accent-500 dark:text-accent-400" />
                      </div>
                      <div className="pt-1 pb-2">
                        <div className="flex items-baseline gap-2 mb-1.5">
                          <span className="text-[10px] font-mono font-bold text-accent-500 dark:text-accent-400">
                            {step.number}
                          </span>
                          <h3 className="text-[0.95rem] font-bold text-primary-900 dark:text-primary-50">
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

      {/* FAQ */}
      <section className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem] border-t border-primary-100 dark:border-primary-900/50">
        <Bracket fluid centered padding="small">
          <div className="md:max-w-screen-xl mx-auto">
            <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] leading-tight font-extrabold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text text-center mb-12 lg:mb-14">
              Common questions
            </h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              {seoFaqData.map((item, i) => (
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

      {/* CTA */}
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
    </div>
  )
}
