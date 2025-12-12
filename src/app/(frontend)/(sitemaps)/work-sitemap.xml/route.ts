import { getServerSideURL } from '@/utilities/getURL'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { unstable_cache } from 'next/cache'

const getWorks = unstable_cache(
  async () => {
    const payload = await getPayload({ config: configPromise })

    const works = await payload.find({
      collection: 'work',
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

    return works.docs
  },
  ['work-sitemap'],
  {
    tags: ['work-sitemap'],
  },
)

export async function GET() {
  const works = await getWorks()

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${works
        .map((work) => {
          return `
            <url>
              <loc>${getServerSideURL()}/work/${work.slug}</loc>
              <lastmod>${work.updatedAt}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>0.7</priority>
            </url>
          `
        })
        .join('')}
    </urlset>`

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}