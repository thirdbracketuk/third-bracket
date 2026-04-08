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
//   RiBriefcaseLine,
//   RiShieldLine,
//   RiPrinterLine,
//   RiInstagramLine,
//   RiImageLine,
//   RiFilmLine,
//   RiPaletteLine,
//   RiCheckLine,
//   RiFontSize,
//   RiLayoutLine,
//   RiCameraLine,
//   RiScissorsCutLine,
// } from 'react-icons/ri'

// export const metadata: Metadata = {
//   title: 'Branding & Creative Design Manchester | thirdbracket',
//   description:
//     'Brand strategy, identity design, print, social media branding, illustration and video editing for Manchester businesses. Agency-quality creative without the agency overhead.',
//   openGraph: {
//     title: 'Branding & Creative Design Manchester | thirdbracket',
//     description:
//       'Distinctive brand identities and creative design for Manchester SMEs and startups. Brand strategy, logo, print, social media, illustrations and video editing.',
//   },
// }

// // ─── Illustrations ────────────────────────────────────────────────────────────

// const BrandStrategyIllustration = () => (
//   <div className="relative w-full h-full flex items-center justify-center p-6">
//     <svg viewBox="0 0 200 150" className="absolute inset-0 w-full h-full" aria-hidden>
//       <ConcentricRings cx={100} cy={75} accentClass="text-accent-500" />
//     </svg>
//     <div className="relative z-10 flex flex-col items-center gap-3">
//       <div className="w-14 h-14 rounded-2xl bg-primary-50 dark:bg-primary-950 border border-primary-200 dark:border-primary-800 shadow-md flex items-center justify-center">
//         <RiBriefcaseLine size={26} className="text-accent-500 dark:text-accent-400" />
//       </div>
//       <div className="flex flex-col gap-1 items-center">
//         {['Positioning', 'Audience', 'Messaging', 'Voice'].map((s) => (
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

// const BrandIdentityIllustration = () => (
//   <div className="relative w-full h-full flex items-center justify-center p-6">
//     <svg viewBox="0 0 200 150" className="absolute inset-0 w-full h-full" aria-hidden>
//       <GridDots cols={7} rows={5} gap={28} ox={14} oy={14} />
//     </svg>
//     <div className="relative z-10 flex flex-col items-center gap-3 w-full max-w-[150px]">
//       {/* Colour swatches */}
//       <div className="flex gap-1.5">
//         <div className="w-8 h-8 rounded-lg bg-primary-900 dark:bg-primary-100 border border-primary-200 dark:border-primary-700" />
//         <div className="w-8 h-8 rounded-lg bg-accent-500 border border-accent-400" />
//         <div className="w-8 h-8 rounded-lg bg-primary-200 dark:bg-primary-700 border border-primary-300 dark:border-primary-600" />
//         <div className="w-8 h-8 rounded-lg bg-white dark:bg-black border border-primary-200 dark:border-primary-700" />
//       </div>
//       {/* Type sample */}
//       <div className="w-full bg-white dark:bg-black rounded-lg border border-primary-100 dark:border-primary-800 p-2 shadow-sm">
//         <div className="h-3 w-20 rounded-sm bg-primary-800 dark:bg-primary-200 mb-1" />
//         <div className="h-2 w-14 rounded-sm bg-primary-300 dark:bg-primary-600" />
//       </div>
//       <div className="flex items-center gap-1 bg-accent-50 dark:bg-accent-950/50 border border-accent-200/60 dark:border-accent-700/40 rounded-full px-2 py-0.5">
//         <RiPaletteLine size={9} className="text-accent-600 dark:text-accent-400" />
//         <span className="text-[9px] font-medium text-accent-700 dark:text-accent-300">
//           Brand system
//         </span>
//       </div>
//     </div>
//   </div>
// )

