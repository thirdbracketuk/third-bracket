'use client'

import { createBlogPostJsonLd } from '@/utilities/structuredData'

interface BlogPostDataProps {
  post: {
    title: string;
    slug: string;
    description: string;
    datePublished: string;
    dateModified?: string;
    image?: string;
    authorName?: string;
  }
}

export default function BlogPostData({ post }: BlogPostDataProps) {
  const jsonLd = createBlogPostJsonLd(post)
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}