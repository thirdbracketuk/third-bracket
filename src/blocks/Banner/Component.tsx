// import type { BannerBlock as BannerBlockProps } from 'src/payload-types'

// import { cn } from '@/utilities/ui'
// import React from 'react'
// import RichText from '@/components/RichText'

// type Props = {
//   className?: string
// } & BannerBlockProps

// export const BannerBlock: React.FC<Props> = ({ className, content, style }) => {
//   return (
//     <div className={cn('mx-auto my-8 w-full', className)}>
//       <div
//         className={cn('border py-3 px-6 flex items-center rounded', {
//           'border-border bg-card': style === 'info',
//           'border-error bg-error/30': style === 'error',
//           'border-success bg-success/30': style === 'success',
//           'border-warning bg-warning/30': style === 'warning',
//         })}
//       >
//         <RichText data={content} enableGutter={false} enableProse={false} />
//       </div>
//     </div>
//   )
// }

// import type { BannerBlock as BannerBlockProps } from 'src/payload-types'
// import { cn } from '@/utilities/ui'
// import React from 'react'
// import RichText from '@/components/RichText'
// import { RiInformationLine, RiLightbulbLine, RiDoubleQuotesL, RiStarLine } from 'react-icons/ri'

// type Props = {
//   className?: string
// } & BannerBlockProps

// const styleMap = {
//   note: {
//     wrapper:
//       'bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-700/40',
//     bar: 'bg-primary-300 dark:bg-primary-600',
//     icon: RiInformationLine,
//     iconClass: 'text-primary-400 dark:text-primary-500',
//   },
//   tip: {
//     wrapper:
//       'bg-accent-50/60 dark:bg-accent-950/20 border border-accent-200/70 dark:border-accent-800/30',
//     bar: 'bg-accent-400 dark:bg-accent-500',
//     icon: RiLightbulbLine,
//     iconClass: 'text-accent-500 dark:text-accent-400',
//   },
//   quote: {
//     wrapper:
//       'bg-secondary-50 dark:bg-secondary-900/20 border border-secondary-200 dark:border-secondary-700/40',
//     bar: 'bg-secondary-300 dark:bg-secondary-600',
//     icon: RiDoubleQuotesL,
//     iconClass: 'text-secondary-400 dark:text-secondary-500',
//   },
//   highlight: {
//     wrapper:
//       'bg-amber-50/60 dark:bg-amber-950/15 border border-amber-200/70 dark:border-amber-800/30',
//     bar: 'bg-amber-300 dark:bg-amber-500',
//     icon: RiStarLine,
//     iconClass: 'text-amber-400 dark:text-amber-500',
//   },
//   // legacy values — map gracefully so old content doesn't break
//   info: {
//     wrapper:
//       'bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-700/40',
//     bar: 'bg-primary-300 dark:bg-primary-600',
//     icon: RiInformationLine,
//     iconClass: 'text-primary-400 dark:text-primary-500',
//   },
//   warning: {
//     wrapper:
//       'bg-amber-50/60 dark:bg-amber-950/15 border border-amber-200/70 dark:border-amber-800/30',
//     bar: 'bg-amber-300 dark:bg-amber-500',
//     icon: RiStarLine,
//     iconClass: 'text-amber-400 dark:text-amber-500',
//   },
//   error: {
//     wrapper: 'bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800/40',
//     bar: 'bg-red-300 dark:bg-red-600',
//     icon: RiInformationLine,
//     iconClass: 'text-red-400 dark:text-red-500',
//   },
//   success: {
//     wrapper:
//       'bg-accent-50/60 dark:bg-accent-950/20 border border-accent-200/70 dark:border-accent-800/30',
//     bar: 'bg-accent-400 dark:bg-accent-500',
//     icon: RiLightbulbLine,
//     iconClass: 'text-accent-500 dark:text-accent-400',
//   },
// }

// export const BannerBlock: React.FC<Props> = ({ className, content, style = 'note' }) => {
//   const s = styleMap[style as keyof typeof styleMap] ?? styleMap.note
//   const Icon = s.icon

//   return (
//     <div className={cn('my-8 w-full not-prose', className)}>
//       <div className={cn('relative rounded-xl overflow-hidden', s.wrapper)}>
//         {/* Left accent bar */}
//         <div className={cn('absolute left-0 top-0 bottom-0 w-[3px]', s.bar)} />