// const PrintIllustration = () => (
//   <div className="relative w-full h-full flex items-center justify-center p-6">
//     <svg viewBox="0 0 200 150" className="absolute inset-0 w-full h-full" aria-hidden>
//       <GridDots cols={7} rows={5} gap={28} ox={14} oy={14} />
//     </svg>
//     <div className="relative z-10 flex items-end gap-2">
//       {/* Business card */}
//       <div className="w-20 h-12 rounded-lg bg-primary-900 dark:bg-primary-100 border border-primary-700 dark:border-primary-300 shadow-md p-2 flex flex-col justify-between">
//         <div className="w-6 h-1.5 rounded-sm bg-accent-500/80" />
//         <div>
//           <div className="w-12 h-1 rounded-sm bg-white/40 dark:bg-black/40 mb-0.5" />
//           <div className="w-8 h-0.5 rounded-sm bg-white/25 dark:bg-black/25" />
//         </div>
//       </div>
//       {/* Flyer */}
//       <div className="w-14 h-20 rounded-lg bg-white dark:bg-black border border-primary-200 dark:border-primary-700 shadow-sm p-2 flex flex-col gap-1.5">
//         <div className="w-full h-8 rounded-md bg-primary-100 dark:bg-primary-800" />
//         <div className="w-full h-1 rounded-sm bg-primary-200 dark:bg-primary-700" />
//         <div className="w-8 h-1 rounded-sm bg-primary-100 dark:bg-primary-800" />
//         <div className="w-5 h-2.5 rounded-sm bg-accent-500/60 mt-auto" />
//       </div>
//     </div>
//   </div>
// )

// const SocialBrandingIllustration = () => (
//   <div className="relative w-full h-full flex items-center justify-center p-6">
//     <svg viewBox="0 0 200 150" className="absolute inset-0 w-full h-full" aria-hidden>
//       <RadialDashes cx={100} cy={75} r1={50} r2={60} accentClass="text-accent-500" />
//     </svg>
//     <div className="relative z-10 flex flex-col items-center gap-3 w-full max-w-[140px]">
//       {/* Social grid */}
//       <div className="grid grid-cols-3 gap-1.5">
//         {Array.from({ length: 6 }).map((_, i) => (
//           <div
//             key={i}
//             className={`w-10 h-10 rounded-lg border ${
//               i === 0
//                 ? 'bg-accent-500/15 border-accent-400/40'
//                 : i === 4
//                   ? 'bg-primary-100 dark:bg-primary-800 border-primary-200 dark:border-primary-700'
//                   : 'bg-primary-50 dark:bg-primary-900 border-primary-100 dark:border-primary-800'
//             } flex items-center justify-center`}
//           >
//             {i === 0 && (
//               <RiInstagramLine size={16} className="text-accent-500 dark:text-accent-400" />
//             )}
//           </div>
//         ))}
//       </div>
//       <div className="flex items-center gap-1 bg-primary-50 dark:bg-primary-950 border border-primary-100 dark:border-primary-800 rounded-full px-2 py-0.5">
//         <span className="text-[9px] font-medium text-primary-500 dark:text-primary-400">
//           Consistent across platforms
//         </span>
//       </div>
//     </div>
//   </div>
// )

// const IllustrationIllustration = () => (
//   <div className="relative w-full h-full flex items-center justify-center p-6">
//     <svg viewBox="0 0 200 150" className="absolute inset-0 w-full h-full" aria-hidden>
//       <GridDots cols={7} rows={5} gap={28} ox={14} oy={14} />
//       {/* Decorative shapes */}
//       <circle
//         cx={60}
//         cy={55}
//         r="12"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1"
//         className="text-accent-500/20"
//       />
//       <rect
//         x="130"
//         y="45"
//         width="20"
//         height="20"
//         rx="4"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1"
//         className="text-primary-400/20"
//       />
//       <path
//         d="M80 100 L100 75 L120 100 Z"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1"
//         className="text-accent-500/15"
//       />
//     </svg>
//     <div className="relative z-10 flex flex-col items-center gap-3">
//       <div className="w-14 h-14 rounded-2xl bg-primary-50 dark:bg-primary-950 border border-primary-200 dark:border-primary-800 shadow-md flex items-center justify-center">
//         <RiImageLine size={26} className="text-accent-500 dark:text-accent-400" />
//       </div>
//       <div className="flex gap-2">
//         {['Icons', 'SVG', 'Custom'].map((s) => (
//           <span
//             key={s}
//             className="text-[9px] font-medium px-1.5 py-0.5 rounded-md bg-primary-50 dark:bg-primary-950 border border-primary-100 dark:border-primary-800 text-primary-500 dark:text-primary-400"
//           >
//             {s}
//           </span>
//         ))}
//       </div>
//     </div>
//   </div>
// )

