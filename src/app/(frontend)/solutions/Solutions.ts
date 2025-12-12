// data/solutions.ts
import { FaWpforms } from 'react-icons/fa'
import { SiGithubactions } from 'react-icons/si'
import { MdAutorenew } from 'react-icons/md'

import { SolutionCategory } from './types'

export const solutionCategories: SolutionCategory[] = [
  {
    title: 'Web Infrastructure',
    description:
      'Modern, resource-efficient web solutions built for performance, scalability, and ease of management.',
    solutions: [
      {
        title: 'Full Stack Next.js Aplication',
        description: 'Get your first business website without compromising modern features',
        icon: FaWpforms,
        features: [
          'Next.js setup with full-stack architecture',
          'Cloud deployment and environment setup',
          'CMS integration on request',
          'SEO and analytics ready',
          'Performance-optimized and scalable',
        ],
        technologies: [
          { title: 'React Framework', cto: 'Next.js' },
          { title: 'CSS Framework', cto: 'TailwindCSS' },
          { title: 'Language', cto: 'TypeScript' },
          { title: 'Version Control', cto: 'Git' },
          { title: 'Tooling', cto: 'ESLint' },
          { title: 'CI/CD', cto: 'GitHub Actions' },
        ],
        image: '/solutions/5.svg',
      },
      {
        title: 'Full Stack Wordpress Website',
        description: 'Lightweight, customizable WordPress sites for small businesses.',
        icon: MdAutorenew,
        features: [
          'VPS setup and WordPress installation',
          'Custom theme and plugin configuration',
          'Content editing support',
          'Performance optimization',
          'SEO and analytics setup',
        ],
        technologies: [
          { title: 'CMS', cto: 'WordPress' },
          { title: 'Hosting', cto: 'VPS' },
          { title: 'Tooling', cto: 'PHPMyAdmin' },
          { title: 'SEO Tools', cto: 'Yoast' },
        ],
        image: '/solutions/wordpress.svg',
      },
      {
        title: 'Full Stack Blog with Admin Panel',
        description: 'Get your first blog setup using Notion and Next.js.',
        icon: SiGithubactions,
        features: [
          'Next.js frontend powered by Notion CMS',
          'Custom domain integration',
          'Lightweight blog engine',
          'Easy content updates',
          'SEO-optimized and mobile-friendly',
        ],
        technologies: [
          { title: 'CMS', cto: 'Notion' },
          { title: 'React Framework', cto: 'Next.js' },
          { title: 'Hosting', cto: 'Vercel' },
          { title: 'Language', cto: 'TypeScript' },
        ],
        image: '/solutions/blog.svg',
      },
      {
        title: 'Full Stack Ecommerce with Admin panel and Multi Vendor Management',
        description: 'Get your first modern online store with powerful admin and performance.',
        icon: SiGithubactions,
        features: [
          'Next.js store with Payload CMS backend',
          'Fully branded white-label admin',
          'Optimized for speed and SEO',
          'Flexible product and content management',
          'Mobile-first and scalable',
        ],
        technologies: [
          { title: 'React Framework', cto: 'Next.js' },
          { title: 'CMS', cto: 'Payload CMS' },
          { title: 'Database', cto: 'PostgreSQL' },
          { title: 'Hosting', cto: 'Vercel' },
        ],
        image: '/solutions/ecommerce.svg',
      },
    ],
  },
  {
    title: 'UI/UX',
    description:
      'A modern and minimal UI components library BracketUI for reusable design systems and custom interfaces.',
    solutions: [
      {
        title: 'UI Blocks',
        description: 'Pre-designed sections to speed up modern UI development.',
        features: [
          'Ready-to-use layout blocks',
          'Built with BracketUI and TailwindCSS',
          'Consistent design system',
          'Easily customizable components',
          'Ideal for rapid page building',
        ],
        technologies: [
          { title: 'Component Library', cto: 'BracketUI' },
          { title: 'CSS Framework', cto: 'TailwindCSS' },
          { title: 'Language', cto: 'TypeScript' },
        ],
        image: '/solutions/3.svg',
      },
      {
        title: 'Component Library',
        description: 'A full set of reusable components built for performance.',
        features: [
          'Accessible, reusable React components',
          'Lightweight and minimal design',
          'Pre-styled and customizable',
          'Performance-focused architecture',
          'Integrated with TailwindCSS',
        ],
        technologies: [
          { title: 'Component Library', cto: 'BracketUI' },
          { title: 'Framework', cto: 'React' },
          { title: 'CSS Framework', cto: 'TailwindCSS' },
        ],
        image: '/solutions/4.svg',
      },
      {
        title: 'Landing Page',
        description: 'SEO-optimized, high-conversion landing pages.',
        features: [
          'Custom-built landing pages',
          'Optimized for speed and SEO',
          'Responsive and mobile-ready design',
          'Minimalistic, modern UI',
          'Built using best practices in Next.js',
        ],
        technologies: [
          { title: 'React Framework', cto: 'Next.js' },
          { title: 'CSS Framework', cto: 'TailwindCSS' },
          { title: 'Hosting', cto: 'Vercel' },
        ],
        image: '/solutions/5.svg',
      },
      {
        title: 'Starter Templates',
        description: 'Pre-built templates for quick project launches.',
        features: [
          'Open-source Next.js templates',
          'Built-in routing and SEO',
          'Modern UI with TailwindCSS',
          'Ready for customization',
          'Designed for speed and simplicity',
        ],
        technologies: [
          { title: 'React Framework', cto: 'Next.js' },
          { title: 'CSS Framework', cto: 'TailwindCSS' },
          { title: 'Language', cto: 'TypeScript' },
        ],
        image: '/solutions/6.svg',
      },
      {
        title: 'Design 360',
        description: 'End-to-end brand and web design tailored to your identity.',
        features: [
          'Custom layouts and web design',
          'Branding assets (logos, banners, icons)',
          'Vector illustrations and graphics',
          'Responsive and consistent design',
          'Designs optimized for developers',
        ],
        technologies: [
          { title: 'Design Tool', cto: 'Figma' },
          { title: 'Illustration Tool', cto: 'Illustrator' },
          { title: 'Vector Format', cto: 'SVG' },
        ],
        image: '/solutions/7.svg',
      },
    ],
  },
  {
    title: 'Digital Marketing',
    description:
      'Integrated marketing tools and strategies to grow your online presence and drive measurable results.',
    solutions: [
      {
        title: 'Google 360',
        description: 'Connect and optimize all essential Google services.',
        features: [
          'Google Business setup',
          'Search Console integration',
          'Google Analytics and Maps connection',
          'Performance monitoring',
          'SEO and web indexing support',
        ],
        technologies: [
          { title: 'SEO Tool', cto: 'Google Search Console' },
          { title: 'Analytics Tool', cto: 'Google Analytics' },
          { title: 'Business Tool', cto: 'Google Business' },
          { title: 'Mapping Tool', cto: 'Google Maps' },
        ],
        image: '/solutions/8.svg',
      },
      {
        title: 'Facebook 360',
        description: 'Get fully integrated and conversion-ready on Facebook.',
        features: [
          'Facebook Business Page setup',
          'Meta Pixel integration',
          'Metadata and OG tags configuration',
          'Website-to-Facebook linking',
          'Audience and conversion tracking',
        ],
        technologies: [
          { title: 'Marketing Tool', cto: 'Meta Business Suite' },
          { title: 'Tracking Tool', cto: 'Meta Pixel' },
          { title: 'SEO Format', cto: 'Open Graph' },
        ],
        image: '/solutions/9.svg',
      },
      {
        title: 'Growth 360',
        description: 'Comprehensive digital marketing setup for your website.',
        features: [
          'Social media setup and optimization',
          'Technical SEO implementation',
          'Structured data (JSON-LD) setup',
          'Integrated Google services',
          'Long-term growth tracking',
        ],
        technologies: [
          { title: 'SEO Format', cto: 'JSON-LD' },
          { title: 'Analytics Tool', cto: 'Google Analytics' },
          { title: 'Indexing Tool', cto: 'Google Search Console' },
          { title: 'Meta Tool', cto: 'Meta Pixel' },
        ],
        image: '/solutions/10.svg',
      },
    ],
  },
]
