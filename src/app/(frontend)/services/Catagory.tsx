import ServiceCard from './ServiceCards'
import { IconType } from 'react-icons'
import Image from 'next/image'

interface CategoryProps {
  title: string
  description: string
  stackIcons: React.ReactNode[]
  illustration: {
    src: string
    alt: string
  }
  index: number
  services: {
    title: string
    description: string
    features: string[]
    badge?: string
    icon: IconType
  }[]
}

export default function Category({
  title,
  description,
  stackIcons,
  illustration,

  services,
}: CategoryProps) {
  return (
    <section className="py-[3rem] sm:py-[3.75rem]  lg:py-[4rem] ">
      <div className="flex flex-col-reverse md:flex-row-reverse gap-y-8 sm:gap-x-0 items-center  mb-8 md:mb-12 lg:mb-16 ">
        <div className="md:w-1/2 max-w-screen-sm mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-4">
            {title}
          </h2>
          <p className="text-base/[1.6] md:text-lg/[1.75rem] lg:text-xl/[1.85rem]  text-primary-500  mb-6">
            {description}
          </p>
          <div className="flex flex-wrap gap-4 mb-6 text-primary-700/70 dark:text-primary-400/50">
            {stackIcons.map((Icon, index) => (
              <span key={index}>{Icon}</span>
            ))}
          </div>
        </div>

        <div className="md:w-1/2 hidden sm:flex ">
          {illustration.src && (
            <Image
              src={illustration.src}
              alt={illustration.alt}
              width={334}
              height={250}
              className="w-full h-auto lg:max-w-sm max-w-xs mx-auto"
            />
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  )
}
