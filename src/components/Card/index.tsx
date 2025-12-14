// // 'use client'

// // import useClickableCard from '@/utilities/useClickableCard'
// // import Link from 'next/link'
// // import React, { Fragment } from 'react'

// // import type { Post } from '@/payload-types'
// // import { Card as MainCard } from '@thirdbracket/bracketui'

// // import { Media } from '@/components/Media'

// // export type CardPostData = Pick<Post, 'slug' | 'categories' | 'meta' | 'title'>

// // export const Card: React.FC<{
// //   alignItems?: 'center'
// //   className?: string
// //   doc?: CardPostData
// //   relationTo?: 'posts'
// //   showCategories?: boolean
// //   title?: string
// // }> = (props) => {
// //   const { link } = useClickableCard({})
// //   const { doc, relationTo, showCategories, title: titleFromProps } = props

// //   const { slug, categories, meta, title } = doc || {}
// //   const { description, image: metaImage } = meta || {}

// //   const hasCategories = categories && Array.isArray(categories) && categories.length > 0
// //   const titleToUse = titleFromProps || title
// //   const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space
// //   const href = `/${relationTo}/${slug}`

// //   return (
// //     <MainCard
// //       // className={cn(
// //       //   'border border-border rounded-lg overflow-hidden bg-card hover:cursor-pointer',
// //       //   className,
// //       // )}

// //       // ref={card.ref}
// //       href={href}
// //       ref={link.ref}
// //       className="rounded-lg border border-primary-500  border-opacity-40 overflow-hidden flex flex-col transition-all duration-300 ease-in-out focus-within:border-opacity-100 active:border-opacity-100 md:hover:border-opacity-70"
// //     >
// //       <div className="relative w-full ">
// //         {!metaImage && <div className="">No image</div>}
// //         {metaImage && typeof metaImage !== 'string' && <Media resource={metaImage} size="33vw" />}
// //       </div>
// //       <div className="mt-4">
// //         {showCategories && hasCategories && (
// //           <div className=" mb-2">
// //             {showCategories && hasCategories && (
// //               <div>
// //                 {categories?.map((category, index) => {
// //                   if (typeof category === 'object') {
// //                     const { title: titleFromCategory } = category

// //                     const categoryTitle = titleFromCategory || 'Untitled category'

// //                     const isLast = index === categories.length - 1

// //                     return (
// //                       <Fragment key={index}>
// //                         <span className="px-1.5 py-0.5 text-xs text-secondary-600 dark:text-secondary-600  border-secondary-500/20   rounded-md border">
// //                           {categoryTitle}
// //                         </span>
// //                         {!isLast && <Fragment>, &nbsp;</Fragment>}
// //                       </Fragment>
// //                     )
// //                   }

// //                   return null
// //                 })}
// //               </div>
// //             )}
// //           </div>
// //         )}
// //         {titleToUse && (
// //           <div className="prose mb-2">
// //             <Link
// //               href={href}
// //               ref={link.ref}
// //               className="text-xl font-bold text-primary-800 dark:text-primary-200 line-clamp-2 leading-tight"
// //             >
// //               <h3 className="not-prose">{titleToUse}</h3>
// //             </Link>
// //           </div>
// //         )}
// //         {description && (
// //           <div>{description && <p className="line-clamp-2">{sanitizedDescription}</p>}</div>
// //         )}
// //       </div>
// //     </MainCard>
// //   )
// // }

// 'use client'
// import { cn } from '@/utilities/ui'
// import useClickableCard from '@/utilities/useClickableCard'
// import Link from 'next/link'
// import React, { Fragment } from 'react'

// import type { Post } from '@/payload-types'

// import { Media } from '@/components/Media'

// export type CardPostData = Pick<Post, 'slug' | 'categories' | 'meta' | 'title'>

