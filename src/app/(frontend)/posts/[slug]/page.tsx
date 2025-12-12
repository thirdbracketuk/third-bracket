import type { Metadata } from 'next'

import { RelatedPosts } from '@/blocks/RelatedPosts/Component'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import RichText from '@/components/RichText'

import type { Post } from '@/payload-types'

import { PostHero } from '@/heros/PostHero'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { Bracket } from '@thirdbracket/bracketui'
import { Settings } from '@/utilities/meta'
// Temporarily removing BlogPostData to avoid type errors
// import BlogPostData from './BlogPostData'

export const dynamic = 'force-static'
export const revalidate = false

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const posts = await payload.find({
    collection: 'posts',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = posts.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Post({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  const url = '/posts/' + slug
  const post = await queryPostBySlug({ slug })

  if (!post) return <PayloadRedirects url={url} />

  return (
    <Bracket fluid centered padding="small">
      {/* Temporarily removed BlogPostData to avoid type errors */}
      {/* <BlogPostData post={{...}} /> */}
      <PageClient />

      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <div className="md:max-w-screen-xl mx-auto">
        <PostHero post={post} />
        <div className=" py-[3rem] sm:py-[3.75rem]  lg:py-[4rem] text-primary-700 dark:text-primary-300">
          <RichText data={post.content} enableGutter={false} />
          {post.relatedPosts && post.relatedPosts.length > 0 && (
            <RelatedPosts
              className="mt-12"
              docs={post.relatedPosts.filter((post) => typeof post === 'object')}
            />
          )}
        </div>
      </div>
    </Bracket>
  )
}

export const metadata: Metadata = {
  // metadataBase: new URL(Settings.metadataBase),
  title: 'Bracket Insights',
  description: 'Read curated development blog',
  openGraph: {
    url: `${Settings.metadataBase}/posts`,
    title: 'Bracket Insights',

    images: [
      {
        url: '/og.svg', // Custom image for contact page
        width: 1600, // Add this
        height: 840,
        alt: 'Contact Third Bracket',
      },
    ],
  },
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'posts',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
