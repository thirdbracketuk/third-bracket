import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function GET(request: NextRequest) {
  try {
    const payload = await getPayload({ config })
    
    const blogs = await payload.find({
      collection: 'blog',
      where: {
        and: [
          {
            _status: {
              equals: 'published'
            }
          },
          {
            'authors': {
              in: [3]
            }
          }
        ]
      },
      sort: '-publishedAt',
      limit: 100
    })

    const formattedDocs = blogs.docs.map((blog: any) => ({
      title: blog.title,
      summary: blog.meta?.description || '',
      publishedAt: blog.publishedAt,
      slug: blog.slug,
      featuredImage: {
        url: blog.heroImage?.url || ''
      },
      category: {
        name: blog.categories?.[0]?.title || ''
      },
      author: {
        name: 'Musabbir Sagar'
      }
    }))

    const response = NextResponse.json({
      docs: formattedDocs
    })

    // CORS headers
    response.headers.set('Access-Control-Allow-Origin', '*')
    response.headers.set('Access-Control-Allow-Methods', 'GET')
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type')
    
    // Cache headers (5 minutes)
    response.headers.set('Cache-Control', 'public, max-age=300, s-maxage=300')

    return response
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    )
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}