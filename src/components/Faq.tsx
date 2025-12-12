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
    <section className="py-[3rem] sm:py-[3.75rem]  lg:py-[4rem] ">
      <Bracket fluid centered padding="small">
        <div className="mx-auto md:max-w-screen-xl ">
          <h2 className="text-[1.75rem]/[1.4] lg:text-3xl font-extrabold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text text-center mb-14 lg:mb-20 tracking-tight">
            FAQs
          </h2>

          <div className="space-y-6">
            {faqData.map((item, i) => (
              <div
                key={i}
                className="border border-primary-500/20 rounded-lg  bg-gradient-secondary-dark dark:bg-gradient-secondary"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex justify-between items-center px-6 py-4 font-medium text-left text-primary-900 dark:text-primary-100  focus:outline-none"
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span>{item.question}</span>
                  <span className="ml-4 bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text">
                    {openIndex === i ? '-' : '+'}
                  </span>
                </button>
                {/* {openIndex === i && (
                  <div className="px-6 pb-4 text-primary-800 dark:text-primary-200 text-sm leading-relaxed">
                    {item.answer}
                  </div>
                )} */}
                {/* ✅ Answer is always rendered into DOM */}
                <div
                  id={`faq-answer-${i}`}
                  className={clsx(
                    'px-6 pb-4 text-primary-800 dark:text-primary-200 text-sm leading-relaxed transition-all duration-300 overflow-hidden',
                    openIndex === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0',
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
