import PageHeader from '@/components/PageHeader'
import CategorySection from '../CategorySection'
import { platformToolItems } from '@/data/navigationData'
import CTASection from '@/components/CTASection'
import { Bracket } from '@thirdbracket/bracketui'
import { Metadata } from 'next'
import { SiNextdotjs, SiPayloadcms, SiNotion } from 'react-icons/si'
import {
  FaPlug,
  FaGlobeAmericas,
  FaChalkboard,
  FaServer,
  FaCode,
  FaShieldAlt,
} from 'react-icons/fa'
import { IconType } from 'react-icons'

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

function getSolutionIcon(title: string): IconType {
  const icons: Record<string, IconType> = {
    'Next.js Starter': SiNextdotjs,
    'PayloadCMS Starter': SiPayloadcms,
    'Notion Blog': SiNotion,
    'CMS Integration': FaPlug,
    'Geo Redirect': FaGlobeAmericas,
    'Admin Panel': FaChalkboard,
    'VPS Deployment': FaServer,
    'API Boilerplate': FaCode,
    'Auth Starter': FaShieldAlt,
  }
  return icons[title] || FaCode
}

function getSolutionDescription(title: string): string {
  const descriptions: Record<string, string> = {
    'Next.js Starter': 'Start your project',
    'PayloadCMS Starter': 'Launch with PayloadCMS',
    'Notion Blog': 'Build a Notion-powered blog',
    'CMS Integration': 'Connect your CMS',
    'Geo Redirect': 'Set up geo redirects',
    'Admin Panel': 'Build your admin panel',
    'VPS Deployment': 'Deploy to VPS',
    'API Boilerplate': 'Start your API',
    'Auth Starter': 'Add authentication',
  }
  return descriptions[title] || 'Get started'
}

function getSolutionFeatures(title: string): string[] {
  const features: Record<string, string[]> = {
    'Next.js Starter': ['App Router setup', 'TypeScript configured', 'Tailwind CSS', 'ESLint & Prettier'],
    'PayloadCMS Starter': ['PayloadCMS 3.x', 'MongoDB or Postgres', 'REST & GraphQL API', 'Admin UI included'],
    'Notion Blog': ['Notion as CMS', 'Static generation', 'ISR support', 'MDX rendering'],
    'CMS Integration': ['Headless CMS setup', 'API endpoints', 'Content modelling', 'Webhook support'],
    'Geo Redirect': ['IP geolocation', 'Country-based routing', 'Edge-ready', 'No latency overhead'],
    'Admin Panel': ['Role-based access', 'Custom dashboard', 'Data tables', 'Form builders'],
    'VPS Deployment': ['Nginx config', 'SSL setup', 'PM2 process manager', 'Zero-downtime deploys'],
    'API Boilerplate': ['Express / Hono', 'Auth middleware', 'Rate limiting', 'OpenAPI docs'],
    'Auth Starter': ['JWT & sessions', 'OAuth providers', 'Role management', 'Password reset flow'],
  }
  return features[title] || ['Open source', 'Well documented', 'Production ready']
}

function getSolutionTechnologies(title: string) {
  const tech: Record<string, { title: string; cto: string }[]> = {
    'Next.js Starter': [{ title: 'Framework', cto: 'Next.js' }, { title: 'Styles', cto: 'Tailwind' }, { title: 'Deploy', cto: 'Vercel' }],
    'PayloadCMS Starter': [{ title: 'CMS', cto: 'PayloadCMS' }, { title: 'DB', cto: 'Postgres' }, { title: 'API', cto: 'REST/GraphQL' }],
    'Notion Blog': [{ title: 'CMS', cto: 'Notion' }, { title: 'Framework', cto: 'Next.js' }, { title: 'Cache', cto: 'ISR' }],
    'CMS Integration': [{ title: 'CMS', cto: 'Headless' }, { title: 'API', cto: 'REST' }, { title: 'Auth', cto: 'JWT' }],
    'Geo Redirect': [{ title: 'Runtime', cto: 'Edge' }, { title: 'Data', cto: 'MaxMind' }, { title: 'Platform', cto: 'Vercel/CF' }],
    'Admin Panel': [{ title: 'Framework', cto: 'Next.js' }, { title: 'UI', cto: 'shadcn/ui' }, { title: 'DB', cto: 'Prisma' }],
    'VPS Deployment': [{ title: 'Server', cto: 'Ubuntu VPS' }, { title: 'Web', cto: 'Nginx' }, { title: 'Process', cto: 'PM2' }],
    'API Boilerplate': [{ title: 'Runtime', cto: 'Node.js' }, { title: 'Framework', cto: 'Express' }, { title: 'Docs', cto: 'Swagger' }],
    'Auth Starter': [{ title: 'Auth', cto: 'NextAuth' }, { title: 'DB', cto: 'Prisma' }, { title: 'Types', cto: 'TypeScript' }],
  }
  return tech[title] || []
}

const platformToolsCategory = {
  title: 'Launch Scalable Platforms Without the Overhead',
  description:
    'Use Next.js starters, PayloadCMS setups and VPS workflows to launch scalable web solutions fast.',
  solutions: platformToolItems.map((item) => ({
    title: item.label,
    description: getSolutionDescription(item.label),
    features: getSolutionFeatures(item.label),
    technologies: getSolutionTechnologies(item.label),
    icon: getSolutionIcon(item.label),
  })),
}

export default function PlatformToolsPage() {
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
              src: '/webdevcto.svg',
              alt: 'Platform Tools Cover',
              width: 500,
              height: 500,
            }}
            title="Need a Custom Platform Built?"
            description="Let's architect and build a performant, scalable platform tailored to your workflow and business requirements."
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
