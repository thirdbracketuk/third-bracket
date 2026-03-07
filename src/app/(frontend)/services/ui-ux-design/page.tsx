import PageHeader from '@/components/PageHeader'
import Category from '../Catagory'
import { uiUxDesignItems } from '@/data/navigationData'
import {
  FaCompass,
  FaFingerprint,
  FaImages,
  FaPrint,
  FaMapMarkerAlt,
  FaPaintBrush,
  FaShare,
  FaBook,
  FaClipboardCheck,
} from 'react-icons/fa'
import CTASection from '@/components/CTASection'
import { Bracket } from '@thirdbracket/bracketui'
import TechStack from '../TechStack'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Branding & Creative Design Services Manchester',
  description:
    'Third Bracket delivers bespoke brand strategy, logo and graphic design, print, social media, and website creative for Manchester businesses seeking standout identity.',
  openGraph: {
    title: 'Branding & Creative Design Services for Manchester Businesses',
    description:
      "Boost your brand with Third Bracket's bespoke logo, graphic, print, social media, and website creative services. Tailored strategies for Manchester businesses.",
  },
}

const uiUxDesignCategory = {
  title: 'Brand & Creative That Sets You Apart',
  description:
    'We create distinctive brand identities and compelling visuals that communicate your value and make a lasting impression across every touchpoint.',
  illustration: {
    src: '/services/ui.svg',
    alt: 'Branding & Creative Illustration',
  },
  stackIcons: TechStack(['SiTailwindcss', 'SiFigma', 'SiAdobeillustrator', 'SiFramer']),
  services: uiUxDesignItems.map((item) => ({
    title: item.label,
    description: getServiceDescription(item.label),
    features: getServiceFeatures(item.label),
    badge: getServiceBadge(item.label),
    icon: getServiceIcon(item.label),
  })),
}

function getServiceDescription(title: string): string {
  const descriptions: Record<string, string> = {
    'Brand Strategy':
      'Define your brand positioning, audience, and messaging with a strategic framework that aligns your identity with your business goals.',
    'Brand Identity':
      'Create a cohesive visual identity — logo, colour palette, typography — that reflects who you are and resonates with your customers.',
    'Graphic Design':
      'Striking graphic design for digital and print that communicates clearly, looks professional, and reinforces your brand at every glance.',
    'Print Design':
      'Business cards, brochures, flyers, and printed materials designed to make an impact in the physical world.',
    'Business Listing':
      'Consistent, optimised profiles across Google, Bing, and industry directories to build trust and local visibility.',
    'Website Creative':
      'Bespoke website design and creative direction that brings your brand to life online with engaging layouts and visuals.',
    'Social Media':
      'On-brand social media graphics, templates, and content visuals that maintain consistency across all platforms.',
    'Brand Guidelines':
      'A comprehensive brand guidelines document that ensures your visual identity stays consistent no matter who uses it.',
    'Brand Audit':
      'Review your existing brand assets to identify inconsistencies, gaps, and opportunities to strengthen your visual presence.',
  }
  return descriptions[title] || 'Professional creative design tailored to your brand needs.'
}

function getServiceFeatures(title: string): string[] {
  const features: Record<string, string[]> = {
    'Brand Strategy': ['Positioning Framework', 'Audience Research', 'Competitor Analysis', 'Brand Voice'],
    'Brand Identity': ['Logo Design', 'Colour Palette', 'Typography System', 'Icon Set'],
    'Graphic Design': ['Digital Assets', 'Campaign Visuals', 'Infographics', 'Illustrations'],
    'Print Design': ['Business Cards', 'Brochures', 'Flyers', 'Signage'],
    'Business Listing': ['Google Business', 'Bing Places', 'Directory Profiles', 'NAP Consistency'],
    'Website Creative': ['UI Design', 'Wireframes', 'Visual Direction', 'Component Design'],
    'Social Media': ['Post Templates', 'Story Designs', 'Banner Graphics', 'Profile Assets'],
    'Brand Guidelines': ['Usage Rules', 'Colour Specs', 'Typography Guide', 'Logo Variations'],
    'Brand Audit': ['Asset Review', 'Consistency Check', 'Gap Analysis', 'Recommendations'],
  }
  return features[title] || ['Creative Design', 'Brand Consistency', 'Visual Communication']
}

function getServiceBadge(title: string): string {
  const badges: Record<string, string> = {
    'Brand Strategy': 'Strategy',
    'Brand Identity': 'Identity',
    'Graphic Design': 'Design',
    'Print Design': 'Print',
    'Business Listing': 'Listings',
    'Website Creative': 'Web',
    'Social Media': 'Social',
    'Brand Guidelines': 'Guidelines',
    'Brand Audit': 'Audit',
  }
  return badges[title] || 'Creative'
}

function getServiceIcon(title: string) {
  const icons: Record<string, any> = {
    'Brand Strategy': FaCompass,
    'Brand Identity': FaFingerprint,
    'Graphic Design': FaImages,
    'Print Design': FaPrint,
    'Business Listing': FaMapMarkerAlt,
    'Website Creative': FaPaintBrush,
    'Social Media': FaShare,
    'Brand Guidelines': FaBook,
    'Brand Audit': FaClipboardCheck,
  }
  return icons[title] || FaPaintBrush
}

export default function BrandingCreativePage() {
  return (
    <section>
      <Bracket fluid centered padding="small">
        <div className="md:max-w-screen-xl mx-auto">
          <PageHeader
            title="Branding & Creative Design"
            description="Distinctive brand identities and creative design for Manchester businesses ready to stand out."
          />

          <Category {...uiUxDesignCategory} index={0} />

          <CTASection
            cover={{
              src: '/uiuxcto.svg',
              alt: 'Branding & Creative Cover',
              width: 500,
              height: 500,
            }}
            title="Ready to Build a Brand That Stands Out?"
            description="Let's craft a distinctive identity and creative direction that makes your business unforgettable."
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
