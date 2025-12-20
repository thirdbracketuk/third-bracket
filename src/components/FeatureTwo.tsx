'use client'

import {
  RiAdminLine,
  RiArticleLine,
  RiBox1Line,
  RiBracesLine,
  RiLayout2Line,
  RiNextjsLine,
  RiSearchLine,
  RiSeoLine,
  RiShoppingCart2Line,
  RiStackLine,
  RiTailwindCssFill,
  RiTailwindCssLine,
  RiUbuntuLine,
  RiWordpressLine,
} from 'react-icons/ri'
import { PiBracketsSquareBold } from 'react-icons/pi'

import { Bracket, Card } from '@thirdbracket/bracketui'
import Link from 'next/link'

const features = [
  {
    icon: RiNextjsLine,
    header: 'Custom Web Development',
    href: '/services',
    description:
      'Third Bracket Ltd offers custom web development with Next.js - built for speed and advanced functionalities.',
  },
  {
    icon: RiWordpressLine,
    header: 'WordPress Website Development',
    href: '/services',
    description:
      'Speed-optimized, secure, and easily manageable WordPress websites — perfect for content-heavy brands.',
  },

  {
    icon: RiTailwindCssLine,
    header: 'Tailwind UI Design',
    href: '/services',
    description:
      'At Third Bracket Ltd, we craft clean, responsive UI designs with Tailwind CSS — focused on speed, clarity and modern patterns.',
  },

  {
    icon: RiUbuntuLine,
    header: 'VPS setup & Cloud Integration',
    href: '/services',
    description:
      'From deployment pipelines to domain setup and server configs — we take care of everything behind the scenes.',
  },
  {
    icon: RiSearchLine,
    header: 'Search Engine Optimization',
    href: '/services',
    description:
      'On-page SEO, meta setup, google analytics, schema markup, opengraph, google business and search console',
  },
  {
    icon: RiAdminLine,
    header: 'Custom Admin Panel',
    href: '/services',
    description:
      'Need control? We build intuitive, secure admin dashboards that give you full ownership over your website.',
  },
  {
    icon: RiSeoLine,
    header: 'Digital Marketing',
    href: '/services',
    description:
      'Integrated solutions for analytics, SEO, and performance tracking to grow traffic and boost conversions.',
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-[3rem] sm:py-[3.75rem]  lg:py-[4rem] ">
      <Bracket fluid centered padding="small">
        <div className="mx-auto md:max-w-screen-xl">
          <div className="mb-10 lg:mb-16">
            <h2 className="mb-4 text-[1.75rem]/[1.4] lg:text-3xl  font-extrabold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text text-left md:text-center sm:mx-auto max-w-lg md:max-w-2xl lg:max-w-5xl tracking-tight">
              What We Build & Deliver
            </h2>
            <p className=" text-primary-500  text-base/7  lg:text-[1.15rem]/8  text-left sm:mx-auto md:text-center  max-w-lg md:max-w-2xl lg:max-w-5xl">
              From modern websites to tailored systems, Third Bracket Ltd help UK businesses thrive
              with reliable, high-performance web development.
            </p>
          </div>

          <div className="space-y-6 sm:grid sm:grid-cols-2 gap-4 sm:space-y-0 lg:grid-cols-3 ">
            {features.map(({ icon: Icon, header, description, href }, index) => (
              <Card
                key={index}
                size="lg"
                as={Link}
                href={href}
                isIcon
                theme={{
                  background: 'bg-gradient-secondary-dark   dark:bg-gradient-secondary      ',
                  border:
                    'border-opacity-30  border-primary-500  dark:shadow-[0_0_2px_rgba(224,227,230,0.20)]  shadow-[0_0_2px_rgba(11,13,15,0.10)]',

                  text: ' text-primary-500  leading-[1.45] font-normal last:max-w-3xl',
                  hover:
                    '[@media(hover:hover)]:hover:border-opacity-50    [@media(hover:hover)]:hover:shadow-[0_0_3px_rgba(11,13,15,0.15)] [@media(hover:hover)]:dark:shadow-[0_0_2px_rgba(224,227,230,0.20)]         focus-within:border-opacity-100 active:border-opacity-100 ',
                }}
                cover={
                  <div className="w-16 h-16 mb-4 flex items-center   justify-center   border  border-primary-100 dark:border-primary-900     rounded-xl bg-gradient-primary-dark  dark:bg-gradient-primary">
                    <Icon size={32} className="text-secondary-700 dark:text-secondary-300" />
                  </div>
                }
                header={
                  <span className="font-semibold bg-gradient-text tracking-tight  dark:bg-gradient-text-dark text-transparent bg-clip-text mb-2 ">
                    {header}
                  </span>
                }
              >
                {description}
              </Card>
            ))}
          </div>
        </div>
      </Bracket>
    </section>
  )
}
