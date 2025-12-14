import type { Metadata } from 'next'

import { RelatedPosts } from '@/blocks/RelatedPosts/Component'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import RichText from '@/components/RichText'

import type { Blog } from '@/payload-types'

import { PostHero } from '@/heros/PostHero'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { Bracket } from '@thirdbracket/bracketui'

export const dynamic = 'force-static'
export const revalidate = false

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const blogs = await payload.find({
    collection: 'blog',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = blogs.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function BlogPost({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  const url = '/blog/' + slug
  const blog = await queryBlogBySlug({ slug })

  if (!blog) return <PayloadRedirects url={url} />

  return (
    <Bracket fluid centered padding="small">
      <PageClient />

      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <div className="md:max-w-screen-xl mx-auto">
        <PostHero post={blog} />
        <div className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem] text-primary-700 dark:text-primary-300">
          <RichText data={blog.content} enableGutter={false} />
          {blog.relatedBlogs && blog.relatedBlogs.length > 0 && (
            <RelatedPosts
              className="mt-12"
              docs={blog.relatedBlogs.filter((blog) => typeof blog === 'object')}
            />
          )}
        </div>
      </div>
    </Bracket>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const blog = await queryBlogBySlug({ slug })

  return generateMeta({ doc: blog })
}

const queryBlogBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'blog',
    depth: 2,
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