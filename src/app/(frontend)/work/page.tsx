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

export const metadata: Metadata = {
  title: 'Work and Case Studies, Real Projects and Results',
  description:
    'Explore real client projects by Third Bracket, including web design, ecommerce, SEO, branding and platform builds, showing real business results.',
  openGraph: {
    title: 'Real Work, Case Studies and Proven Results',
    description:
      'Browse completed website, ecommerce, marketing and platform projects with real outcomes, real builds and practical solutions for UK businesses.',
  },
}

export const dynamic = 'force-static'
export const revalidate = false

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const works = await payload.find({
    collection: 'work',
    depth: 2,
    limit: 12,
    overrideAccess: false,
    sort: '-completedAt',
    page: 1,
  })

  return (
    <Bracket fluid centered padding="small">
      <div className="md:max-w-screen-xl mx-auto">
        <PageClient />
        <PageHeader
          title="Our Work and Real World Results"
          description="Explore a growing archive of completed projects, case studies and real world projects"
        />
        <div className="py-[3rem] sm:py-[3.75rem]  lg:py-[4rem]">
          <div className="container mb-8">
            <PageRange
              collection="work"
              currentPage={works.page}
              limit={12}
              totalDocs={works.totalDocs}
            />
          </div>

          <CollectionArchive posts={works.docs} relationTo="work" />

          <div className="container">
            {works.totalPages > 1 && works.page && (
              <Pagination page={works.page} totalPages={works.totalPages} />
            )}
          </div>

          <CTASection
            cover={{
              src: '/workcto.svg',
              alt: 'Bracket UI Cover',
              width: 500,
              height: 500,
            }}
            title="Behind the Build"
            description="Learn the strategies, tools, and thinking that power our projects."
            primary={{
              label: 'Our Blog',
              href: '/blog',
            }}
            secondary={{
              label: 'Our Solutions',
              href: '/solutions',
            }}
          />
        </div>
      </div>
    </Bracket>
  )
}
