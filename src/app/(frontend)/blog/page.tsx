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

export const dynamic = 'force-static'
export const revalidate = false

export const metadata: Metadata = {
  title: 'Web Design, Development and Marketing Blog',
  description:
    'Read practical articles from Third Bracket covering web design, development, SEO and digital marketing insights for growing businesses in the UK.',
  openGraph: {
    title: 'Insights, Tips and Articles on Web and Marketing',
    description:
      'Browse expert posts covering web development, design, SEO strategies, Next.js tips and practical digital marketing advice for real business growth.',
  },
}

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const blogs = await payload.find({
    collection: 'blog',
    depth: 2,
    limit: 12,
    overrideAccess: false,
    sort: '-publishedAt',
    page: 1,
  })

  return (
    <Bracket fluid centered padding="small">
      <div className="md:max-w-screen-xl mx-auto">
        <PageClient />
        <PageHeader
          title="Insights, Articles and Practical Guides"
          description="Explore articles, tips and practical guides on web development, SEO and digital marketing."
        />
        <div className="py-8 sm:py-12 md:py-16">
          <div className="container mb-8">
            <PageRange
              collection="blog"
              currentPage={blogs.page}
              limit={12}
              totalDocs={blogs.totalDocs}
            />
          </div>

          <CollectionArchive posts={blogs.docs} relationTo="blog" />

          <CTASection
            cover={{
              src: '/blogcto.svg',
              alt: 'Bracket UI Cover',
              width: 900,
              height: 600,
            }}
            title="Discover Our Projects"
            description="Real results, real impact crafted with design, code and strategy."
            primary={{
              label: 'Our Work',
              href: '/work',
            }}
            secondary={{
              label: 'Our Services',
              href: '/services',
            }}
          />

          <div className="container">
            {blogs.totalPages > 1 && blogs.page && (
              <Pagination page={blogs.page} totalPages={blogs.totalPages} />
            )}
          </div>
        </div>
      </div>
    </Bracket>
  )
}
