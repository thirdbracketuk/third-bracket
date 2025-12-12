import PageHeader from '@/components/PageHeader'
import CategorySection from '../CategorySection'
import { openSourceSolutionsItems } from '@/data/navigationData'
import CTASection from '@/components/CTASection'
import { Bracket } from '@thirdbracket/bracketui'

const openSourceSolutionsCategory = {
  title: 'Open Source Solutions',
  description:
    'Open source tools, templates, and components to accelerate your development workflow.',
  solutions: openSourceSolutionsItems.map((item) => ({
    title: item.label,
    description: getSolutionDescription(item.label),
    features: getSolutionFeatures(item.label),
    technologies: getSolutionTechnologies(item.label),
    image: getSolutionImage(item.label),
  })),
}

function getSolutionDescription(title: string): string {
  const descriptions: Record<string, string> = {
    BracketUI: 'Modern React component library built with TailwindCSS for rapid UI development.',
    'Tailwind Template':
      'Pre-built TailwindCSS templates for quick project setup and consistent design.',
    'Blog Template': 'Ready-to-use blog templates with modern design and SEO optimization.',
    'Jamstack Theme': 'Static site themes optimized for Jamstack architecture and performance.',
    'Hugo Theme':
      'Fast, lightweight Hugo themes for static site generation and content management.',
    'Next.js Theme': 'Modern Next.js themes with built-in features and optimizations.',
    'Html Template': 'Clean, semantic HTML templates for traditional web development.',
    'Flowbite Starter': 'Starter templates built with Flowbite components and TailwindCSS.',
    'Automation Script':
      'Development automation scripts for build processes and deployment workflows.',
  }
  return descriptions[title] || 'Open source solution to accelerate your development process.'
}

function getSolutionFeatures(title: string): string[] {
  const features: Record<string, string[]> = {
    BracketUI: [
      'React components',
      'TailwindCSS integration',
      'TypeScript support',
      'Accessibility focused',
      'Customizable themes',
    ],
    'Tailwind Template': [
      'Responsive design',
      'Component library',
      'Dark mode support',
      'Mobile-first approach',
      'Easy customization',
    ],
    'Blog Template': [
      'SEO optimized',
      'Markdown support',
      'Social sharing',
      'Comment system',
      'Newsletter integration',
    ],
    'Jamstack Theme': [
      'Static generation',
      'Fast loading',
      'CDN ready',
      'Git-based workflow',
      'Modern architecture',
    ],
    'Hugo Theme': [
      'Lightning fast',
      'Markdown content',
      'Multilingual support',
      'SEO friendly',
      'Minimal dependencies',
    ],
    'Next.js Theme': [
      'Server-side rendering',
      'API routes',
      'Image optimization',
      'Performance focused',
      'Modern React',
    ],
    'Html Template': [
      'Semantic markup',
      'Cross-browser compatible',
      'Lightweight',
      'Accessible',
      'Standards compliant',
    ],
    'Flowbite Starter': [
      'Component-based',
      'Utility-first CSS',
      'Interactive elements',
      'Responsive grid',
      'Modern design',
    ],
    'Automation Script': [
      'Build automation',
      'Deployment scripts',
      'Code quality checks',
      'Performance monitoring',
      'CI/CD integration',
    ],
  }
  return (
    features[title] || [
      'Open source',
      'Well documented',
      'Community supported',
      'Regular updates',
      'Easy to use',
    ]
  )
}

function getSolutionTechnologies(title: string) {
  const specificTech: Record<string, any[]> = {
    BracketUI: [
      { title: 'Framework', cto: 'React' },
      { title: 'Styling', cto: 'TailwindCSS' },
      { title: 'Language', cto: 'TypeScript' },
      { title: 'Build Tool', cto: 'Vite' },
    ],
    'Tailwind Template': [
      { title: 'CSS Framework', cto: 'TailwindCSS' },
      { title: 'Build Tool', cto: 'PostCSS' },
      { title: 'Package Manager', cto: 'npm' },
      { title: 'Version Control', cto: 'Git' },
    ],
    'Blog Template': [
      { title: 'Framework', cto: 'Next.js' },
      { title: 'Content', cto: 'Markdown' },
      { title: 'Styling', cto: 'TailwindCSS' },
      { title: 'Hosting', cto: 'Vercel' },
    ],
    'Jamstack Theme': [
      { title: 'Architecture', cto: 'Jamstack' },
      { title: 'Generator', cto: 'Gatsby/Next.js' },
      { title: 'CMS', cto: 'Headless CMS' },
      { title: 'Hosting', cto: 'Netlify' },
    ],
    'Hugo Theme': [
      { title: 'Generator', cto: 'Hugo' },
      { title: 'Language', cto: 'Go Templates' },
      { title: 'Content', cto: 'Markdown' },
      { title: 'Hosting', cto: 'GitHub Pages' },
    ],
    'Next.js Theme': [
      { title: 'Framework', cto: 'Next.js' },
      { title: 'Language', cto: 'TypeScript' },
      { title: 'Styling', cto: 'TailwindCSS' },
      { title: 'Hosting', cto: 'Vercel' },
    ],
    'Html Template': [
      { title: 'Markup', cto: 'HTML5' },
      { title: 'Styling', cto: 'CSS3' },
      { title: 'Scripting', cto: 'JavaScript' },
      { title: 'Build Tool', cto: 'Webpack' },
    ],
    'Flowbite Starter': [
      { title: 'Components', cto: 'Flowbite' },
      { title: 'CSS Framework', cto: 'TailwindCSS' },
      { title: 'JavaScript', cto: 'Vanilla JS' },
      { title: 'Build Tool', cto: 'Vite' },
    ],
    'Automation Script': [
      { title: 'Runtime', cto: 'Node.js' },
      { title: 'Language', cto: 'JavaScript' },
      { title: 'CI/CD', cto: 'GitHub Actions' },
      { title: 'Package Manager', cto: 'npm' },
    ],
  }

  return (
    specificTech[title] || [
      { title: 'Open Source', cto: 'MIT License' },
      { title: 'Version Control', cto: 'Git' },
      { title: 'Documentation', cto: 'README' },
      { title: 'Community', cto: 'GitHub' },
    ]
  )
}

function getSolutionImage(title: string): string {
  const images: Record<string, string> = {
    BracketUI: '/solutions/bracketui.svg',
    'Tailwind Template': '/solutions/dam.svg',
    'Blog Template': '/solutions/dam.svg',
    'Jamstack Theme': '/solutions/dam.svg',
    'Hugo Theme': '/solutions/dam.svg',
    'Next.js Theme': '/solutions/dam.svg',
    'Html Template': '/solutions/dam.svg',
    'Flowbite Starter': '/solutions/dam.svg',
    'Automation Script': '/solutions/dam.svg',
  }
  return images[title] || '/solutions/6.svg'
}

export default function OpenSourceSolutionsPage() {
  return (
    <section>
      <Bracket fluid centered padding="small">
        <div className="md:max-w-screen-xl mx-auto">
          <PageHeader
            title="Open Source Solutions"
            description="Open source tools, templates, and components to accelerate your development workflow."
          />

          <CategorySection {...openSourceSolutionsCategory} />

          <CTASection
            cover={{
              src: '/opensourcecto.svg',
              alt: 'Bracket UI Cover',
              width: 500,
              height: 500,
            }}
            title="Ready to Contribute or Customize?"
            description="Explore our open source solutions and join our community of developers building the future."
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
