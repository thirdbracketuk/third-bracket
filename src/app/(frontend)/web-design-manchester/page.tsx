import { Metadata } from 'next'
import WebDesignManchesterPage from './client.page'

export const metadata: Metadata = {
  title: 'Performance-Driven Web Design for Manchester Businesses',
  description:
    'Ranked #1 web design agency in Manchester by DesignRush. Custom website design, SEO, and branding built for Manchester SMEs without the agency price tag.',
  openGraph: {
    title: 'Web Design Manchester - Affordable, SEO-Optimised Websites for Manchester Businesses',
    description:
      'Agency-level custom web design, SEO, and branding without the agency price tag. Built specifically for growing Manchester businesses.',
  },
}

export default function Page() {
  return <WebDesignManchesterPage />
}
