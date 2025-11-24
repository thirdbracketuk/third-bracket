import PageHeader from '@/components/PageHeader'
import Category from '../Catagory'
import { webDevelopmentItems } from '@/data/navigationData'
import { SiNextdotjs, SiWordpress } from 'react-icons/si'
import {
  FaCode,
  FaExchangeAlt,
  FaServer,
  FaTachometerAlt,
  FaDatabase,
  FaShoppingCart,
  FaCog,
  FaChartLine,
  FaBlog,
  FaBug,
} from 'react-icons/fa'
import CTASection from '@/components/CTASection'
import { Bracket } from '@thirdbracket/bracketui'
import TechStack from '../TechStack'
import { Metadata } from 'next'
import { RiLayout5Line } from 'react-icons/ri'

export const metadata: Metadata = {
  title: 'Website Design, Development & Ecommerce Services',
  description:
    'Third Bracket’s website development services cover bespoke website design, WordPress, Next.js, ecommerce builds, website redesign services and performance optimisation.',
  openGraph: {
    title: 'Manchester Web Design & Ecommerce Services',
    description:
      'Discover Third Bracket’s website development services, including bespoke website design, WordPress, Next.js, ecommerce builds, website redesigns, and optimisation for fast, reliable websites.',
  },
}

const webDevelopmentCategory = {
  title: 'Fast Website, Delivered Efficiently',
  description:
    'Modern web development solutions using cutting-edge technologies for scalable and maintainable applications.',

  illustration: {
    src: '/services/web.svg',
    alt: 'Website & Ecommerce by Third Bracket',
  },
  stackIcons: TechStack(['SiNextdotjs', 'SiReact', 'SiTypescript', 'SiNodedotjs', 'SiVercel']),
  services: webDevelopmentItems.map((item) => ({
    title: item.label,
    description: getServiceDescription(item.label),
    features: getServiceFeatures(item.label),
    badge: getServiceBadge(item.label),
    icon: getServiceIcon(item.label),
  })),
}

function getServiceDescription(title: string): string {
  const descriptions: Record<string, string> = {
    'Next.js Development':
      'Build modern web applications with React and server components for optimal performance.',
    'WordPress Development':
      'Custom WordPress solutions with modern development practices and optimizations.',
    'Ecommerce Development':
      'Build powerful online stores with modern e-commerce platforms and payment integrations.',
    'Bespoke Web Design': 'Create fully custom website design tailored to your brand and audience.',
    'Bespoke Web Development':
      'Our custom full stack web development services are engineered for cost optimization and conversion.',
    'Website Optimisation': 'Optimize web applications for speed, SEO, and user experience.',
    'Website Redesign':
      'Redesign your Next.js or WordPress websites right from your codebase efficiently.',
    'Website Migration':
      'Upgrade legacy systems to modern technology stacks with minimal disruption.',
    'Website Repair':
      'Fix WordPress & Next.js errors and bugs from the core with proper documentation.',
  }
  return descriptions[title] || 'Professional web development service tailored to your needs.'
}

function getServiceFeatures(title: string): string[] {
  const features: Record<string, string[]> = {
    'Next.js Development': ['App Router', 'Server Components', 'Edge Runtime'],
    'WordPress Development': ['Custom Themes', 'Plugin Development', 'Performance Tuning'],
    'E-commerce Development': ['Payment Integration', 'Inventory Management', 'Order Processing'],
    'Bespoke Web Design': ['Custom UI', 'TailwindCSS Component', 'Custom Elementor Design'],
    'Bespoke Web Development': ['Admin Panel', 'Web Portal', 'CMS Integration'],

    'Website Optimisation': ['Core Web Vitals', 'Caching Strategy', 'Asset Optimization'],
    'Website Redesign': ['Clean Code', 'Code First', 'CI/CD'],
    'Website Migration': ['Code Refactoring', 'Platform Migration', 'Tech Stack Updates'],
    'Website Repair': ['WordPress Error', 'Elementor Error', 'Deployment Error'],
  }
  return features[title] || ['Custom Development', 'Best Practices', 'Quality Assurance']
}

function getServiceBadge(title: string): string {
  const badges: Record<string, string> = {
    'Next.js Development': 'Frontend',
    'WordPress Development': 'CMS',
    'E-commerce Development': 'E-commerce',
    'Bespoke Web Design': 'Backend',
    'Bespoke Web Development': 'Integration',
    'Website Optimisation': 'Analytics',
    'Website Redesign': 'Infrastructure',
    'Website Migration': 'Performance',
    'Website Repair': 'Migration',
  }
  return badges[title] || 'Development'
}

function getServiceIcon(title: string) {
  const icons: Record<string, any> = {
    'Next.js Development': SiNextdotjs,
    'WordPress Development': SiWordpress,
    'E-commerce Development': FaShoppingCart,
    'Bespoke Web Design': RiLayout5Line,
    'Bespoke Web Development': FaCode,
    'Website Optimisation': FaChartLine,
    'Website Redesign': FaServer,
    'Website Migration': FaTachometerAlt,
    'Website Repair': FaBug,
  }
  return icons[title] || FaCode
}

export default function WebDevelopmentPage() {
  return (
    <section>
      <Bracket fluid centered padding="small">
        <div className="md:max-w-screen-xl mx-auto">
          <PageHeader
            title="Website & Ecommerce Development"
            description="Rapid website and ecommerce development for UK businesses. We offer WordPress, Next.js, website redesign services, optimisation, and full bespoke web solutions"
          />

          <Category {...webDevelopmentCategory} index={0} />

          <CTASection
            cover={{
              src: '/webdevcto.svg',
              alt: 'Bracket UI Cover',
              width: 500,
              height: 500,
            }}
            title="Ready to Build Your Web Application?"
            description="Let's create a modern, high-performance web solution tailored to your business needs."
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
