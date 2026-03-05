'use client'

import { Bracket } from '@thirdbracket/bracketui'
import clsx from 'clsx'
import { useState } from 'react'
import { faqData } from 'settings'

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem]">
      <Bracket fluid centered padding="small">
        <div className="mx-auto md:max-w-screen-xl">
          <h2 className="text-[clamp(1.7rem,3.5vw,2.4rem)] font-bold leading-[1.15] tracking-tight bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text text-center mb-12 lg:mb-14">
            FAQs
          </h2>

          <div className="space-y-6">
            {faqData.map((item, i) => (
              <div
                key={i}
                className="border border-primary-500/20 rounded-lg bg-primary-50 dark:bg-primary-950 transition-all duration-300"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex justify-between items-center px-6 py-4 font-medium text-left text-primary-900 dark:text-primary-100 focus:outline-none transition-colors duration-200"
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span>{item.question}</span>
                  <span className="ml-4 text-xl font-bold text-primary-700 dark:text-primary-300 transition-transform duration-300" style={{ transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                    +
                  </span>
                </button>
                <div
                  id={`faq-answer-${i}`}
                  className={clsx(
                    'px-6 text-primary-800 dark:text-primary-200 text-sm leading-relaxed transition-all duration-300 ease-in-out overflow-hidden',
                    openIndex === i ? 'max-h-[500px] opacity-100 pb-4' : 'max-h-0 opacity-0 pb-0',
                  )}
                  aria-hidden={openIndex !== i}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Bracket>
    </section>
  )
}