// const VideoIllustration = () => (
//   <div className="relative w-full h-full flex items-center justify-center p-6">
//     <svg viewBox="0 0 200 150" className="absolute inset-0 w-full h-full" aria-hidden>
//       <GridDots cols={7} rows={5} gap={28} ox={14} oy={14} />
//     </svg>
//     <div className="relative z-10 flex flex-col items-center gap-3">
//       {/* Video timeline mockup */}
//       <div className="w-36 h-20 rounded-xl bg-black border border-primary-200 dark:border-primary-700 shadow-md overflow-hidden relative flex items-center justify-center">
//         <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 to-primary-800/30" />
//         <div className="relative w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
//           <div className="w-0 h-0 border-t-[5px] border-b-[5px] border-l-[9px] border-transparent border-l-white ml-0.5" />
//         </div>
//       </div>
//       {/* Timeline bar */}
//       <div className="w-36 h-4 rounded-lg bg-primary-50 dark:bg-primary-950 border border-primary-100 dark:border-primary-800 overflow-hidden relative px-1.5 flex items-center gap-0.5">
//         {Array.from({ length: 18 }).map((_, i) => (
//           <div
//             key={i}
//             className={`flex-1 h-2 rounded-sm ${i < 7 ? 'bg-accent-500/60 dark:bg-accent-400/50' : 'bg-primary-200 dark:bg-primary-700'}`}
//           />
//         ))}
//       </div>
//       <div className="flex items-center gap-1 bg-primary-50 dark:bg-primary-950 border border-primary-100 dark:border-primary-800 rounded-full px-2 py-0.5">
//         <RiScissorsCutLine size={9} className="text-primary-500 dark:text-primary-400" />
//         <span className="text-[9px] font-medium text-primary-500 dark:text-primary-400">
//           Social-ready cuts
//         </span>
//       </div>
//     </div>
//   </div>
// )

// // ─── Page ─────────────────────────────────────────────────────────────────────

