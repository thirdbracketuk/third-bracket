import PageHeader from '@/components/PageHeader'
import CategorySection from '../CategorySection'
import { nextjsSolutionsItems } from '@/data/navigationData'
import CTASection from '@/components/CTASection'
import { Bracket } from '@thirdbracket/bracketui'

const nextjsSolutionsCategory = {
  title: 'Next.js Solutions',
  description:
    'Modern, scalable Next.js applications built for performance and developer experience.',
  solutions: nextjsSolutionsItems.map((item) => ({
    title: item.label,
    description: getSolutionDescription(item.label),
    features: getSolutionFeatures(item.label),
    technologies: getSolutionTechnologies(item.label),
    image: getSolutionImage(item.label),
  })),
}

function getSolutionDescription(title: string): string {
  const descriptions: Record<string, string> = {
    'Multi-Tenant SaaS':
      'Build scalable SaaS applications with multi-tenant architecture and user management.',
    'Headless CMS': 'Create flexible content management systems with modern headless architecture.',
    'Headless E-Commerce':
      'Develop high-performance e-commerce solutions with headless commerce platforms.',
    'Admin Panel/Dashboard':
      'Build comprehensive admin dashboards with real-time data and analytics.',
    'LMS Solution':
      'Create learning management systems with course management and student tracking.',
    'Blog/Publishing System':
      'Develop modern blog platforms with content management and SEO optimization.',
    Migration:
      'Migrate existing applications to Next.js with improved performance and maintainability.',
    'Notion Development':
      'Build applications powered by Notion as a headless CMS for content management.',
    'Digital Asset Management':
      'Create systems for organizing, storing, and distributing digital assets.',
    'Project Management Tool':
      'Develop custom project management solutions with team collaboration features.',
  }
  return descriptions[title] || 'Custom Next.js solution tailored to your business needs.'
}

function getSolutionFeatures(title: string): string[] {
  const features: Record<string, string[]> = {
    'Multi-Tenant SaaS': [
      'Multi-tenant architecture',
      'User management',
      'Subscription billing',
      'Custom domains',
      'Analytics dashboard',
    ],
    'Headless CMS': [
      'Content modeling',
      'API-first approach',
      'Multi-channel publishing',
      'Developer-friendly',
      'Scalable architecture',
    ],
    'Headless E-Commerce': [
      'Product management',
      'Cart functionality',
      'Payment integration',
      'Order management',
      'Inventory tracking',
    ],
    'Admin Panel/Dashboard': [
      'Real-time analytics',
      'User management',
      'Data visualization',
      'Role-based access',
      'Custom reporting',
    ],
    'LMS Solution': [
      'Course management',
      'Student progress tracking',
      'Video streaming',
      'Assessments',
      'Certificates',
    ],
    'Blog/Publishing System': [
      'Content editor',
      'SEO optimization',
      'Social sharing',
      'Comment system',
      'Newsletter integration',
    ],
    Migration: [
      'Code modernization',
      'Performance optimization',
      'SEO preservation',
      'Data migration',
      'Testing & validation',
    ],
    'Notion Development': [
      'Notion API integration',
      'Real-time sync',
      'Custom layouts',
      'Rich content support',
      'Fast performance',
    ],
    'Digital Asset Management': [
      'File organization',
      'Metadata management',
      'Search functionality',
      'Access controls',
      'CDN integration',
    ],
    'Project Management Tool': [
      'Task management',
      'Team collaboration',
      'Time tracking',
      'Reporting',
      'Integration capabilities',
    ],
  }
  return (
    features[title] || [
      'Custom development',
      'Modern architecture',
      'Scalable solution',
      'Performance optimized',
      'SEO ready',
    ]
  )
}

function getSolutionTechnologies(title: string) {
  const baseTech = [
    { title: 'Framework', cto: 'Next.js' },
    { title: 'Language', cto: 'TypeScript' },
    { title: 'Styling', cto: 'TailwindCSS' },
    { title: 'Hosting', cto: 'Vercel' },
  ]

  const specificTech: Record<string, any[]> = {
    'Multi-Tenant SaaS': [
      ...baseTech,
      { title: 'Database', cto: 'PostgreSQL' },
      { title: 'Auth', cto: 'NextAuth.js' },
    ],
    'Headless CMS': [
      ...baseTech,
      { title: 'CMS', cto: 'Payload CMS' },
      { title: 'Database', cto: 'MongoDB' },
    ],
    'Headless E-Commerce': [
      ...baseTech,
      { title: 'Commerce', cto: 'Shopify' },
      { title: 'Payments', cto: 'Stripe' },
    ],
    'Admin Panel/Dashboard': [
      ...baseTech,
      { title: 'Charts', cto: 'Chart.js' },
      { title: 'Database', cto: 'PostgreSQL' },
    ],
    'LMS Solution': [
      ...baseTech,
      { title: 'Video', cto: 'Cloudflare Stream' },
      { title: 'Database', cto: 'PostgreSQL' },
    ],
    'Blog/Publishing System': [
      ...baseTech,
      { title: 'CMS', cto: 'Payload CMS' },
      { title: 'Search', cto: 'Algolia' },
    ],
    Migration: [
      ...baseTech,
      { title: 'Testing', cto: 'Jest' },
      { title: 'CI/CD', cto: 'GitHub Actions' },
    ],
    'Notion Development': [
      ...baseTech,
      { title: 'API', cto: 'Notion API' },
      { title: 'Cache', cto: 'Redis' },
    ],
    'Digital Asset Management': [
      ...baseTech,
      { title: 'Storage', cto: 'AWS S3' },
      { title: 'CDN', cto: 'Cloudflare' },
    ],
    'Project Management Tool': [
      ...baseTech,
      { title: 'Real-time', cto: 'Socket.io' },
      { title: 'Database', cto: 'PostgreSQL' },
    ],
  }

  return specificTech[title] || baseTech
}

function getSolutionImage(title: string): string {
  const images: Record<string, string> = {
    'Multi-Tenant SaaS': '/solutions/saas.svg',
    'Headless CMS': '/solutions/cms.svg',
    'Headless E-Commerce': '/solutions/ecommerce.svg',
    'Admin Panel/Dashboard': '/solutions/dashboard.svg',
    'LMS Solution': '/solutions/lms.svg',
    'Blog/Publishing System': '/solutions/blog.svg',
    Migration: '/solutions/migration.svg',
    'Notion Development': '/solutions/notion.svg',
    'Digital Asset Management': '/solutions/dam.svg',
    'Project Management Tool': '/solutions/project.svg',
  }
  return images[title] || '/solutions/5.svg'
}

export default function NextjsSolutionsPage() {
  return (
    <section>
      <Bracket fluid centered padding="small">
        <div className="md:max-w-screen-xl mx-auto">
          <PageHeader
            title="Next.js Solutions"
            description="Modern, scalable Next.js applications built for performance and developer experience."
          />

          <CategorySection {...nextjsSolutionsCategory} />

          <CTASection
            cover={{
              src: '/nextjscto.svg',
              alt: 'Bracket UI Cover',
              width: 500,
              height: 500,
            }}
            title="Ready to Build with Next.js?"
            description="Let's create a modern, high-performance Next.js solution that scales with your business."
            primary={{
              label: 'Contact Us',
              href: '/contact',
            }}
            secondary={{
              label: 'Nextjs Services',
              href: '/services/web-development',
            }}
          />
        </div>
      </Bracket>
    </section>
  )
}
