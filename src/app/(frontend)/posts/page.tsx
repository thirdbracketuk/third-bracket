import type { Metadata } from 'next/types'

import { CollectionArchive } from '@/components/CollectionArchive'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'
import { Bracket } from '@thirdbracket/bracketui'
import PageHeader from '@/components/PageHeader'
import CTASection from '@/components/CTASection'
// Structured data now in layout.tsx

export const dynamic = 'force-static'
export const revalidate = 60

// export const revalidate = false

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 12,
    overrideAccess: false,
    sort: '-publishedAt',
    page: 1,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
    },
  })

  return (
    <Bracket fluid centered padding="small">
      <div className="md:max-w-screen-xl mx-auto">
        {/* Structured data now in layout.tsx */}
        <PageClient />
        {/* <div className="container mb-16">
          <div className="prose dark:prose-invert max-w-none">
            <h1>Posts</h1>
          </div>
        </div> */}
        <PageHeader title="Blog" description="Bracket Insights and updates from our team" />
        <div className="  py-8 sm:py-12 md:py-16">
          <div className="container mb-8">
            <PageRange
              collection="posts"
              currentPage={posts.page}
              limit={12}
              totalDocs={posts.totalDocs}
            />
          </div>

          <CollectionArchive posts={posts.docs} />

          <div className="container">
            {posts.totalPages > 1 && posts.page && (
              <Pagination page={posts.page} totalPages={posts.totalPages} />
            )}
          </div>
        </div>
      </div>
    </Bracket>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Web Development & Digital Marketing Blogs`,
  }
}
