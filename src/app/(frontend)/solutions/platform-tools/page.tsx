import PageHeader from '@/components/PageHeader'
import CategorySection from '../CategorySection'
import { platformToolItems } from '@/data/navigationData'
import CTASection from '@/components/CTASection'
import { Bracket } from '@thirdbracket/bracketui'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Platforms and Tools for Custom Web Development and Portals',
  description:
    'Free web platforms and open source tools by Third Bracket, including custom admin panels, CMS integrations, Next.js starters and VPS deployments.',
  openGraph: {
    title: 'Open Source Platforms and Web Tools for Custom Development',
    description:
      'Explore free web development tools, custom dashboards, headless CMS setups and deployment case studies to build faster and smarter platforms.',
  },
}

const platformToolsCategory = {
  title: 'Build for Business Owners Who are In a Budget',
  description:
    'Use Next.js starters, PayloadCMS setups and VPS workflows to launch scalable web solutions fast',
  solutions: platformToolItems.map((item) => ({
    title: item.label,
    description: getSolutionDescription(item.label),
    features: getSolutionFeatures(item.label),
    technologies: getSolutionTechnologies(item.label),
    image: getSolutionImage(item.label),
  })),
}

function getSolutionDescription(title: string): string {
  const descriptions: Record<string, string> = {
    'Rapid Fast WordPress':
      'Lightning-fast WordPress websites optimized for performance and user experience.',
    'Cloud Migration':
      'Migrate WordPress sites to cloud infrastructure for better performance and reliability.',
    'Headless WordPress':
      'Decouple WordPress backend from frontend for modern, flexible web applications.',
    'Performant WooCommerce':
      'High-performance e-commerce solutions built on optimized WooCommerce platforms.',
    ACM: 'Advanced Content Management solutions with custom fields and flexible content structures.',
    'Elementor Templates': 'Custom Elementor templates and page builder solutions for WordPress.',
    'Enterprise Wordpress':
      'Scalable WordPress solutions designed for enterprise-level requirements.',
    'Wordpress Multisite':
      'Multi-site WordPress networks for managing multiple websites from one dashboard.',
    'LMS Solution':
      'Learning Management Systems built on WordPress with course and student management.',
    'Listing Platform':
      'Directory and listing platforms with advanced search and filtering capabilities.',
    'Revamp Wordpress':
      'Modernize existing WordPress sites with performance optimization and design updates.',
  }
  return descriptions[title] || 'Custom WordPress solution tailored to your business needs.'
}

function getSolutionFeatures(title: string): string[] {
  const features: Record<string, string[]> = {
    'Rapid Fast WordPress': [
      'Performance optimization',
      'Caching setup',
      'CDN integration',
      'Image optimization',
      'Core Web Vitals',
    ],
    'Cloud Migration': [
      'Server migration',
      'DNS management',
      'SSL setup',
      'Performance tuning',
      'Backup solutions',
    ],
    'Headless WordPress': [
      'REST API setup',
      'Custom endpoints',
      'Frontend flexibility',
      'Performance benefits',
      'Modern architecture',
    ],
    'Performant WooCommerce': [
      'Speed optimization',
      'Payment integration',
      'Inventory management',
      'Order processing',
      'Mobile optimization',
    ],
    ACM: [
      'Custom post types',
      'Advanced custom fields',
      'Content relationships',
      'Flexible layouts',
      'Admin customization',
    ],
    'Elementor Templates': [
      'Custom widgets',
      'Responsive design',
      'Template library',
      'Dynamic content',
      'Performance optimization',
    ],
    'Enterprise Wordpress': [
      'Scalable architecture',
      'Security hardening',
      'Multi-environment setup',
      'Custom development',
      'Support & maintenance',
    ],
    'Wordpress Multisite': [
      'Network management',
      'Shared resources',
      'User management',
      'Plugin management',
      'Theme consistency',
    ],
    'LMS Solution': [
      'Course creation',
      'Student enrollment',
      'Progress tracking',
      'Certificates',
      'Payment integration',
    ],
    'Listing Platform': [
      'Advanced search',
      'User submissions',
      'Payment processing',
      'Review system',
      'Map integration',
    ],
    'Revamp Wordpress': [
      'Design modernization',
      'Performance upgrade',
      'Security updates',
      'Mobile optimization',
      'SEO improvements',
    ],
  }
  return (
    features[title] || [
      'Custom development',
      'Performance optimization',
      'Security hardening',
      'Mobile responsive',
      'SEO ready',
    ]
  )
}

