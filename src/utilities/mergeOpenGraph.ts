import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description: 'Get Next.js website and full-stack ecosystem around it',
  images: [
    {
      url: `${getServerSideURL()}/og.webp`,
    },
  ],
  siteName: 'Next.js Agency - ThirdBracket',
  title: 'Next.js Agency - ThirdBracket',
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