// const services = [
//   {
//     id: 'brand-strategy',
//     badge: 'Strategy',
//     title: 'Brand Strategy',
//     description:
//       "Before anything gets designed, we need to know who you are, who you're talking to, and what makes you worth choosing. Brand strategy answers those questions. We define your positioning, map your audience, and build a messaging framework that every piece of creative work flows from. The result is a brand that feels coherent and intentional, not assembled.",
//     features: [
//       'Positioning framework',
//       'Audience definition',
//       'Competitor analysis',
//       'Messaging framework',
//       'Brand voice',
//     ],
//     illustration: <BrandStrategyIllustration />,
//     flip: false,
//   },
//   {
//     id: 'brand-identity',
//     badge: 'Identity',
//     title: 'Brand Identity',
//     description:
//       "A brand identity is more than a logo. It's the complete visual system — logo, colour palette, typography, icon set, and the rules for how they work together. We design identities built for longevity, not trends. Everything is delivered in formats ready for web, print, and digital use, alongside clear usage guidelines.",
//     features: ['Logo design', 'Colour system', 'Typography', 'Icon set', 'Usage guidelines'],
//     illustration: <BrandIdentityIllustration />,
//     flip: true,
//   },
//   {
//     id: 'print-signage',
//     badge: 'Print',
//     title: 'Print & Signage Design',
//     description:
//       'Physical materials need the same care as digital ones. Business cards, flyers, brochures, banners, signage, packaging — we design everything to the same standard as your website. Print-ready files, correct colour profiles, bleed and margin handled properly. No back-and-forth with the printer.',
//     features: [
//       'Business cards',
//       'Flyers & brochures',
//       'Banners & signage',
//       'Print-ready files',
//       'CMYK profiles',
//     ],
//     illustration: <PrintIllustration />,
//     flip: false,
//   },
//   {
//     id: 'social-media-branding',
//     badge: 'Social',
//     title: 'Social Media Branding',
//     description:
//       'Your social media presence should look like your brand, not like a template from a free tool. We design profile assets, post templates, story formats, and banner graphics for every platform you use — so every touchpoint looks consistent and intentional. We can also provide a content kit so your team can create on-brand posts without a designer.',
//     features: [
//       'Profile assets',
//       'Post templates',
//       'Story formats',
//       'Banner graphics',
//       'Content kit',
//     ],
//     illustration: <SocialBrandingIllustration />,
//     flip: true,
//   },
//   {
//     id: 'illustration-graphics',
//     badge: 'Illustration',
//     title: 'Illustration & Graphics',
//     description:
//       'Custom illustrations and graphic assets that are distinctly yours. We create icon sets, custom illustrations for web and print, infographics, and decorative SVG assets. Particularly useful for web projects where generic stock imagery would undermine the quality of the design around it.',
//     features: [
//       'Custom illustrations',
//       'Icon sets',
//       'SVG assets',
//       'Infographics',
//       'Web & print formats',
//     ],
//     illustration: <IllustrationIllustration />,
//     flip: false,
//   },
//   {
//     id: 'video-editing',
//     badge: 'Video',
//     title: 'Video Editing',
//     description:
//       'Footage editing and social-ready video production. We work with your raw footage — brand videos, product clips, testimonials, behind-the-scenes content — and turn it into properly paced, well-cut output ready to publish. Social formats, captions, and aspect ratios for every platform handled.',
//     features: [
//       'Footage editing',
//       'Social formats',
//       'Captions',
//       'Colour grade',
//       'Multi-platform cuts',
//     ],
//     illustration: <VideoIllustration />,
//     flip: true,
//   },
// ]

// const quickIcons = [
//   RiBriefcaseLine,
//   RiShieldLine,
//   RiPrinterLine,
//   RiInstagramLine,
//   RiImageLine,
//   RiFilmLine,
// ]

// const quickItems = services.map((s, i) => ({
//   icon: quickIcons[i],
//   title: s.title,
//   href: `/services/ui-ux-design#${s.id}`,
//   features: s.features.slice(0, 3),
// }))

// export default function BrandingCreativePage() {
//   return (
//     <section>
//       <PageHeader
//         title="Branding & Creative Design"
//         description="Identity systems that mean something. From brand strategy to every visual touchpoint, built for consistency and recognition across Manchester and beyond."
//       />

//       <Bracket fluid centered padding="small">
//         <div className="md:max-w-screen-xl mx-auto">
//           {services.map((service, i) => (
//             <ServiceSection key={service.id} {...service} flip={i % 2 !== 0} />
//           ))}

//           <QuickServicesStrip title="All Branding & Creative Services" items={quickItems} />
//         </div>
//       </Bracket>

//       <Bracket fluid centered padding="small">
//         <div className="md:max-w-screen-xl mx-auto">
//           <CTASection
//             title="Ready to Build a Brand That Stands Out?"
//             description="We define who you are before we design anything. Strategy-first, identity-led, built to last."
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
  RiBriefcaseLine,
  RiShieldLine,
  RiPrinterLine,
  RiInstagramLine,
  RiImageLine,
  RiFilmLine,
  RiPaletteLine,
  RiCheckLine,
  RiScissorsCutLine,
  RiArrowRightLine,
  RiPenNibLine,
  RiEyeLine,
  RiCodeLine,
  RiMagicLine,
  RiLayoutLine,
  RiFontSize,
} from 'react-icons/ri'

