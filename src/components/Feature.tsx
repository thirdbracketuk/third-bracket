// 'use client'
// import { Bracket, Card } from '@thirdbracket/bracketui'

// const cards = [
//   {
//     name: 'speed',
//     props: {
//       header: (
//         <span className=" bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-bold">
//           Cloud First
//         </span>
//       ),
//       cover: '/webspeed.svg',

//       children:
//         'We ignore shared hosting the same way your crush ignores you. We build every site on dedicated cloud resources instead of shared hosting.',
//     },
//   },

//   {
//     name: 'cost',
//     props: {
//       header: (
//         <span className=" bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-bold">
//           Infrastructure Engineering
//         </span>
//       ),
//       cover: '/cost.svg',

//       children:
//         'Infrastructure is only as good as the engineering behind it. We engineer your infrastructure for both strength and flexibility.',
//     },
//   },

//   {
//     name: 'minimal',
//     props: {
//       header: (
//         <span className=" bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-bold">
//           Delivery & Distribution
//         </span>
//       ),
//       cover: '/asthetic.svg',

//       children:
//         'Our content distribution and delivery includes a three‑layer setup to ensure your site loads almost instantly for every visitor.',
//     },
//   },
//   {
//     name: 'design',
//     props: {
//       header: (
//         <span className=" bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-bold">
//           Performance Optimization
//         </span>
//       ),

//       children:
//         'Performance goes beyond CMS. Our full‑stack acceleration strategy addresses every layer of your infrastructure and code.',
//     },
//   },
//   {
//     name: 'seo',
//     props: {
//       header: (
//         <span className=" bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-bold">
//           Modern Design
//         </span>
//       ),

//       children:
//         'Design influences trust. Our experienced design team knows what is trending now, that is why we have our own component library Bracket UI.',
//     },
//   },

//   {
//     name: 'devops',
//     props: {
//       header: (
//         <span className=" bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-bold">
//           SEO Foundation
//         </span>
//       ),

//       children:
//         'All our website are shipped with optimized copy, meta tags, HTTPS, XML sitemaps and logical site architecture.',
//     },
//   },
//   {
//     name: 'bracketui',
//     props: {
//       header: (
//         <span className=" bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-bold">
//           Transparency & Security
//         </span>
//       ),
//       cover: '/delivery.svg',

//       children:
//         'Having a small budget doesn’t mean you should be vendor locked. We ensure you own your site with full admin, domain, hosting and licence access',
//     },
//   },
//   {
//     name: 'whitelabel',
//     props: {
//       header: (
//         <span className=" bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-bold">
//           Launch Ready
//         </span>
//       ),

//       children:
//         'A website should work the moment it goes live. We don’t hand over half‑finished projects. Every site is shipped with features configured.',
//     },
//   },
// ]

// export default function CardGrid() {
//   return (
//     <section className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem]">
//       <Bracket fluid centered padding="small">
//         <div className="mx-auto md:max-w-screen-xl">
//           {/* Header */}
//           <div className="mb-8 md:mb-10 lg:mb-12 grid gap-3 lg:gap-4 lg:grid-cols-2 lg:items-center lg:max-w-5xl lg:mx-auto">
//             <h2 className=" text-[clamp(1.5rem,3vw,2.25rem)] leading-tight font-extrabold   bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text text-left sm:text-center lg:text-right">
//               What Makes thirdbracket Different?
//             </h2>
//             <p className=" text-[clamp(0.95rem,1.5vw,1.1rem)] leading-relaxed text-primary-500 dark:text-primary-400 text-left sm:text-center lg:text-left">
//               Every decision, from design to development, is engineered for performance and cost.
//             </p>
//           </div>

//           {/* Cards */}
//           <div className="space-y-8">
//             <div className="columns-1 sm:columns-2 lg:columns-3 gap-4   [column-fill:_balance]">
//               {cards.map(({ name, props }, index) => (
//                 <div
//                   key={index}
//                   className="mb-6 break-inside-avoid"
//                   data-card-name={name} // You can use this for debugging or testing
//                 >
//                   <Card
//                     size="lg"
//                     theme={{
//                       background: 'bg-white dark:bg-black',
//                       border:
//                         'border-opacity-30  border-primary-500 dark:shadow-[0_0_2px_rgba(224,227,230,0.20)]  shadow-[0_0_2px_rgba(11,13,15,0.10)]   ',

