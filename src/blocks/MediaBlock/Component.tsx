// import type { StaticImageData } from 'next/image'

// import { cn } from '@/utilities/ui'
// import React from 'react'
// import RichText from '@/components/RichText'

// import type { MediaBlock as MediaBlockProps } from '@/payload-types'

// import { Media } from '../../components/Media'

// type Props = MediaBlockProps & {
//   breakout?: boolean
//   captionClassName?: string
//   className?: string
//   enableGutter?: boolean
//   imgClassName?: string
//   staticImage?: StaticImageData
//   disableInnerContainer?: boolean
// }

// export const MediaBlock: React.FC<Props> = (props) => {
//   const {
//     captionClassName,
//     className,
//     enableGutter = true,
//     imgClassName,
//     media,
//     staticImage,
//     disableInnerContainer,
//   } = props

//   let caption
//   if (media && typeof media === 'object') caption = media.caption

//   return (
//     <div
//       className={cn(
//         '',
//         {
//           container: enableGutter,
//         },
//         className,
//       )}
//     >
//       {(media || staticImage) && (
//         <Media
//           imgClassName={cn('border border-border rounded-[0.8rem]', imgClassName)}
//           resource={media}
//           src={staticImage}
//         />
//       )}
//       {caption && (
//         <div
//           className={cn(
//             'mt-6',
//             {
//               container: !disableInnerContainer,
//             },
//             captionClassName,
//           )}
//         >
//           <RichText data={caption} enableGutter={false} />
//         </div>
//       )}
//     </div>
//   )
// }

import type { StaticImageData } from 'next/image'
import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'
import type { MediaBlock as MediaBlockProps } from '@/payload-types'
import { Media } from '../../components/Media'

type Props = MediaBlockProps & {
  breakout?: boolean
  captionClassName?: string
  className?: string
  enableGutter?: boolean
  imgClassName?: string
  staticImage?: StaticImageData
  disableInnerContainer?: boolean
}

export const MediaBlock: React.FC<Props> = (props) => {
  const {
    captionClassName,
    className,
    enableGutter = true,
    imgClassName,
    media,
    staticImage,
    disableInnerContainer,
  } = props

  let caption
  if (media && typeof media === 'object') caption = media.caption

  return (
    <figure className={cn('my-10 not-prose', { container: enableGutter }, className)}>
      {(media || staticImage) && (
        <div className="overflow-hidden rounded-xl border border-primary-100 dark:border-primary-800/50 shadow-sm">
          <Media
            imgClassName={cn('w-full h-auto block', imgClassName)}
            resource={media}
            src={staticImage}
          />
        </div>
      )}

      {caption && (
        <figcaption
          className={cn(
            'mt-3 text-center text-sm text-primary-400 dark:text-primary-500 leading-relaxed',
            { container: !disableInnerContainer },
            captionClassName,
          )}
        >
          <RichText data={caption} enableGutter={false} enableProse={false} />
        </figcaption>
      )}
    </figure>
  )
}
