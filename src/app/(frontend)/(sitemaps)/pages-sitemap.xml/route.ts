import { getServerSideSitemap } from 'next-sitemap'

import { unstable_cache } from 'next/cache'

const getPagesSitemap = unstable_cache(
  async () => {
    const SITE_URL =
      process.env.NEXT_PUBLIC_SERVER_URL ||
      process.env.VERCEL_PROJECT_PRODUCTION_URL ||
      'https://thirdbracket.co.uk'

    const dateFallback = new Date().toISOString()

    // Static pages from your current sitemap.ts
    const staticPages = [
      {
        loc: `${SITE_URL}/`,
        lastmod: dateFallback,
      },
      {
        loc: `${SITE_URL}/contact`,
        lastmod: dateFallback,
      },
      {
        loc: `${SITE_URL}/about`,
        lastmod: dateFallback,
      },
      {
        loc: `${SITE_URL}/work`,
        lastmod: dateFallback,
      },
      {
        loc: `${SITE_URL}/services`,
        lastmod: dateFallback,
      },
      {
        loc: `${SITE_URL}/solutions`,
        lastmod: dateFallback,
      },
      {
        loc: `${SITE_URL}/posts`,
        lastmod: dateFallback,
      },
      {
        loc: `${SITE_URL}/blog`,
        lastmod: dateFallback,
      },
      {
        loc: `${SITE_URL}/services/web-development`,
        lastmod: dateFallback,
      },
      {
        loc: `${SITE_URL}/services/digital-marketing`,
        lastmod: dateFallback,
      },
      {
        loc: `${SITE_URL}/services/ui-ux-design`,
        lastmod: dateFallback,
      },
      {
        loc: `${SITE_URL}/solutions/design-solutions`,
        lastmod: dateFallback,
      },
      {
        loc: `${SITE_URL}/solutions/platform-tools`,
        lastmod: dateFallback,
      },
      {
        loc: `${SITE_URL}/solutions/industry-solutions`,
        lastmod: dateFallback,
      },
    ]

    return staticPages
  },
  ['pages-sitemap'],
  {
    tags: ['pages-sitemap'],
  },
)

export async function GET() {
  const sitemap = await getPagesSitemap()
  return getServerSideSitemap(sitemap)
}
