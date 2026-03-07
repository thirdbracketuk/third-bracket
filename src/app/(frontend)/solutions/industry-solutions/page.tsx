import PageHeader from '@/components/PageHeader'
import CategorySection from '../CategorySection'
import { industrySolutionsItems } from '@/data/navigationData'
import CTASection from '@/components/CTASection'
import { Bracket } from '@thirdbracket/bracketui'
import { Metadata } from 'next'
import {
  FaUtensils,
  FaBuilding,
  FaBlog,
  FaBullseye,
  FaUserCircle,
  FaGraduationCap,
  FaListAlt,
  FaCalendarCheck,
  FaIdCard,
} from 'react-icons/fa'
import { IconType } from 'react-icons'

export const metadata: Metadata = {
  title: 'Industry Specific Website Solutions for Growing Businesses',
  description:
    'Industry focused website solutions by Third Bracket for restaurants, real estate, bookings, LMS, directories and membership platforms in the UK.',
  openGraph: {
    title: 'Industry Website Solutions for Real Businesses',
    description:
      'Explore tailored web solutions for restaurants, property, portfolios, bookings, learning platforms and membership websites built for real needs.',
  },
}

function getSolutionIcon(title: string): IconType {
  const icons: Record<string, IconType> = {
    Restaurent: FaUtensils,
    'Real Estate': FaBuilding,
    Blog: FaBlog,
    'Landing Page': FaBullseye,
    Portfolio: FaUserCircle,
    LMS: FaGraduationCap,
    'Directory Listing': FaListAlt,
    'Booking & Reservation': FaCalendarCheck,
    Membership: FaIdCard,
  }
  return icons[title] || FaBuilding
}

function getSolutionDescription(title: string): string {
  const descriptions: Record<string, string> = {
    Restaurent: 'View restaurant solution',
    'Real Estate': 'View real estate solution',
    Blog: 'View blog solution',
    'Landing Page': 'View landing page solution',
    Portfolio: 'View portfolio solution',
    LMS: 'View LMS solution',
    'Directory Listing': 'View directory solution',
    'Booking & Reservation': 'View booking solution',
    Membership: 'View membership solution',
  }
  return descriptions[title] || 'View solution'
}

function getSolutionFeatures(title: string): string[] {
  const features: Record<string, string[]> = {
    Restaurent: ['Online menu', 'Table reservations', 'Order management', 'Google Maps embed', 'SEO for local search'],
    'Real Estate': ['Property listings', 'Advanced filters', 'Enquiry forms', 'Map integration', 'Agent profiles'],
    Blog: ['CMS-powered', 'SEO-optimised posts', 'Category & tagging', 'Newsletter signup', 'Comment system'],
    'Landing Page': ['Conversion-focused layout', 'A/B testing ready', 'Fast load time', 'Lead capture form', 'Analytics integration'],
    Portfolio: ['Case study pages', 'Gallery layouts', 'Testimonials', 'Contact integration', 'Minimal & clean design'],
    LMS: ['Course builder', 'Student enrolment', 'Progress tracking', 'Certificate generation', 'Payment integration'],
    'Directory Listing': ['User submissions', 'Advanced search & filter', 'Review system', 'Map view', 'Premium listings'],
    'Booking & Reservation': ['Real-time availability', 'Calendar integration', 'Automated reminders', 'Payment on booking', 'Staff management'],
    Membership: ['Gated content', 'Subscription plans', 'Member dashboard', 'Stripe billing', 'Role management'],
  }
  return features[title] || ['Custom development', 'Mobile responsive', 'SEO ready']
}

function getSolutionTechnologies(title: string) {
  const tech: Record<string, { title: string; cto: string }[]> = {
    Restaurent: [{ title: 'CMS', cto: 'WordPress' }, { title: 'Booking', cto: 'OpenTable API' }],
    'Real Estate': [{ title: 'Framework', cto: 'Next.js' }, { title: 'Maps', cto: 'Google Maps' }],
    Blog: [{ title: 'CMS', cto: 'PayloadCMS' }, { title: 'Rendering', cto: 'ISR' }],
    'Landing Page': [{ title: 'Framework', cto: 'Next.js' }, { title: 'Analytics', cto: 'GA4' }],
    Portfolio: [{ title: 'Framework', cto: 'Next.js' }, { title: 'Animation', cto: 'Framer Motion' }],
    LMS: [{ title: 'LMS', cto: 'LearnDash' }, { title: 'CMS', cto: 'WordPress' }, { title: 'Payment', cto: 'Stripe' }],
    'Directory Listing': [{ title: 'Framework', cto: 'Next.js' }, { title: 'DB', cto: 'Postgres' }, { title: 'Maps', cto: 'Mapbox' }],
    'Booking & Reservation': [{ title: 'Booking', cto: 'Cal.com / Custom' }, { title: 'Payment', cto: 'Stripe' }],
    Membership: [{ title: 'Auth', cto: 'NextAuth' }, { title: 'Billing', cto: 'Stripe' }, { title: 'DB', cto: 'Prisma' }],
  }
  return tech[title] || []
}

const industrySolutionsCategory = {
  title: 'Built Around Real Business Needs',
  description:
    'Each solution is designed to fit how your industry actually works, not just how it looks.',
  solutions: industrySolutionsItems.map((item) => ({
    title: item.label,
    description: getSolutionDescription(item.label),
    features: getSolutionFeatures(item.label),
    technologies: getSolutionTechnologies(item.label),
    icon: getSolutionIcon(item.label),
  })),
}

export default function IndustrySolutionsPage() {
  return (
    <section>
      <Bracket fluid centered padding="small">
        <div className="md:max-w-screen-xl mx-auto">
          <PageHeader
            title="Industry Solutions"
            description="Explore purpose-built website solutions for restaurants, real estate, bookings, learning platforms, directories and membership sites."
          />

          <CategorySection {...industrySolutionsCategory} />

          <CTASection
            cover={{
              src: '/wordpresscto.svg',
              alt: 'Industry Solutions Cover',
              width: 500,
              height: 500,
            }}
            title="Have a Specific Industry Need?"
            description="Tell us about your business and we'll propose a solution that fits your industry, budget, and timeline."
            primary={{
              label: 'Contact Us',
              href: '/contact',
            }}
            secondary={{
              label: 'Other Solutions',
              href: '/solutions',
            }}
          />
        </div>
      </Bracket>
    </section>
  )
}
