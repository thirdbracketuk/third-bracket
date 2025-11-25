// src/app/(frontend)/about/page.tsx
import { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import Company from './Company'
import Team from './Team'
// Structured data now in layout.tsx
import Roadmap from './Roadmap'
import OpenSource from './OpenSource'
import WorkCulture from './WorkCulture'
import CTASection from '@/components/CTASection'
import { Bracket } from '@thirdbracket/bracketui'
import { Settings } from '@/utilities/meta'

export const metadata: Metadata = {
  title: 'About Third Bracket Digital Agency in Manchester',
  description:
    'Learn about Third Bracket, our team, values, open source work and journey, with a clear look at how we build, collaborate and grow with clients.',
  openGraph: {
    title: 'Learn About Third Bracket Web Development Company',
    description:
      'Discover the story behind Third Bracket, our work culture, values, collaborations and open source mindset shaping how we build and grow digital projects.',
  },
}

export default function AboutPage() {
  return (
    <section>
      <Bracket fluid centered padding="small">
        <div className="md:max-w-screen-xl mx-auto">
          {/* Structured data now in layout.tsx */}
          <PageHeader
            title="About Third Bracket"
            description="Get to know the people, values and thinking behind Third Bracket."
          />
          <Company />
          <Team />
          <Roadmap />
          <OpenSource />
          <WorkCulture />
          <CTASection
            cover={{
              src: '/aboutcto.svg',
              alt: 'Bracket UI Cover',
              width: 500,
              height: 500,
            }}
            title="Ready to Work With Us?"
            description="Let's discuss how we can help bring your digital vision to life"
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
