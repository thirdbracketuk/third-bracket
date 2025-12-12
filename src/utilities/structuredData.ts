import { Settings } from './meta'

const baseUrl = Settings.metadataBase

// Blog post structured data (supports both posts and blog collections)
export const createBlogPostJsonLd = (post: {
  title: string
  slug: string
  description: string
  datePublished: string
  dateModified?: string
  image?: string
  authorName?: string
  collection?: 'posts' | 'blog'
}) => {
  const collectionPath = post.collection || 'posts'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': post.title,
    'description': post.description,
    'datePublished': post.datePublished,
    'dateModified': post.dateModified || post.datePublished,
    'image': post.image ? `${baseUrl}${post.image}` : undefined,
    'author': {
      '@type': 'Person',
      'name': post.authorName || 'Third Bracket Ltd Team'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Third Bracket Ltd',
      'logo': {
        '@type': 'ImageObject',
        'url': `${baseUrl}logo.svg`
      }
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `${baseUrl}${collectionPath}/${post.slug}/`
    }
  }
}

// Work project structured data
export const createWorkJsonLd = (work: {
  title: string
  slug: string
  description: string
  dateCompleted: string
  dateModified?: string
  image?: string
  agencyName?: string
  technologies?: string[]
  liveUrl?: string
  githubUrl?: string
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    'name': work.title,
    'description': work.description,
    'dateCreated': work.dateCompleted,
    'dateModified': work.dateModified || work.dateCompleted,
    'image': work.image ? `${baseUrl}${work.image}` : undefined,
    'creator': {
      '@type': 'Organization',
      'name': work.agencyName || 'Third Bracket Ltd'
    },
    'keywords': work.technologies?.join(', '),
    'url': work.liveUrl,
    'codeRepository': work.githubUrl,
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `${baseUrl}work/${work.slug}/`
    }
  }
}