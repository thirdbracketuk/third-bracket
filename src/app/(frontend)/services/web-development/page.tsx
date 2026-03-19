import PageHeader from '@/components/PageHeader'
import Category from '../Catagory'
import { webDevelopmentItems } from '@/data/navigationData'
import { SiNextdotjs, SiWordpress } from 'react-icons/si'
import {
  FaCode,
  FaServer,
  FaTachometerAlt,
  FaDatabase,
  FaShoppingCart,
  FaChartLine,
  FaBug,
  FaExchangeAlt,
} from 'react-icons/fa'
import { RiLayout5Line } from 'react-icons/ri'
import CTASection from '@/components/CTASection'
import { Bracket } from '@thirdbracket/bracketui'
import TechStack from '../TechStack'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Website Design, Development & Ecommerce Services',
  description:
    "thirdbracket's website development services cover bespoke website design, WordPress, Next.js, ecommerce builds, website redesign services and performance optimisation.",
  openGraph: {
    title: 'Manchester Web Design & Ecommerce Services',
    description:
      "Discover thirdbracket's website development services, including bespoke website design, WordPress, Next.js, ecommerce builds, website redesigns, and optimisation for fast, reliable websites.",
  },
}

const webDevelopmentCategory = {
  title: 'Fast Website, Delivered Efficiently',
  description:
    'Modern web development solutions using cutting-edge technologies for scalable and maintainable applications.',
  illustration: {
    src: '/services/web.svg',
    alt: 'Website & Ecommerce by thirdbracket',
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
      'Build fast, SEO-optimised web apps with Next.js App Router and React Server Components for top-tier performance.',
    'WordPress Development':
      'Custom WordPress solutions with clean code, bespoke themes, and performance tuning to match your brand and workflow.',
    'E-commerce Development':
      'Launch and scale online stores with modern e-commerce platforms, secure payments, and mobile-first design.',
    'Bespoke Web Design':
      'Fully custom website design crafted from scratch to reflect your brand, engage your audience, and convert visitors.',
    'Bespoke Web Development':
      'Full-stack custom development engineered for your specific use case — portals, admin panels, or complex web platforms.',
    'Website Optimisation':
      'Boost Core Web Vitals, fix performance bottlenecks, and improve SEO signals for a faster, higher-ranking website.',
    'Website Redesign':
      'Modernise your existing Next.js or WordPress site with a clean code-first rebuild that improves UX and performance.',
    'Website Migration':
      'Migrate from legacy platforms to modern stacks with minimal disruption and full data integrity.',
    'Website Repair':
      'Diagnose and fix WordPress and Next.js bugs, broken builds, and deployment issues with clear documentation.',
  }
  return descriptions[title] || 'Professional web development service tailored to your needs.'
}

function getServiceFeatures(title: string): string[] {
  const features: Record<string, string[]> = {
    'Next.js Development': ['App Router', 'Server Components', 'Edge Runtime', 'ISR & SSG'],
    'WordPress Development': [
      'Custom Themes',
      'Plugin Development',
      'ACF Integration',
      'Performance Tuning',
    ],
    'E-commerce Development': [
      'Payment Integration',
      'Inventory Management',
      'WooCommerce',
      'Checkout Optimisation',
    ],
    'Bespoke Web Design': [
      'Custom UI',
      'Tailwind Components',
      'Figma Handoff',
      'Responsive Design',
    ],
    'Bespoke Web Development': ['Admin Panel', 'Web Portal', 'CMS Integration', 'REST API'],
    'Website Optimisation': [
      'Core Web Vitals',
      'Caching Strategy',
      'Asset Optimisation',
      'Lighthouse Scores',
    ],
    'Website Redesign': ['Clean Code', 'Code-First Approach', 'CI/CD Setup', 'Design System'],
    'Website Migration': [
      'Platform Migration',
      'Code Refactoring',
      'Tech Stack Upgrade',
      'Zero Downtime',
    ],
    'Website Repair': [
      'WordPress Errors',
      'Deployment Fixes',
      'Plugin Conflicts',
      'Full Documentation',
    ],
  }
  return features[title] || ['Custom Development', 'Best Practices', 'Quality Assurance']
}

function getServiceBadge(title: string): string {
  const badges: Record<string, string> = {
    'Next.js Development': 'Frontend',
    'WordPress Development': 'CMS',
    'E-commerce Development': 'E-commerce',
    'Bespoke Web Design': 'Design',
    'Bespoke Web Development': 'Full-Stack',
    'Website Optimisation': 'Performance',
    'Website Redesign': 'Redesign',
    'Website Migration': 'Migration',
    'Website Repair': 'Support',
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
    'Website Migration': FaExchangeAlt,
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
