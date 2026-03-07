import { Card } from '@thirdbracket/bracketui'
import { IconType } from 'react-icons'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'

interface ServiceCardProps {
  title: string
  description: string
  features: string[]
  badge?: string
  icon: IconType
}

export default function ServiceCard({
  title,
  description,
  features,
  badge,
  icon: Icon,
}: ServiceCardProps) {
  const cardId = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

  return (
    <Card
      id={cardId}
      size="xl"
      isIcon
      theme={{
        background: 'bg-white dark:bg-black',
        border:
          'border-opacity-50  border-primary-500  dark:shadow-[0_0_2px_rgba(224,227,230,0.20)]  shadow-[0_0_2px_rgba(11,13,15,0.10)] ',
        hover:
          '[@media(hover:hover)]:hover:border-opacity-100    [@media(hover:hover)]:hover:shadow-[0_0_3px_rgba(11,13,15,0.15)] [@media(hover:hover)]:dark:shadow-[0_0_2px_rgba(224,227,230,0.20)]         focus-within:border-opacity-100 active:border-opacity-100 ',
        text: 'text-primary-500   font-normal leading-[1.45]',
      }}
      cover={
        <div className="flex items-start justify-between mb-4">
          <div className="w-14 h-14 flex items-center justify-center border border-primary-400/20 bg-white dark:bg-black rounded-lg">
            <Icon size={28} className="text-primary-700 dark:text-primary-300" />
          </div>
          {badge && (
            <span className="text-[11px] font-semibold px-2 py-1 bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 rounded-md border border-primary-200/50 dark:border-primary-700/30">
              {badge}
            </span>
          )}
        </div>
      }
      header={title}
    >
      <div>
        <p className="mb-4 text-sm text-primary-500 dark:text-primary-400 leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-[6px] mb-5">
          {features.map((feature, index) => (
            <span
              key={index}
              className="text-[11px] font-medium px-2 py-[3px] rounded-md bg-primary-50 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 border border-primary-100 dark:border-primary-800/40"
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="pt-3 border-t border-primary-100 dark:border-primary-800/30">
          <Link
            href="/contact"
            className="inline-flex gap-2 items-center group text-sm font-medium text-primary-900 dark:text-primary-100 leading-none"
          >
            Get in touch
            <span className="group-hover:translate-x-1 transition-transform ease-in-out duration-200">
              <IoIosArrowForward />
            </span>
          </Link>
        </div>
      </div>
    </Card>
  )
}
