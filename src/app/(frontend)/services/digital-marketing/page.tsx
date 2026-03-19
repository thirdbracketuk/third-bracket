import PageHeader from '@/components/PageHeader'
import Category from '../Catagory'
import { digitalMarketingItems } from '@/data/navigationData'
import {
  FaSearch,
  FaMapMarkerAlt,
  FaCode,
  FaPencilAlt,
  FaLink,
  FaEnvelope,
  FaBullhorn,
  FaHashtag,
  FaChartLine,
} from 'react-icons/fa'
import CTASection from '@/components/CTASection'
import { Bracket } from '@thirdbracket/bracketui'
import TechStack from '../TechStack'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO and Digital Marketing Services Manchester',
  description:
    'thirdbracket offers SEO and digital marketing services in Manchester, including local SEO, content marketing, email campaigns, social media, and PPC for business growth.',
  openGraph: {
    title: 'SEO & Digital Marketing Services for Manchester Businesses',
    description:
      "Boost your business online with thirdbracket's SEO, local SEO, content marketing, email campaigns, social media, and PPC services tailored for Manchester.",
  },
}

const digitalMarketingCategory = {
  title: 'SEO & Growth Strategies That Deliver',
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
      'End-to-end SEO covering technical health, on-page optimisation, and authority building to rank higher and attract organic traffic.',
    'Local SEO':
      'Dominate local search results with Google Business optimisation, citations, and geo-targeted keyword strategies for your area.',
    'Technical SEO':
      'Audit and fix crawlability, Core Web Vitals, site structure, and indexation issues that hold your rankings back.',
    'Content Marketing':
      'Plan and publish high-value content that builds authority, earns backlinks, and converts readers into customers.',
    Copywriting:
      'Persuasive, SEO-friendly copy for landing pages, blogs, and ads that communicates your value and drives action.',
    'Link Building':
      'Earn high-quality backlinks through outreach, digital PR, and white-hat techniques that build long-term domain authority.',
    'Email Marketing':
      'Design automated email sequences and newsletters that nurture leads, retain customers, and drive repeat revenue.',
    'Paid Advertising':
      'Manage Google Ads and paid social campaigns with precise targeting and ongoing optimisation for maximum ROI.',
    'Social Media Marketing':
      'Grow your brand on the right platforms with consistent content, community management, and performance tracking.',
  }
  return (
    descriptions[title] || 'Professional digital marketing service to grow your online presence.'
  )
}

function getServiceFeatures(title: string): string[] {
  const features: Record<string, string[]> = {
    'Full SEO': ['On-Page SEO', 'Off-Page SEO', 'Technical Audit', 'Rank Tracking'],
    'Local SEO': ['Google Business Profile', 'Local Citations', 'Review Management', 'Map Pack'],
    'Technical SEO': ['Core Web Vitals', 'Crawl Optimisation', 'Schema Markup', 'Site Speed'],
    'Content Marketing': ['Content Strategy', 'Blog Writing', 'Topic Clusters', 'Content Audit'],
    Copywriting: ['Landing Pages', 'Ad Copy', 'Product Descriptions', 'Brand Voice'],
    'Link Building': ['Guest Posting', 'Digital PR', 'Broken Link Building', 'Outreach'],
    'Email Marketing': ['Drip Campaigns', 'List Segmentation', 'A/B Testing', 'Automation'],
    'Paid Advertising': ['Google Ads', 'Meta Ads', 'Bid Strategy', 'Conversion Tracking'],
    'Social Media Marketing': ['Content Calendar', 'Platform Strategy', 'Analytics', 'Engagement'],
  }
  return features[title] || ['Strategy Development', 'Performance Tracking', 'ROI Optimisation']
}

function getServiceBadge(title: string): string {
  const badges: Record<string, string> = {
    'Full SEO': 'SEO',
    'Local SEO': 'Local',
    'Technical SEO': 'Technical',
    'Content Marketing': 'Content',
    Copywriting: 'Copy',
    'Link Building': 'Authority',
    'Email Marketing': 'Email',
    'Paid Advertising': 'PPC',
    'Social Media Marketing': 'Social',
  }
  return badges[title] || 'Marketing'
}

function getServiceIcon(title: string) {
  const icons: Record<string, any> = {
    'Full SEO': FaSearch,
    'Local SEO': FaMapMarkerAlt,
    'Technical SEO': FaCode,
    'Content Marketing': FaPencilAlt,
    Copywriting: FaPencilAlt,
    'Link Building': FaLink,
    'Email Marketing': FaEnvelope,
    'Paid Advertising': FaBullhorn,
    'Social Media Marketing': FaHashtag,
  }
  return icons[title] || FaChartLine
}

export default function DigitalMarketingPage() {
  return (
    <section>
      <Bracket fluid centered padding="small">
        <div className="md:max-w-screen-xl mx-auto">
          <PageHeader
            title="SEO & Digital Marketing Services"
            description="We create strategies that boost visibility, drive leads, and maximise ROI for UK businesses."
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