//                       //shadow-secondary-100 dark:shadow-secondary-900/50
//                       hover:
//                         '[@media(hover:hover)]:hover:border-opacity-50    [@media(hover:hover)]:hover:shadow-[0_0_3px_rgba(11,13,15,0.15)] [@media(hover:hover)]:dark:shadow-[0_0_2px_rgba(224,227,230,0.20)]         focus-within:border-opacity-100 active:border-opacity-100 ',

//                       text: 'text-primary-400 dark:text-primary-600    leading-[1.45] font-normal',
//                     }}
//                     className="!delay-50   motion-reduce:!transition-none motion-reduce:hover:!transform-none "
//                     {...props}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </Bracket>
//     </section>
//   )
// }

'use client'
import { Bracket, Card } from '@thirdbracket/bracketui'
import {
  RiSearchLine,
  RiBarChartLine,
  RiFileTextLine,
  RiLayout2Line,
  RiBracesLine,
  RiPaletteLine,
  RiShieldCheckLine,
  RiRocketLine,
  RiTeamLine,
  RiGlobalLine,
  RiLockLine,
  RiCheckLine,
} from 'react-icons/ri'

// ─── Illustration: Brand-First Approach ───────────────────────────────────────
// Concept: layered concentric circles (smallest to largest) representing brand
// building from core identity outward. Icons float at compass points.
const BrandIllustration = () => (
  <div className="relative w-full h-44 flex items-center justify-center overflow-hidden select-none">
    {/* Concentric circles - outlined, progressively larger */}
    <svg viewBox="0 0 200 160" className="absolute inset-0 w-full h-full" aria-hidden>
      <circle
        cx="100"
        cy="80"
        r="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-accent-500/20 dark:text-accent-400/15"
      />
      <circle
        cx="100"
        cy="80"
        r="36"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-accent-500/16 dark:text-accent-400/12"
        strokeDasharray="3 3"
      />
      <circle
        cx="100"
        cy="80"
        r="54"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-accent-500/12 dark:text-accent-400/10"
      />
      <circle
        cx="100"
        cy="80"
        r="72"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.75"
        className="text-accent-500/8 dark:text-accent-400/7"
        strokeDasharray="2 4"
      />
      <circle
        cx="100"
        cy="80"
        r="90"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        className="text-accent-500/5 dark:text-accent-400/5"
      />
      {/* Subtle radial lines */}
      <line
        x1="100"
        y1="26"
        x2="100"
        y2="8"
        stroke="currentColor"
        strokeWidth="0.5"
        className="text-accent-500/10"
      />
      <line
        x1="100"
        y1="134"
        x2="100"
        y2="152"
        stroke="currentColor"
        strokeWidth="0.5"
        className="text-accent-500/10"
      />
      <line
        x1="46"
        y1="80"
        x2="10"
        y2="80"
        stroke="currentColor"
        strokeWidth="0.5"
        className="text-accent-500/10"
      />
      <line
        x1="154"
        y1="80"
        x2="190"
        y2="80"
        stroke="currentColor"
        strokeWidth="0.5"
        className="text-accent-500/10"
      />
    </svg>

    {/* Center core — brand mark */}
    <div className="relative z-10 w-9 h-9 rounded-full bg-accent-500/15 dark:bg-accent-400/10 border border-accent-500/30 dark:border-accent-400/25 flex items-center justify-center">
      <RiPaletteLine size={16} className="text-accent-600 dark:text-accent-400" />
    </div>

    {/* Floating icons at compass points */}
    <div className="absolute top-[18px] left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-primary-100 dark:bg-primary-900 border border-primary-200 dark:border-primary-700 flex items-center justify-center shadow-sm">
      <RiLayout2Line size={13} className="text-primary-600 dark:text-primary-300" />
    </div>
    <div className="absolute bottom-[18px] left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-primary-100 dark:bg-primary-900 border border-primary-200 dark:border-primary-700 flex items-center justify-center shadow-sm">
      <RiFileTextLine size={13} className="text-primary-600 dark:text-primary-300" />
    </div>
    <div className="absolute left-[18px] top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-primary-100 dark:bg-primary-900 border border-primary-200 dark:border-primary-700 flex items-center justify-center shadow-sm">
      <RiTeamLine size={13} className="text-primary-600 dark:text-primary-300" />
    </div>
    <div className="absolute right-[18px] top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-primary-100 dark:bg-primary-900 border border-primary-200 dark:border-primary-700 flex items-center justify-center shadow-sm">
      <RiGlobalLine size={13} className="text-primary-600 dark:text-primary-300" />
    </div>

    {/* Diagonal floating badge — top right */}
    <div className="absolute top-4 right-4 flex items-center gap-1 bg-accent-50 dark:bg-accent-950/50 border border-accent-200/60 dark:border-accent-700/40 rounded-full px-2 py-0.5">
      <span className="w-1.5 h-1.5 rounded-full bg-accent-500 dark:bg-accent-400" />
      <span className="text-[9px] font-medium text-accent-700 dark:text-accent-300 leading-none">
        Strategy first
      </span>
    </div>
  </div>
)

