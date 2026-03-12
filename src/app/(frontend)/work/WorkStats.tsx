import React from 'react'

const stats = [
  {
    value: '#1',
    label: 'DesignRush UK',
    sub: 'Two consecutive years',
    accent: true,
  },
  {
    value: '100+',
    label: 'Projects Delivered',
    sub: 'Across every industry',
    accent: false,
  },
  {
    value: '98',
    label: 'PageSpeed Score',
    sub: 'WordPress & Next.js',
    accent: false,
  },
  {
    value: '100%',
    label: 'TypeScript',
    sub: 'Zero legacy codebases',
    accent: false,
  },
]

export default function WorkStats() {
  return (
    <section className="relative">
      <div className="absolute inset-x-0 top-0 h-px bg-secondary-100 dark:bg-secondary-800/60" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-secondary-100 dark:bg-secondary-800/60" />

      <div className="grid grid-cols-2 sm:grid-cols-4">
        {stats.map((stat, i) => {
          const isRightColMobile = i % 2 === 1
          const isSecondRowMobile = i >= 2

          return (
            <div
              key={i}
              className={[
                'relative px-5 sm:px-8 py-8 sm:py-10',
                isRightColMobile
                  ? 'border-l border-secondary-100 dark:border-secondary-800/50'
                  : '',
                isSecondRowMobile
                  ? 'border-t sm:border-t-0 border-secondary-100 dark:border-secondary-800/50'
                  : '',
                i > 0 ? 'sm:border-l sm:border-secondary-100 sm:dark:border-secondary-800/50' : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {stat.accent && (
                <div className="absolute inset-0 bg-accent-radial dark:bg-accent-radial-dark opacity-60 pointer-events-none" />
              )}

              <div className="relative z-10">
                <div
                  className={[
                    'text-[clamp(2.6rem,6vw,4.4rem)] font-extrabold leading-none  tabular-nums',
                    stat.accent
                      ? 'bg-gradient-accent dark:bg-gradient-accent-dark text-transparent bg-clip-text'
                      : 'bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text',
                  ].join(' ')}
                >
                  {stat.value}
                </div>
                <div className="mt-2 text-[13px] font-semibold text-primary-700 dark:text-primary-300 leading-tight">
                  {stat.label}
                </div>
                <div className="mt-0.5 text-[11px] text-secondary-400 dark:text-secondary-600 leading-tight">
                  {stat.sub}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