// ─── Hero Illustration — identity tokens → TB mark → brand outputs ────────────
const BrandingHeroIllustration = () => (
  <div className="w-full h-full flex items-center justify-center p-4 select-none" aria-hidden>
    <svg viewBox="0 0 380 240" className="w-full h-full" fill="none">
      <GridDots cols={14} rows={9} gap={28} ox={-4} oy={4} />

      {/* Left inputs: colour swatch + typography sample */}
      {/* Colour palette box */}
      <rect
        x="4"
        y="46"
        width="120"
        height="60"
        rx="8"
        className="fill-primary-50 dark:fill-primary-950 stroke-primary-200 dark:stroke-primary-800"
        strokeWidth="1"
      />
      <circle cx="18" cy="60" r="3" className="fill-primary-200 dark:fill-primary-700" />
      <circle cx="27" cy="60" r="3" className="fill-primary-200 dark:fill-primary-700" />
      <circle cx="36" cy="60" r="3" className="fill-primary-200 dark:fill-primary-700" />
      {/* Swatches */}
      <rect
        x="14"
        y="68"
        width="16"
        height="26"
        rx="3"
        className="fill-primary-900 dark:fill-primary-100"
      />
      <rect
        x="34"
        y="68"
        width="16"
        height="26"
        rx="3"
        className="fill-accent-500 dark:fill-accent-400"
      />
      <rect
        x="54"
        y="68"
        width="16"
        height="26"
        rx="3"
        className="fill-primary-300 dark:fill-primary-600"
      />
      <rect
        x="74"
        y="68"
        width="16"
        height="26"
        rx="3"
        className="fill-primary-100 dark:fill-primary-800 stroke-primary-200 dark:stroke-primary-700"
        strokeWidth="0.5"
      />
      <rect
        x="94"
        y="68"
        width="20"
        height="26"
        rx="3"
        className="fill-white dark:fill-black stroke-primary-200 dark:stroke-primary-700"
        strokeWidth="0.5"
      />

      {/* Typography box */}
      <rect
        x="4"
        y="132"
        width="120"
        height="60"
        rx="8"
        className="fill-primary-50 dark:fill-primary-950 stroke-primary-200 dark:stroke-primary-800"
        strokeWidth="1"
      />
      <circle cx="18" cy="146" r="3" className="fill-primary-200 dark:fill-primary-700" />
      <circle cx="27" cy="146" r="3" className="fill-primary-200 dark:fill-primary-700" />
      <circle cx="36" cy="146" r="3" className="fill-primary-200 dark:fill-primary-700" />
      <text
        x="14"
        y="168"
        fontSize="14"
        fontWeight="700"
        className="fill-primary-900 dark:fill-primary-100"
      >
        Aa
      </text>
      <text
        x="38"
        y="166"
        fontSize="9"
        className="fill-primary-500 dark:fill-primary-400"
        fontFamily="serif"
      >
        Brand typeface
      </text>
      <rect
        x="14"
        y="172"
        width="96"
        height="1.5"
        rx="1"
        className="fill-primary-200 dark:fill-primary-700"
      />
      <text x="14" y="183" fontSize="7.5" className="fill-primary-400 dark:fill-primary-600">
        H1 · H2 · Body · Caption
      </text>

      {/* Converging lines → TB mark */}
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

      {/* TB mark — raw */}
      <g transform="translate(142, 104) scale(0.038)">
        <path
          d="m56.332 0c-31.266 0.28956-56.33 25.554-56.33 56.888v686.22c0 31.343 25.112 56.615 56.387 56.89h576.27l-335.33-160.72v-478.55l335.33-160.72zm743.62 56.442-363.4 183.22 1.3358 322.17 362.11 181.73v-685.72c-0.01-0.46391 0-0.928 0-1.3891z"
          className="fill-primary-900 dark:fill-primary-100"
        />
      </g>

      {/* Branching to outputs */}
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

      {/* Strategy & Identity output */}
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
          Identity System
        </text>
        <circle cx="100" cy="10" r="2.5" className="fill-white/40 dark:fill-black/40" />
        <circle cx="108" cy="10" r="2.5" className="fill-white/40 dark:fill-black/40" />
        <circle cx="116" cy="10" r="2.5" className="fill-white/40 dark:fill-black/40" />
      </g>
      {['Brand strategy', 'Logo & mark', 'Colour system', 'Typography'].map((f, i) => (
        <g key={f} transform={`translate(232, ${64 + i * 10})`}>
          <circle cx="4" cy="4" r="2" className="fill-accent-500 dark:fill-accent-400" />
          <text x="10" y="7.5" fontSize="7.5" className="fill-primary-600 dark:fill-primary-400">
            {f}
          </text>
        </g>
      ))}

      {/* Creative output */}
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
          Creative Output
        </text>
        <circle cx="100" cy="10" r="2.5" className="fill-white/40 dark:fill-black/40" />
        <circle cx="108" cy="10" r="2.5" className="fill-white/40 dark:fill-black/40" />
        <circle cx="116" cy="10" r="2.5" className="fill-white/40 dark:fill-black/40" />
      </g>
      {['Print & signage', 'Social media', 'Illustration', 'Video editing'].map((f, i) => (
        <g key={f} transform={`translate(232, ${160 + i * 10})`}>
          <circle cx="4" cy="4" r="2" className="fill-primary-400 dark:fill-primary-600" />
          <text x="10" y="7.5" fontSize="7.5" className="fill-primary-600 dark:fill-primary-400">
            {f}
          </text>
        </g>
      ))}

      {/* Design by code badge */}
      <g transform="translate(236, 218)">
        <rect
          width="148"
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
          Strategy before design, always
        </text>
      </g>
    </svg>
  </div>
)