// ─── Illustration: Modern Design Standards ─────────────────────────────────────
// Concept: stacked overlapping rectangles (UI layers/cards) with a bracket motif
// and code/component icons. Geometric, precise, minimal.
const DesignIllustration = () => (
  <div className="relative w-full h-44 flex items-center justify-center overflow-hidden select-none">
    <svg viewBox="0 0 200 160" className="absolute inset-0 w-full h-full" aria-hidden>
      {/* Grid dots background */}
      {[...Array(7)].map((_, col) =>
        [...Array(5)].map((_, row) => (
          <circle
            key={`${col}-${row}`}
            cx={20 + col * 28}
            cy={20 + row * 28}
            r="1"
            fill="currentColor"
            className="text-primary-300/30 dark:text-primary-700/30"
          />
        )),
      )}
      {/* Bracket motif — left */}
      <path
        d="M58 45 L48 45 L48 115 L58 115"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-accent-500/40 dark:text-accent-400/35"
      />
      {/* Bracket motif — right */}
      <path
        d="M142 45 L152 45 L152 115 L142 115"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-accent-500/40 dark:text-accent-400/35"
      />
    </svg>

    {/* Stacked UI cards */}
    <div className="relative z-10 flex flex-col items-center gap-2">
      {/* Card 1 — back */}
      <div className="w-36 h-8 rounded-lg bg-primary-100/60 dark:bg-primary-800/40 border border-primary-200/80 dark:border-primary-700/60 translate-y-2 scale-[0.94] flex items-center px-3 gap-2">
        <div className="w-3 h-3 rounded-sm bg-accent-400/50 dark:bg-accent-500/40" />
        <div className="flex-1 h-1.5 rounded-full bg-primary-300/40 dark:bg-primary-600/40" />
      </div>
      {/* Card 2 — middle */}
      <div className="w-36 h-8 rounded-lg bg-primary-50 dark:bg-primary-900 border border-primary-200 dark:border-primary-700 shadow-sm flex items-center px-3 gap-2 -mt-3">
        <div className="w-3 h-3 rounded-sm bg-accent-500/60 dark:bg-accent-400/50" />
        <div className="flex-1 h-1.5 rounded-full bg-primary-200/60 dark:bg-primary-700/60" />
        <div className="w-6 h-1.5 rounded-full bg-accent-300/50" />
      </div>
      {/* Card 3 — front/active */}
      <div className="w-36 h-10 rounded-xl bg-white dark:bg-black border border-primary-200 dark:border-primary-700 shadow-md flex items-center px-3 gap-2 -mt-3 ring-1 ring-accent-500/20">
        <div className="w-4 h-4 rounded-md bg-accent-500 dark:bg-accent-400 flex items-center justify-center">
          <RiBracesLine size={9} className="text-white dark:text-black" />
        </div>
        <div className="flex-1">
          <div className="h-1.5 w-16 rounded-full bg-primary-200 dark:bg-primary-700 mb-1" />
          <div className="h-1 w-10 rounded-full bg-primary-100 dark:bg-primary-800" />
        </div>
        <RiCheckLine size={12} className="text-accent-500 dark:text-accent-400" />
      </div>
    </div>

    {/* Badge */}
    <div className="absolute bottom-3 right-4 flex items-center gap-1 bg-primary-50 dark:bg-primary-950 border border-primary-200/60 dark:border-primary-700/40 rounded-full px-2 py-0.5">
      <span className="text-[9px] font-medium text-primary-500 dark:text-primary-400 leading-none">
        BracketUI
      </span>
    </div>
  </div>
)

