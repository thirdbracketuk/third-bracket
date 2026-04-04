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
//   RiLayout2Line,
//   RiBracesLine,
//   RiShoppingCart2Line,
//   RiRefreshLine,
//   RiToolsLine,
//   RiSpeedLine,
//   RiExchangeLine,
//   RiCodeLine,
//   RiServerLine,
//   RiCheckLine,
//   RiRocketLine,
//   RiSearchLine,
//   RiShieldLine,
//   RiGlobalLine,
// } from 'react-icons/ri'
// import { SiNextdotjs, SiWordpress } from 'react-icons/si'

// export const metadata: Metadata = {
//   title: 'Website Design & Ecommerce Development Manchester | thirdbracket',
//   description:
//     'Bespoke web design and ecommerce development for Manchester businesses. Next.js and WordPress specialists. SEO-first builds, fast delivery, no vendor lock-in.',
//   openGraph: {
//     title: 'Web Design & Ecommerce Development Manchester | thirdbracket',
//     description:
//       'Custom websites and online stores for Manchester SMEs and startups. Built on Next.js or WordPress, SEO-ready from day one, delivered without the agency overhead.',
//   },
// }

// // ─── Illustrations ────────────────────────────────────────────────────────────

// const BespokeDesignIllustration = () => (
//   <div className="relative w-full h-full flex items-center justify-center p-6">
//     <svg viewBox="0 0 200 150" className="absolute inset-0 w-full h-full" aria-hidden>
//       <GridDots cols={8} rows={6} gap={26} ox={8} oy={8} />
//       {/* Bracket motifs */}
//       <path
//         d="M52 28 L42 28 L42 122 L52 122"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="text-accent-500/35 dark:text-accent-400/30"
//       />
//       <path
//         d="M148 28 L158 28 L158 122 L148 122"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="text-accent-500/35 dark:text-accent-400/30"
//       />
//     </svg>
//     {/* Stacked UI panels */}
//     <div className="relative z-10 flex flex-col items-center gap-2 w-36">
//       <div className="w-full h-7 rounded-lg bg-primary-100/50 dark:bg-primary-800/30 border border-primary-200/70 dark:border-primary-700/50 translate-y-1 scale-95 flex items-center px-3 gap-2">
//         <div className="w-2.5 h-2.5 rounded-sm bg-accent-400/40" />
//         <div className="flex-1 h-1 rounded-full bg-primary-300/30 dark:bg-primary-600/30" />
//       </div>
//       <div className="w-full h-7 rounded-lg bg-primary-50 dark:bg-primary-900 border border-primary-200 dark:border-primary-700 shadow-sm flex items-center px-3 gap-2 -mt-2">
//         <div className="w-2.5 h-2.5 rounded-sm bg-accent-500/50" />
//         <div className="flex-1 h-1 rounded-full bg-primary-200/50 dark:bg-primary-700/50" />
//         <div className="w-5 h-1 rounded-full bg-accent-300/40" />
//       </div>
//       <div className="w-full h-9 rounded-xl bg-white dark:bg-black border border-primary-200 dark:border-primary-700 shadow-md flex items-center px-3 gap-2 -mt-2 ring-1 ring-accent-500/15">
//         <div className="w-5 h-5 rounded-md bg-accent-500 dark:bg-accent-400 flex items-center justify-center flex-shrink-0">
//           <RiBracesLine size={10} className="text-white dark:text-black" />
//         </div>
//         <div className="flex-1">
//           <div className="h-1 w-12 rounded-full bg-primary-200 dark:bg-primary-700 mb-1" />
//           <div className="h-1 w-8 rounded-full bg-primary-100 dark:bg-primary-800" />
//         </div>
//         <RiCheckLine size={11} className="text-accent-500 dark:text-accent-400" />
//       </div>
//     </div>
//     <div className="absolute bottom-3 right-4 flex items-center gap-1 bg-primary-50 dark:bg-primary-950 border border-primary-100 dark:border-primary-800 rounded-full px-2 py-0.5">
//       <span className="text-[9px] font-medium text-primary-500 dark:text-primary-400">
//         No templates
//       </span>
//     </div>
//   </div>
// )

// const NextJsIllustration = () => (
//   <div className="relative w-full h-full flex items-center justify-center p-6">
//     <svg viewBox="0 0 200 150" className="absolute inset-0 w-full h-full" aria-hidden>
//       <ConcentricRings cx={100} cy={75} accentClass="text-primary-400" />
//       {/* Speed lines */}
//       <line
//         x1="20"
//         y1="50"
//         x2="58"
//         y2="50"
//         stroke="currentColor"
//         strokeWidth="1"
//         strokeLinecap="round"
//         className="text-accent-500/25"
//       />
//       <line
//         x1="14"
//         y1="62"
//         x2="52"
//         y2="62"
//         stroke="currentColor"
//         strokeWidth="0.7"
//         strokeLinecap="round"
//         className="text-accent-500/18"
//       />
//       <line
//         x1="20"
//         y1="74"
//         x2="58"
//         y2="74"
//         stroke="currentColor"
//         strokeWidth="1"
//         strokeLinecap="round"
//         className="text-accent-500/25"
//       />
//     </svg>
//     <div className="relative z-10 flex flex-col items-center gap-4">
//       <div className="w-14 h-14 rounded-2xl bg-black dark:bg-white border border-primary-200 dark:border-primary-800 shadow-md flex items-center justify-center">
//         <SiNextdotjs size={28} className="text-white dark:text-black" />
//       </div>
//       <div className="flex flex-col gap-1.5 items-center">
//         {['App Router', 'Edge Runtime', 'ISR & SSG'].map((label) => (
//           <div
//             key={label}
//             className="flex items-center gap-1.5 bg-primary-50 dark:bg-primary-950 border border-primary-100 dark:border-primary-800 rounded-full px-2.5 py-0.5"
//           >
//             <RiRocketLine size={9} className="text-accent-500 dark:text-accent-400 flex-shrink-0" />
//             <span className="text-[9px] font-medium text-primary-600 dark:text-primary-400">
//               {label}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// )

// const WordPressIllustration = () => (
//   <div className="relative w-full h-full flex items-center justify-center p-6">
//     <svg viewBox="0 0 200 150" className="absolute inset-0 w-full h-full" aria-hidden>
//       <GridDots cols={7} rows={5} gap={28} ox={14} oy={14} />
//     </svg>
//     <div className="relative z-10 flex flex-col items-center gap-4">
//       <div className="w-14 h-14 rounded-2xl bg-primary-50 dark:bg-primary-950 border border-primary-200 dark:border-primary-800 shadow-md flex items-center justify-center">
//         <SiWordpress size={28} className="text-primary-700 dark:text-primary-300" />
//       </div>
//       <div className="flex flex-col gap-1.5 items-center">
//         {['Custom themes', 'ACF integration', 'Easy to manage'].map((label) => (
//           <div
//             key={label}
//             className="flex items-center gap-1.5 bg-primary-50 dark:bg-primary-950 border border-primary-100 dark:border-primary-800 rounded-full px-2.5 py-0.5"
//           >
//             <RiCheckLine size={9} className="text-accent-500 dark:text-accent-400 flex-shrink-0" />
//             <span className="text-[9px] font-medium text-primary-600 dark:text-primary-400">
//               {label}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// )

