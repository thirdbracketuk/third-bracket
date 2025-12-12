// components/Steps.tsx
import { Bracket } from '@thirdbracket/bracketui'

import { MdRocketLaunch } from 'react-icons/md'
import { RiChat1Fill, RiFileCodeFill, RiPenNibFill } from 'react-icons/ri'

const steps = [
  {
    icon: RiChat1Fill,
    title: 'Initial Consultation',
    // description:
    //   'We start with a detailed discussion to understand your business needs, goals, and project requirements.',
    color: 'text-primary-900 dark:text-primary-100',
  },
  {
    icon: RiPenNibFill,
    title: 'Planning & Design',
    // description:
    //   'Our team creates a comprehensive project plan and design mockups tailored to your specifications.',
    color: 'text-primary-900 dark:text-primary-100',
  },
  {
    icon: RiFileCodeFill,
    title: 'Development',
    // description:
    //   'We build your solution using modern technologies and best practices, with regular updates and feedback.',
    color: 'text-primary-900 dark:text-primary-100',
  },
  {
    icon: MdRocketLaunch,
    title: 'Launch & Support',
    // description:
    //   'After thorough testing, we deploy your solution and provide ongoing support and maintenance.',
    color: 'text-primary-900 dark:text-primary-100',
  },
]

export default function Steps() {
  return (
    <section className="py-[4.5rem] sm:py-[5rem]  lg:py-[6rem] ">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-primary-950 dark:text-primary-50 mb-4 ">
          How We Work
        </h2>
        <p className="text-base/[1.6] md:text-lg/[1.75rem] lg:text-xl/[1.85rem] font-normal text-primary-500  mb-6">
          Our streamlined process ensures efficient delivery of high-quality solutions tailored to
          your needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => {
          const Icon = step.icon
          return (
            <div key={index} className="relative flex flex-col items-center text-center group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-2 bg-primary-100 dark:bg-primary-900"></div>
              )}

              {/* Icon */}
              <div
                className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-secondary-dark dark:bg-gradient-secondary border border-primary-100 dark:border-primary-900 flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300 ${step.color}`}
              >
                <Icon size={28} />
              </div>

              {/* Content */}
              <h3 className="lg:text-base text-sm font-semibold text-primary-800 dark:text-primary-200 ">
                {step.title}
              </h3>
              {/* <p className="text-primary-950/70 dark:text-primary-50/60 text-sm leading-relaxed">
                  {step.description}
                </p> */}
            </div>
          )
        })}
      </div>
    </section>
  )
}