// ─── Illustration: You Own Everything ─────────────────────────────────────────
// Concept: a key + shield composition. Concentric rounded rectangles (like nested
// panels) frame a shield icon with a lock/key. Radiating short dashes suggest
// security perimeter.
const OwnershipIllustration = () => (
  <div className="relative w-full h-44 flex items-center justify-center overflow-hidden select-none">
    <svg viewBox="0 0 200 160" className="absolute inset-0 w-full h-full" aria-hidden>
      {/* Concentric rounded rectangles */}
      <rect
        x="60"
        y="30"
        width="80"
        height="100"
        rx="14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-primary-400/12 dark:text-primary-600/12"
      />
      <rect
        x="44"
        y="18"
        width="112"
        height="124"
        rx="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.75"
        className="text-primary-400/8 dark:text-primary-600/8"
        strokeDasharray="3 3"
      />
      <rect
        x="28"
        y="6"
        width="144"
        height="148"
        rx="26"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        className="text-primary-400/5 dark:text-primary-600/5"
      />
      {/* Radiating dashes — 8 directions */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
        const rad = (deg * Math.PI) / 180
        const r1 = 68,
          r2 = 76
        return (
          <line
            key={i}
            x1={100 + r1 * Math.cos(rad)}
            y1={80 + r1 * Math.sin(rad)}
            x2={100 + r2 * Math.cos(rad)}
            y2={80 + r2 * Math.sin(rad)}
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            className="text-accent-500/20 dark:text-accent-400/15"
          />
        )
      })}
    </svg>

    {/* Shield + lock center */}
    <div className="relative z-10 flex flex-col items-center gap-3">
      <div className="w-14 h-14 rounded-2xl bg-primary-50 dark:bg-primary-950 border border-primary-200 dark:border-primary-800 shadow-md flex items-center justify-center relative">
        <RiShieldCheckLine size={26} className="text-accent-500 dark:text-accent-400" />
        {/* Small lock badge */}
        <div className="absolute -bottom-1.5 -right-1.5 w-5 h-5 rounded-full bg-accent-500 dark:bg-accent-400 border-2 border-white dark:border-black flex items-center justify-center">
          <RiLockLine size={9} className="text-white dark:text-black" />
        </div>
      </div>

      {/* Three ownership pills */}
      <div className="flex flex-col gap-1 items-center">
        {['Full admin access', 'Domain & hosting', 'No lock-in'].map((label) => (
          <div
            key={label}
            className="flex items-center gap-1.5 bg-primary-50 dark:bg-primary-950 border border-primary-100 dark:border-primary-800 rounded-full px-2.5 py-0.5"
          >
            <RiCheckLine size={9} className="text-accent-500 dark:text-accent-400 flex-shrink-0" />
            <span className="text-[9px] font-medium text-primary-600 dark:text-primary-400 leading-none">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
)

// ─── Header CTA Illustration ───────────────────────────────────────────────────
// Concept: rocket launching from a layered platform with orbit rings.
// Clean, upward-motion feel matching "Start a project" energy.
export const HeaderCTAIllustration = () => (
  <div className="relative w-24 h-24 mx-auto mb-3 flex items-center justify-center">
    <svg viewBox="0 0 96 96" className="absolute inset-0 w-full h-full" aria-hidden>
      {/* Orbit rings */}
      <ellipse
        cx="48"
        cy="72"
        rx="32"
        ry="8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-primary-400/20 dark:text-primary-500/20"
      />
      <ellipse
        cx="48"
        cy="72"
        rx="20"
        ry="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.75"
        className="text-primary-400/15 dark:text-primary-500/15"
      />
      {/* Vertical dashed launch path */}
      <line
        x1="48"
        y1="20"
        x2="48"
        y2="60"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeDasharray="2 3"
        className="text-accent-500/30 dark:text-accent-400/25"
      />
    </svg>

    {/* Rocket icon in circle */}
    <div className="relative z-10 w-12 h-12 rounded-2xl bg-white dark:bg-black border border-primary-200 dark:border-primary-700 shadow-md flex items-center justify-center -mt-4">
      <RiRocketLine size={22} className="text-accent-500 dark:text-accent-400 -rotate-45" />
    </div>

    {/* Speed lines */}
    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5">
      <div className="w-6 h-px bg-primary-300/40 dark:bg-primary-700/40 rounded-full" />
      <div className="w-4 h-px bg-primary-300/30 dark:bg-primary-700/30 rounded-full" />
    </div>
  </div>
)

const cards = [
  {
    name: 'brand-first',
    props: {
      header: (
        <span className="bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-bold">
          Strategy Before Design
        </span>
      ),
      cover: <BrandIllustration />,
      children:
        'Every project starts with strategy, not a template. We design around your identity, your audience and your goals.',
    },
  },
  {
    name: 'seo',
    props: {
      header: (
        <span className="bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-bold">
          SEO From Day One
        </span>
      ),
      children:
        'Search optimisation is not an add-on. Every site ships with clean architecture, meta structure and performance built in from the start.',
    },
  },
  {
    name: 'design',
    props: {
      header: (
        <span className="bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-bold">
          Modern Design Standards
        </span>
      ),
      cover: <DesignIllustration />,
      children:
        'We build with our own component library BracketUI - consistent, fast and visually sharp interfaces every time.',
    },
  },
  {
    name: 'launch',
    props: {
      header: (
        <span className="bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-bold">
          Launch Ready
        </span>
      ),
      children:
        'Your site goes live fully configured, tested, and ready to perform. No unfinished handovers.',
    },
  },
  {
    name: 'ownership',
    props: {
      header: (
        <span className="bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-bold">
          You Own Everything
        </span>
      ),
      cover: <OwnershipIllustration />,
      children:
        'Full admin, domain, hosting and licence access from day one. No lock-in, no dependency',
    },
  },
  {
    name: 'cost',
    props: {
      header: (
        <span className="bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-bold">
          Agency Quality Without Agency Overhead
        </span>
      ),
      children:
        'As a remote specialist team, we remove unnecessary overhead and put that value directly into the quality of your project.',
    },
  },
]

export default function CardGrid() {
  return (
    <section className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem]">
      <Bracket fluid centered padding="small">
        <div className="mx-auto md:max-w-screen-xl">
          <div className="mb-8 md:mb-10 lg:mb-12 grid gap-3 lg:gap-4 lg:grid-cols-2 lg:items-center lg:max-w-5xl lg:mx-auto">
            <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] leading-tight font-extrabold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text text-left sm:text-center lg:text-right">
              The Third Bracket Difference
            </h2>
            <p className="text-[clamp(0.95rem,1.5vw,1.1rem)] leading-relaxed text-primary-500 dark:text-primary-400 text-left sm:text-center lg:text-left">
              We build a digital presence designed to perform long after launch.
            </p>
          </div>

          <div className="space-y-8">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
              {cards.map(({ name, props }, index) => (
                <div key={index} className="mb-6 break-inside-avoid" data-card-name={name}>
                  <Card
                    size="lg"
                    theme={{
                      background: 'bg-white dark:bg-black',
                      border:
                        'border-opacity-30 border-primary-500 dark:shadow-[0_0_2px_rgba(224,227,230,0.20)] shadow-[0_0_2px_rgba(11,13,15,0.10)]',
                      hover:
                        '[@media(hover:hover)]:hover:border-opacity-50 [@media(hover:hover)]:hover:shadow-[0_0_3px_rgba(11,13,15,0.15)] [@media(hover:hover)]:dark:shadow-[0_0_2px_rgba(224,227,230,0.20)] focus-within:border-opacity-100 active:border-opacity-100',
                      text: 'text-primary-400 dark:text-primary-600 leading-[1.45] font-normal',
                    }}
                    className="!delay-50 motion-reduce:!transition-none motion-reduce:hover:!transform-none"
                    {...props}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Bracket>
    </section>
  )
}