// const EcommerceIllustration = () => (
//   <div className="relative w-full h-full flex items-center justify-center p-6">
//     <svg viewBox="0 0 200 150" className="absolute inset-0 w-full h-full" aria-hidden>
//       <RadialDashes cx={100} cy={75} r1={52} r2={62} accentClass="text-accent-500" />
//     </svg>
//     <div className="relative z-10 flex flex-col items-center gap-3">
//       <div className="w-14 h-14 rounded-2xl bg-primary-50 dark:bg-primary-950 border border-primary-200 dark:border-primary-800 shadow-md flex items-center justify-center">
//         <RiShoppingCart2Line size={26} className="text-accent-500 dark:text-accent-400" />
//       </div>
//       {/* Mini product cards */}
//       <div className="flex gap-2">
//         {[1, 2].map((i) => (
//           <div
//             key={i}
//             className="w-16 rounded-lg bg-white dark:bg-black border border-primary-100 dark:border-primary-800 p-2 shadow-sm"
//           >
//             <div className="w-full h-6 rounded-md bg-primary-100 dark:bg-primary-800 mb-1.5" />
//             <div className="h-1 w-10 rounded-full bg-primary-200 dark:bg-primary-700 mb-1" />
//             <div className="h-1.5 w-6 rounded-full bg-accent-400/60" />
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// )

// const OptimisationIllustration = () => (
//   <div className="relative w-full h-full flex items-center justify-center p-6">
//     <svg viewBox="0 0 200 150" className="absolute inset-0 w-full h-full" aria-hidden>
//       <GridDots cols={7} rows={5} gap={28} ox={14} oy={14} />
//     </svg>
//     <div className="relative z-10 flex flex-col items-center gap-3 w-full max-w-[140px]">
//       {/* Speed gauge bars */}
//       {[
//         { label: 'LCP', pct: 92, color: 'bg-green-500/70' },
//         { label: 'FID', pct: 97, color: 'bg-accent-500/70' },
//         { label: 'CLS', pct: 88, color: 'bg-green-400/70' },
//       ].map(({ label, pct, color }) => (
//         <div key={label} className="w-full flex items-center gap-2">
//           <span className="text-[9px] font-mono font-medium text-primary-500 dark:text-primary-400 w-6">
//             {label}
//           </span>
//           <div className="flex-1 h-2 rounded-full bg-primary-100 dark:bg-primary-800 overflow-hidden">
//             <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
//           </div>
//           <span className="text-[9px] font-medium text-primary-600 dark:text-primary-400 w-5 text-right">
//             {pct}
//           </span>
//         </div>
//       ))}
//       <div className="mt-1 flex items-center gap-1 bg-green-50 dark:bg-green-950/30 border border-green-200/60 dark:border-green-700/40 rounded-full px-2 py-0.5">
//         <RiCheckLine size={9} className="text-green-600 dark:text-green-400" />
//         <span className="text-[9px] font-medium text-green-700 dark:text-green-400">
//           Core Web Vitals pass
//         </span>
//       </div>
//     </div>
//   </div>
// )

// const MigrationIllustration = () => (
//   <div className="relative w-full h-full flex items-center justify-center p-6">
//     <svg viewBox="0 0 200 150" className="absolute inset-0 w-full h-full" aria-hidden>
//       <GridDots cols={7} rows={5} gap={28} ox={14} oy={14} />
//       {/* Arrow */}
//       <path
//         d="M60 75 L140 75"
//         stroke="currentColor"
//         strokeWidth="1.5"
//         strokeDasharray="4 3"
//         className="text-accent-500/30"
//       />
//       <path
//         d="M132 68 L142 75 L132 82"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.5"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="text-accent-500/40"
//       />
//     </svg>
//     <div className="relative z-10 flex items-center gap-4">
//       <div className="w-12 h-12 rounded-xl bg-primary-100/70 dark:bg-primary-800/50 border border-primary-200 dark:border-primary-700 flex items-center justify-center">
//         <RiServerLine size={20} className="text-primary-500 dark:text-primary-400" />
//       </div>
//       <div className="w-12 h-12 rounded-xl bg-black dark:bg-white border border-primary-200 dark:border-primary-800 shadow-md flex items-center justify-center">
//         <SiNextdotjs size={20} className="text-white dark:text-black" />
//       </div>
//     </div>
//     <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-primary-50 dark:bg-primary-950 border border-primary-100 dark:border-primary-800 rounded-full px-2 py-0.5">
//       <span className="text-[9px] font-medium text-primary-500 dark:text-primary-400">
//         Zero data loss
//       </span>
//     </div>
//   </div>
// )

