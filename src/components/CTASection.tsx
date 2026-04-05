'use client'

import { Bracket, Button } from '@thirdbracket/bracketui'
import Image from 'next/image'
import Link from 'next/link'

interface CTALink {
  label: string
  href: string
}
interface CTACover {
  src: string
  alt: string
  width: number
  height: number
}

interface CTASectionProps {
  cover?: CTACover
  title: string
  description: string
  primary?: CTALink
  secondary?: CTALink
  className?: string
}

const CTASection = ({
  cover,
  title,
  description,
  primary,
  secondary,
  className = '',
}: CTASectionProps) => {
  return (
    <section className={`py-[3rem] sm:py-[3.75rem] lg:py-[4rem]  ${className}`}>
      <Bracket fluid centered padding="small">
        <div className="mx-auto md:max-w-screen-xl">
          <div className="relative overflow-hidden rounded-3xl p-12 sm:p-16 bg-gradient-to-br from-accent-50/50 via-white to-accent-50/30 dark:from-accent-950/10 dark:via-black dark:to-accent-950/5 border border-accent-200 dark:border-accent-800/30 shadow-[0_0_0_1px_rgba(188,58,91,0.06),0_8px_32px_-8px_rgba(188,58,91,0.12),0_24px_64px_-16px_rgba(0,0,0,0.08)] dark:shadow-[0_0_0_1px_rgba(215,93,130,0.08),0_8px_40px_-8px_rgba(215,93,130,0.16),0_24px_64px_-16px_rgba(0,0,0,0.5)]">
            {/* Ambient bloom */}
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-accent-100/60 dark:bg-accent-900/10 blur-3xl pointer-events-none"></div>

            <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-12 items-center">
              <div>
                <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] leading-tight font-extrabold   bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-3">
                  {title}
                </h2>
                <p className="text-[clamp(0.95rem,1.5vw,1.1rem)] leading-relaxed text-primary-500 dark:text-primary-400 max-w-[460px]">
                  {description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col gap-3 flex-shrink-0">
                {primary && (
                  <Button
                    as={Link}
                    href={primary.href}
                    size="md"
                    theme={{
                      background: 'bg-gradient-text dark:bg-gradient-text-dark',
                      hoverBackground:
                        '[@media(hover:hover)]:hover:bg-primary-800 dark:[@media(hover:hover)]:hover:bg-primary-200 [@media(hover:hover)]:hover:-translate-y-[1px]',
                      focusRing: 'focus:ring-primary-700 dark:focus:ring-secondary-300',
                      text: 'text-white dark:text-primary-950',
                    }}
                    className="px-[18px] py-[10px] text-[0.875rem]"
                  >
                    {primary.label}
                  </Button>
                )}
                {secondary && (
                  <Button
                    as={Link}
                    href={secondary.href}
                    outline
                    size="md"
                    theme={{
                      border: 'border-primary-200 dark:border-primary-700',
                      hoverBackground:
                        'hover:bg-primary-50 dark:hover:bg-primary-900 [@media(hover:hover)]:hover:-translate-y-[1px]',
                      focusRing: 'focus:ring-primary-700 dark:focus:ring-secondary-300',
                      text: 'text-primary-700 dark:text-primary-300',
                    }}
                    className="px-[18px] py-[10px] text-[0.875rem]"
                  >
                    {secondary.label}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </Bracket>
    </section>
  )
}

export default CTASection

// 'use client'
// import { Bracket, Button } from '@thirdbracket/bracketui'
// import Image from 'next/image'
// import Link from 'next/link'

// interface CTALink {
//   label: string
//   href: string
// }
// interface CTACover {
//   src: string
//   alt: string
//   width: number
//   height: number
// }
// interface CTASectionProps {
//   cover?: CTACover
//   title: string
//   description: string
//   primary?: CTALink
//   secondary?: CTALink
//   className?: string
// }

// const CTASection = ({
//   cover,
//   title,
//   description,
//   primary,
//   secondary,
//   className = '',
// }: CTASectionProps) => {
//   return (
//     <section className={`py-[3rem] sm:py-[3.75rem] lg:py-[4rem] ${className}`}>
//       <Bracket fluid centered padding="small">
//         <div className="mx-auto md:max-w-screen-xl">
//           <div
//             className="relative overflow-hidden rounded-3xl
//             bg-primary-50 dark:bg-primary-950
//             border border-primary-100 dark:border-primary-800/50
//             shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_-4px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_3px_rgba(0,0,0,0.3),0_8px_32px_-4px_rgba(0,0,0,0.4)]
//           "
//           >
//             {/* Top accent line — sharp, not gradient-washed */}
//             <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-400 via-accent-500 to-accent-400 dark:from-accent-600 dark:via-accent-500 dark:to-accent-600" />

//             {/* Subtle radial bloom — restrained on light */}
//             <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-accent-100/40 dark:bg-accent-900/15 blur-3xl pointer-events-none" />

//             <div className="relative z-10 p-10 sm:p-14">
//               <div className="grid md:grid-cols-[1fr_auto] gap-10 items-center">
//                 <div>
//                   <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] leading-tight font-extrabold tracking-tight bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-3">
//                     {title}
//                   </h2>
//                   <p className="text-[clamp(0.95rem,1.5vw,1.1rem)] leading-relaxed text-primary-500 dark:text-primary-400 max-w-[460px]">
//                     {description}
//                   </p>
//                 </div>

//                 <div className="flex flex-col sm:flex-row md:flex-col gap-3 flex-shrink-0">
//                   {primary && (
//                     <Button
//                       as={Link}
//                       href={primary.href}
//                       size="md"
//                       theme={{
//                         background: 'bg-accent-600 dark:bg-accent-500',
//                         hoverBackground:
//                           '[@media(hover:hover)]:hover:bg-accent-700 dark:[@media(hover:hover)]:hover:bg-accent-400 [@media(hover:hover)]:hover:-translate-y-[1px]',
//                         focusRing: 'focus:ring-accent-500 dark:focus:ring-accent-400',
//                         text: 'text-white',
//                       }}
//                       className="px-[18px] py-[10px] text-[0.875rem] shadow-[0_2px_8px_rgba(188,58,91,0.25)] dark:shadow-[0_2px_12px_rgba(215,93,130,0.2)]"
//                     >
//                       {primary.label}
//                     </Button>
//                   )}
//                   {secondary && (
//                     <Button
//                       as={Link}
//                       href={secondary.href}
//                       outline
//                       size="md"
//                       theme={{
//                         border: 'border-primary-200 dark:border-primary-700',
//                         hoverBackground:
//                           'hover:bg-primary-100 dark:hover:bg-primary-800/50 [@media(hover:hover)]:hover:-translate-y-[1px]',
//                         focusRing: 'focus:ring-primary-700 dark:focus:ring-secondary-300',
//                         text: 'text-primary-700 dark:text-primary-300',
//                       }}
//                       className="px-[18px] py-[10px] text-[0.875rem]"
//                     >
//                       {secondary.label}
//                     </Button>
//                   )}
//                 </div>
//               </div>

//               {cover && (
//                 <div className="mt-10 pt-8 border-t border-primary-100 dark:border-primary-800/50 flex justify-center">
//                   <Image
//                     src={cover.src}
//                     alt={cover.alt}
//                     width={cover.width}
//                     height={cover.height}
//                     className="max-h-32 w-auto object-contain opacity-50 dark:opacity-30"
//                   />
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </Bracket>
//     </section>
//   )
// }

// export default CTASection
