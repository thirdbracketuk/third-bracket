import PageHeader from '@/components/PageHeader'
import Category from './Catagory'
// Structured data now in layout.tsx
import Stats from './Stats'
import TechStack from './TechStack'
import { Metadata } from 'next'

import { SiNextdotjs, SiWordpress } from 'react-icons/si'
import {
  FaCode,
  FaCubes,
  FaDesktop,
  FaExchangeAlt,
  FaFileCode,
  FaGoogle,
  FaHashtag,
  FaLightbulb,
  FaPaintBrush,
  FaPencilAlt,
  FaRocket,
  FaSearch,
  FaServer,
  FaSyncAlt,
  FaTachometerAlt,
  FaVectorSquare,
} from 'react-icons/fa'
import CTASection from '@/components/CTASection'
import { Bracket } from '@thirdbracket/bracketui'

const categories = [
  {
    title: 'Web Development',
    description:
      'We build modern, high-performance web solutions using cutting-edge technologies with a focus on scalability and maintainability.',
    illustration: {
      src: '/services/web.svg',
      alt: 'Web Development Illustration',
    },
    stackIcons: TechStack(['SiNextdotjs', 'SiReact', 'SiTypescript', 'SiNodedotjs', 'SiVercel']),
    services: [
      {
        title: 'Next.js Development',
        description:
          'Build modern web applications with React and server components for optimal performance.',
        features: ['App Router', 'Server Components', 'Edge Runtime'],
        badge: 'Frontend',
        icon: SiNextdotjs,
      },
      {
        title: 'WordPress Development',
        description:
          'Custom WordPress solutions with modern development practices and optimizations.',
        features: ['Custom Themes', 'Plugin Development', 'Performance Tuning'],
        badge: 'CMS',
        icon: SiWordpress,
      },
      {
        title: 'Headless Integration',
        description:
          'Connect modern frontends with powerful backend systems for flexible content management.',
        features: ['API Development', 'CMS Integration', 'Content Modeling'],
        badge: 'Integration',
        icon: FaServer,
      },
      {
        title: 'Performance Optimization',
        description: 'Optimize web applications for speed, SEO, and user experience.',
        features: ['Core Web Vitals', 'Caching Strategy', 'Asset Optimization'],
        badge: 'Performance',
        icon: FaTachometerAlt,
      },
      {
        title: 'Migration & Modernization',
        description: 'Upgrade legacy systems to modern technology stacks with minimal disruption.',
        features: ['Code Refactoring', 'Platform Migration', 'Tech Stack Updates'],
        badge: 'Migration',
        icon: FaExchangeAlt,
      },
      {
        title: 'Feature Development',
        description:
          'Build custom features and integrate third-party APIs for enhanced functionality.',
        features: ['API Integration', 'Custom Features', 'Payment Systems'],
        badge: 'Development',
        icon: FaCode,
      },
    ],
  },
  {
    title: 'UI/UX Design',
    description:
      'We create intuitive and engaging user interfaces that balance aesthetic appeal with functional design principles.',
    illustration: {
      src: '/services/ui.svg',
      alt: 'UI/UX Design Illustration',
    },
    stackIcons: TechStack(['SiTailwindcss', 'SiFigma', 'SiAdobeillustrator', 'SiFramer']),
    services: [
      {
        title: 'Landing Page Design',
        description: 'Create high-converting landing pages that drive user engagement and actions.',
        features: ['Conversion Optimization', 'Mobile-First Design', 'A/B Testing'],
        badge: 'Design',
        icon: FaPaintBrush,
      },
      {
        title: 'Website Layout Design',
        description:
          'Design intuitive website layouts that enhance user experience and navigation.',
        features: ['Information Architecture', 'Responsive Design', 'User Flow'],
        badge: 'UI',
        icon: FaDesktop,
      },
      {
        title: 'Vector Design',
        description: 'Create scalable logos, icons, and visual assets for brand consistency.',
        features: ['Logo Design', 'Icon Sets', 'Brand Assets'],
        badge: 'Graphics',
        icon: FaVectorSquare,
      },
      {
        title: 'Component-Based UI',
        description: 'Build scalable design systems with reusable components and patterns.',
        features: ['Design System', 'Component Library', 'Style Guide'],
        badge: 'System',
        icon: FaCubes,
      },
      {
        title: 'Website Redesign',
        description:
          'Modernize existing websites with contemporary design patterns and best practices.',
        features: ['UI Modernization', 'UX Enhancement', 'Visual Refresh'],
        badge: 'Redesign',
        icon: FaSyncAlt,
      },
      {
        title: 'UX Strategy',
        description:
          'Develop user-centered design strategies and wireframes for optimal experiences.',
        features: ['User Research', 'Wireframing', 'Prototyping'],
        badge: 'UX',
        icon: FaLightbulb,
      },
    ],
  },
  {
    title: 'Digital Marketing',
    description:
      'We implement data-driven digital marketing strategies to improve visibility, engagement, and conversion rates.',
    illustration: {
      src: '/services/digital.svg',
      alt: 'Digital Marketing Illustration',
    },
    stackIcons: TechStack(['SiGoogleanalytics', 'SiGooglesearchconsole', 'SiWordpress']),
    services: [
      {
        title: 'Technical SEO',
        description:
          'Optimize website technical aspects for better search engine visibility and rankings.',
        features: ['Site Structure', 'Performance SEO', 'Technical Audit'],
        badge: 'SEO',
        icon: FaSearch,
      },
      {
        title: 'Performance Optimization',
        description: 'Enhance website performance metrics for better user experience and SEO.',
        features: ['Speed Optimization', 'Core Web Vitals', 'Mobile Performance'],
        badge: 'Performance',

        icon: FaRocket,
      },
      {
        title: 'SEO-Ready Development',
        description: 'Build websites with SEO best practices implemented from the ground up.',
        features: ['Schema Markup', 'SEO Architecture', 'Content Strategy'],
        badge: 'Development',
        icon: FaFileCode,
      },
      {
        title: 'Content Writing',
        description: 'Create engaging, SEO-optimized content that resonates with your audience.',
        features: ['Blog Writing', 'Website Copy', 'Content Strategy'],
        badge: 'Content',
        icon: FaPencilAlt,
      },
      {
        title: 'Social Media Management',
        description:
          'Manage and grow your social media presence with strategic content and engagement.',
        features: ['Content Calendar', 'Platform Strategy', 'Community Management'],
        badge: 'Social',
        icon: FaHashtag,
      },
      {
        title: 'Google Services',
        description: 'Implement and optimize Google services for better visibility and analytics.',
        features: ['Analytics Setup', 'Search Console', 'Tag Manager'],
        badge: 'Google',
        icon: FaGoogle,
      },
    ],
  },
]

export const metadata: Metadata = {
  title: 'Web Design & Development Services',
  description:
    'Explore our modern web development and digital marketing services crafted for UK agencies and small businesses. We deliver speed, SEO, and clean design.',
  openGraph: {
    title: 'Professional Web Development & Design Services',
    description:
      'We privide services in WordPress development, UI/Ux design, and digital marketing',
  },
}

export default function ServicesPage() {
  return (
    <section>
      <Bracket fluid centered padding="small">
        <div className="md:max-w-screen-xl mx-auto">
          {/* Structured data now in layout.tsx */}
          <PageHeader
            title="Services"
            description="Full-service modern web development & marketing for small businesses, agencies, and startups in the UK."
          />

          {categories.map((cat, index) => (
            <Category key={index} {...cat} index={index} />
          ))}

          <Stats />

          <CTASection
            title="Ready to Build Your Next Project?"
            description="Let's create something amazing together. Our team is ready to help you bring your vision to life."
            primary={{
              label: 'Contact Us',
              href: '/contact',
            }}
            secondary={{
              label: 'View Solutions',
              href: '/solutions',
            }}
          />
        </div>
      </Bracket>
    </section>
  )
}