// const RepairIllustration = () => (
//   <div className="relative w-full h-full flex items-center justify-center p-6">
//     <svg viewBox="0 0 200 150" className="absolute inset-0 w-full h-full" aria-hidden>
//       <RadialDashes cx={100} cy={75} r1={48} r2={56} accentClass="text-primary-400" />
//     </svg>
//     <div className="relative z-10 flex flex-col items-center gap-3">
//       <div className="w-14 h-14 rounded-2xl bg-primary-50 dark:bg-primary-950 border border-primary-200 dark:border-primary-800 shadow-md flex items-center justify-center relative">
//         <RiToolsLine size={24} className="text-primary-700 dark:text-primary-300" />
//         <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-green-500 border-2 border-white dark:border-black flex items-center justify-center">
//           <RiCheckLine size={9} className="text-white" />
//         </div>
//       </div>
//       <div className="flex flex-col gap-1 items-start">
//         {['Bug diagnosed', 'Fix deployed', 'Documented'].map((s) => (
//           <div key={s} className="flex items-center gap-1.5">
//             <RiCheckLine size={9} className="text-green-500 flex-shrink-0" />
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
//     id: 'bespoke-web-design',
//     badge: 'Design',
//     title: 'Bespoke Web Design',
//     description:
//       'We design every website from scratch around your brand, not from a template library. The result is a site that looks and feels like yours — not like everyone else in your industry. We work within your visual identity or help you build one, crafting layouts that guide visitors toward the actions that matter.',
//     features: [
//       'No templates',
//       'Brand-aligned layouts',
//       'Mobile-first',
//       'Figma to code',
//       'BracketUI components',
//     ],
//     illustration: <BespokeDesignIllustration />,
//     flip: false,
//   },
//   {
//     id: 'bespoke-web-development',
//     badge: 'Development',
//     title: 'Bespoke Web Development',
//     description:
//       "When off-the-shelf platforms aren't enough, we build from the ground up. Custom portals, admin dashboards, booking systems, multi-step forms — whatever your business logic requires. We work exclusively in Next.js and WordPress ecosystems, so every build is fast, maintainable and built on a stack that scales.",
//     features: [
//       'Next.js or WordPress',
//       'Custom business logic',
//       'REST & CMS integration',
//       'Admin panels',
//       'TypeScript',
//     ],
//     illustration: <NextJsIllustration />,
//     flip: true,
//   },
//   {
//     id: 'wordpress-development',
//     badge: 'WordPress',
//     title: 'WordPress Development',
//     description:
//       'For businesses that need to manage their own content without needing a developer, we build clean, fast WordPress sites. No bloated themes, no unnecessary plugins. Just a well-structured CMS that you can actually use — and that ranks well because the code underneath is solid.',
//     features: [
//       'Custom themes',
//       'ACF integration',
//       'Plugin development',
//       'Performance tuning',
//       'WooCommerce ready',
//     ],
//     illustration: <WordPressIllustration />,
//     flip: false,
//   },
//   {
//     id: 'ecommerce-development',
//     badge: 'Ecommerce',
//     title: 'E-commerce Development',
//     description:
//       'We build online stores that convert. Whether you need WooCommerce on WordPress or a custom Next.js storefront, we handle everything from product catalogue structure to checkout flow. Every store ships with mobile-first design, fast load times, and the technical foundations to rank for product and category keywords.',
//     features: [
//       'WooCommerce',
//       'Custom Next.js stores',
//       'Checkout optimisation',
//       'Inventory management',
//       'Conversion-focused',
//     ],
//     illustration: <EcommerceIllustration />,
//     flip: true,
//   },
//   {
//     id: 'website-redesign',
//     badge: 'Redesign',
//     title: 'Website Redesign',
//     description:
//       "If your current site looks dated, loads slowly, or isn't converting visitors, a redesign is likely overdue. We audit what you have, keep what works, and rebuild the rest properly. Code-first approach, improved UX, faster performance, and a design that reflects where your business is today.",
//     features: [
//       'Full audit first',
//       'Code-first rebuild',
//       'UX improvements',
//       'Performance gains',
//       'SEO preservation',
//     ],
//     illustration: <BespokeDesignIllustration />,
//     flip: false,
//   },
//   {
//     id: 'website-optimisation',
//     badge: 'Performance',
//     title: 'Website Optimisation',
//     description:
//       "Slow websites lose visitors and rankings. We audit your site against Core Web Vitals, Lighthouse scores, and Google's performance benchmarks, then fix what's holding you back. From image optimisation and caching strategy to server configuration and code splitting — we address every layer.",
//     features: [
//       'Core Web Vitals',
//       'Lighthouse audit',
//       'Image optimisation',
//       'Caching strategy',
//       'Code splitting',
//     ],
//     illustration: <OptimisationIllustration />,
//     flip: true,
//   },
//   {
//     id: 'website-migration',
//     badge: 'Migration',
//     title: 'Website Migration',
//     description:
//       "Moving from an old platform to a modern stack doesn't have to be painful. We handle platform migrations with zero data loss and minimal downtime — whether you're moving from legacy CMS to WordPress, or from WordPress to Next.js. All redirects, SEO equity, and content preserved.",
//     features: [
//       'Zero data loss',
//       'SEO equity preserved',
//       'Redirect mapping',
//       'Zero downtime',
//       'Full documentation',
//     ],
//     illustration: <MigrationIllustration />,
//     flip: false,
//   },
//   {
//     id: 'website-repair',
//     badge: 'Support',
//     title: 'Website Repair',
//     description:
//       'Broken builds, plugin conflicts, layout issues, security vulnerabilities — we diagnose and fix quickly. We work on both Next.js and WordPress sites, document what we find and what we changed, and leave the site in better shape than we found it.',
//     features: [
//       'Next.js & WordPress',
//       'Security fixes',
//       'Plugin conflicts',
//       'Deployment issues',
//       'Full documentation',
//     ],
//     illustration: <RepairIllustration />,
//     flip: true,
//   },
// ]

// const quickItems = services.map((s) => ({
//   icon: [
//     RiLayout2Line,
//     RiCodeLine,
//     SiWordpress as any,
//     RiShoppingCart2Line,
//     RiRefreshLine,
//     RiSpeedLine,
//     RiExchangeLine,
//     RiToolsLine,
//   ][services.indexOf(s)],
//   title: s.title,
//   href: `/services/web-development#${s.id}`,
//   features: s.features.slice(0, 3),
// }))

// export default function WebDevelopmentPage() {
//   return (
//     <section>
//       <PageHeader
//         title="Website & Ecommerce Development"
//         description="Bespoke websites and online stores for Manchester businesses. Built on Next.js or WordPress, SEO-ready from day one, delivered without the agency overhead."
//       />

//       <Bracket fluid centered padding="small">
//         <div className="md:max-w-screen-xl mx-auto">
//           {services.map((service, i) => (
//             <ServiceSection key={service.id} {...service} flip={i % 2 !== 0} />
//           ))}

//           <QuickServicesStrip title="All Web & Ecommerce Services" items={quickItems} />
//         </div>
//       </Bracket>

//       <Bracket fluid centered padding="small">
//         <div className="md:max-w-screen-xl mx-auto">
//           <CTASection
//             title="Ready to Build Your Website?"
//             description="We build brands, not just websites. SEO-first, agency-quality work without the agency price tag."
//             primary={{ label: 'Start a project', href: '/contact' }}
//             secondary={{ label: 'See our work', href: '/work' }}
//           />
//         </div>
//       </Bracket>
//     </section>
//   )
// }

'use client'

import Link from 'next/link'
import { useState, useRef } from 'react'
import PageHeader from '@/components/PageHeader'
import CTASection from '@/components/CTASection'
import { Bracket } from '@thirdbracket/bracketui'
import {
  RiNextjsLine,
  RiWordpressLine,
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
  RiLightbulbLine,
  RiMoneyDollarCircleLine,
} from 'react-icons/ri'
import { SlLayers } from 'react-icons/sl'
import { LiaHandshake } from 'react-icons/lia'
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
import { ConcentricRings, GridDots, RadialDashes } from '../ServiceSection'

// ─── Hero Illustration (deploy flow) ─────────────────────────────────────────
// const HeroIllustration = () => (
//   <div className="w-full h-full flex items-center justify-center p-6 select-none" aria-hidden>
//     <svg viewBox="0 0 340 220" className="w-full h-full" fill="none">
//       {/* Grid dots */}
//       <GridDots cols={13} rows={8} gap={28} ox={-6} oy={4} />

//       {/* git push terminal */}
//       <rect
//         x="4"
//         y="72"
//         width="110"
//         height="52"
//         rx="8"
//         className="fill-primary-50 dark:fill-primary-950 stroke-primary-200 dark:stroke-primary-800"
//         strokeWidth="1"
//       />
//       <circle cx="18" cy="86" r="3" className="fill-primary-200 dark:fill-primary-700" />
//       <circle cx="28" cy="86" r="3" className="fill-primary-200 dark:fill-primary-700" />
//       <circle cx="38" cy="86" r="3" className="fill-primary-200 dark:fill-primary-700" />
//       <path d="M14 103 L18 98 L22 103 Z" className="fill-accent-500 dark:fill-accent-400" />
//       <text
//         x="26"
//         y="104"
//         fontSize="9"
//         fontFamily="monospace"
//         className="fill-primary-600 dark:fill-primary-300"
//       >
//         ~ git push
//       </text>

//       {/* dashed connector */}
//       <line
//         x1="114"
//         y1="98"
//         x2="156"
//         y2="98"
//         className="stroke-primary-300 dark:stroke-primary-700"
//         strokeWidth="1.2"
//         strokeDasharray="3 3"
//       />
//       <path
//         d="M152 94 L158 98 L152 102"
//         className="stroke-primary-400 dark:stroke-primary-600"
//         strokeWidth="1.2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />

