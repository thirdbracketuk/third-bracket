import PageHeader from '@/components/PageHeader'
import Category from '../Catagory'
import { uiUxDesignItems } from '@/data/navigationData'
import {
  FaPaintBrush,
  FaDesktop,
  FaVectorSquare,
  FaCubes,
  FaSyncAlt,
  FaLightbulb,
  FaPalette,
  FaMobile,
  FaPrint,
  FaDrawPolygon,
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
      'Boost your brand with Third Bracket’s bespoke logo, graphic, print, social media, and website creative services. Tailored strategies for Manchester businesses.',
  },
}

const uiUxDesignCategory = {
  title: 'Brand Strategy that Converts',
  description:
    'We create intuitive and engaging brand creatives that balance aesthetic appeal with functional design principles.',
  illustration: {
    src: '/services/ui.svg',
    alt: 'UI/UX Design Illustration',
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
    'Brand Strategy': 'Create user-centered designs that enhance usability and drive engagement.',
    'Brand Identity': 'Design modern, responsive websites that reflect your brand identity.',
    'Graphic Design':
      'Modernize existing websites with contemporary design patterns and best practices.',
    'Print Design': 'Create engaging visual content for social media platforms and campaigns.',
    'Business Listing':
      'Develop comprehensive brand identities including logos, colors, and visual guidelines.',
    'Website Creative': 'Build scalable design systems with reusable components and patterns.',
    'Social Media': 'Create compelling visual designs for print and digital media.',
    'Brand Guidelines': 'Design custom Elementor templates for WordPress websites.',
    'Brand Audit':
      'Design materials for print including brochures, business cards, and marketing materials.',
  }
  return descriptions[title] || 'Professional design service tailored to your brand needs.'
}

function getServiceFeatures(title: string): string[] {
  const features: Record<string, string[]> = {
    'Brand Strategy': ['User Research', 'Interface Design', 'Usability Testing'],
    'Brand Identity': ['Responsive Design', 'Brand Integration', 'User Experience'],
    'Graphic Design': ['UI Modernization', 'UX Enhancement', 'Visual Refresh'],
    'Print Design': ['Platform Optimization', 'Brand Consistency', 'Engagement Focus'],
    'Business Listing': ['Logo Design', 'Brand Guidelines', 'Visual Identity'],
    'Website Creative': ['Component Library', 'Style Guide', 'Design Tokens'],
    'Social Media': ['Visual Communication', 'Brand Alignment', 'Creative Solutions'],
    'Brand Guidelines': ['WordPress Integration', 'Responsive Templates', 'Custom Layouts'],
    'Brand Audit': ['Print Optimization', 'High Resolution', 'Brand Consistency'],
  }
  return features[title] || ['Creative Design', 'Brand Focus', 'User-Centered']
}

function getServiceBadge(title: string): string {
  const badges: Record<string, string> = {
    'UI/UX Design': 'UX',
    'Website Design': 'Web Design',
    'Website Redesign': 'Redesign',
    'Social Media Design': 'Social',
    Branding: 'Brand',
    'Design System Development': 'System',
    'Graphic Design': 'Graphics',
    'Elementor Template Design': 'Template',
    'Printable Design': 'Print',
    'Wireframe & Prototype': 'Prototype',
  }
  return badges[title] || 'Design'
}

function getServiceIcon(title: string) {
  const icons: Record<string, any> = {
    'UI/UX Design': FaLightbulb,
    'Website Design': FaDesktop,
    'Website Redesign': FaSyncAlt,
    'Social Media Design': FaPalette,
    Branding: FaPaintBrush,
    'Design System Development': FaCubes,
    'Graphic Design': FaVectorSquare,
    'Elementor Template Design': FaMobile,
    'Printable Design': FaPrint,
    'Wireframe & Prototype': FaDrawPolygon,
  }
  return icons[title] || FaPaintBrush
}

export default function UIUXDesignPage() {
  return (
    <section>
      <Bracket fluid centered padding="small">
        <div className="md:max-w-screen-xl mx-auto">
          <PageHeader
            title="Branding & Creative Design Services"
            description="Third Bracket cprovides branding solutions, including brand strategy, graphic design, print materials, social media, and website creative."
          />

          <Category {...uiUxDesignCategory} index={0} />

          <CTASection
            cover={{
              src: '/designcto.svg',
              alt: 'Bracket UI Cover',
              width: 500,
              height: 500,
            }}
            title="Ready to Transform Your Design?"
            description="Let's create beautiful, user-centered designs that enhance your brand and drive engagement."
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