// ─── Service illustrations (all untouched) ────────────────────────────────────

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
      <div className="flex gap-1.5">
        <div className="w-8 h-8 rounded-lg bg-primary-900 dark:bg-primary-100 border border-primary-200 dark:border-primary-700" />
        <div className="w-8 h-8 rounded-lg bg-accent-500 border border-accent-400" />
        <div className="w-8 h-8 rounded-lg bg-primary-200 dark:bg-primary-700 border border-primary-300 dark:border-primary-600" />
        <div className="w-8 h-8 rounded-lg bg-white dark:bg-black border border-primary-200 dark:border-primary-700" />
      </div>
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
      <div className="w-20 h-12 rounded-lg bg-primary-900 dark:bg-primary-100 border border-primary-700 dark:border-primary-300 shadow-md p-2 flex flex-col justify-between">
        <div className="w-6 h-1.5 rounded-sm bg-accent-500/80" />
        <div>
          <div className="w-12 h-1 rounded-sm bg-white/40 dark:bg-black/40 mb-0.5" />
          <div className="w-8 h-0.5 rounded-sm bg-white/25 dark:bg-black/25" />
        </div>
      </div>
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
      <div className="grid grid-cols-3 gap-1.5">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className={`w-10 h-10 rounded-lg border ${i === 0 ? 'bg-accent-500/15 border-accent-400/40' : i === 4 ? 'bg-primary-100 dark:bg-primary-800 border-primary-200 dark:border-primary-700' : 'bg-primary-50 dark:bg-primary-900 border-primary-100 dark:border-primary-800'} flex items-center justify-center`}
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
      <div className="w-36 h-20 rounded-xl bg-black border border-primary-200 dark:border-primary-700 shadow-md overflow-hidden relative flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 to-primary-800/30" />
        <div className="relative w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
          <div className="w-0 h-0 border-t-[5px] border-b-[5px] border-l-[9px] border-transparent border-l-white ml-0.5" />
        </div>
      </div>
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

// ─── Design-by-code approach steps ───────────────────────────────────────────

