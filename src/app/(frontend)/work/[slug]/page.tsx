// // import type { Metadata } from 'next'

// // import { RelatedPosts } from '@/blocks/RelatedPosts/Component'
// // import { PayloadRedirects } from '@/components/PayloadRedirects'
// // import configPromise from '@payload-config'
// // import { getPayload } from 'payload'
// // import { draftMode } from 'next/headers'
// // import React, { cache } from 'react'
// // import RichText from '@/components/RichText'

// // import type { Work } from '@/payload-types'

// // import { PostHero } from '@/heros/PostHero'
// // import { generateMeta } from '@/utilities/generateMeta'
// // import PageClient from './page.client'
// // import { LivePreviewListener } from '@/components/LivePreviewListener'
// // import { Bracket } from '@thirdbracket/bracketui'

// // export const dynamic = 'force-static'
// // export const revalidate = false

// // export async function generateStaticParams() {
// //   const payload = await getPayload({ config: configPromise })
// //   const works = await payload.find({
// //     collection: 'work',
// //     draft: false,
// //     limit: 1000,
// //     overrideAccess: false,
// //     pagination: false,
// //     select: {
// //       slug: true,
// //     },
// //   })

// //   const params = works.docs
// //     .filter(({ slug }) => slug) // Filter out items without slug
// //     .map(({ slug }) => ({
// //       slug: String(slug), // Ensure slug is a string
// //     }))

// //   return params
// // }

// // type Args = {
// //   params: Promise<{
// //     slug?: string
// //   }>
// // }

// // export default async function WorkPost({ params: paramsPromise }: Args) {
// //   const { isEnabled: draft } = await draftMode()
// //   const { slug = '' } = await paramsPromise
// //   const url = '/work/' + slug
// //   const work = await queryWorkBySlug({ slug })

// //   if (!work) return <PayloadRedirects url={url} />

// //   return (
// //     <Bracket fluid centered padding="small">
// //       <PageClient />

// //       <PayloadRedirects disableNotFound url={url} />

// //       {draft && <LivePreviewListener />}

// //       <div className="md:max-w-screen-xl mx-auto">
// //         <PostHero post={work} />
// //         <div className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem] text-primary-700 dark:text-primary-300">
// //           <RichText data={work.content} enableGutter={false} />
// //           {work.relatedWork && work.relatedWork.length > 0 && (
// //             <RelatedPosts
// //               className="mt-12"
// //               docs={work.relatedWork.filter((work) => typeof work === 'object')}
// //             />
// //           )}
// //         </div>
// //       </div>
// //     </Bracket>
// //   )
// // }

// // export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
// //   const { slug = '' } = await paramsPromise
// //   const work = await queryWorkBySlug({ slug })

// //   return generateMeta({ doc: work })
// // }

// // const queryWorkBySlug = cache(async ({ slug }: { slug: string }) => {
// //   const { isEnabled: draft } = await draftMode()

// //   const payload = await getPayload({ config: configPromise })

// //   const result = await payload.find({
// //     collection: 'work',
// //     depth: 2,
// //     draft,
// //     limit: 1,
// //     overrideAccess: draft,
// //     pagination: false,
// //     where: {
// //       slug: {
// //         equals: slug,
// //       },
// //     },
// //   })

// //   return result.docs?.[0] || null
// // })

// import type { Metadata } from 'next'

// import { RelatedPosts } from '@/blocks/RelatedPosts/Component'
// import { PayloadRedirects } from '@/components/PayloadRedirects'
// import configPromise from '@payload-config'
// import { getPayload } from 'payload'
// import { draftMode } from 'next/headers'
// import React, { cache } from 'react'
// import RichText from '@/components/RichText'

// import type { Work } from '@/payload-types'

// import { WorkHero } from '@/heros/WorkHero'
// import { generateMeta } from '@/utilities/generateMeta'
// import PageClient from './page.client'
// import { LivePreviewListener } from '@/components/LivePreviewListener'

// export const dynamic = 'force-static'
// export const revalidate = false

// export async function generateStaticParams() {
//   const payload = await getPayload({ config: configPromise })
//   const works = await payload.find({
//     collection: 'work',
//     draft: false,
//     limit: 1000,
//     overrideAccess: false,
//     pagination: false,
//     select: {
//       slug: true,
//     },
//   })

//   const params = works.docs
//     .filter(({ slug }) => slug)
//     .map(({ slug }) => ({
//       slug: String(slug),
//     }))

//   return params
// }

// type Args = {
//   params: Promise<{
//     slug?: string
//   }>
// }

// export default async function WorkPost({ params: paramsPromise }: Args) {
//   const { isEnabled: draft } = await draftMode()
//   const { slug = '' } = await paramsPromise
//   const url = '/work/' + slug
//   const work = await queryWorkBySlug({ slug })

//   if (!work) return <PayloadRedirects url={url} />

//   const accent = (work as any).accentColor || '#bc3a5b'

//   return (
//     <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>
//       <PageClient />
//       <PayloadRedirects disableNotFound url={url} />
//       {draft && <LivePreviewListener />}

//       {/* Full-bleed hero + mockups + outcomes */}
//       <WorkHero work={work} />

//       {/* Rich text content — editorial column */}
//       <section
//         style={{
//           maxWidth: 760,
//           margin: '0 auto',
//           padding: 'clamp(48px,8vw,96px) clamp(20px,5vw,40px)',
//         }}
//       >
//         {/* Section label */}
//         <div
//           style={{
//             fontSize: 10,
//             letterSpacing: '0.2em',
//             textTransform: 'uppercase',
//             color: accent,
//             marginBottom: 32,
//             fontWeight: 600,
//           }}
//         >
//           About the Project
//         </div>

