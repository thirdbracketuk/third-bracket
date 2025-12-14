import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function GET(request: NextRequest) {
  try {
    const payload = await getPayload({ config })
    
    // Get all published blogs to see the data structure
    const blogs = await payload.find({
      collection: 'blog',
      where: {
        _status: {
          equals: 'published'
        }
      },
      limit: 5
    })

    return NextResponse.json({
      totalDocs: blogs.totalDocs,
      sampleDoc: blogs.docs[0] || null,
      allDocs: blogs.docs.map(doc => ({
        title: doc.title,
        authors: doc.authors,
        populatedAuthors: doc.populatedAuthors,
        _status: doc._status
      }))
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Debug failed', details: error.message },
      { status: 500 }
    )
  }
}