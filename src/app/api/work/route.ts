import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function GET(request: NextRequest) {
  try {
    const payload = await getPayload({ config })
    
    const works = await payload.find({
      collection: 'work',
      where: {
        and: [
          {
            _status: {
              equals: 'published'
            }
          },
          {
            'agency': {
              in: [3]
            }
          }
        ]
      },
      sort: '-completedAt',
      limit: 100
    })

    const formattedDocs = works.docs.map((work: any) => ({
      title: work.title,
      summary: work.meta?.description || '',
      completedAt: work.completedAt,
      slug: work.slug,
      heroImage: {
        url: work.heroImage?.url || ''
      },
      category: {
        name: work.categories?.[0]?.title || ''
      },
      technologies: work.technologies?.map((tech: any) => tech.title) || [],
      github: work.github || '',
      behance: work.behance || '',
      liveWebsite: work.liveWebsite || '',
      agency: {
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
      { error: 'Failed to fetch work posts' },
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