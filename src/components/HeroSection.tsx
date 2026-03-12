// 'use client'

// import { Bracket, Button } from '@thirdbracket/bracketui'
// import React, { useState } from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import Modal from './Modal'

// // import SubscriptionForm from '@/blocks/Form/SubscriptionFormBlock' // Not used in this component
// // import CallbackForm from '@/blocks/Form/CallBackForm' // Commented out - using FormBlockCompact instead
// // import FormContact from '@/blocks/Form/FormContact' // Commented out - using FormBlockCompact instead
// // import { FormBlock } from '@/blocks/Form/Component' // Using compact version for modal

// import type { Form as FormType } from '@payloadcms/plugin-form-builder/types'
// import { FormBlockMultiStep } from '@/blocks/Form/FormBlockMultiStep'
// import Script from 'next/script'

// const featuredLogos = [
//   {
//     src: '/elementor.svg',
//     alt: 'Elementor',
//     width: 210,
//     height: 210,
//     href: 'https://be.elementor.com/visit/?bta=229022&brand=elementor',
//   },

//   {
//     src: '/IMG_7978.png',
//     alt: 'DesignRush',
//     width: 202,
//     height: 214,
//     href: 'https://www.designrush.com/agency/website-design-development/uk/manchester',
//   },
// ]

// type HeroProps = {
//   contactForm: FormType
// }

// export const Hero: React.FC<HeroProps> = ({ contactForm }) => {
//   const [isFormOpen, setIsFormOpen] = useState(false)
//   return (
//     <section className=" py-[3rem] sm:py-[3.75rem]  lg:py-[4rem] bg-overlayDot-light dark:bg-overlayDot-dark  [background-size:36px_36px]">
//       <Script
//         src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
//         strategy="beforeInteractive"
//       />
//       <Bracket fluid centered padding="small">
//         <div className="mx-auto">
//           <div className="flex flex-col items-start sm:items-center  space-y-10 lg:space-y-16 sm:mx-auto max-w-lg md:max-w-2xl lg:max-w-[970px] xl:max-w-[1200px] px-2 sm:px-0">
//             <h1 className="text-[2.80rem]/[1.1]    md:text-5xl/[1.2] lg:text-[3.25rem]/[1.1] xl:text-6xl/[1.1]  text-left sm:text-center bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-extrabold tracking-tight">
//               Bespoke Websistes, SEO & &nbsp;
//               <span className=" bg-gradient-to-r from-primary-900 via-primary-800 to-accent-700 dark:from-primary-100 dark:via-primary-200 dark:to-accent-200 text-transparent bg-clip-text">
//                 Branding
//               </span>
//             </h1>
//             <p
//               // className=" text-primary-500  text-base/8  lg:text-[1.15rem]/8 text-left sm:text-center   backdrop-blur-sm lg:px-16 md:px-6"

//               className="text-base/7  lg:text-[1.15rem]/8   text-primary-500 text-left sm:text-center"
//             >
//               <strong>Third Bracket Ltd</strong> is a Manchester-based digital agency, helps
//               businesses build strong brands and grow their digital presence. Our remote-first
//               approach keeps us focused on outcomes over overhead, delivering smart strategy and
//               clean execution at speed.
//             </p>

//             <div className="flex flex-wrap sm:justify-center gap-4 md:gap-6 backdrop-blur-[2px]">
//               <Button
//                 size="md"
//                 onClick={() => setIsFormOpen(true)}
//                 theme={{
//                   background: 'bg-gradient-text dark:bg-gradient-text-dark ',
//                   hoverBackground: '[@media(hover:hover)]:hover:opacity-95',
//                   focusRing: 'focus:ring-primary-700 dark:focus:ring-secondary-300',
//                   text: 'text-primary-50 dark:text-primary-950 ',
//                 }}
//               >
//                 <Image
//                   className="invert dark:invert-0 me-2.5"
//                   src="/popup-form-icon.svg"
//                   alt="tb-popup-icon"
//                   width={14}
//                   height={14}
//                 />
//                 Get a Free Consultation
//               </Button>
//               <Button
//                 outline
//                 as={Link}
//                 href="/about"
//                 // className="flex-1 "
//                 size="md"
//                 theme={{
//                   border: 'border-secondary-100/70 dark:border-secondary-900/80 ',

//                   hoverBackground:
//                     'hover:from-accent-700 hover:via-primary-800 hover:to-primary-900 dark:hover:from-accent-200 dark:hover:via-primary-200 dark:hover:to-primary-100 ',
//                   focusRing: 'focus:ring-primary-700 dark:focus:ring-secondary-300',
//                   text: 'bg-gradient-to-r from-primary-900 via-accent-700 to-accent-600 dark:from-primary-100 dark:via-primary-200 dark:to-accent-200 text-transparent bg-clip-text ',
//                 }}
//               >
//                 Learn About Us
//               </Button>
//             </div>