const approachSteps = [
  {
    icon: RiBriefcaseLine,
    number: '01',
    title: 'Strategy first',
    body: "We define positioning, audience, and messaging before opening any design tool. If we don't know who the brand is for, we can't design it correctly.",
  },
  {
    icon: RiEyeLine,
    number: '02',
    title: 'Visual direction',
    body: 'We present two or three distinct visual directions — different in tone, not just colour. You choose the direction, not the details.',
  },
  {
    icon: RiPenNibLine,
    number: '03',
    title: 'Design development',
    body: 'Logo, colour system, typography, and supporting elements developed in full. Everything tested across real use cases — screens, print, dark mode.',
  },
  {
    icon: RiCodeLine,
    number: '04',
    title: 'Design by code',
    body: 'Where branding meets digital, we build it — not hand off a PDF. Components, SVG assets, and branded templates that actually work in your stack.',
  },
  {
    icon: RiLayoutLine,
    number: '05',
    title: 'Guidelines & handover',
    body: 'A brand guidelines document your team can actually use. Usage rules, colour specs, font files, logo variations. Everything in one place, yours permanently.',
  },
]

// ─── FAQ ──────────────────────────────────────────────────────────────────────

const brandFaqData = [
  {
    question: 'What does brand strategy actually include?',
    answer:
      'Positioning (what makes you different and worth choosing), audience definition (who specifically you are talking to and what they care about), a messaging framework (what you say and how you say it), and a brand voice. It becomes the brief that every design decision is judged against.',
  },
  {
    question: 'Do I need brand strategy or can I just get a logo?',
    answer:
      'You can get just a logo. But a logo without strategy is decoration. If you want a brand that consistently attracts the right customers, the strategy is the more valuable piece. We always recommend doing both — the strategy makes the design work harder.',
  },
  {
    question: 'What does design by code mean?',
    answer:
      "It means we don't just design assets and hand them over as a PDF. For digital use, we build them — React components with your brand tokens, SVG illustrations that work in dark mode, Tailwind CSS variables for your colour system. The brand lives in the code, not just in Figma.",
  },
  {
    question: 'Do you design for print as well as digital?',
    answer:
      'Yes. Business cards, flyers, banners, signage, packaging — all designed to the same standard as your website. Print-ready files with correct colour profiles, bleed settings, and margin handling. No back-and-forth with the printer.',
  },
  {
    question: 'How long does a brand identity project take?',
    answer:
      'Brand strategy: 1 to 2 weeks. Full brand identity including strategy: 3 to 5 weeks. Timeline depends on your availability for reviews and how quickly decisions get made on your side.',
  },
  {
    question: 'Can you rebrand an existing business without losing what works?',
    answer:
      'Yes — we start with a brand audit to understand what has equity worth keeping and what is holding you back. Rebrands done well feel like evolution, not replacement. We are careful not to throw away the things your existing customers recognise.',
  },
]

// ─── Ecosystem features ───────────────────────────────────────────────────────

const identityFeatures = [
  { icon: RiBriefcaseLine, text: 'Positioning and messaging framework before any visual work' },
  { icon: RiShieldLine, text: 'Logo, colour system, typography built for longevity, not trends' },
  { icon: RiEyeLine, text: 'Multiple visual directions — you choose the strategy, not the pixel' },
  { icon: RiCheckLine, text: 'Everything tested across web, print, and dark mode before delivery' },
  { icon: RiLayoutLine, text: 'Brand guidelines your team can actually follow and use' },
]

const creativeFeatures = [
  {
    icon: RiPrinterLine,
    text: 'Print-ready files for business cards, flyers, banners, and signage',
  },
  { icon: RiInstagramLine, text: 'Social media templates and profile assets for every platform' },
  { icon: RiImageLine, text: 'Custom SVG illustrations and icon sets built for your stack' },
  { icon: RiFilmLine, text: 'Footage editing and social-ready video cuts with captions' },
  {
    icon: RiCodeLine,
    text: 'Design by code — brand tokens and components in your actual codebase',
  },
]

// ─── Services ─────────────────────────────────────────────────────────────────

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

