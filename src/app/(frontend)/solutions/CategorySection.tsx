// components/CategorySection.tsx

import SolutionCard from './SolutionCards'
import { SolutionCategory } from './types'

export default function CategorySection({ title, description, solutions }: SolutionCategory) {
  return (
    <section className="py-[3rem] sm:py-[3.75rem]  lg:py-[4rem]">
      <div className="text-left md:text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-extrabold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-4 ">
          {title}
        </h2>
        <p className="text-base/[1.6] md:text-lg/[1.75rem] lg:text-xl/[1.85rem] font-light text-primary-600 dark:text-primary-400">
          {description}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {solutions.map((solution, index) => (
          <SolutionCard key={index} {...solution} />
        ))}
      </div>
    </section>
  )
}
