import Link from 'next/link'
import { IconType } from 'react-icons'
import { IoIosArrowForward } from 'react-icons/io'
import { RiCheckLine } from 'react-icons/ri'

// ─── Shared illustration building blocks ─────────────────────────────────────

/**
 * ConcentricRings — layered outlined circles, progressively fading outward.
 * Pass accentClass e.g. "text-accent-500" for the ring colour.
 */
export const ConcentricRings = ({
  cx = 100,
  cy = 90,
  accentClass = 'text-accent-500',
}: {
  cx?: number
  cy?: number
  accentClass?: string
}) => (
  <>
    <circle
      cx={cx}
      cy={cy}
      r="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      className={`${accentClass}/25`}
    />
    <circle
      cx={cx}
      cy={cy}
      r="36"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
      className={`${accentClass}/18`}
      strokeDasharray="3 3"
    />
    <circle
      cx={cx}
      cy={cy}
      r="54"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.6"
      className={`${accentClass}/12`}
    />
    <circle
      cx={cx}
      cy={cy}
      r="72"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.4"
      className={`${accentClass}/8`}
      strokeDasharray="2 4"
    />
    <circle
      cx={cx}
      cy={cy}
      r="90"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.3"
      className={`${accentClass}/5`}
    />
  </>
)

/**
 * GridDots — a subtle dot grid background.
 */
export const GridDots = ({
  cols = 7,
  rows = 5,
  gap = 28,
  ox = 14,
  oy = 14,
}: {
  cols?: number
  rows?: number
  gap?: number
  ox?: number
  oy?: number
}) => (
  <>
    {Array.from({ length: cols }).map((_, col) =>
      Array.from({ length: rows }).map((_, row) => (
        <circle
          key={`${col}-${row}`}
          cx={ox + col * gap}
          cy={oy + row * gap}
          r="1"
          fill="currentColor"
          className="text-primary-300/25 dark:text-primary-700/25"
        />
      )),
    )}
  </>
)

/**
 * RadialDashes — 8-direction short dashes radiating from a centre point.
 */
export const RadialDashes = ({
  cx = 100,
  cy = 90,
  r1 = 60,
  r2 = 70,
  accentClass = 'text-accent-500',
}: {
  cx?: number
  cy?: number
  r1?: number
  r2?: number
  accentClass?: string
}) => (
  <>
    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
      const rad = (deg * Math.PI) / 180
      return (
        <line
          key={i}
          x1={cx + r1 * Math.cos(rad)}
          y1={cy + r1 * Math.sin(rad)}
          x2={cx + r2 * Math.cos(rad)}
          y2={cy + r2 * Math.sin(rad)}
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          className={`${accentClass}/20`}
        />
      )
    })}
  </>
)

// ─── ServiceSection ───────────────────────────────────────────────────────────

interface ServiceSectionProps {
  id: string
  badge: string
  badgeColor?: string
  title: string
  description: string
  features: string[]
  illustration: React.ReactNode
  flip?: boolean // flip = illustration on right, content on left
}

export function ServiceSection({
  id,
  badge,
  badgeColor = 'bg-accent-50 dark:bg-accent-950/50 text-accent-700 dark:text-accent-300 border-accent-200/60 dark:border-accent-700/40',
  title,
  description,
  features,
  illustration,
  flip = false,
}: ServiceSectionProps) {
  return (
    <section
      id={id}
      className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem] scroll-mt-24 border-b border-primary-100 dark:border-primary-900/50 last:border-0"
    >
      <div
        className={`flex flex-col gap-10 lg:gap-16 lg:items-center ${
          flip ? 'lg:flex-row-reverse' : 'lg:flex-row'
        }`}
      >
        {/* Illustration */}
        <div className="w-full lg:w-[44%] flex-shrink-0">
          <div className="relative w-full aspect-[4/3] max-w-sm mx-auto lg:max-w-none rounded-2xl overflow-hidden bg-primary-50/50 dark:bg-primary-950/30 border border-primary-100 dark:border-primary-800/50">
            {illustration}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Badge */}
          <span
            className={`inline-flex items-center gap-1.5 text-[0.72rem] font-semibold px-2.5 py-1 rounded-full border mb-4 ${badgeColor}`}
          >
            {badge}
          </span>

          {/* Title */}
          <h2 className="text-[clamp(1.35rem,2.5vw,1.9rem)] font-extrabold leading-tight bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-4">
            {title}
          </h2>

          {/* Description */}
          <p className="text-[clamp(0.9rem,1.4vw,1.05rem)] text-primary-500 dark:text-primary-400 leading-[1.75] mb-6">
            {description}
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-2 mb-7">
            {features.map((f, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 text-[0.72rem] font-medium px-2.5 py-1.5 rounded-lg bg-primary-50 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 border border-primary-100 dark:border-primary-800/40"
              >
                <RiCheckLine
                  size={10}
                  className="text-accent-500 dark:text-accent-400 flex-shrink-0"
                />
                {f}
              </span>
            ))}
          </div>

          {/* CTA link */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 group text-sm font-medium text-primary-900 dark:text-primary-100"
          >
            Get in touch
            <span className="group-hover:translate-x-1 transition-transform ease-in-out duration-200">
              <IoIosArrowForward />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── Compact card strip (reference grid at bottom) ────────────────────────────

interface QuickCardProps {
  icon: IconType
  title: string
  href: string
  features: string[]
}

export function QuickServiceCard({ icon: Icon, title, href, features }: QuickCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-3 p-5 rounded-xl bg-white dark:bg-black border border-primary-100 dark:border-primary-800/50 shadow-[0_0_2px_rgba(11,13,15,0.08)] dark:shadow-[0_0_2px_rgba(224,227,230,0.12)] hover:border-primary-300 dark:hover:border-primary-600 hover:shadow-[0_0_6px_rgba(11,13,15,0.12)] transition-all duration-200"
    >
      <div className="w-10 h-10 flex items-center justify-center border border-primary-100 dark:border-primary-800 rounded-lg bg-primary-50 dark:bg-primary-950">
        <Icon size={20} className="text-primary-700 dark:text-primary-300" />
      </div>
      <p className="text-sm font-semibold text-primary-900 dark:text-primary-100 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
        {title}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {features.slice(0, 3).map((f, i) => (
          <span
            key={i}
            className="text-[10px] px-2 py-0.5 rounded-md bg-primary-50 dark:bg-primary-950/60 text-primary-500 dark:text-primary-500 border border-primary-100 dark:border-primary-800/40"
          >
            {f}
          </span>
        ))}
      </div>
    </Link>
  )
}

export function QuickServicesStrip({ title, items }: { title: string; items: QuickCardProps[] }) {
  return (
    <section className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem]">
      <h2 className="text-[clamp(1.2rem,2vw,1.5rem)] font-extrabold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-8">
        {title}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item, i) => (
          <QuickServiceCard key={i} {...item} />
        ))}
      </div>
    </section>
  )
}
