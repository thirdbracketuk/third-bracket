'use client'

import { Bracket, Button } from '@thirdbracket/bracketui'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Modal from './Modal'
import type { Form as FormType } from '@payloadcms/plugin-form-builder/types'
import { FormBlockMultiStep } from '@/blocks/Form/FormBlockMultiStep'
import Script from 'next/script'

const featuredLogos = [
  {
    src: '/elementor.svg',
    alt: 'Elementor',
    width: 210,
    height: 210,
    href: 'https://be.elementor.com/visit/?bta=229022&brand=elementor',
  },
  {
    src: '/IMG_7978.png',
    alt: 'DesignRush',
    width: 202,
    height: 214,
    href: 'https://www.designrush.com/agency/website-design-development/uk/manchester',
  },
]

type HeroProps = {
  contactForm: FormType
}

export const Hero: React.FC<HeroProps> = ({ contactForm }) => {
  const [isFormOpen, setIsFormOpen] = useState(false)
  return (
    <section className="py-[6.5rem] sm:py-[6.5rem] lg:py-[6.5rem] bg-overlayDot-light dark:bg-overlayDot-dark [background-size:36px_36px]">
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        strategy="beforeInteractive"
      />
      <Bracket fluid centered padding="small">
        <div className="mx-auto">
          <div className="flex flex-col items-start sm:items-center space-y-7 sm:mx-auto max-w-lg md:max-w-2xl lg:max-w-[820px] px-2 sm:px-0">
            {/* Announcement bar — DesignRush ranking */}
            <Link
              href="https://www.thirdbracket.co.uk/blog/third-bracket-recognized-as-a-top-web-design-agency-in-manchester-by-designrush"
              className="inline-flex items-center gap-2 bg-accent-50 dark:bg-secondary-950 border border-accent-100 dark:border-accent-900/20 text-secondary-700 dark:text-secondary-200 text-[clamp(0.72rem,1.5vw,0.8rem)] leading-none font-medium px-3 py-1.5 rounded-full mb-0 overflow-hidden line-clamp-1"
            >
              <span className="w-[6px] h-[6px] bg-accent-500 rounded-full animate-pulse"></span>
              <span className="truncate">We are ranked #1 — DesignRush 2024/25</span>
              <svg
                viewBox="0 0 8 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-[7px] h-[11px] animate-bounce-x"
              >
                <path d="M1 1l5 5-5 5" />
              </svg>
            </Link>

            {/* H1 */}
            <h1 className="text-[clamp(2.6rem,5.5vw,4.2rem)] font-extrabold leading-[1.15] text-left sm:text-center bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-0">
              Your Website Should Be
              <br className="hidden md:inline-flex" />
              &nbsp;
              <em className="not-italic bg-gradient-accent dark:bg-gradient-accent-dark text-transparent bg-clip-text">
                Working Harder
              </em>
            </h1>

            {/* Subheadline */}
            <p className="text-[clamp(1rem,1.8vw,1.1875rem)] text-secondary-800 dark:text-secondary-300 leading-[1.75] max-w-[560px] text-left sm:text-center mx-auto mb-0">
              We build brands, not just websites. SEO-first, agency-quality work without the agency
              price tag.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap sm:justify-center gap-[10px] backdrop-blur-[2px] mb-0">
              <Button
                size="md"
                onClick={() => setIsFormOpen(true)}
                theme={{
                  background: 'bg-gradient-text dark:bg-gradient-text-dark ',
                  hoverBackground:
                    '[@media(hover:hover)]:hover:bg-primary-800 dark:[@media(hover:hover)]:hover:bg-primary-200 [@media(hover:hover)]:hover:-translate-y-[1px]',
                  focusRing: 'focus:ring-primary-700 dark:focus:ring-secondary-300',
                  text: 'text-white dark:text-primary-950',
                }}
                className="px-[22px] py-[11px] text-[0.9rem]"
              >
                Start a project
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-[15px] h-[15px]"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Button>
              <Button
                outline
                as={Link}
                href="/work"
                size="md"
                theme={{
                  border: 'border-primary-200 dark:border-primary-700',
                  hoverBackground:
                    'hover:bg-primary-50 dark:hover:bg-primary-900 [@media(hover:hover)]:hover:-translate-y-[1px]',
                  focusRing: 'focus:ring-primary-700 dark:focus:ring-secondary-300',
                  text: 'text-primary-700 dark:text-primary-300',
                }}
                className="px-[22px] py-[11px] text-[0.9rem]"
              >
                See our work
              </Button>
            </div>

            {/* Partners & Recognition */}
            <div className="pt-6 w-full flex flex-col md:items-center gap-[18px]">
              <span className="text-[clamp(0.72rem,1.2vw,0.78rem)] leading-none text-primary-400 dark:text-primary-600 tracking-wider uppercase font-medium">
                Partners &amp; Recognition
              </span>
              <div className="flex flex-wrap items-center gap-10 md:justify-center">
                {featuredLogos.map((logo, idx) => (
                  <a
                    key={idx}
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all duration-300 group"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width}
                      height={logo.height}
                      className="w-8 h-auto md:w-9 object-contain grayscale group-hover:grayscale-0 dark:invert group-hover:invert-0"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Bracket>
      <Modal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)}>
        <FormBlockMultiStep
          form={contactForm}
          enableIntro={false}
          recaptchaSiteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        />
      </Modal>
    </section>
  )
}
