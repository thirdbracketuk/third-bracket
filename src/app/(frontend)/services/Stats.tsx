// 'use client'

// import { Bracket } from '@thirdbracket/bracketui'

// export default function Stats() {
//   return (
//     <section className="py-[4.5rem] sm:py-[5rem] lg:py-[6rem] ">
//       <Bracket fluid centered padding="medium">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {[
//             { value: '100+', label: 'Projects Delivered' },
//             { value: '50+', label: 'Happy Clients' },
//             { value: '10+', label: 'Countries Served' },
//             { value: '5+', label: 'Years Experience' },
//           ].map((stat, index) => (
//             <div key={index} className="text-center">
//               <h3 className="text-4xl lg:text-5xl font-extrabold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-2">
//                 {stat.value}
//               </h3>
//               <p className="text-primary-700 dark:text-primary-300 font-light">{stat.label}</p>
//             </div>
//           ))}
//         </div>
//       </Bracket>
//     </section>
//   )
// }

// src/app/(frontend)/services/Stats.tsx
'use client'

// import { Bracket } from '@thirdbracket/bracketui'

// export default function Stats() {
//   return (
//     <section className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem] mb-8">
//       <Bracket fluid centered padding="medium">
//         <div className="max-w-screen-xl mx-auto border border-primary-200 dark:border-primary-800 rounded-xl p-8 lg:p-12 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
//           <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-8 text-center">
//             Our Impact by the Numbers
//           </h2>

//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               { value: '100+', label: 'Projects Delivered' },
//               { value: '50+', label: 'Happy Clients' },
//               { value: '10+', label: 'Countries Served' },
//               { value: '5+', label: 'Years Experience' },
//             ].map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="mb-2 inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-radial dark:bg-accent-radial-dark">
//                   <span className="text-3xl lg:text-4xl font-extrabold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text">
//                     {stat.value}
//                   </span>
//                 </div>
//                 <p className="text-primary-700 dark:text-primary-300 font-light">{stat.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </Bracket>
//     </section>
//   )
// }

// src/app/(frontend)/services/Stats.tsx
'use client'

import { FaProjectDiagram, FaUsers, FaGlobeAmericas, FaCalendarAlt } from 'react-icons/fa'

export default function Stats() {
  const stats = [
    {
      icon: FaProjectDiagram,
      value: '100+',
      label: 'Projects Delivered',
    },
    {
      icon: FaUsers,
      value: '50+',
      label: 'Happy Clients',
    },
    {
      icon: FaGlobeAmericas,
      value: '10+',
      label: 'Countries Served',
    },
    {
      icon: FaCalendarAlt,
      value: '5+',
      label: 'Years Experience',
    },
  ]

  return (
    <section className="py-[4.5rem] sm:py-[5rem]  lg:py-[6rem] ">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-4">
          Our Impact by the Numbers
        </h2>
        <p className="text-base/[1.6] md:text-lg/[1.75rem] font-light text-primary-600 dark:text-primary-400 max-w-2xl mx-auto mb-6">
          We&apos;ve helped businesses across the globe achieve their digital goals
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          // Unused variable renamed with underscore prefix
          const _Icon = stat.icon
          return (
            <div key={index} className="relative flex flex-col items-center text-center group">
              {/* Connector Line */}
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-2 bg-primary-100 dark:bg-primary-900"></div>
              )}
              <div className="w-16 h-16 mb-4  bg-gradient-secondary-dark dark:bg-gradient-secondary border border-primary-100 relative z-10 dark:border-primary-900 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <h3 className="text-xl font-extrabold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-1">
                  {stat.value}
                </h3>
                {/* <Icon size={28} className="text-primary-900 dark:text-primary-100" /> */}
              </div>
              {/* <h3 className="text-3xl font-bold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-1">
                  {stat.value}
                </h3> */}
              <p className="text-primary-700 dark:text-primary-300 font-light">{stat.label}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
