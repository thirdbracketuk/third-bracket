import PageHeader from '@/components/PageHeader'
import CategorySection from '../CategorySection'
import { designSolutionsItems } from '@/data/navigationData'
import CTASection from '@/components/CTASection'
import { Bracket } from '@thirdbracket/bracketui'
import { Metadata } from 'next'
import { SiTailwindcss, SiElementor, SiHtml5, SiFigma, SiHugo } from 'react-icons/si'
import { FaCubes, FaVectorSquare, FaBoxOpen, FaIcons, FaPalette } from 'react-icons/fa'
import { IconType } from 'react-icons'

export const metadata: Metadata = {
  title: 'Design Solutions for Modern Websites, UI Kits & Open Resources',
  description:
    'Open source design resources from thirdbracket, including UI kits, templates, icons and component libraries to build bespoke websites faster and cleaner.',
  openGraph: {
    title: 'Design Solutions, UI Kits & Open Source Templates by thirdbracket',
    description:
      'Free and open source UI kits, templates, SVG icons and component libraries to speed up bespoke web design and modern website builds.',
  },
}

function getSolutionIcon(title: string): IconType {
  const icons: Record<string, IconType> = {
    BracketUI: FaCubes,
    'Elementor Templates': SiElementor,
    'Tailwindcss Templates': SiTailwindcss,
    'HTML5 Templates': SiHtml5,
    'Hugo Theme': SiHugo,
    'Icon Packs': FaIcons,
    'SVG Illustrations': FaVectorSquare,
    'Starter Kit': FaBoxOpen,
    'UI Kits': FaPalette,
  }
  return icons[title] || FaCubes
}

function getSolutionDescription(title: string): string {
  const descriptions: Record<string, string> = {
    BracketUI: 'Explore BracketUI components',
    'Elementor Templates': 'Browse Elementor templates',
    'Tailwindcss Templates': 'Browse Tailwind templates',
    'HTML5 Templates': 'Browse HTML5 templates',
    'Hugo Theme': 'Explore Hugo themes',
    'Icon Packs': 'Browse icon packs',
    'SVG Illustrations': 'Browse SVG illustrations',
    'Starter Kit': 'Get a starter kit',
    'UI Kits': 'Browse UI kits',
  }
  return descriptions[title] || 'Explore resources'
}

function getSolutionFeatures(title: string): string[] {
  const features: Record<string, string[]> = {
    BracketUI: [
      'React & Next.js ready',
      'Tailwind-based',
      'Dark mode support',
      'Accessible components',
    ],
    'Elementor Templates': [
      'Drag & drop ready',
      'Responsive layouts',
      'WooCommerce compatible',
      'One-click import',
    ],
    'Tailwindcss Templates': [
      'Utility-first CSS',
      'Responsive grids',
      'Dark mode variants',
      'Copy-paste components',
    ],
    'HTML5 Templates': [
      'Zero dependencies',
      'Semantic markup',
      'Cross-browser tested',
      'SEO optimised',
    ],
    'Hugo Theme': [
      'Static site ready',
      'Fast build times',
      'Markdown content',
      'Multilingual support',
    ],
    'Icon Packs': ['SVG format', 'Multiple sizes', 'Consistent style', 'Free to use'],
    'SVG Illustrations': [
      'Editable vectors',
      'Multiple themes',
      'High resolution',
      'Commercial license',
    ],
    'Starter Kit': [
      'Pre-configured tools',
      'ESLint & Prettier',
      'CI/CD ready',
      'Deployment scripts',
    ],
    'UI Kits': ['Figma source files', 'Design tokens', 'Component library', 'Style guide'],
  }
  return features[title] || ['Open source', 'Well documented', 'Actively maintained']
}

function getSolutionTechnologies(title: string) {
  const tech: Record<string, { title: string; cto: string }[]> = {
    BracketUI: [
      { title: 'Framework', cto: 'React' },
      { title: 'Styling', cto: 'Tailwind' },
      { title: 'Types', cto: 'TypeScript' },
    ],
    'Elementor Templates': [
      { title: 'Platform', cto: 'WordPress' },
      { title: 'Builder', cto: 'Elementor Pro' },
    ],
    'Tailwindcss Templates': [
      { title: 'Styling', cto: 'Tailwind CSS' },
      { title: 'Framework', cto: 'Next.js / HTML' },
    ],
    'HTML5 Templates': [
      { title: 'Markup', cto: 'HTML5' },
      { title: 'Styling', cto: 'CSS3' },
      { title: 'Scripts', cto: 'Vanilla JS' },
    ],
    'Hugo Theme': [
      { title: 'SSG', cto: 'Hugo' },
      { title: 'Templating', cto: 'Go Templates' },
    ],
    'Icon Packs': [
      { title: 'Format', cto: 'SVG' },
      { title: 'License', cto: 'MIT' },
    ],
    'SVG Illustrations': [
      { title: 'Format', cto: 'SVG' },
      { title: 'Tool', cto: 'Figma / AI' },
    ],
    'Starter Kit': [
      { title: 'Framework', cto: 'Next.js' },
      { title: 'CI', cto: 'GitHub Actions' },
    ],
    'UI Kits': [
      { title: 'Design', cto: 'Figma' },
      { title: 'Tokens', cto: 'Style Dictionary' },
    ],
  }
  return tech[title] || []
}

const designSolutionsCategory = {
  title: 'Built for Faster, Smarter Websites',
  description:
    'Use BracketUI and pre-built templates to create premium experiences without complex setup.',
  solutions: designSolutionsItems.map((item) => ({
    title: item.label,
    description: getSolutionDescription(item.label),
    features: getSolutionFeatures(item.label),
    technologies: getSolutionTechnologies(item.label),
    icon: getSolutionIcon(item.label),
  })),
}

export default function DesignSolutionsPage() {
  return (
    <section>
      <Bracket fluid centered padding="small">
        <div className="md:max-w-screen-xl mx-auto">
          <PageHeader
            title="Design Solutions"
            description="Explore open source UI templates, component libraries, SVG assets and ready-to-use design systems built to simplify bespoke web design and modern website development."
          />

          <CategorySection {...designSolutionsCategory} />

          <CTASection
            
            title="Need a Custom Design System?"
            description="Let's build a cohesive design foundation tailored to your brand, so your team ships consistent, beautiful interfaces faster."
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