// export const Card: React.FC<{
//   alignItems?: 'center'
//   className?: string
//   doc?: CardPostData
//   relationTo?: 'posts'
//   showCategories?: boolean
//   title?: string
// }> = (props) => {
//   const { card } = useClickableCard({})
//   const { className, doc, relationTo, showCategories, title: titleFromProps } = props

//   const { slug, categories, meta, title } = doc || {}
//   const { description, image: metaImage } = meta || {}

//   const hasCategories = categories && Array.isArray(categories) && categories.length > 0
//   const titleToUse = titleFromProps || title
//   const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space
//   const href = `/${relationTo}/${slug}`

//   return (
//     <Link href={href}>
//       <article
//         className={cn(
//           'border border-primary-500 border-opacity-30 rounded-lg overflow-hidden bg-gradient-secondary-dark dark:bg-gradient-secondary hover:cursor-pointer transition-all duration-300 ease-in-out focus-within:border-opacity-100 active:border-opacity-100 md:hover:border-opacity-100',
//           className,
//         )}
//         ref={card.ref}
//       >
//         <div className="relative w-full ">
//           {!metaImage && <div className="">No image</div>}
//           {metaImage && typeof metaImage !== 'string' && <Media resource={metaImage} size="33vw" />}
//         </div>
//         <div className="p-4">
//           {showCategories && hasCategories && (
//             <div className="uppercase px-1  border border-primary-600/30 text-primary-700 dark:text-primary-300 w-fit text-xs rounded mb-2 bg-accent-radial dark:bg-accent-radial-dark">
//               {showCategories && hasCategories && (
//                 <div>
//                   {categories?.map((category, index) => {
//                     if (typeof category === 'object') {
//                       const { title: titleFromCategory } = category

//                       const categoryTitle = titleFromCategory || 'Untitled category'

//                       const isLast = index === categories.length - 1

//                       return (
//                         <Fragment key={index}>
//                           {categoryTitle}
//                           {!isLast && <Fragment>, &nbsp;</Fragment>}
//                         </Fragment>
//                       )
//                     }

//                     return null
//                   })}
//                 </div>
//               )}
//             </div>
//           )}
//           {titleToUse && (
//             <div>
//               <h3 className=" font-bold text-primary-900 dark:text-primary-50 mb-2 text-lg line-clamp-2">
//                 {titleToUse}
//               </h3>
//             </div>
//           )}
//           {description && (
//             <div className="mt-2">
//               {description && (
//                 <p className="text-gray-600 text-sm line-clamp-2">{sanitizedDescription}</p>
//               )}
//             </div>
//           )}
//         </div>
//       </article>
//     </Link>
//   )
// }

'use client'

import { cn } from '@/utilities/ui'
import type { Post } from '@/payload-types'
import { Media } from '@/components/Media'
import { Card } from '@thirdbracket/bracketui'
import { FaGithub, FaBehance, FaExternalLinkAlt } from 'react-icons/fa'
import { formatAuthors } from '@/utilities/formatAuthors'
import { Avatar } from '@/components/Avatar'

export type CardPostData = Pick<Post, 'slug' | 'categories' | 'meta' | 'title'> & {
  technologies?: any[]
  socialLinks?: any
  populatedAuthors?: any[]
  populatedAgency?: any[]
  github?: string
  behance?: string
  liveWebsite?: string
}

