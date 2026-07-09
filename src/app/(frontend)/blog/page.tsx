import type { Metadata } from 'next/types'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'
import { Bracket } from '@thirdbracket/bracketui'
import PageHeader from '@/components/PageHeader'
import CTASection from '@/components/CTASection'
import { BlogArchive } from '@/components/BlogArchive'

export const dynamic = 'force-static'
export const revalidate = false

export const metadata: Metadata = {
  title: 'Web Design, Development and Marketing Blog',
  description:
    'Read practical articles from thirdbracket covering web design, development, SEO and digital marketing insights for growing businesses worldwide.',
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
    limit: 100,
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
        <BlogArchive posts={blogs.docs} />
        <CTASection

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
      </div>
    </Bracket>
  )
}
