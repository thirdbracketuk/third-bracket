// page.tsx

import PageHeader from '@/components/PageHeader'
import { Metadata } from 'next'
import { solutionCategories } from './Solutions'
import CategorySection from './CategorySection'
// Structured data now in layout.tsx

import CTASection from '@/components/CTASection'
import Steps from './Steps'
import { Bracket } from '@thirdbracket/bracketui'

export const metadata: Metadata = {
  title: 'Web Solutions Tailored for Your Business',
  description:
    'Explore custom web solutions that solve real business problems — from high-performance websites to scalable design systems.',
  openGraph: {
    title: 'Custom Web Solutions for Modern Businesses',
    description:
      'Third Bracket provides tailored website solutions using modern technologies like WordPress, Elementor, and Next.js.',
  },
}

export default function Solutions() {
  return (
    <section>
      {/* Structured data now in layout.tsx */}
      <Bracket fluid centered padding="small">
        <div className="md:max-w-screen-xl mx-auto">
          <PageHeader
            title="Solutions"
            description="Comprehensive digital solutions for modern businesses"
          />

          {solutionCategories.map((category, index) => (
            <CategorySection key={index} {...category} />
          ))}
          <Steps />

          <CTASection
            title="Ready to Transform Your Digital Presence?"
            description="Let us discuss how our solutions can help you achieve your goals"
            primary={{
              label: 'Contact Us',
              href: '/contact',
            }}
            secondary={{
              label: 'View Services',
              href: '/services',
            }}
          />
        </div>
      </Bracket>
    </section>
  )
}