//       {/* Deploy node box */}
//       <rect
//         x="158"
//         y="60"
//         width="110"
//         height="76"
//         rx="8"
//         className="fill-primary-50 dark:fill-primary-950 stroke-primary-200 dark:stroke-primary-800"
//         strokeWidth="1"
//       />
//       <circle cx="213" cy="98" r="16" className="fill-primary-900 dark:fill-primary-100" />
//       <path d="M207 104 L213 89 L219 104 Z" className="fill-white dark:fill-black" />

//       {/* Branching lines */}
//       <path
//         d="M229 98 Q258 98 270 72"
//         className="stroke-red-400 dark:stroke-red-500"
//         strokeWidth="1.8"
//         strokeLinecap="round"
//         fill="none"
//       />
//       <line
//         x1="229"
//         y1="98"
//         x2="272"
//         y2="98"
//         className="stroke-emerald-400 dark:stroke-emerald-500"
//         strokeWidth="1.8"
//         strokeLinecap="round"
//       />
//       <path
//         d="M229 98 Q258 98 270 124"
//         className="stroke-blue-400 dark:stroke-blue-500"
//         strokeWidth="1.8"
//         strokeLinecap="round"
//         fill="none"
//       />

//       {/* Lock icons */}
//       {[72, 98, 124].map((y, i) => (
//         <g key={i}>
//           <rect
//             x="272"
//             y={y - 9}
//             width="18"
//             height="18"
//             rx="4"
//             className="fill-primary-50 dark:fill-primary-950 stroke-primary-200 dark:stroke-primary-800"
//             strokeWidth="1"
//           />
//           <rect
//             x="276"
//             y={y - 3}
//             width="10"
//             height="7"
//             rx="2"
//             className="fill-none stroke-primary-400 dark:stroke-primary-600"
//             strokeWidth="1"
//           />
//           <rect
//             x="278"
//             y={y + 1}
//             width="6"
//             height="5"
//             rx="1"
//             className="fill-primary-200 dark:fill-primary-700"
//           />
//         </g>
//       ))}

//       {/* Device circles */}
//       {[72, 98, 124].map((y, i) => (
//         <g key={i}>
//           <rect
//             x="296"
//             y={y - 11}
//             width="22"
//             height="22"
//             rx="11"
//             className="fill-primary-50 dark:fill-primary-950 stroke-primary-200 dark:stroke-primary-800"
//             strokeWidth="1"
//           />
//           {i === 0 && (
//             <>
//               <rect
//                 x="302"
//                 y={y - 5}
//                 width="10"
//                 height="7"
//                 rx="1.5"
//                 className="fill-none stroke-primary-600 dark:stroke-primary-400"
//                 strokeWidth="1"
//               />
//               <line
//                 x1="307"
//                 y1={y + 2}
//                 x2="307"
//                 y2={y + 5}
//                 className="stroke-primary-500"
//                 strokeWidth="1"
//               />
//               <line
//                 x1="304"
//                 y1={y + 5}
//                 x2="310"
//                 y2={y + 5}
//                 className="stroke-primary-500"
//                 strokeWidth="1"
//               />
//             </>
//           )}
//           {i === 1 && (
//             <>
//               <rect
//                 x="303"
//                 y={y - 5}
//                 width="8"
//                 height="12"
//                 rx="1.5"
//                 className="fill-none stroke-primary-600 dark:stroke-primary-400"
//                 strokeWidth="1"
//               />
//               <circle cx="307" cy={y + 4} r="1" className="fill-primary-500" />
//             </>
//           )}
//           {i === 2 && (
//             <>
//               <rect
//                 x="304"
//                 y={y - 4}
//                 width="6"
//                 height="11"
//                 rx="1.5"
//                 className="fill-none stroke-primary-600 dark:stroke-primary-400"
//                 strokeWidth="1"
//               />
//               <circle cx="307" cy={y + 4} r="0.8" className="fill-primary-500" />
//             </>
//           )}
//         </g>
//       ))}
//     </svg>
//   </div>
// )

const HeroIllustration = () => {
  return (
    <div
      className="w-full h-full flex md:p-6 px-4 items-center  justify-center  select-none"
      aria-hidden
    >
      <svg viewBox="0 0 340 220" className="w-full h-full" fill="none">
        {/* Grid dots */}
        {/* <GridDots cols={13} rows={8} gap={28} ox={-6} oy={4} /> */}

        {/* --- LEFT SECTION (Inputs Aligned to y=90) --- */}
        <rect
          x="6"
          y="62"
          width="22"
          height="22"
          rx="8"
          className="fill-primary-50 dark:fill-primary-950 stroke-primary-200 dark:stroke-primary-800"
          strokeWidth="1"
        />
        <foreignObject x="6" y="62" width="22" height="22">
          <div className="w-full h-full flex items-center justify-center">
            <RiMoneyDollarCircleLine size={18} className="text-emerald-500 dark:text-emerald-400" />
          </div>
        </foreignObject>

        <rect
          x="6"
          y="98"
          width="22"
          height="22"
          rx="8"
          className="fill-primary-50 dark:fill-primary-950 stroke-primary-200 dark:stroke-primary-800"
          strokeWidth="1"
        />
        <foreignObject x="6" y="98" width="22" height="22">
          <div className="w-full h-full flex items-center justify-center">
            <RiLightbulbLine size={18} className="text-accent-500 dark:text-accent-400" />
          </div>
        </foreignObject>

        {/* --- CONNECTORS (Input -> Center) --- */}
        <path
          d="M28 73 Q45 73 50 81 M28 109 Q45 109 50 101"
          className="stroke-primary-300 dark:stroke-primary-700"
          strokeWidth="1"
          fill="none"
          strokeDasharray="0 4"
          strokeLinecap="round"
        />
        <line
          x1="50"
          y1="90"
          x2="60"
          y2="90"
          className="stroke-primary-300 dark:stroke-primary-700"
          strokeWidth="1"
          strokeDasharray="0 4"
          strokeLinecap="round"
        />

        {/* --- CENTER ICON (Shifted Left) --- */}

        <foreignObject x="60" y="70" width="40" height="40" className="p-2">
          <svg viewBox="0 0 1024 1024" fill="currentColor">
            <path
              d="m82.414 12c-39.083 0.36195-70.413 31.943-70.413 71.11v857.78c0 39.179 31.39 70.769 70.484 71.113h720.34l-419.16-200.9v-598.19l419.16-200.9zm929.53 70.553-454.25 229.03 1.6698 402.71 452.64 227.16v-857.15c-0.012-0.57988 0-1.16 0-1.7364z"
              className="fill-accent-500 dark:fill-accent-400"
            />
          </svg>
        </foreignObject>

        {/* --- BRANCHING CONNECTORS --- */}
        <path
          d="M100 90 Q115 90 120 65"
          className="stroke-blue-400 dark:stroke-blue-500"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="0 4"
          fill="none"
        />
        <path
          d="M100 90 Q115 90 120 115"
          className="stroke-emerald-400 dark:stroke-emerald-500"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="0 4"
          fill="none"
        />

        {/* --- RIGHT: STACK HOLDERS (Width increased to 185 to stop overflow) --- */}
        <g>
          <rect
            x="120"
            y="30"
            width="185"
            height="55"
            rx="8"
            className="fill-white dark:fill-primary-950 stroke-primary-200 dark:stroke-primary-800 shadow-sm"
            strokeWidth="1"
          />
          <foreignObject x="128" y="38" width="16" height="16">
            <SiNextdotjs size={16} className="text-black dark:text-white" />
          </foreignObject>
          <text
            x="150"
            y="50"
            fontSize="10"
            fontWeight="bold"
            className="fill-primary-900 dark:fill-primary-100"
          >
            Next.js Enterprise Stack
          </text>
          <text x="128" y="65" fontSize="7" className="fill-primary-500 italic">
            Custom architecture for high-traffic scalability
          </text>
          <text
            x="128"
            y="75"
            fontSize="7"
            className="fill-blue-500 font-bold uppercase tracking-tight"
          >
            Ultra Fast • Cloud Native • SSR
          </text>
        </g>

        <g>
          <rect
            x="120"
            y="105"
            width="185"
            height="55"
            rx="8"
            className="fill-white dark:fill-primary-950 stroke-primary-200 dark:stroke-primary-800 shadow-sm"
            strokeWidth="1"
          />
          <foreignObject x="128" y="113" width="16" height="16">
            <SiWordpress size={16} className="text-[#21759b]" />
          </foreignObject>
          <text
            x="150"
            y="125"
            fontSize="10"
            fontWeight="bold"
            className="fill-primary-900 dark:fill-primary-100"
          >
            WordPress Optimized
          </text>
          <text x="128" y="140" fontSize="7" className="fill-primary-500 italic">
            Quick budget deployment with edge optimization
          </text>
          <text
            x="128"
            y="150"
            fontSize="7"
            className="fill-emerald-500 font-bold uppercase tracking-tight"
          >
            Server-Level Optimization • Proven ROI
          </text>
        </g>

        {/* --- STATUS INDICATORS --- */}
        <circle
          cx="320"
          cy="57"
          r="10"
          className="fill-green-50 dark:fill-green-950 stroke-green-200"
        />
        <foreignObject x="313" y="50" width="14" height="14">
          <RiCheckLine size={14} className="text-green-600" />
        </foreignObject>
        <text x="320" y="78" fontSize="7" textAnchor="middle" className="fill-primary-400">
          Ready
        </text>

        <circle
          cx="320"
          cy="132"
          r="10"
          className="fill-green-50 dark:fill-green-950 stroke-green-200"
        />
        <foreignObject x="313" y="125" width="14" height="14">
          <RiCheckLine size={14} className="text-green-600" />
        </foreignObject>
        <text x="320" y="153" fontSize="7" textAnchor="middle" className="fill-primary-400">
          Ready
        </text>
      </svg>
    </div>
  )
}

