import { getServerSideSitemap } from 'next-sitemap'
import { getPayload } from 'payload'
import config from '@payload-config'
import { unstable_cache } from 'next/cache'

const getBlogSitemap = unstable_cache(
  async () => {
    const payload = await getPayload({ config })
    const SITE_URL =
      process.env.NEXT_PUBLIC_SERVER_URL ||
      process.env.VERCEL_PROJECT_PRODUCTION_URL ||
      'https://thirdbracket.co.uk'

    const results = await payload.find({
      collection: 'blog',
      overrideAccess: false,
      draft: false,
      depth: 0,
      limit: 1000,
      pagination: false,
      where: {
        _status: {
          equals: 'published',
        },
      },
      select: {
        slug: true,
        updatedAt: true,
      },
    })

    const dateFallback = new Date().toISOString()

    const sitemap = results.docs
      ? results.docs
          .filter((blog) => Boolean(blog?.slug))
          .map((blog) => ({
            loc: `${SITE_URL}/blog/${blog?.slug}`,
            lastmod: blog.updatedAt || dateFallback,
          }))
      : []

    return sitemap
  },
  ['blog-sitemap'],
  {
    tags: ['blog-sitemap'],
  },
)

export async function GET() {
  const sitemap = await getBlogSitemap()

  return getServerSideSitemap(sitemap)
}