// src/app/(frontend)/about/WorkCulture.tsx
'use client'

import Image from 'next/image'
import { FaLightbulb, FaHandshake, FaRocket, FaBalanceScale } from 'react-icons/fa'

const values = [
  {
    icon: FaLightbulb,
    title: 'Innovation',
    description: 'We embrace new technologies and approaches to deliver cutting-edge solutions.',
  },
  {
    icon: FaHandshake,
    title: 'Collaboration',
    description: 'We work closely with our clients and each other to achieve the best results.',
  },
  {
    icon: FaRocket,
    title: 'Excellence',
    description:
      'We strive for excellence in everything we do, from code quality to client service.',
  },
  {
    icon: FaBalanceScale,
    title: 'Balance',
    description: 'We believe in maintaining a healthy work-life balance for sustainable success.',
  },
]

export default function WorkCulture() {
  return (
    <section className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem]" id="culture">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-6">
            Our Work Culture
          </h2>
          <p className="text-base/[1.6] md:text-lg/[1.75rem] lg:text-xl/[1.85rem] font-light text-primary-600 dark:text-primary-400 mb-6">
            At Third Bracket, we foster a culture of creativity, collaboration, and continuous
            learning. We believe that happy team members create better products and deliver better
            service.
          </p>
          <p className="text-base/[1.6] md:text-lg/[1.75rem] lg:text-xl/[1.85rem] font-light text-primary-600 dark:text-primary-400">
            Our remote-first approach allows us to work with the best talent regardless of location,
            while maintaining a strong sense of community through regular virtual collaboration.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/webdev.svg"
            alt="Third Bracket Work Culture"
            width={500}
            height={400}
            className="max-w-full h-auto"
          />
        </div>
      </div>

      <h2 className="text-3xl text-center lg:text-4xl font-bold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text  mb-12">
        Our Core Values
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => {
          const Icon = value.icon
          return (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-secondary-dark dark:bg-gradient-secondary border border-primary-100 dark:border-primary-900 flex items-center justify-center">
                <Icon size={28} className="text-primary-900 dark:text-primary-100" />
              </div>
              <h4 className="text-xl bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-semibold mb-2">
                {value.title}
              </h4>
              <p className="text-primary-600 dark:text-primary-400">{value.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