//         <RichText data={work.content} enableGutter={false} />
//       </section>

//       {/* Related work */}
//       {work.relatedWork && work.relatedWork.length > 0 && (
//         <section
//           style={{
//             borderTop: '1px solid #161616',
//             padding: 'clamp(48px,8vw,80px) clamp(20px,5vw,64px)',
//           }}
//         >
//           <div style={{ maxWidth: 1100, margin: '0 auto' }}>
//             <div
//               style={{
//                 fontSize: 10,
//                 letterSpacing: '0.2em',
//                 textTransform: 'uppercase',
//                 color: '#444',
//                 marginBottom: 32,
//                 fontWeight: 600,
//               }}
//             >
//               Related Work
//             </div>
//             <RelatedPosts docs={work.relatedWork.filter((w) => typeof w === 'object')} />
//           </div>
//         </section>
//       )}

//       {/* CTA footer */}
//       <section
//         style={{
//           textAlign: 'center',
//           padding: 'clamp(64px,10vw,120px) clamp(20px,5vw,64px)',
//           borderTop: '1px solid #161616',
//         }}
//       >
//         <div
//           style={{
//             fontSize: 11,
//             color: '#444',
//             letterSpacing: '0.15em',
//             textTransform: 'uppercase',
//             marginBottom: 20,
//           }}
//         >
//           What&apos;s next?
//         </div>
//         <h2
//           style={{
//             fontSize: 'clamp(32px,6vw,64px)',
//             fontWeight: 900,
//             letterSpacing: '-0.04em',
//             color: '#fff',
//             margin: '0 0 32px',
//             lineHeight: 1.05,
//           }}
//         >
//           Let&apos;s build something <span style={{ color: accent }}>together.</span>
//         </h2>
//         <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
//           <a
//             href="/contact"
//             style={{
//               background: accent,
//               color: '#fff',
//               padding: '14px 32px',
//               borderRadius: 100,
//               textDecoration: 'none',
//               fontSize: 14,
//               fontWeight: 700,
//               letterSpacing: '-0.2px',
//             }}
//           >
//             Start a project
//           </a>
//           <a
//             href="/work"
//             style={{
//               background: 'transparent',
//               color: '#ccc',
//               padding: '14px 32px',
//               borderRadius: 100,
//               textDecoration: 'none',
//               fontSize: 14,
//               border: '1px solid #2a2a2a',
//             }}
//           >
//             View all work
//           </a>
//         </div>
//       </section>
//     </div>
//   )
// }

// export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
//   const { slug = '' } = await paramsPromise
//   const work = await queryWorkBySlug({ slug })
//   return generateMeta({ doc: work })
// }

// const queryWorkBySlug = cache(async ({ slug }: { slug: string }) => {
//   const { isEnabled: draft } = await draftMode()
//   const payload = await getPayload({ config: configPromise })

//   const result = await payload.find({
//     collection: 'work',
//     depth: 2,
//     draft,
//     limit: 1,
//     overrideAccess: draft,
//     pagination: false,
//     where: {
//       slug: {
//         equals: slug,
//       },
//     },
//   })

//   return result.docs?.[0] || null
// })

import type { Metadata } from 'next'

import { RelatedPosts } from '@/blocks/RelatedPosts/Component'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import RichText from '@/components/RichText'

import type { Work } from '@/payload-types'

import { PostHero } from '@/heros/PostHero'
import { WorkMockup } from '@/heros/WorkHero'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { Bracket } from '@thirdbracket/bracketui'
import CTASection from '@/components/CTASection'

export const dynamic = 'force-static'
export const revalidate = false

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const works = await payload.find({
    collection: 'work',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: { slug: true },
  })

  return works.docs.filter(({ slug }) => slug).map(({ slug }) => ({ slug: String(slug) }))
}

type Args = {
  params: Promise<{ slug?: string }>
}

export default async function WorkPost({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  const url = '/work/' + slug
  const work = await queryWorkBySlug({ slug })

  if (!work) return <PayloadRedirects url={url} />

  return (
    <Bracket fluid centered padding="small">
      <PageClient />
      <PayloadRedirects disableNotFound url={url} />
      {draft && <LivePreviewListener />}

      <div className="md:max-w-screen-xl mx-auto">
        {/* Hero — uses your existing PostHero, typography unchanged */}
        <PostHero post={work} />

        {/* Device mockups + outcomes — dark cinematic strip */}
        <WorkMockup work={work} />

        {/* Rich text content */}
        <div className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem] text-primary-700 dark:text-primary-300">
          <RichText data={work.content} enableGutter={false} />

          {work.relatedWork && work.relatedWork.length > 0 && (
            <RelatedPosts
              className="mt-12"
              docs={work.relatedWork.filter((w) => typeof w === 'object')}
            />
          )}
        </div>

        {/* Your CTASection */}
        <CTASection
          title="Ready to build something like this?"
          description="We design and develop web experiences that perform. Let's talk about your project."
          primary={{ label: 'Start a project', href: '/contact' }}
          secondary={{ label: 'View all work', href: '/work' }}
        />
      </div>
    </Bracket>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const work = await queryWorkBySlug({ slug })
  return generateMeta({ doc: work })
}

const queryWorkBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'work',
    depth: 2,
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: { slug: { equals: slug } },
  })

  return result.docs?.[0] || null
})
