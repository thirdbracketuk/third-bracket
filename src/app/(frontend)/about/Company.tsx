// src/app/(frontend)/about/Company.tsx
'use client'

import Image from 'next/image'

export default function Company() {
  return (
    <section className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem]" id="company">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-6">
            Our Company
          </h2>
          <p className="text-base/[1.6] md:text-lg/[1.75rem] lg:text-xl/[1.85rem] font-light text-primary-600 dark:text-primary-400 mb-6">
            Third Bracket is a modern web development studio based in the UK. We specialize in
            building fast, SEO-optimized websites with clean, minimal design — powered by Next.js
            and tailored for businesses of all sizes.
          </p>
          <p className="text-base/[1.6] md:text-lg/[1.75rem] lg:text-xl/[1.85rem] font-light text-primary-600 dark:text-primary-400">
            Founded in 2019, we&apos;ve grown from a small freelance operation to a specialized team
            delivering high-quality digital solutions for clients across multiple industries.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/website.svg"
            alt="Third Bracket Company"
            width={500}
            height={400}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}