export const PostCard: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: CardPostData
  relationTo?: 'posts' | 'blog' | 'work'
  showCategories?: boolean
  title?: string
}> = (props) => {
  const { className, doc, relationTo, showCategories, title: titleFromProps } = props

  const {
    slug,
    categories,
    meta,
    title,
    technologies,
    socialLinks,
    populatedAuthors,
    populatedAgency,
    github,
    behance,
    liveWebsite,
  } = doc || {}
  const { description, image: metaImage } = meta || {}

  const hasCategories = categories && Array.isArray(categories) && categories.length > 0
  const hasTechnologies = technologies && Array.isArray(technologies) && technologies.length > 0
  const isWorkCollection = relationTo === 'work'
  const authors = populatedAuthors || populatedAgency
  const hasAuthors = authors && Array.isArray(authors) && authors.length > 0
  const hasSocialLinks = github || behance || liveWebsite
  const titleToUse = titleFromProps || title
  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space
  const href = `/${relationTo}/${slug}`

  return (
    <Card
      size="lg"
      href={href}
      className={cn(
        '!delay-50 motion-reduce:!transition-none motion-reduce:hover:!transform-none',
        className,
      )}
      theme={{
        background: 'bg-white dark:bg-black',
        border:
          'border-opacity-30  border-primary-500 dark:shadow-[0_0_2px_rgba(224,227,230,0.20)]  shadow-[0_0_2px_rgba(11,13,15,0.10)]',
        hover:
          '[@media(hover:hover)]:hover:border-opacity-100 [@media(hover:hover)]:hover:shadow-[0_0_3px_rgba(11,13,15,0.15)] [@media(hover:hover)]:dark:shadow-[0_0_2px_rgba(224,227,230,0.20)] focus-within:border-opacity-100 active:border-opacity-100',
        text: 'text-primary-500 font-normal leading-[1.45]',
      }}
      cover={
        metaImage && typeof metaImage !== 'string' ? <Media resource={metaImage} /> : undefined
      }
      header={
        titleToUse ? (
          <span className="bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-semibold">
            {titleToUse}
          </span>
        ) : undefined
      }
    >
      <div>
        {showCategories && hasCategories && (
          <div className="mb-3">
            <div className="flex flex-wrap gap-2">
              {categories?.map((category, index) => {
                if (typeof category === 'object') {
                  const { title: titleFromCategory } = category
                  const categoryTitle = titleFromCategory || 'Untitled category'

                  return (
                    <span
                      key={index}
                      className="px-2 py-[2px]  border border-secondary-200 dark:border-secondary-800 rounded-lg  "
                    >
                      <div className="!text-[12px] font-medium text-secondary-900 dark:text-secondary-100">
                        {categoryTitle}
                      </div>
                    </span>
                  )
                }
                return null
              })}
            </div>
          </div>
        )}
        {isWorkCollection && hasTechnologies && (
          <div className="mb-3">
            <div className="flex flex-wrap gap-2">
              {technologies?.map((tech, index) => {
                if (typeof tech === 'object') {
                  const { title: techTitle } = tech
                  const technologyTitle = techTitle || 'Untitled technology'

                  return (
                    <span
                      key={index}
                      className="px-2 py-[2px] bg-secondary-50 dark:bg-secondary-950 rounded-lg border border-secondary-100 dark:border-secondary-900"
                    >
                      <div className="!text-[12px] font-medium text-secondary-700 dark:text-secondary-300">
                        {technologyTitle}
                      </div>
                    </span>
                  )
                }
                return null
              })}
            </div>
          </div>
        )}
        {hasAuthors && (
          <div className="mb-2">
            <div className="flex -space-x-2">
              {authors.slice(0, 3).map((author, index) => (
                <Avatar 
                  key={author.id || index} 
                  user={author} 
                  size="sm" 
                  className="border-2 border-white dark:border-gray-900"
                />
              ))}
              {authors.length > 3 && (
                <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs font-medium text-gray-600 dark:text-gray-300 border-2 border-white dark:border-gray-900">
                  +{authors.length - 3}
                </div>
              )}
            </div>
          </div>
        )}
        {description && <p className="text-sm mb-3">{sanitizedDescription}</p>}
        {isWorkCollection && hasSocialLinks && (
          <div className="flex gap-2 mt-2">
            {github && (
              <a
                href={github as string}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
              >
                <FaGithub size={16} />
              </a>
            )}
            {behance && (
              <a
                href={behance as string}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
              >
                <FaBehance size={16} />
              </a>
            )}
            {liveWebsite && (
              <a
                href={liveWebsite as string}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
              >
                <FaExternalLinkAlt size={14} />
              </a>
            )}
          </div>
        )}
      </div>
    </Card>
  )
}