export default function BrandingCreativePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div>
      <PageHeader
        title="Branding & Creative Design"
        description="Identity systems that mean something. From brand strategy to every visual touchpoint, built for consistency and recognition across Manchester and beyond."
      />

      {/* Hero illustration + two-column */}
      <section className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem]">
        <Bracket fluid centered padding="small">
          <div className="md:max-w-screen-xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 lg:mb-20">
              <div className="w-full aspect-[4/3] max-w-lg mx-auto lg:max-w-none">
                <BrandingHeroIllustration />
              </div>
              <div>
                <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold leading-tight bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-5">
                  Strategy before design. Design by code.
                </h2>
                <p className="text-[clamp(0.9rem,1.4vw,1.05rem)] text-primary-500 dark:text-primary-400 leading-[1.8] mb-5">
                  Most agencies design first and justify it later. We define who your brand is for
                  before we open a design tool — because a logo without strategy is just decoration.
                </p>
                <p className="text-[clamp(0.88rem,1.3vw,1rem)] text-primary-500 dark:text-primary-400 leading-[1.75]">
                  And where branding meets digital, we don&apos;t hand off a PDF. We build it —
                  components, tokens, and SVG assets that live in your actual codebase and work in
                  dark mode.
                </p>
              </div>
            </div>

            {/* Two-col: Identity + Creative */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 divide-y lg:divide-y-0 lg:divide-x divide-dashed divide-primary-200 dark:divide-primary-800">
              <div className="pb-12 lg:pb-0 lg:pr-14">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary-900 dark:bg-primary-100 flex items-center justify-center shadow-sm flex-shrink-0">
                    <RiShieldLine size={26} className="text-white dark:text-black" />
                  </div>
                  <div>
                    <h3 className="text-[1.15rem] font-extrabold text-primary-900 dark:text-primary-50 leading-tight mb-1">
                      Identity System
                    </h3>
                    <p className="text-[0.8rem] text-primary-500 dark:text-primary-400 leading-relaxed">
                      Strategy-led brand identity built for longevity across every touchpoint
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {identityFeatures.map(({ icon: Icon, text }) => (
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
                  Start with brand strategy <RiArrowRightLine size={14} />
                </Link>
              </div>

              <div className="pt-12 lg:pt-0 lg:pl-14">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary-900 dark:bg-primary-100 flex items-center justify-center shadow-sm flex-shrink-0">
                    <RiMagicLine size={26} className="text-white dark:text-black" />
                  </div>
                  <div>
                    <h3 className="text-[1.15rem] font-extrabold text-primary-900 dark:text-primary-50 leading-tight mb-1">
                      Creative Output
                    </h3>
                    <p className="text-[0.8rem] text-primary-500 dark:text-primary-400 leading-relaxed">
                      Print, social, illustration, and video — all to the same standard as your
                      digital presence
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {creativeFeatures.map(({ icon: Icon, text }) => (
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
                  Discuss your creative brief <RiArrowRightLine size={14} />
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
                  How we approach branding
                </h2>
                <p className="text-[clamp(0.88rem,1.3vw,1rem)] text-primary-500 dark:text-primary-400 leading-[1.75] mb-6">
                  Strategy-led. Built to last. Delivered in code where it matters.
                </p>
                <div className="hidden lg:flex items-center justify-center w-28 h-28 relative">
                  <svg viewBox="0 0 112 112" className="absolute inset-0 w-full h-full" aria-hidden>
                    <ConcentricRings cx={56} cy={56} accentClass="text-accent-500" />
                  </svg>
                  <div className="w-10 h-10 rounded-full bg-primary-900 dark:bg-primary-100 flex items-center justify-center z-10">
                    <RiPenNibLine size={16} className="text-white dark:text-black" />
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
              {brandFaqData.map((item, i) => (
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
            title="Ready to Build a Brand That Stands Out?"
            description="We define who you are before we design anything. Strategy-first, identity-led, built to last."
            primary={{ label: 'Start a project', href: '/contact' }}
            secondary={{ label: 'See our work', href: '/work' }}
          />
        </div>
      </Bracket>
    </div>
  )
}
