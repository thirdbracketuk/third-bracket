'use client'

import { Bracket } from '@thirdbracket/bracketui'
import Image from 'next/image'

type Testimonial = {
  client: string
  role: string
  quote: string
  logo?: string
}

const testimonials: Testimonial[] = [
  {
    client: 'Ifty Warid',
    role: 'Founder, Just Hungry',
    quote:
      'Third Bracket delivered a blazing-fast site that exceeded expectations. The whole process was smooth and they knew exactly what we needed.',
    logo: '/jh.svg',
  },
  {
    client: 'Blackpool Brew',
    role: 'Founder',
    quote:
      'They handled everything from the website to the brand packaging. Minimal back and forth, great attention to detail, and the end result looked exactly right.',
    logo: '/bb.svg',
  },
  {
    client: 'Light Energies',
    role: 'Team Lead',
    quote:
      'Incredible speed and professionalism. We loved the minimalist design approach and the site performed well from day one.',
    logo: '/le.png',
  },
]

export const ClientTestimonials = () => {
  return (
    <section className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem]">
      <Bracket fluid centered padding="small">
        <div className="mx-auto md:max-w-screen-xl">
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] leading-tight font-extrabold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text text-center mb-12 lg:mb-14">
            Trusted by Worldwide Businesses
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-3xl p-8 flex flex-col h-full
    bg-primary-50/50 dark:bg-primary-950/30
    border border-primary-100 dark:border-primary-800/50
    shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_-4px_rgba(0,0,0,0.06)]
    dark:shadow-[0_1px_3px_rgba(0,0,0,0.1),0_8px_32px_-4px_rgba(0,0,0,0.2)]
    backdrop-blur-sm transition-all duration-500
    hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex-1 mb-8">
                  <blockquote className="text-primary-700 dark:text-primary-200 font-medium text-[clamp(1.05rem,1.5vw,1.2rem)] leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                </div>

                <div className="flex items-center justify-between gap-4 mt-auto">
                  <div className="min-w-0">
                    <p className="text-[0.95rem] font-bold text-primary-900 dark:text-primary-50 truncate">
                      {item.client}
                    </p>
                    <p className="text-sm font-medium text-primary-500 dark:text-primary-400">
                      {item.role}
                    </p>
                  </div>
                  {item.logo && (
                    /* Added 'relative' and 'object-right' for better alignment with the card edge */
                    <div className="relative flex-shrink-0 w-24 h-10">
                      <Image
                        src={item.logo}
                        alt={`${item.client} logo`}
                        fill
                        sizes="96px"
                        className="object-contain object-right transition-all duration-700 ease-out opacity-20 blur-[1px] brightness-75 dark:brightness-150 group-hover:opacity-100 group-hover:blur-0 group-hover:brightness-100 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] 
      "
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Bracket>
    </section>
  )
}
