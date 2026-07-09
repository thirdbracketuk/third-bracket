import type { Metadata } from 'next/types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'
import { Bracket } from '@thirdbracket/bracketui'
import PageHeader from '@/components/PageHeader'
import CTASection from '@/components/CTASection'
import WorkStats from './WorkStats'
import WorkCapabilities, { NDANotice } from './WorkCapabilities'
import { WorkArchive } from '@/components/WorkArchive'

export const metadata: Metadata = {
  title: 'Work and Case Studies, Real Projects and Results',
  description:
    'Explore real client projects by thirdbracket, including web design, ecommerce, SEO, branding and platform builds, showing real business results.',
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
    limit: 100,
    overrideAccess: false,
    sort: '-completedAt',
    page: 1,
  })

  return (
    <Bracket fluid centered padding="small">
      <div className="md:max-w-screen-xl mx-auto">
        <PageClient />

        {/* ── Hero header ────────────────────────────────────────────── */}
        <PageHeader
          title="Our Work and Real World Results"
          description="Explore a growing archive of completed projects, case studies and real world results"
        />

        {/* ── Stats bar ──────────────────────────────────────────────── */}

        <WorkStats />

        {/* ── NDA notice ─────────────────────────────────────────────── */}
        <NDANotice />

        <div
          className="bg-transparent mx-auto border border-primary-200 dark:border-primary-800"
          style={{
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',

            borderRadius: 12,
            padding: 20,
            maxWidth: 500,

            boxShadow: 'rgba(0, 0, 0, 0.05) 0px 2px 8px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <img
              alt="Bay of Bengal"
              src="https://ph-files.imgix.net/87807ad6-ff90-4297-a62f-d2c962ff9fcc.png?auto=format&fit=crop&w=80&h=80"
              width={64}
              height={64}
              style={{ borderRadius: 8, objectFit: 'cover', flexShrink: 0 }}
            />
            <div style={{ flex: '1 1 0%', minWidth: 0 }}>
              <h3
                className="text-primary-900 dark:text-primary-100"
                style={{
                  margin: 0,
                  fontSize: 18,
                  fontWeight: 600,

                  lineHeight: 1.3,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                Bay of Bengal
              </h3>
              <p
                style={{
                  margin: '4px 0 0',
                  fontSize: 14,
                  color: 'rgb(102, 102, 102)',
                  lineHeight: 1.4,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                }}
              >
                Discover verified Bangladesh exporters, the smarter way
              </p>
            </div>
          </div>

          <a
            href="https://www.producthunt.com/products/bay-of-bengal?embed=true&utm_source=embed&utm_medium=post_embed"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 4,
              marginTop: 12,
              padding: '8px 16px',
              background: 'rgb(255, 97, 84)',
              color: 'rgb(255, 255, 255)',
              textDecoration: 'none',
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            Check it out on Product Hunt →
          </a>
        </div>

        {/* ── Project listing with filtering ─────────────────────────── */}
        <WorkArchive works={works.docs} />

        {/* ── Capabilities + Full Stack ───────────────────────────────── */}
        <WorkCapabilities />

        {/* ── CTA ────────────────────────────────────────────────────── */}
        <CTASection
          
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
    </Bracket>
  )
}