//         <div className="flex items-start gap-3 px-5 py-4 pl-6">
//           <Icon className={cn('mt-0.5 flex-shrink-0 text-[1.05rem]', s.iconClass)} aria-hidden />
//           <div className="text-sm leading-relaxed text-primary-700 dark:text-primary-300 [&_p]:mb-0 [&_p]:text-sm [&_p]:leading-relaxed [&_p]:text-primary-700 [&_p]:dark:text-primary-300">
//             <RichText data={content} enableGutter={false} enableProse={false} />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

import type { BannerBlock as BannerBlockProps } from 'src/payload-types'
import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'
import {
  RiInformationLine,
  RiLightbulbLine,
  RiDoubleQuotesL,
  RiStarLine,
  RiAlertLine,
} from 'react-icons/ri'
import { HiOutlineSparkles } from 'react-icons/hi2'

type Props = {
  className?: string
} & BannerBlockProps

const styleMap = {
  // Uses Secondary shades for a professional, neutral glass look
  note: {
    wrapper:
      'bg-secondary-500/10 dark:bg-secondary-400/5 backdrop-blur-md border-secondary-200/50 dark:border-secondary-800/40',
    icon: RiInformationLine,
    iconClass: 'text-secondary-600 dark:text-secondary-400',
  },
  // Uses Accent (Ruby) to make actionable tips "pop"
  tip: {
    wrapper:
      'bg-accent-500/10 dark:bg-accent-400/5 backdrop-blur-md border-accent-200/50 dark:border-accent-800/30',
    icon: RiLightbulbLine,
    iconClass: 'text-accent-500 dark:text-accent-400',
  },
  // Uses deep Secondary shades for elegant, muted quotes
  quote: {
    wrapper:
      'bg-secondary-100/50 dark:bg-secondary-900/20 backdrop-blur-md border-secondary-200/60 dark:border-secondary-700/40',
    icon: RiDoubleQuotesL,
    iconClass: 'text-secondary-500 dark:text-secondary-400',
  },
  // Uses Accent shades for high-visibility highlights
  highlight: {
    wrapper:
      'bg-accent-500/15 dark:bg-accent-400/10 backdrop-blur-md border-accent-300/50 dark:border-accent-700/40',
    icon: HiOutlineSparkles,
    iconClass: 'text-accent-600 dark:text-accent-400',
  },
  // Legacy mapping using your brand-only colors
  info: {
    wrapper:
      'bg-primary-500/10 dark:bg-primary-400/5 backdrop-blur-md border-primary-200/50 dark:border-primary-800/40',
    icon: RiInformationLine,
    iconClass: 'text-primary-600 dark:text-primary-400',
  },
  warning: {
    wrapper:
      'bg-accent-400/10 dark:bg-accent-950/20 backdrop-blur-md border-accent-300/30 dark:border-accent-800/40',
    icon: RiStarLine,
    iconClass: 'text-accent-500 dark:text-accent-400',
  },
  error: {
    wrapper:
      'bg-accent-900/10 dark:bg-accent-950/30 backdrop-blur-md border-accent-500/40 dark:border-accent-800/50',
    icon: RiInformationLine,
    iconClass: 'text-accent-600 dark:text-accent-500',
  },
  success: {
    wrapper:
      'bg-secondary-500/10 dark:bg-secondary-400/5 backdrop-blur-md border-secondary-200/50 dark:border-secondary-800/40',
    icon: RiLightbulbLine,
    iconClass: 'text-secondary-600 dark:text-secondary-400',
  },
}

export const BannerBlock: React.FC<Props> = ({ className, content, style = 'note' }) => {
  const s = styleMap[style as keyof typeof styleMap] ?? styleMap.note
  const Icon = s.icon

  return (
    <div className={cn('my-10 w-full not-prose', className)}>
      <div
        className={cn(
          'relative rounded-2xl border p-6 md:p-8 transition-all duration-300',
          s.wrapper,
        )}
      >
        <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
          {/* Icon Container with subtle background glow */}
          <div
            className={cn(
              'flex-shrink-0 flex items-center justify-center rounded-xl p-2.5 bg-white/60 dark:bg-black/40 backdrop-blur-2xl ',
              s.iconClass,
            )}
          >
            <Icon className="text-2xl md:text-3xl" aria-hidden />
          </div>

          {/* Content Area - Typography matched to your body text */}
          <div className="flex-1 text-[clamp(0.95rem,1.5vw,1.1rem)] leading-relaxed text-secondary-800 dark:text-secondary-300 [&_p]:text-[inherit] [&_p]:leading-relaxed [&_p]:m-0">
            <RichText data={content} enableGutter={false} enableProse={false} />
          </div>
        </div>
      </div>
    </div>
  )
}