function getSolutionTechnologies(title: string) {
  const baseTech = [
    { title: 'CMS', cto: 'WordPress' },
    { title: 'Server', cto: 'Ubuntu VPS' },
    { title: 'Web Server', cto: 'Nginx' },
    { title: 'Database', cto: 'MySQL' },
  ]

  const specificTech: Record<string, any[]> = {
    'Rapid Fast WordPress': [
      ...baseTech,
      { title: 'Cache', cto: 'Redis' },
      { title: 'CDN', cto: 'Cloudflare' },
    ],
    'Cloud Migration': [
      ...baseTech,
      { title: 'Cloud', cto: 'AWS/DigitalOcean' },
      { title: 'Backup', cto: 'UpdraftPlus' },
    ],
    'Headless WordPress': [
      ...baseTech,
      { title: 'Frontend', cto: 'Next.js' },
      { title: 'API', cto: 'REST/GraphQL' },
    ],
    'Performant WooCommerce': [
      ...baseTech,
      { title: 'E-commerce', cto: 'WooCommerce' },
      { title: 'Payments', cto: 'Stripe' },
    ],
    ACM: [...baseTech, { title: 'Fields', cto: 'ACF Pro' }, { title: 'Builder', cto: 'Gutenberg' }],
    'Elementor Templates': [
      ...baseTech,
      { title: 'Builder', cto: 'Elementor Pro' },
      { title: 'Templates', cto: 'Custom' },
    ],
    'Enterprise Wordpress': [
      ...baseTech,
      { title: 'Security', cto: 'Wordfence' },
      { title: 'Monitoring', cto: 'New Relic' },
    ],
    'Wordpress Multisite': [
      ...baseTech,
      { title: 'Network', cto: 'Multisite' },
      { title: 'Management', cto: 'MainWP' },
    ],
    'LMS Solution': [
      ...baseTech,
      { title: 'LMS', cto: 'LearnDash' },
      { title: 'Video', cto: 'Vimeo' },
    ],
    'Listing Platform': [
      ...baseTech,
      { title: 'Listings', cto: 'Custom Post Types' },
      { title: 'Maps', cto: 'Google Maps' },
    ],
    'Revamp Wordpress': [
      ...baseTech,
      { title: 'Optimization', cto: 'WP Rocket' },
      { title: 'Security', cto: 'Sucuri' },
    ],
  }

  return specificTech[title] || baseTech
}

function getSolutionImage(title: string): string {
  const images: Record<string, string> = {
    'Rapid Fast WordPress': '/solutions/dam.svg',
    'Cloud Migration': '/solutions/dam.svg',
    'Headless WordPress': '/solutions/dam.svg',
    'Performant WooCommerce': '/solutions/dam.svg',
    ACM: '/solutions/dam.svg',
    'Elementor Templates': '/solutions/dam.svg',
    'Enterprise Wordpress': '/solutions/dam.svg',
    'Wordpress Multisite': '/solutions/dam.svg',
    'LMS Solution': '/solutions/dam.svg',
    'Listing Platform': '/solutions/dam.svg',
    'Revamp Wordpress': '/solutions/dam.svg',
  }
  return images[title] || '/solutions/dam.svg'
}

export default function WordPressSolutionsPage() {
  return (
    <section>
      <Bracket fluid centered padding="small">
        <div className="md:max-w-screen-xl mx-auto">
          <PageHeader
            title="Platforms and Tools"
            description="Discover open source platforms and development tools built for custom web portals, admin panels, CMS integrations and high performance deployments."
          />

          <CategorySection {...platformToolsCategory} />

          <CTASection
            cover={{
              src: '/wordpresscto.svg',
              alt: 'Bracket UI Cover',
              width: 500,
              height: 500,
            }}
            title="Ready to Optimize Your WordPress?"
            description="Let's build a high-performance WordPress solution that delivers exceptional user experience."
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
