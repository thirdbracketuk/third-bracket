// 'use client'

// import { Bracket, Card } from '@thirdbracket/bracketui'
// import Image from 'next/image'

// type Testimonial = {
//   client: string
//   role: string
//   quote: string
//   logo?: string // logo file path or URL
// }

// const testimonials: Testimonial[] = [
//   {
//     client: 'Ifty Warid',
//     role: 'Founder',
//     quote: 'Third Bracket Ltd delivered a blazing-fast site that exceeded expectations.',
//     logo: '/jhungry.svg',
//   },
//   {
//     client: 'InHouse Labs',
//     role: 'Product Manager',
//     quote: 'Incredible speed and professionalism. We loved the minimalist design approach.',
//     logo: '/jhungry.svg',
//   },
//   {
//     client: 'Thirdbracket',
//     role: 'Our own site',
//     quote: 'Built with the exact same stack we use for our clients — fast, clean, and SEO-focused.',
//     logo: '/pob.svg',
//   },
// ]

// export const ClientTestimonials = () => {
//   return (
//     <section className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem]">
//       <Bracket fluid centered padding="small">
//         <div className="mx-auto md:max-w-screen-xl">
//           <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] leading-tight font-extrabold  tracking-tight bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text text-center mb-12 lg:mb-14">
//             Trusted by Early-stage Startups
//           </h2>

//           <div className="  grid gap-0 sm:grid-cols-2 lg:grid-cols-3 ">
//             {testimonials.map((item, i) => (
//               <Card
//                 theme={{
//                   background:
//                     'dark:bg-black/5 bg-white/5 bg-overlayDot-testimonial  dark:bg-overlayDot-testimonial-dark  [background-size:32px_32px]   lg:first:rounded-tl-lg lg:first:rounded-bl-lg lg:last:rounded-tr-lg lg:last:rounded-br-lg sm:first:rounded-tr-none   sm:last:rounded-bl-none first:rounded-tl-lg  first:rounded-tr-lg last:rounded-br-lg last:rounded-bl-lg rounded-none border backdrop-blur-3xl',
//                   border:
//                     'shadow-[0_0_2px_rgba(51,59,72,0.20)]  dark:shadow-[0_0_2px_rgba(224,227,230,0.20)]  border-secondary-200/60 dark:border-secondary-800/60',

//                   text: 'dark:text-primary-300 text-primary-600  font-light leading-[1.45]',
//                   hover:
//                     '[@media(hover:hover)]:hover:border-opacity-100    [@media(hover:hover)]:hover:bg-opacity-100',
//                 }}
//                 key={i}
//                 className="rounded  flex   items-stretch !p-2"
//               >
//                 <div className="flex-1  flex flex-col h-full  p-4">
//                   <div className="mb-auto">
//                     <blockquote className="dark:bg-gradient-text-dark bg-gradient-text text-transparent bg-clip-text  font-normal text-[clamp(1.2rem,2vw,1.4rem)]  mb-12 ">
//                       “{item.quote}”
//                     </blockquote>
//                   </div>
//                   <div className="flex items-center justify-between gap-6 mt-auto">
//                     <div>
//                       <p className="text-sm font-medium  ">{item.client}</p>
//                       <p className="text-sm  font-light ">{item.role}</p>
//                     </div>
//                     {item.logo && (
//                       <div className="w-[100px] h-[35px] flex items-center  justify-center   shadow-[0_0_2px_rgba(196,201,207,0.10)]  dark:shadow-[0_0_2px_rgba(224,227,230,0.10)]     border  border-secondary-200/60 dark:border-secondary-800/20 rounded-full   bg-secondary-200/20 dark:bg-secondary-900 backdrop-blur-3xl ">
//                         <Image
//                           src={item.logo}
//                           alt={`${item.client} logo`}
//                           height={30}
//                           width={75}
//                           className="object-cover  dark:invert grayscale   opacity-50 "
//                         />
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </Bracket>
//     </section>
//   )
// }

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
    <section className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem]">
      <Bracket fluid centered padding="small">
        <div className="mx-auto md:max-w-screen-xl">
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] leading-tight font-extrabold  bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text text-center mb-12 lg:mb-14">
            Trusted by Early-stage Startups
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-3xl p-8 flex flex-col h-full
                  bg-primary-50/50 dark:bg-primary-950/30
                  border border-primary-100 dark:border-primary-800/50
                  shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_-4px_rgba(0,0,0,0.06)]
                  dark:shadow-[0_1px_3px_rgba(0,0,0,0.1),0_8px_32px_-4px_rgba(0,0,0,0.2)]
                  backdrop-blur-sm transition-all duration-300
                  hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Quote section expands to push info to bottom */}
                <div className="flex-1 mb-8">
                  <blockquote className="text-primary-700 dark:text-primary-200 font-medium text-[clamp(1.1rem,1.5vw,1.25rem)] leading-relaxed">
                    “{item.quote}”
                  </blockquote>
                </div>

                {/* Client Info & Logo row */}
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
                    <div className="flex-shrink-0 w-20 h-10 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
                      <Image
                        src={item.logo}
                        alt={`${item.client} logo`}
                        height={32}
                        width={80}
                        className="object-contain dark:invert"
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
