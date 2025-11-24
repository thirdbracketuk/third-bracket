import PageHeader from '@/components/PageHeader'
import Category from '../Catagory'
import { digitalMarketingItems } from '@/data/navigationData'
import {
  FaSearch,
  FaRocket,
  FaFileCode,
  FaPencilAlt,
  FaHashtag,
  FaGoogle,
  FaBullhorn,
  FaEnvelope,
  FaComments,
  FaDollarSign,
  FaChartLine,
  FaClipboardList,
} from 'react-icons/fa'
import CTASection from '@/components/CTASection'
import { Bracket } from '@thirdbracket/bracketui'
import TechStack from '../TechStack'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO and Digital Marketing Services Manchester',
  description:
    'Third Bracket offers SEO and digital marketing services in Manchester, including local SEO, content marketing, email campaigns, social media, and PPC for business growth.',
  openGraph: {
    title: 'SEO & Digital Marketing Services for Manchester Businesses',
    description:
      'Boost your business online with Third Bracket’s SEO, local SEO, content marketing, email campaigns, social media, and PPC services tailored for Manchester.',
  },
}

const digitalMarketingCategory = {
  title: 'Search Engine Optimization',
  description:
    'We implement data-driven digital marketing strategies to improve visibility, engagement, and conversion rates.',
  illustration: {
    src: '/services/digital.svg',
    alt: 'Digital Marketing Illustration',
  },
  stackIcons: TechStack(['SiGoogleanalytics', 'SiGooglesearchconsole', 'SiWordpress']),
  services: digitalMarketingItems.map((item) => ({
    title: item.label,
    description: getServiceDescription(item.label),
    features: getServiceFeatures(item.label),
    badge: getServiceBadge(item.label),
    icon: getServiceIcon(item.label),
  })),
}

function getServiceDescription(title: string): string {
  const descriptions: Record<string, string> = {
    'Full SEO':
      'Optimize website technical aspects for better search engine visibility and rankings.',
    'Local SEO':
      'Drive targeted traffic through paid search campaigns and strategic keyword targeting.',
    'Technical SEO':
      'Create and distribute valuable content to attract and engage your target audience.',
    'Content Marketing':
      'Build strategic partnerships to expand reach and drive sales through affiliate networks.',
    Copywriting:
      'Develop targeted email campaigns to nurture leads and maintain customer relationships.',
    'Link Building':
      'Manage and grow your social media presence with strategic content and engagement.',
    'Email Marketing':
      'Implement chatbots and messaging strategies to engage customers in real-time.',
    'Paid Advertising':
      'Create and manage pay-per-click campaigns across multiple advertising platforms.',
    'Social Media Marketing':
      'Analyze marketing performance and provide actionable insights for optimization.',
  }
  return (
    descriptions[title] || 'Professional digital marketing service to grow your online presence.'
  )
}

function getServiceFeatures(title: string): string[] {
  const features: Record<string, string[]> = {
    'Full SEO': ['Technical SEO', 'On-Page Optimization', 'Link Building'],
    'Local SEO': ['Keyword Research', 'Ad Campaign Management', 'Conversion Tracking'],
    'Technical SEO': ['Content Strategy', 'Blog Writing', 'Content Distribution'],
    'Content Marketing': ['Partner Recruitment', 'Commission Management', 'Performance Tracking'],
    Copywriting: ['Campaign Design', 'List Management', 'Automation Setup'],
    'Link Building': ['Content Calendar', 'Platform Strategy', 'Community Management'],
    'Email Marketing': ['Chatbot Setup', 'Live Chat Integration', 'Customer Support'],
    'Paid Advertising': ['Campaign Setup', 'Bid Management', 'Performance Optimization'],
    'Social Media Marketing': ['Performance Analysis', 'Competitive Research', 'ROI Tracking'],
  }
  return features[title] || ['Strategy Development', 'Performance Tracking', 'ROI Optimization']
}

function getServiceBadge(title: string): string {
  const badges: Record<string, string> = {
    'Search Engine Optimisation': 'SEO',
    'Search Engine Marketing': 'SEM',
    'Content Marketing': 'Content',
    ' Affiliate Marketing': 'Affiliate',
    'Email Marketing': 'Email',
    'Social Media Marketing': 'Social',
    'Conversational Marketing': 'Chat',
    'PPC & Advertising': 'PPC',
    ' Social Media Marketing': 'Analytics',
  }
  return badges[title] || 'Marketing'
}

function getServiceIcon(title: string) {
  const icons: Record<string, any> = {
    'Search Engine Optimisation': FaSearch,
    'Search Engine Marketing': FaBullhorn,
    'Content Marketing': FaPencilAlt,
    ' Affiliate Marketing': FaDollarSign,
    'Email Marketing': FaEnvelope,
    'Social Media Marketing': FaHashtag,
    'Conversational Marketing': FaComments,
    'PPC & Advertising': FaRocket,
    'Marketing Analytics & Audit': FaChartLine,
    'Marketing Strategy & Planning': FaClipboardList,
  }
  return icons[title] || FaGoogle
}

export default function DigitalMarketingPage() {
  return (
    <section>
      <Bracket fluid centered padding="small">
        <div className="md:max-w-screen-xl mx-auto">
          <PageHeader
            title="SEO & Digital Marketing Services"
            description="We create strategies that boost visibility, drive leads, and maximise ROI."
          />

          <Category {...digitalMarketingCategory} index={0} />

          <CTASection
            cover={{
              src: '/digitalmarketingcto.svg',
              alt: 'Bracket UI Cover',
              width: 500,
              height: 500,
            }}
            title="Ready to Grow Your Online Presence?"
            description="Let's implement data-driven marketing strategies that drive real results for your business."
            primary={{
              label: 'Contact Us',
              href: '/contact',
            }}
            secondary={{
              label: 'Other Services',
              href: '/services',
            }}
          />
        </div>
      </Bracket>
    </section>
  )
}