//             <div className="px-0 sm:px-4 py-4 text-left sm:text-center lg:px-36">
//               <span className="uppercase bg-gradient-secondary opacity-50 dark:opacity-45 dark:bg-gradient-secondary-dark text-transparent bg-clip-text font-medium backdrop-blur-sm">
//                 PARTNERS & RECOGNITION
//               </span>
//               <div className="mt-6 sm:mt-8 flex flex-wrap items-start gap-4 lg:gap-8 sm:items-center dark:text-primary-500/40 text-primary-600/50 justify-start sm:justify-center ">
//                 {featuredLogos.map((logo, idx) => (
//                   <a
//                     key={idx}
//                     href={logo.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="backdrop-blur-lg  transition duration-300"
//                   >
//                     <Image
//                       src={logo.src}
//                       alt={logo.alt}
//                       width={logo.width}
//                       height={logo.height}
//                       fetchPriority="high"
//                       priority
//                       loading="eager"
//                       className="w-8 h-auto md:w-9 object-contain  grayscale hover:grayscale-0"
//                     />
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </Bracket>
//       <Modal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)}>
//         {/* <SubscriptionForm /> */}
//         {/* <CallbackForm /> */} {/* Commented out - using FormBlockCompact instead */}
//         {/* <FormContact form={contactForm} /> */}{' '}
//         {/* Commented out - using FormBlockCompact instead */}
//         {/* <FormBlock form={contactForm} enableIntro={false} /> */}{' '}
//         {/* Using compact version for modal */}
//         {/* <FormBlockCompact form={contactForm} enableIntro={false} /> */}
//         <FormBlockMultiStep
//           form={contactForm}
//           enableIntro={false}
//           recaptchaSiteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
//         />
//       </Modal>
//     </section>
//   )
// }

'use client'

import { Bracket, Button } from '@thirdbracket/bracketui'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Modal from './Modal'

// import SubscriptionForm from '@/blocks/Form/SubscriptionFormBlock' // Not used in this component
// import CallbackForm from '@/blocks/Form/CallBackForm' // Commented out - using FormBlockCompact instead
// import FormContact from '@/blocks/Form/FormContact' // Commented out - using FormBlockCompact instead
// import { FormBlock } from '@/blocks/Form/Component' // Using compact version for modal

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
            {/* Hero Badge */}
            <Link
              href="https://www.thirdbracket.co.uk/blog/why-indian-exporters-getting-more-success-than-bangladeshi-exporters"
              className="inline-flex items-center gap-2 bg-accent-50 dark:bg-secondary-950 border border-accent-100 dark:border-accent-900/20 text-secondary-700 dark:text-secondary-200 text-[clamp(0.72rem,1.5vw,0.8rem)] leading-none font-medium px-3 py-1.5 rounded-full mb-0 overflow-hidden line-clamp-1"
            >
              <span className="w-[6px] h-[6px] bg-accent-500 rounded-full animate-pulse"></span>
              <span className="truncate"> Bangladeshi Exporters Branding Guides</span>
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

            <h1 className="text-[clamp(2.6rem,5.5vw,4.2rem)] font-extrabold leading-[1.15]  text-left sm:text-center bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-0">
              Build Brands That
              <br className="hidden md:inline-flex" />
              &nbsp;
              <em className="not-italic bg-gradient-accent dark:bg-gradient-accent-dark text-transparent bg-clip-text ">
                Earn Attention
              </em>
            </h1>

            <p className="text-[clamp(1rem,1.8vw,1.1875rem)] text-primary-500 dark:text-primary-400 leading-[1.75] max-w-[560px] text-left sm:text-center mx-auto mb-0">
              We design, develop, and grow digital products — from pixel-perfect websites to
              complete brand identities and SEO that compounds.
            </p>

            <div className="flex flex-wrap sm:justify-center gap-[10px] backdrop-blur-[2px] mb-0">
              <Button
                size="md"
                onClick={() => setIsFormOpen(true)}
                theme={{
                  background: 'bg-gradient-text dark:bg-gradient-text-dark',
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

            <div className="pt-6 w-full flex flex-col md:items-center gap-[18px]">
              <span className="text-[clamp(0.72rem,1.2vw,0.78rem)] leading-none text-primary-400 dark:text-primary-600 tracking-wider uppercase font-medium">
                Our Partners
              </span>
              <div className="flex flex-wrap items-center gap-10 md:justify-center ">
                {featuredLogos.map((logo, idx) => (
                  <a
                    key={idx}
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all  duration-300 group"
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
        {/* <SubscriptionForm /> */}
        {/* <CallbackForm /> */} {/* Commented out - using FormBlockCompact instead */}
        {/* <FormContact form={contactForm} /> */}{' '}
        {/* Commented out - using FormBlockCompact instead */}
        {/* <FormBlock form={contactForm} enableIntro={false} /> */}{' '}
        {/* Using compact version for modal */}
        {/* <FormBlockCompact form={contactForm} enableIntro={false} /> */}
        <FormBlockMultiStep
          form={contactForm}
          enableIntro={false}
          recaptchaSiteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        />
      </Modal>
    </section>
  )
}
