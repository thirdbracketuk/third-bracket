// components/SolutionCard.tsx
import { Card } from '@thirdbracket/bracketui'
import Image from 'next/image'

import { Solution } from './types'
import Link from 'next/link'

import { IoIosArrowForward } from 'react-icons/io'

export default function SolutionCard({
  title,
  description,
  technologies,
  image,
  features,
}: Solution) {
  const cardId = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  
  return (
    <Card
      id={cardId}
      size="xl"
      // isIcon
      theme={{
        background: 'bg-white dark:bg-black',
        border:
          'border-opacity-50  border-primary-500  dark:shadow-[0_0_2px_rgba(224,227,230,0.20)]  shadow-[0_0_2px_rgba(11,13,15,0.10)] ',
        hover:
          '[@media(hover:hover)]:hover:border-opacity-100    [@media(hover:hover)]:hover:shadow-[0_0_3px_rgba(11,13,15,0.15)] [@media(hover:hover)]:dark:shadow-[0_0_2px_rgba(224,227,230,0.20)]         focus-within:border-opacity-100 active:border-opacity-100',

        text: 'dark:text-primary-400 text-primary-600  font-light leading-[1.45]',
      }}
      cover={
        image && (
          <div className=" h-[300px] w-full    bg-[linear-gradient(to_right,#f1f2f466_1px,transparent_1px),linear-gradient(to_bottom,#f1f2f466_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f242866_1px,transparent_1px),linear-gradient(to_bottom,#1f242866_1px,transparent_1px)] bg-[size:14px_24px] relative">
            <Image src={image} alt={title} fill className="object-contain opacity-85" />
          </div>
        )
      }
      header={
        // <div className="font-bold  bg-gradient-primary dark:bg-gradient-primary-dark text-transparent bg-clip-text my-2">
        title
      }

      // </div>
    >
      <div>
        {technologies && (
          <div className="py-4">
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="px-2 py-[2px]     bg-white  dark:bg-secondary-950   rounded-lg    border  border-secondary-500/25"
                >
                  <div className="!text-[12px] font-medium  text-secondary-700 dark:text-primary-300">
                    {tech.cto}
                  </div>
                  <div className="text-[10px] font-medium text-primary-300  dark:text-primary-700">
                    {tech.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <ul className="list-disc list-inside text-primary-500 font-normal  space-y-1 text-sm pb-4">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        {description && (
          <Link
            href="#"
            className="  inline-flex gap-2 items-center group leading-none text-primary-900 dark:text-primary-100 font-normal  mb-2"
          >
            {description}
            <span className="group-hover:underline group-hover:translate-x-1 transition-all ease-in-out duration-200 ">
              <IoIosArrowForward />
            </span>
          </Link>
        )}
      </div>
    </Card>
  )
}
