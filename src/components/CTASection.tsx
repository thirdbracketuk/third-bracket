'use client'

import { Bracket, Button } from '@thirdbracket/bracketui'
import Image from 'next/image'

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
    <section className={` py-[3rem] sm:py-[3.75rem]  lg:py-[4rem]   ${className}`}>
      <div className="md:max-w-screen-xl mx-auto bg-accent-radial dark:bg-accent-radial-dark rounded-xl p-8 lg:p-12 border border-primary-200 dark:border-primary-800  ">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12">
          <div className="flex flex-col  md:flex-row md:items-center justify-between  gap-6 md:gap-10 ">
            <div>
              {cover && (
                <div className="mb-0 lg:mb-0">
                  <Image
                    className="h-[200px] w-auto  object-cover "
                    src={cover.src}
                    alt={cover.alt}
                    width={cover.width}
                    height={cover.height}
                  />
                </div>
              )}
            </div>
            <div>
              <h2 className="text-[1.75rem]/[1.4] lg:text-3xl font-extrabold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-4 lg:mb-6 tracking-tight">
                {title}
              </h2>
              <p className="text-primary-600 dark:text-primary-500  text-base/7  lg:text-[1.15rem]/8 max-w-md ">
                {description}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap flex-row md:flex-col md:justify-between  gap-4">
            {primary && (
              <Button
                href={primary.href}
                size="md"
                theme={{
                  background: 'bg-gradient-text dark:bg-gradient-text-dark',
                  hoverBackground: '[@media(hover:hover)]:hover:opacity-90',
                  focusRing: 'focus:ring-primary-700 dark:focus:ring-secondary-300',
                  text: 'text-primary-50 dark:text-primary-950',
                }}
                // className="!font-medium !text-primary-50 dark:!text-primary-950"
              >
                {primary.label}
              </Button>
            )}
            {secondary && (
              <Button
                href={secondary.href}
                outline
                size="md"
                theme={{
                  border: 'border-primary-900/80 dark:border-primary-100/70 ',
                  hoverBackground: 'hover:bg-primary-50 dark:hover:bg-secondary-900',
                  focusRing: 'focus:ring-primary-700 dark:focus:ring-secondary-300',
                  text: 'text-primary-900 dark:text-primary-100 ',
                }}
              >
                {secondary.label}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
