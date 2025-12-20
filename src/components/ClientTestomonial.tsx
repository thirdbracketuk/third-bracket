'use client'

import { Bracket, Card } from '@thirdbracket/bracketui'
import Image from 'next/image'

type Testimonial = {
  client: string
  role: string
  quote: string
  logo?: string // logo file path or URL
}

const testimonials: Testimonial[] = [
  {
    client: 'Ifty Warid',
    role: 'Founder',
    quote: 'Third Bracket Ltd delivered a blazing-fast site that exceeded expectations.',
    logo: '/jhungry.svg',
  },
  {
    client: 'InHouse Labs',
    role: 'Product Manager',
    quote: 'Incredible speed and professionalism. We loved the minimalist design approach.',
    logo: '/jhungry.svg',
  },
  {
    client: 'Thirdbracket',
    role: 'Our own site',
    quote: 'Built with the exact same stack we use for our clients — fast, clean, and SEO-focused.',
    logo: '/pob.svg',
  },
]

export const ClientTestimonials = () => {
  return (
    <section className="py-[3rem] sm:py-[3.75rem]  lg:py-[4rem]  ">
      <Bracket fluid centered padding="small">
        <div className="mx-auto md:max-w-screen-xl">
          <h2 className="text-[1.75rem]/[1.4] lg:text-3xl   font-extrabold  bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text  text-center mb-14 tracking-tight">
            Trusted by Early-stage Startups
          </h2>

          <div className="  grid gap-0 sm:grid-cols-2 lg:grid-cols-3 ">
            {testimonials.map((item, i) => (
              <Card
                theme={{
                  background:
                    'dark:bg-black/5 bg-white/5 bg-overlayDot-testimonial  dark:bg-overlayDot-testimonial-dark  [background-size:32px_32px]   lg:first:rounded-tl-lg lg:first:rounded-bl-lg lg:last:rounded-tr-lg lg:last:rounded-br-lg sm:first:rounded-tr-none   sm:last:rounded-bl-none first:rounded-tl-lg  first:rounded-tr-lg last:rounded-br-lg last:rounded-bl-lg rounded-none border backdrop-blur-3xl',
                  border:
                    'shadow-[0_0_2px_rgba(51,59,72,0.20)]  dark:shadow-[0_0_2px_rgba(224,227,230,0.20)]  border-secondary-200/60 dark:border-secondary-800/60',

                  text: 'dark:text-primary-300 text-primary-600  font-light leading-[1.45]',
                  hover:
                    '[@media(hover:hover)]:hover:border-opacity-100    [@media(hover:hover)]:hover:bg-opacity-100',
                }}
                key={i}
                className="rounded  flex   items-stretch !p-2"
              >
                <div className="flex-1  flex flex-col h-full  p-4">
                  <div className="mb-auto">
                    <blockquote className="dark:bg-gradient-text-dark bg-gradient-text text-transparent bg-clip-text  font-medium text-lg  mb-12 ">
                      “{item.quote}”
                    </blockquote>
                  </div>
                  <div className="flex items-center justify-between gap-6 mt-auto">
                    <div>
                      <p className="text-sm font-medium  ">{item.client}</p>
                      <p className="text-sm  font-light ">{item.role}</p>
                    </div>
                    {item.logo && (
                      <div className="w-[100px] h-[35px] flex items-center  justify-center   shadow-[0_0_2px_rgba(196,201,207,0.10)]  dark:shadow-[0_0_2px_rgba(224,227,230,0.10)]     border  border-secondary-200/60 dark:border-secondary-800/20 rounded-full   bg-secondary-200/20 dark:bg-secondary-900 backdrop-blur-3xl ">
                        <Image
                          src={item.logo}
                          alt={`${item.client} logo`}
                          height={30}
                          width={75}
                          className="object-cover  dark:invert grayscale   opacity-50 "
                        />
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Bracket>
    </section>
  )
}
