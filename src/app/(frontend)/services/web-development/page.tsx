import { Metadata } from 'next'
import WebDevelopmentPage from './webdevpage'

export const metadata: Metadata = {
  title: 'Web Development for SMEs (Next.js & WordPress)',
  description:
    'We build high-performance websites and ecommerce platforms for SMEs using Next.js and WordPress. Clean builds, scalable architecture, and full ownership from day one.',
  openGraph: {
    title: 'Web Development for SMEs (Next.js & WordPress)',
    description:
      'High-performance website and ecommerce development built on Next.js and WordPress.',
    url: '/services/web-development',
    images: [
      {
        url: '/og/web-development.jpg',
        width: 1200,
        height: 630,
        alt: 'Web Development for SMEs with Next.js and WordPress by ThirdBracket',
      },
    ],
  },
}

export default function Page() {
  return <WebDevelopmentPage />
}
