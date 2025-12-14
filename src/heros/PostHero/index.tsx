import { formatDateTime } from 'src/utilities/formatDateTime'
import React from 'react'

import type { Post, Blog, Work } from '@/payload-types'
import { Media } from '@/components/Media'

import { formatAuthors } from '@/utilities/formatAuthors'
import { FaGithub, FaBehance, FaExternalLinkAlt } from 'react-icons/fa'
import { Avatar } from '@/components/Avatar'

export const PostHero: React.FC<{
  post: Post | Blog | Work
}> = ({ post }) => {
  const { categories, title, heroImage, meta } = post

  // Handle different field names for different collections
  const authors =
    'populatedAuthors' in post
      ? post.populatedAuthors
      : 'populatedAgency' in post
        ? post.populatedAgency
        : null
  const dateField =
    'publishedAt' in post ? post.publishedAt : 'completedAt' in post ? post.completedAt : null
  const dateLabel = 'publishedAt' in post ? 'Date Published' : 'Date Completed'
  const authorLabel = 'populatedAuthors' in post ? (authors.length > 1 ? 'Authors' : 'Author') : 'Developers'
  const technologies = 'technologies' in post ? post.technologies : null
  const socialLinks =
    'github' in post
      ? { github: post.github, behance: post.behance, liveWebsite: post.liveWebsite }
      : null

  // Use meta image for background, fallback to hero image
  const backgroundImage = meta?.image || heroImage

  const hasAuthors =
    authors && Array.isArray(authors) && authors.length > 0 && formatAuthors(authors) !== ''

  return (
    // <section className="relative h-full w-full bg-[radial-gradient(#f0f0f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1c1c1c_1px,transparent_1px)] [background-size:16px_16px] pb-8 sm:pb-12 md:pb-16 pt-20 lg:pt-24 border-b border-dashed border-primary-200/50 dark:border-primary-800/60 overflow-hidden">
    <section className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem] bg-overlayDot-light dark:bg-overlayDot-dark  [background-size:36px_36px]  text-center ">
      {backgroundImage && typeof backgroundImage !== 'string' && (
        <div className="absolute inset-0 -z-10">
          <Media
            fill
            priority
            imgClassName="object-cover blur-sm opacity-20 dark:opacity-15"
            resource={backgroundImage}
          />
          <div className="absolute inset-0 bg-white/70 dark:bg-black/75" />
        </div>
      )}
      <div className="uppercase text-sm mb-6 text-center">
        {categories?.map((category, index) => {
          if (typeof category === 'object' && category !== null) {
            const { title: categoryTitle } = category

            const titleToUse = categoryTitle || 'Untitled category'

            const isLast = index === categories.length - 1

            return (
              <React.Fragment key={index}>
                <span
                  className="mr-2 lg:mr-3 rounded-full 
    
    px-2 py-0.5 text-xs text-primary-900 dark:text-primary-50 
     bg-accent-radial dark:bg-accent-radial-dark"
                >
                  {titleToUse}
                </span>
                {!isLast && <React.Fragment>, &nbsp;</React.Fragment>}
              </React.Fragment>
            )
          }
          return null
        })}
        {technologies &&
          Array.isArray(technologies) &&
          technologies.map((tech, index) => {
            if (typeof tech === 'object' && tech !== null) {
              const { title: techTitle } = tech

              const titleToUse = techTitle || 'Untitled technology'

              const isLast = index === (technologies?.length || 0) - 1

              return (
                <React.Fragment key={`tech-${index}`}>
                  <span
                    className="mr-2 lg:mr-3 rounded-full 
    
    px-2 py-0.5 text-xs text-white dark:text-primary-950 
     bg-secondary-600 dark:bg-secondary-400"
                  >
                    {titleToUse}
                  </span>
                  {!isLast && <React.Fragment>, &nbsp;</React.Fragment>}
                </React.Fragment>
              )
            }
            return null
          })}
      </div>
      <div>
        {' '}
        <h1 className=" font-extrabold text-[2.55rem]/[1]  md:text-[2.95rem]/[1.1] lg:text-[3.45rem]/[1.1] bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text  text-center mb-6">
          {title}
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-16 mx-auto place-content-center mt-2 text-primary-800 dark:text-primary-200">
        {hasAuthors && (
          <div className="flex flex-col gap-2">
            <p className="text-xs md:text-sm text-center md:text-left">{authorLabel}</p>
            <div className="flex items-center justify-center gap-3">
              <div className="flex -space-x-2">
                {authors.slice(0, 3).map((author, index) => (
                  <Avatar 
                    key={author.id || index} 
                    user={author} 
                    size="md" 
                    className="border-2 border-white dark:border-gray-900"
                  />
                ))}
                {authors.length > 3 && (
                  <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs font-medium text-gray-600 dark:text-gray-300 border-2 border-white dark:border-gray-900">
                    +{authors.length - 3}
                  </div>
                )}
              </div>
              <p className="text-sm hidden md:block">{formatAuthors(authors)}</p>
            </div>
          </div>
        )}
        {dateField && (
          <div className="flex flex-col gap-1">
            <p className="text-xs md:text-sm text-center md:text-left">{dateLabel}</p>
            <time className="text-center" dateTime={dateField}>{formatDateTime(dateField)}</time>
          </div>
        )}
        {socialLinks && (
          <div className="flex flex-col gap-1">
            <p className="text-xs md:text-sm text-center md:text-left">Links</p>
            <div className="flex gap-3 justify-center">
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-200"
                >
                  <FaGithub size={18} />
                </a>
              )}
              {socialLinks.behance && (
                <a
                  href={socialLinks.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-200"
                >
                  <FaBehance size={18} />
                </a>
              )}
              {socialLinks.liveWebsite && (
                <a
                  href={socialLinks.liveWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-200"
                >
                  <FaExternalLinkAlt size={16} />
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </section>

    // <section className="relative -mt-[10.4rem] flex items-end     px-6">
    //   <div className="container z-10 relative lg:grid lg:grid-cols-[1fr_48rem_1fr] text-black dark:text-white pb-8">
    //     <div className="col-start-1 col-span-1 md:col-start-2 md:col-span-2">
    //       <div className="uppercase text-sm mb-6">
    //         {categories?.map((category, index) => {
    //           if (typeof category === 'object' && category !== null) {
    //             const { title: categoryTitle } = category

    //             const titleToUse = categoryTitle || 'Untitled category'

    //             const isLast = index === categories.length - 1

    //             return (
    //               <React.Fragment key={index}>
    //                 {titleToUse}
    //                 {!isLast && <React.Fragment>, &nbsp;</React.Fragment>}
    //               </React.Fragment>
    //             )
    //           }
    //           return null
    //         })}
    //       </div>

    //       <div>
    //         <h1 className="mb-6 text-4xl font-extrabold md:text-5xl lg:text-6xl bg-gradient-to-r from-primary-800 via-primary-900 to-primary-800 dark:from-primary-200 dark:via-primary-100 dark:to-primary-200 text-transparent bg-clip-text ">
    //           {title}
    //         </h1>
    //       </div>

    //       <div className="flex flex-col md:flex-row gap-4 md:gap-16">
    //         {hasAuthors && (
    //           <div className="flex flex-col gap-4">
    //             <div className="flex flex-col gap-1">
    //               <p className="text-sm">Author</p>

    //               <p>{formatAuthors(populatedAuthors)}</p>
    //             </div>
    //           </div>
    //         )}
    //         {publishedAt && (
    //           <div className="flex flex-col gap-1">
    //             <p className="text-sm">Date Published</p>

    //             <time dateTime={publishedAt}>{formatDateTime(publishedAt)}</time>
    //           </div>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    //   <div className="min-h-[80vh] select-none">
    //     {heroImage && typeof heroImage !== 'string' && (
    //       <Media fill priority imgClassName="-z-10 object-cover" resource={heroImage} />
    //     )}
    //     <div className="absolute pointer-events-none left-0 bottom-0 w-full h-1/2 bg-[radial-gradient(#f0f0f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1c1c1c_1px,transparent_1px)]  [background-size:16px_16px]" />
    //   </div>
    // </section>
  )
}
