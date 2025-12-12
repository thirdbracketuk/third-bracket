import { Card } from '@thirdbracket/bracketui'
import { IconType } from 'react-icons'

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
        <div className="w-16 h-16 mb-4 flex items-center  justify-center   border border-primary-400/20   bg-white dark:bg-black   rounded-lg">
          <Icon size={32} className=" text-primary-700 dark:text-primary-300" />
        </div>
      }
      header={title}
      // <div className="flex items-center justify-between mb-4">
      //   <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-50">{title}</h3>
      //   {badge && (
      //     <span className="text-xs font-semibold px-2 py-1 bg-primary-100 dark:bg-primary-700 text-primary-800 dark:text-primary-100 rounded">
      //       {badge}
      //     </span>
      //   )}
      // </div>
    >
      <div>
        <p className="   mb-4">{description}</p>
        <ul className="list-disc list-inside   space-y-1 text-sm">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </Card>
  )
}