// ─── Card illustrations (reused from ServiceSection style) ────────────────────

const DesignCardIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-4">
    <svg viewBox="0 0 200 140" className="absolute inset-0 w-full h-full" aria-hidden>
      <GridDots cols={8} rows={6} gap={26} ox={4} oy={4} />
      <path
        d="M52 22 L42 22 L42 118 L52 118"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-accent-500/35 dark:text-accent-400/30"
      />
      <path
        d="M148 22 L158 22 L158 118 L148 118"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-accent-500/35 dark:text-accent-400/30"
      />
    </svg>
    <div className="relative z-10 flex flex-col items-center gap-2 w-32">
      <div className="w-full h-6 rounded-lg bg-primary-100/50 dark:bg-primary-800/30 border border-primary-200/70 dark:border-primary-700/50 scale-95 flex items-center px-3 gap-2">
        <div className="w-2 h-2 rounded-sm bg-accent-400/40" />
        <div className="flex-1 h-1 rounded-full bg-primary-300/30" />
      </div>
      <div className="w-full h-6 rounded-lg bg-primary-50 dark:bg-primary-900 border border-primary-200 dark:border-primary-700 flex items-center px-3 gap-2 -mt-1.5">
        <div className="w-2 h-2 rounded-sm bg-accent-500/50" />
        <div className="flex-1 h-1 rounded-full bg-primary-200/50" />
        <div className="w-4 h-1 rounded-full bg-accent-300/40" />
      </div>
      <div className="w-full h-8 rounded-xl bg-white dark:bg-black border border-primary-200 dark:border-primary-700 shadow-md flex items-center px-3 gap-2 -mt-1.5 ring-1 ring-accent-500/15">
        <div className="w-4 h-4 rounded-md bg-accent-500 dark:bg-accent-400 flex items-center justify-center flex-shrink-0">
          <RiBracesLine size={8} className="text-white dark:text-black" />
        </div>
        <div className="flex-1">
          <div className="h-1 w-10 rounded-full bg-primary-200 dark:bg-primary-700 mb-1" />
          <div className="h-1 w-7 rounded-full bg-primary-100 dark:bg-primary-800" />
        </div>
        <RiCheckLine size={10} className="text-accent-500" />
      </div>
    </div>
  </div>
)

const NextJsCardIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-4">
    <svg viewBox="0 0 200 140" className="absolute inset-0 w-full h-full" aria-hidden>
      <ConcentricRings cx={100} cy={70} accentClass="text-primary-400" />
    </svg>
    <div className="relative z-10 flex flex-col items-center gap-3">
      <div className="w-12 h-12 rounded-xl bg-black dark:bg-white border border-primary-200 dark:border-primary-800 shadow-md flex items-center justify-center">
        <SiNextdotjs size={22} className="text-white dark:text-black" />
      </div>
      <div className="flex flex-col gap-1 items-center">
        {['App Router', 'Edge Runtime', 'ISR & SSG'].map((l) => (
          <div
            key={l}
            className="flex items-center gap-1 bg-primary-50 dark:bg-primary-950 border border-primary-100 dark:border-primary-800 rounded-full px-2 py-0.5"
          >
            <RiRocketLine size={8} className="text-accent-500 dark:text-accent-400" />
            <span className="text-[8px] font-medium text-primary-600 dark:text-primary-400">
              {l}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const WordPressCardIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-4">
    <svg viewBox="0 0 200 140" className="absolute inset-0 w-full h-full" aria-hidden>
      <GridDots cols={8} rows={6} gap={26} ox={4} oy={4} />
    </svg>
    <div className="relative z-10 flex flex-col items-center gap-3">
      <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-950 border border-primary-200 dark:border-primary-800 shadow-md flex items-center justify-center">
        <SiWordpress size={22} className="text-primary-700 dark:text-primary-300" />
      </div>
      <div className="flex flex-col gap-1 items-center">
        {['Custom themes', 'ACF', 'Easy editing'].map((l) => (
          <div
            key={l}
            className="flex items-center gap-1 bg-primary-50 dark:bg-primary-950 border border-primary-100 dark:border-primary-800 rounded-full px-2 py-0.5"
          >
            <RiCheckLine size={8} className="text-accent-500 dark:text-accent-400" />
            <span className="text-[8px] font-medium text-primary-600 dark:text-primary-400">
              {l}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const EcommerceCardIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-4">
    <svg viewBox="0 0 200 140" className="absolute inset-0 w-full h-full" aria-hidden>
      <RadialDashes cx={100} cy={70} r1={44} r2={54} accentClass="text-accent-500" />
    </svg>
    <div className="relative z-10 flex flex-col items-center gap-3">
      <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-950 border border-primary-200 dark:border-primary-800 shadow-md flex items-center justify-center">
        <RiShoppingCart2Line size={22} className="text-accent-500 dark:text-accent-400" />
      </div>
      <div className="flex gap-2">
        {[1, 2].map((i) => (
          <div
            key={i}
            className="w-14 rounded-lg bg-white dark:bg-black border border-primary-100 dark:border-primary-800 p-1.5 shadow-sm"
          >
            <div className="w-full h-5 rounded-md bg-primary-100 dark:bg-primary-800 mb-1" />
            <div className="h-1 w-8 rounded-full bg-primary-200 dark:bg-primary-700 mb-1" />
            <div className="h-1.5 w-5 rounded-full bg-accent-400/60" />
          </div>
        ))}
      </div>
    </div>
  </div>
)

const RedesignCardIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-4">
    <svg viewBox="0 0 200 140" className="absolute inset-0 w-full h-full" aria-hidden>
      <GridDots cols={8} rows={6} gap={26} ox={4} oy={4} />
      <path
        d="M70 70 L130 70"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="3 3"
        className="text-accent-500/30"
        strokeLinecap="round"
      />
      <path
        d="M124 65 L132 70 L124 75"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-accent-500/40"
      />
    </svg>
    <div className="relative z-10 flex items-center gap-4">
      <div className="flex flex-col gap-1">
        <div className="w-16 h-10 rounded-lg bg-primary-100/60 dark:bg-primary-800/40 border border-primary-200 dark:border-primary-700 p-1.5 opacity-60">
          <div className="w-full h-3 rounded-sm bg-primary-300/40 dark:bg-primary-600/40 mb-1" />
          <div className="w-8 h-1.5 rounded-sm bg-primary-200/40" />
        </div>
        <span className="text-[8px] text-center text-primary-400 dark:text-primary-600 font-medium">
          Before
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <div className="w-16 h-10 rounded-xl bg-white dark:bg-black border border-primary-200 dark:border-primary-700 shadow-md p-1.5 ring-1 ring-accent-500/15">
          <div className="w-full h-3 rounded-md bg-accent-100 dark:bg-accent-900/30 mb-1 flex items-center px-1">
            <div className="w-1.5 h-1.5 rounded-sm bg-accent-500/60" />
          </div>
          <div className="w-8 h-1.5 rounded-sm bg-primary-200 dark:bg-primary-700" />
        </div>
        <span className="text-[8px] text-center text-accent-500 dark:text-accent-400 font-medium">
          After
        </span>
      </div>
    </div>
  </div>
)

const OptimisationCardIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-4">
    <svg viewBox="0 0 200 140" className="absolute inset-0 w-full h-full" aria-hidden>
      <GridDots cols={8} rows={6} gap={26} ox={4} oy={4} />
    </svg>
    <div className="relative z-10 flex flex-col items-center gap-2 w-full max-w-[130px]">
      {[
        { label: 'LCP', pct: 92, c: 'bg-green-500/70' },
        { label: 'FID', pct: 97, c: 'bg-accent-500/70' },
        { label: 'CLS', pct: 88, c: 'bg-green-400/70' },
      ].map(({ label, pct, c }) => (
        <div key={label} className="w-full flex items-center gap-2">
          <span className="text-[8px] font-mono font-medium text-primary-500 dark:text-primary-400 w-5">
            {label}
          </span>
          <div className="flex-1 h-1.5 rounded-full bg-primary-100 dark:bg-primary-800 overflow-hidden">
            <div className={`h-full rounded-full ${c}`} style={{ width: `${pct}%` }} />
          </div>
          <span className="text-[8px] font-medium text-primary-500 w-4 text-right">{pct}</span>
        </div>
      ))}
      <div className="mt-1 flex items-center gap-1 bg-green-50 dark:bg-green-950/30 border border-green-200/60 dark:border-green-700/40 rounded-full px-2 py-0.5">
        <RiCheckLine size={8} className="text-green-600 dark:text-green-400" />
        <span className="text-[8px] font-medium text-green-700 dark:text-green-400">
          Vitals pass
        </span>
      </div>
    </div>
  </div>
)

const MigrationCardIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-4">
    <svg viewBox="0 0 200 140" className="absolute inset-0 w-full h-full" aria-hidden>
      <GridDots cols={8} rows={6} gap={26} ox={4} oy={4} />
      <path
        d="M62 70 L138 70"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeDasharray="3 3"
        className="text-accent-500/25"
      />
      <path
        d="M132 65 L140 70 L132 75"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-accent-500/35"
      />
    </svg>
    <div className="relative z-10 flex items-center gap-4">
      <div className="w-11 h-11 rounded-xl bg-primary-100/70 dark:bg-primary-800/50 border border-primary-200 dark:border-primary-700 flex items-center justify-center">
        <RiServerLine size={18} className="text-primary-500 dark:text-primary-400" />
      </div>
      <div className="w-11 h-11 rounded-xl bg-black dark:bg-white border border-primary-200 dark:border-primary-800 shadow-md flex items-center justify-center">
        <SiNextdotjs size={18} className="text-white dark:text-black" />
      </div>
    </div>
  </div>
)

const RepairCardIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-4">
    <svg viewBox="0 0 200 140" className="absolute inset-0 w-full h-full" aria-hidden>
      <RadialDashes cx={100} cy={70} r1={40} r2={48} accentClass="text-primary-400" />
    </svg>
    <div className="relative z-10 flex flex-col items-center gap-3">
      <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-950 border border-primary-200 dark:border-primary-800 shadow-md flex items-center justify-center relative">
        <RiToolsLine size={20} className="text-primary-700 dark:text-primary-300" />
        <div className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-green-500 border-2 border-white dark:border-black flex items-center justify-center">
          <RiCheckLine size={7} className="text-white" />
        </div>
      </div>
      <div className="flex flex-col gap-1 items-start">
        {['Bug fixed', 'Deployed', 'Documented'].map((s) => (
          <div key={s} className="flex items-center gap-1">
            <RiCheckLine size={8} className="text-green-500" />
            <span className="text-[8px] font-medium text-primary-600 dark:text-primary-400">
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
  { icon: RiRocketLine, text: 'Blazing-fast load times — Lighthouse 95+ out of the box' },
  { icon: RiBracesLine, text: 'App Router with React Server Components for performance' },
  { icon: RiDatabase2Line, text: 'Payload CMS for structured, developer-controlled content' },
  { icon: RiShieldLine, text: 'TypeScript end-to-end — fewer bugs, better maintainability' },
  { icon: SlLayers, text: 'BracketUI component library for consistent, fast UI' },
  { icon: RiGlobalLine, text: 'Edge deployment via Vercel — global CDN, instant rollbacks' },
  { icon: RiCodeLine, text: 'Custom portals, dashboards, and web apps at any scale' },
]

const wordpressFeatures = [
  { icon: RiSettings3Line, text: 'Custom server stack — Hetzner VPS, LiteSpeed, Redis cache' },
  {
    icon: RiPaletteLine,
    text: 'Custom Elementor templates built to your brand, not stock designs',
  },
  { icon: RiShoppingCart2Line, text: 'WooCommerce with conversion-focused checkout flows' },
  {
    icon: RiFlashlightLine,
    text: 'Sub-2s load times on shared infrastructure — properly configured',
  },
  { icon: RiLockLine, text: 'Full admin access — your site, your data, no lock-in' },
  { icon: RiGlobalLine, text: 'Cloudflare for DNS, CDN, and DDoS protection included' },
  { icon: SlLayers, text: 'Easy to manage — your team can update content without a developer' },
]

// ─── Service cards ────────────────────────────────────────────────────────────

const serviceCards = [
  {
    category: 'Design',
    title: 'Bespoke Web Design',
    description:
      'Designed from scratch around your brand. No templates, no shortcuts. Every layout crafted to guide visitors toward the actions that matter.',
    features: ['Custom from scratch', 'Brand-aligned', 'Mobile-first', 'BracketUI components'],
    illustration: <DesignCardIllustration />,
  },
  {
    category: 'Development',
    title: 'Bespoke Web Development',
    description:
      'Custom portals, admin dashboards, booking systems. Whatever your business logic requires, built on Next.js or WordPress.',
    features: ['Next.js or WordPress', 'Custom business logic', 'CMS integration', 'TypeScript'],
    illustration: <NextJsCardIllustration />,
  },
  {
    category: 'Ecommerce',
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
  },
  {
    category: 'Redesign',
    title: 'Website Redesign',
    description:
      'Outdated site? We audit what you have, keep what works, and rebuild the rest properly. Code-first, improved UX, faster performance.',
    features: ['Full audit first', 'Code-first rebuild', 'UX improvements', 'SEO preservation'],
    illustration: <RedesignCardIllustration />,
  },
  {
    category: 'WordPress',
    title: 'WordPress Development',
    description:
      'Clean, fast WordPress sites your team can actually manage. No bloated themes, no unnecessary plugins. Built on our custom server stack.',
    features: ['Custom themes', 'ACF integration', 'WooCommerce ready', 'Performance tuned'],
    illustration: <WordPressCardIllustration />,
  },
  {
    category: 'Performance',
    title: 'Website Optimisation',
    description:
      'We audit against Core Web Vitals and fix every layer — images, caching, server config, code splitting. Lighthouse 90+ minimum.',
    features: ['Core Web Vitals', 'Lighthouse audit', 'Image optimisation', 'Caching strategy'],
    illustration: <OptimisationCardIllustration />,
  },
  {
    category: 'Migration',
    title: 'Website Migration',
    description:
      'Moving platforms without the pain. Zero data loss, redirects mapped, SEO equity preserved, minimal downtime.',
    features: ['Zero data loss', 'Redirect mapping', 'SEO preserved', 'Zero downtime'],
    illustration: <MigrationCardIllustration />,
  },
  {
    category: 'Support',
    title: 'Website Repair',
    description:
      'Broken builds, plugin conflicts, security issues — we diagnose fast, document everything, leave the site better than we found it.',
    features: ['Next.js & WordPress', 'Security fixes', 'Plugin conflicts', 'Documentation'],
    illustration: <RepairCardIllustration />,
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
    body: 'A clear written scope — stack, timeline, cost. No vague estimates. You know exactly what you are getting before we start.',
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
    body: 'Two rounds of revisions included. We resolve everything before launch — no half-finished handovers.',
  },
  {
    icon: LiaHandshake,
    number: '05',
    title: 'Launch & handover',
    body: 'We launch, monitor the first 48 hours, then hand over full access — admin, domain, hosting, documentation. Everything yours.',
  },
]

// ─── FAQ ──────────────────────────────────────────────────────────────────────

const webFaqData = [
  {
    question: 'Do you work with Next.js or WordPress — or both?',
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
      'Yes — technical SEO is built in by default. Clean URL structure, meta setup, schema markup, XML sitemaps, and Core Web Vitals optimisation. Content SEO and ongoing ranking work is a separate service.',
  },
  {
    question: 'Do you offer ongoing support after launch?',
    answer:
      'Yes. Flexible maintenance packages covering content updates, plugin management for WordPress, performance monitoring, and ongoing development.',
  },
  {
    question: 'We are in Manchester — do you work with local businesses in person?',
    answer:
      "We're fully remote but focused on the Manchester market. Everything happens over Zoom and async. Our Manchester clients get the same quality as if we had an office on Deansgate, without the overhead on their invoice.",
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function WebDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const handleScroll = () => {
    if (!scrollRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    setCanScrollLeft(scrollLeft > 8)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 8)
  }

  const scrollCards = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: dir === 'right' ? 320 : -320, behavior: 'smooth' })
  }

  return (
    <div>
      {/* 1 — Page Header */}
      <PageHeader
        title="Website & Ecommerce"
        description="Bespoke websites and ecommerce development for Manchester businesses. "
      />

      {/* 2 — Illustration + intro heading */}
      <Bracket fluid centered padding="small">
        <div className="md:max-w-screen-xl mx-auto">
          {/* Two column: illustration left, heading right */}
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-8  mb-8 items-center relative">
            {/* Illustration */}
            <div className="w-full h-full flex items-center justify-center ">
              <HeroIllustration />
            </div>
            {/* Heading + description */}
            <div className="mb-8 md:mb-10 lg:mb-12 grid gap-3 lg:gap-4   lg:max-w-5xl lg:mx-auto">
              <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] leading-tight font-extrabold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text  ">
                Built around two ecosystems, engineered for two different needs
              </h2>
              <p className="text-[clamp(0.95rem,1.5vw,1.1rem)] leading-relaxed text-primary-500 dark:text-primary-400 ">
                Two Stacks. Zero Guesswork. We’ve spent years refining our Next.js and WordPress
                ecosystems so you get enterprise-grade performance right out of the box.
              </p>
            </div>
          </div>

          {/* Two-column ecosystems — dashed divider, no cards, no backgrounds */}

          <div className="grid  lg:grid-cols-2 gap-4 lg:gap-0 divide-y lg:divide-y-0 lg:divide-x divide-dashed divide-primary-200 dark:divide-primary-800">
            {/* Next.js column */}
            <div className="pb-12 lg:pb-0 lg:pr-14">
              {/* Icon + heading */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary-900 dark:bg-primary-100 flex items-center justify-center shadow-sm flex-shrink-0">
                  <SiNextdotjs size={28} className="text-white dark:text-black" />
                </div>
                <div>
                  <h3 className="text-[1.15rem] font-extrabold text-primary-900 dark:text-primary-50 leading-tight mb-1">
                    Next.js Development
                  </h3>
                  <p className="text-[0.8rem] text-primary-500 dark:text-primary-400 leading-relaxed">
                    Enterprise-level performance and customisation, without the enterprise price tag
                  </p>
                </div>
              </div>

              {/* Stack icons — bare, no pills, no background */}
              <div className="flex flex-wrap items-center gap-4 mb-7 text-primary-500 dark:text-primary-400">
                {nextjsStack.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    title={label}
                    className="flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity"
                  >
                    <Icon size={18} />
                    <span className="text-[9px] text-primary-400 dark:text-primary-600">
                      {label}
                    </span>
                  </div>
                ))}
                <div className="flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity">
                  <span className="text-[11px] font-semibold text-primary-500 dark:text-primary-400">
                    BracketUI
                  </span>
                  <span className="text-[9px] text-primary-400 dark:text-primary-600">
                    UI Library
                  </span>
                </div>
              </div>

              {/* Features */}
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

              {/* CTA — bigger area, below features */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[0.85rem] font-semibold px-5 py-3 rounded-xl border border-primary-200 dark:border-primary-700 text-primary-900 dark:text-primary-100 hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors"
              >
                Start a Next.js project
                <RiArrowRightLine size={14} />
              </Link>
            </div>

            {/* WordPress column */}
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
                    Edge-to-edge custom stack, built from the server up — not from a theme
                    marketplace
                  </p>
                </div>
              </div>

              {/* Stack icons — bare */}
              <div className="flex flex-wrap items-center gap-4 mb-7 text-primary-500 dark:text-primary-400">
                {wordpressStack.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    title={label}
                    className="flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity"
                  >
                    <Icon size={18} />
                    <span className="text-[9px] text-primary-400 dark:text-primary-600">
                      {label}
                    </span>
                  </div>
                ))}
                {['Hetzner VPS', 'LiteSpeed'].map((l) => (
                  <div
                    key={l}
                    className="flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity"
                  >
                    <RiServerLine size={18} />
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
                Start a WordPress project
                <RiArrowRightLine size={14} />
              </Link>
            </div>
          </div>
        </div>
      </Bracket>

      {/* 3 — Scrollable service cards */}
      <section className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem]">
        <Bracket fluid centered padding="small">
          <div className="md:max-w-screen-xl mx-auto pt-8">
            {/* Heading + scroll controls */}
            <div className=" mb-8">
              <div className="max-w-lg">
                <h2 className="text-[clamp(1.4rem,2.8vw,2rem)] font-extrabold leading-tight bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-2">
                  What we build & deliver
                </h2>
                <p className="text-[clamp(0.88rem,1.3vw,1rem)] text-primary-500 dark:text-primary-400 leading-[1.7]">
                  Every service in our two-ecosystem stack — from first website to full platform
                  migration.
                </p>
              </div>
            </div>

            {/* Scrollable row */}

            <div className="mb-6">
              <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex gap-5 overflow-x-auto scrollbar-hide pb-2 -mx-1 px-1"
                style={{ scrollSnapType: 'x mandatory' }}
              >
                {serviceCards.map((card, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-[272px] sm:w-[288px] flex flex-col bg-white dark:bg-black border border-primary-100 dark:border-primary-800/50 rounded-2xl overflow-hidden"
                    style={{ scrollSnapAlign: 'start' }}
                  >
                    {/* Top: category + title + description + features */}
                    <div className="p-5 flex-1 flex flex-col">
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400 mb-2.5">
                        {card.category}
                      </span>
                      <h3 className="text-[0.95rem] font-bold text-primary-900 dark:text-primary-50 leading-tight mb-2.5">
                        {card.title}
                      </h3>
                      <p className="text-[0.78rem] text-primary-500 dark:text-primary-400 leading-[1.65] mb-4 flex-1">
                        {card.description}
                      </p>
                      <ul className="space-y-1.5 mb-4">
                        {card.features.map((f) => (
                          <li
                            key={f}
                            className="flex items-center gap-2 text-[0.74rem] text-primary-600 dark:text-primary-400"
                          >
                            <RiCheckLine
                              size={10}
                              className="text-accent-500 dark:text-accent-400 flex-shrink-0"
                            />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom: illustration (larger) + CTA */}
                    <div className="mx-4 mb-4 rounded-xl bg-white dark:bg-black border border-primary-100 dark:border-primary-800 overflow-hidden">
                      {/* Illustration — taller */}
                      <div className="h-32 w-full">{card.illustration}</div>
                      {/* CTA below illustration */}
                      <div className="px-4 py-3 border-t border-primary-100 dark:border-primary-800">
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-1.5 text-[0.75rem] font-semibold text-primary-600 dark:text-primary-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                        >
                          Get started
                          <RiArrowRightLine size={11} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Chevron scroll controls */}
            <div className="flex justify-end">
              <div className="flex items-center  gap-2 flex-shrink-0">
                <button
                  onClick={() => scrollCards('left')}
                  disabled={!canScrollLeft}
                  className="w-16 h-16 rounded-full border border-primary-200 dark:border-primary-700 flex items-center justify-center text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors disabled:opacity-25 disabled:cursor-not-allowed"
                  aria-label="Scroll left"
                >
                  <RiArrowLeftSLine size={24} />
                </button>
                <button
                  onClick={() => scrollCards('right')}
                  disabled={!canScrollRight}
                  className="w-16 h-16 rounded-full border border-primary-200 dark:border-primary-700 flex items-center justify-center text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors disabled:opacity-25 disabled:cursor-not-allowed"
                  aria-label="Scroll right"
                >
                  <RiArrowRightSLine size={24} />
                </button>
              </div>
            </div>
          </div>
        </Bracket>
      </section>

      {/* 4 — Process — asymmetric timeline with icons */}
      <section className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem] overflow-hidden">
        <Bracket fluid centered padding="small">
          <div className="md:max-w-screen-xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 items-start">
              {/* Left: sticky heading */}
              <div className="lg:sticky lg:top-28">
                <h2 className="text-[clamp(1.4rem,2.8vw,2rem)] font-extrabold leading-tight bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-4">
                  How a project works
                </h2>
                <p className="text-[clamp(0.88rem,1.3vw,1rem)] text-primary-500 dark:text-primary-400 leading-[1.75] mb-8">
                  No surprises. No scope creep. No disappearing mid-project.
                </p>
                {/* Mini decoration — orbiting dots */}
                <div className="hidden lg:flex items-center justify-center w-32 h-32 relative">
                  <svg viewBox="0 0 128 128" className="absolute inset-0 w-full h-full" aria-hidden>
                    <ConcentricRings cx={64} cy={64} accentClass="text-accent-500" />
                  </svg>
                  <div className="w-10 h-10 rounded-full bg-primary-900 dark:bg-primary-100 flex items-center justify-center z-10">
                    <RiCheckDoubleLine size={18} className="text-white dark:text-black" />
                  </div>
                </div>
              </div>

              {/* Right: steps */}
              <div className="relative">
                {/* Vertical connector */}
                <div className="absolute left-[19px] top-6 bottom-6 w-px border-l border-dashed border-primary-200 dark:border-primary-800" />

                <div className="flex flex-col gap-10">
                  {processSteps.map((step, i) => (
                    <div key={i} className="flex gap-6 relative">
                      {/* Step bubble */}
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-50 dark:bg-primary-950 border border-primary-200 dark:border-primary-800 flex items-center justify-center z-10">
                        <step.icon size={16} className="text-accent-500 dark:text-accent-400" />
                      </div>
                      {/* Content */}
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

      {/* 5 — FAQ */}
      <section className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem]">
        <Bracket fluid centered padding="small">
          <div className="md:max-w-screen-xl mx-auto">
            <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] leading-tight font-extrabold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text text-center mb-12 lg:mb-14">
              Common questions
            </h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              {webFaqData.map((item, i) => (
                <div
                  key={i}
                  className="border border-primary-100 dark:border-primary-800/50 rounded-xl bg-primary-50/40 dark:bg-primary-950/20 transition-all duration-300"
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
                    className={`px-6 text-primary-600 dark:text-primary-400 text-sm leading-relaxed transition-all duration-300 ease-in-out overflow-hidden ${
                      openFaq === i ? 'max-h-[400px] opacity-100 pb-5' : 'max-h-0 opacity-0 pb-0'
                    }`}
                  >
                    {item.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Bracket>
      </section>

      {/* 6 — CTA */}
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
