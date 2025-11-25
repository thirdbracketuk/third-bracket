import { ReactNode } from 'react'

// Define types for our navigation structure
export interface NavlinkItem {
  label: string
  href: string
  isDropdownItem?: boolean
  cto?: boolean
  icon?: ReactNode
}

export interface MegamenuItem {
  label: string
  items: (NavlinkItem | MegamenuItem)[]
  theme?: {
    text?: string
    states?: string
    menu?: string
  }
}

export interface NavigationSection {
  label: string
  items: (NavlinkItem | MegamenuItem)[]
  theme?: {
    text?: string
    states?: string
    menu?: string
  }
}

// Common theme styles
const defaultNavlinkTheme = {
  text: 'text-black  dark:text-white',
  states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
}

const desktopNavlinkTheme = {
  text: 'text-primary-900 dark:text-primary-50',
  states:
    'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
}

// Unused but kept for reference - prefix with underscore to satisfy ESLint
const _megamenuTheme = {
  text: 'text-primary-900 dark:text-primary-50 text-base md:text-sm',
  states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
  menu: 'bg-white dark:bg-black',
}

const mobileMegamenuTheme = {
  text: 'text-black dark:white text-base md:text-sm',
  states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
  menu: 'bg-gradient-primary-dark dark:bg-gradient-primary',
}

// Define navigation data
export const mainNavItems: NavlinkItem[] = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

// Services section
export const webDevelopmentItems: NavlinkItem[] = [
  {
    label: 'Next.js Development',
    href: '/services/web-development#nextjs-development',
    isDropdownItem: true,
  },
  {
    label: 'WordPress Development',
    href: '/services/web-development#wordpress-development',
    isDropdownItem: true,
  },
  {
    label: 'E-commerce Development',
    href: '/services/web-development#e-commerce-development',
    isDropdownItem: true,
  },
  {
    label: 'Bespoke Web Design',
    href: '/services/web-development#bespoke-web-design',
    isDropdownItem: true,
  },
  {
    label: 'Bespoke Web Development',
    href: '/services/web-development#bespoke-web-development',
    isDropdownItem: true,
  },
  {
    label: 'Website Redesign',
    href: '/services/web-development#website-redesign',
    isDropdownItem: true,
  },
  {
    label: 'Website Repair',
    href: '/services/web-development#website-repair',
    isDropdownItem: true,
  },

  {
    label: 'Website Optimisation',
    href: '/services/web-development#website-optimization',
    isDropdownItem: true,
  },
  {
    label: 'Website Migration',
    href: '/services/web-development#migration-modernization',
    isDropdownItem: true,
  },
]

export const uiUxDesignItems: NavlinkItem[] = [
  { label: 'Brand Strategy', href: '/services/ui-ux-design#ui-ux-design', isDropdownItem: true },
  { label: 'Brand Identity', href: '/services/ui-ux-design#website-design', isDropdownItem: true },
  {
    label: 'Graphic Design',
    href: '/services/ui-ux-design#website-redesign',
    isDropdownItem: true,
  },
  {
    label: 'Print Design',
    href: '/services/ui-ux-design#social-media-design',
    isDropdownItem: true,
  },
  { label: 'Business Listing', href: '/services/ui-ux-design#branding', isDropdownItem: true },
  {
    label: 'Website Creative',
    href: '/services/ui-ux-design#design-system-development',
    isDropdownItem: true,
  },
  { label: 'Social Media', href: '/services/ui-ux-design#graphic-design', isDropdownItem: true },
  {
    label: 'Brand Guidelines',
    href: '/services/ui-ux-design#elementor-template-design',
    isDropdownItem: true,
  },
  {
    label: 'Brand Audit',
    href: '/services/ui-ux-design#printable-design',
    isDropdownItem: true,
  },
]

export const digitalMarketingItems: NavlinkItem[] = [
  {
    label: 'Full SEO',
    href: '/services/digital-marketing#search-engine-optimisation',
    isDropdownItem: true,
  },
  {
    label: 'Local SEO',
    href: '/services/digital-marketing#search-engine-marketing',
    isDropdownItem: true,
  },
  {
    label: 'Technical SEO',
    href: '/services/digital-marketing#content-marketing',
    isDropdownItem: true,
  },
  {
    label: 'Content Marketing',
    href: '/services/digital-marketing#affiliate-marketing',
    isDropdownItem: true,
  },
  {
    label: 'Copywriting',
    href: '/services/digital-marketing#email-marketing',
    isDropdownItem: true,
  },
  {
    label: 'Link Building',
    href: '/services/digital-marketing#social-media-marketing',
    isDropdownItem: true,
  },
  {
    label: 'Email Marketing',
    href: '/services/digital-marketing#conversational-marketing',
    isDropdownItem: true,
  },
  {
    label: 'Paid Advertising',
    href: '/services/digital-marketing#ppc-advertising',
    isDropdownItem: true,
  },
  {
    label: 'Social Media Marketing',
    href: '/services/digital-marketing#marketing-analytics-audit',
    isDropdownItem: true,
  },
]

// Solution section
export const designSolutionsItems: NavlinkItem[] = [
  {
    label: 'BracketUI',
    href: '/solutions/design-solutions#bracketui',
    isDropdownItem: true,
  },
  {
    label: 'Elementor Templates',
    href: '/solutions/design-solutions#elementor-template',
    isDropdownItem: true,
  },
  {
    label: 'Tailwindcss Templates',
    href: '/solutions/design-solutions#tailwindcss-templates',
    isDropdownItem: true,
  },
  {
    label: 'HTML5 Templates',
    href: '/solutions/design-solutions#html5-templates',
    isDropdownItem: true,
  },
  { label: 'Hugo Theme', href: '/solutions/design-solutions#hugo-themes', isDropdownItem: true },
  {
    label: 'Icon Packs',
    href: '/solutions/design-solutions#icon-packs',
    isDropdownItem: true,
  },
  {
    label: 'SVG Illustrations',
    href: '/solutions/design-solutions#svg-illustration',
    isDropdownItem: true,
  },
  {
    label: 'Starter Kit',
    href: '/solutions/design-solutions#starter-kit',
    isDropdownItem: true,
  },
  {
    label: 'UI Kits',
    href: '/solutions/design-solutions#ui-kits',
    isDropdownItem: true,
  },
]

export const platformToolItems: NavlinkItem[] = [
  {
    label: 'Next.js Starter',
    href: '/solutions/platform-tools#nextjs-starter',
    isDropdownItem: true,
  },
  {
    label: 'PayloadCMS Starter',
    href: '/solutions/platform-tools#payloadcms-starter',
    isDropdownItem: true,
  },
  {
    label: 'Notion Blog',
    href: '/solutions/platform-tools#notion-blog',
    isDropdownItem: true,
  },
  {
    label: 'CMS Integration',
    href: '/solutions/platform-tools#cms-integration',
    isDropdownItem: true,
  },
  { label: 'Geo Redirect', href: '/solutions/platform-tools#geo-redirect', isDropdownItem: true },
  {
    label: 'Admin Panel',
    href: '/solutions/platform-tools#admin-panel',
    isDropdownItem: true,
  },
  {
    label: 'Internationalization',
    href: '/solutions/platform-tools#internationalization',
    isDropdownItem: true,
  },
  {
    label: 'Asset Management',
    href: '/solutions/platform-tools#asset-management',
    isDropdownItem: true,
  },
  {
    label: 'VPS Setup',
    href: '/solutions/platform-tools#vps-setup',
    isDropdownItem: true,
  },
]

export const industrySolutionsItems: NavlinkItem[] = [
  { label: 'Restaurent', href: '/solutions/industry-solutions#bracketui', isDropdownItem: true },
  {
    label: 'Real Estate',
    href: '/solutions/industry-solutions#real-estate',
    isDropdownItem: true,
  },
  {
    label: 'Blog',
    href: '/solutions/industry-solutions#blog',
    isDropdownItem: true,
  },
  {
    label: 'Landing Page',
    href: '/solutions/industry-solutions#landing-page',
    isDropdownItem: true,
  },
  {
    label: 'Portfolio',
    href: '/solutions/industry-solutions#portfolio',
    isDropdownItem: true,
  },
  {
    label: 'LMS',
    href: '/solutions/industry-solutions#lms',
    isDropdownItem: true,
  },
  {
    label: 'Directory Listing',
    href: '/solutions/industry-solutions#directory-listing',
    isDropdownItem: true,
  },
  {
    label: 'Booking & Reservation',
    href: '/solutions/industry-solutions#booking',
    isDropdownItem: true,
  },
  {
    label: 'Membership',
    href: '/solutions/industry-solutions#membership',
    isDropdownItem: true,
  },
]

export const servicesItems: (NavlinkItem | MegamenuItem)[] = [
  { label: 'Web Development', href: '/services', cto: true },
  { label: 'UI/UX Design', href: '/services', cto: true },
  { label: 'Digital Marketing', href: '/services', cto: true },
  { label: 'UI/UX Design & Prototyping', href: '/services', isDropdownItem: true },
  { label: 'Performance Optimization', href: '/services', isDropdownItem: true },
  { label: 'Other Services', href: '/services', isDropdownItem: true },
]

// Solutions section
export const uiUxSolutionsItems: NavlinkItem[] = [
  { label: 'UI Blocks', href: '/solutions', isDropdownItem: true },
  { label: 'Component Library', href: '/solutions', isDropdownItem: true },
  { label: 'Design 360', href: '/solutions', isDropdownItem: true },
  { label: 'Landing Page', href: '/solutions', isDropdownItem: true },
  { label: 'Starter Templates', href: '/solutions', isDropdownItem: true },
]

export const businessSolutionsItems: NavlinkItem[] = [
  { label: 'Google 360', href: '/solutions', isDropdownItem: true },
  { label: 'Facebook 360', href: '/solutions', isDropdownItem: true },
  { label: 'Growth 360', href: '/solutions', isDropdownItem: true },
  // { label: 'Business Strategy', href: '/solutions', isDropdownItem: true },
  // { label: 'Business Strategy Setup', href: '/solutions', isDropdownItem: true },
  // { label: 'Enterprise 360', href: '/solutions', isDropdownItem: true },
]

export const infrastructureSolutionsItems: NavlinkItem[] = [
  { label: 'Next.js', href: '/solutions', isDropdownItem: true },
  { label: 'WordPress', href: '/solutions', isDropdownItem: true },
  { label: 'Blog 360', href: '/solutions', isDropdownItem: true },
  { label: 'Ecommerce 360', href: '/solutions', isDropdownItem: true },
]

// Solutions megamenu items
export const nextjsSolutionsItems: NavlinkItem[] = [
  {
    label: 'BracketUI',
    href: '/solutions/nextjs-solutions#multi-tenant-saas',
    isDropdownItem: true,
  },
  {
    label: 'Elementor Templates',
    href: '/solutions/nextjs-solutions#headless-cms',
    isDropdownItem: true,
  },
  {
    label: 'Tailwindcss Templates',
    href: '/solutions/nextjs-solutions#headless-e-commerce',
    isDropdownItem: true,
  },
  {
    label: 'HTML5 Templates',
    href: '/solutions/nextjs-solutions#admin-panel-dashboard',
    isDropdownItem: true,
  },
  { label: 'Hugo Theme', href: '/solutions/nextjs-solutions#lms-solution', isDropdownItem: true },
  {
    label: 'Icon Packs',
    href: '/solutions/nextjs-solutions#blog-publishing-system',
    isDropdownItem: true,
  },
  {
    label: 'SVG Illustrations',
    href: '/solutions/nextjs-solutions#migration',
    isDropdownItem: true,
  },
  {
    label: 'Starter Kit',
    href: '/solutions/nextjs-solutions#notion-development',
    isDropdownItem: true,
  },
  {
    label: 'UI Kits',
    href: '/solutions/nextjs-solutions#digital-asset-management',
    isDropdownItem: true,
  },
]

export const wordpressSolutionsItems: NavlinkItem[] = [
  {
    label: 'Next.js Starter',
    href: '/solutions/wordpress-solutions#rapid-fast-wordpress',
    isDropdownItem: true,
  },
  {
    label: 'PayloadCMS Starter',
    href: '/solutions/wordpress-solutions#cloud-migration',
    isDropdownItem: true,
  },
  {
    label: 'Notion Blog',
    href: '/solutions/wordpress-solutions#headless-wordpress',
    isDropdownItem: true,
  },
  {
    label: 'CMS Integration',
    href: '/solutions/wordpress-solutions#performant-woocommerce',
    isDropdownItem: true,
  },
  { label: 'Geo Redirect', href: '/solutions/wordpress-solutions#acm', isDropdownItem: true },
  {
    label: 'Admin Panel',
    href: '/solutions/wordpress-solutions#elementor-templates',
    isDropdownItem: true,
  },
  {
    label: 'Internationalization',
    href: '/solutions/wordpress-solutions#enterprise-wordpress',
    isDropdownItem: true,
  },
  {
    label: 'Asset Management',
    href: '/solutions/wordpress-solutions#wordpress-multisite',
    isDropdownItem: true,
  },
  {
    label: 'VPS Setup',
    href: '/solutions/wordpress-solutions#lms-solution',
    isDropdownItem: true,
  },
]

export const openSourceSolutionsItems: NavlinkItem[] = [
  { label: 'Restaurent', href: '/solutions/open-source-solutions#bracketui', isDropdownItem: true },
  {
    label: 'Real Estate',
    href: '/solutions/open-source-solutions#tailwind-template',
    isDropdownItem: true,
  },
  {
    label: 'Blog',
    href: '/solutions/open-source-solutions#blog-template',
    isDropdownItem: true,
  },
  {
    label: 'Landing Page',
    href: '/solutions/open-source-solutions#jamstack-theme',
    isDropdownItem: true,
  },
  {
    label: 'Portfolio',
    href: '/solutions/open-source-solutions#hugo-theme',
    isDropdownItem: true,
  },
  {
    label: 'LMS',
    href: '/solutions/open-source-solutions#nextjs-theme',
    isDropdownItem: true,
  },
  {
    label: 'Directory Listing',
    href: '/solutions/open-source-solutions#html-template',
    isDropdownItem: true,
  },
  {
    label: 'Booking & Reservation',
    href: '/solutions/open-source-solutions#flowbite-starter',
    isDropdownItem: true,
  },
  {
    label: 'Membership',
    href: '/solutions/open-source-solutions#automation-script',
    isDropdownItem: true,
  },
]

export const automationIntegrationItems: NavlinkItem[] = [
  { label: 'Form Integration', href: '/solutions', isDropdownItem: true },
  { label: 'Marketing Automation', href: '/solutions', isDropdownItem: true },
  { label: 'Search Integration', href: '/solutions', isDropdownItem: true },
  { label: 'Interntionalization', href: '/solutions', isDropdownItem: true },
  { label: 'CI/CD', href: '/solutions', isDropdownItem: true },
  { label: 'Release Automation', href: '/solutions', isDropdownItem: true },
]

export const templateItems: NavlinkItem[] = [
  { label: 'Elementor Template', href: '/solutions', isDropdownItem: true },
  { label: 'Tailwind Template', href: '/solutions', isDropdownItem: true },
  { label: 'Html5 Template', href: '/solutions', isDropdownItem: true },
]

export const themeItems: NavlinkItem[] = [
  { label: 'Nextjs Themes', href: '/solutions', isDropdownItem: true },
  { label: 'Hugo Themes', href: '/solutions', isDropdownItem: true },
  { label: 'Wordpress Theme', href: '/solutions', isDropdownItem: true },
]

export const uiUxMegamenuItems: MegamenuItem[] = [
  {
    label: 'Bracket UI',
    items: [
      { label: 'Reusable Blocks', href: '/solutions', isDropdownItem: true },
      { label: 'Landing Pages', href: '/solutions', isDropdownItem: true },
    ],
  },
  {
    label: 'Templates',
    theme: {
      text: 'text-primary-900 dark:text-primary-50 text-base md:text-sm',
      states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
      menu: 'bg-white dark:bg-primary-950',
    },
    items: templateItems,
  },
  {
    label: 'Themes',
    items: themeItems,
  },
]

export const solutionsItems: (NavlinkItem | MegamenuItem)[] = [
  { label: 'UI/UX Solutions', href: '/solutions', cto: true },
  { label: 'Business Solutions', href: '/solutions', cto: true },
  { label: 'Infrastructure Solutions', href: '/solutions', cto: true },
  // { label: 'Wordpress 360', href: '/solutions', isDropdownItem: true },
  // { label: 'Notion Blog', href: '/solutions', isDropdownItem: true },
  // { label: 'Business 360', href: '/solutions', isDropdownItem: true },
]

// Navigation structure for desktop and mobile
export const desktopNavigation: NavigationSection[] = [
  {
    label: 'Solutions',
    theme: {
      text: 'text-primary-900 dark:text-primary-50 text-base md:text-sm',
      states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
      menu: 'bg-white dark:bg-black',
    },
    items: solutionsItems,
  },
  {
    label: 'Services',
    theme: {
      text: 'text-primary-900 dark:text-primary-50 text-base md:text-sm',
      states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
      menu: 'bg-white dark:bg-black',
    },
    items: servicesItems,
  },
]

export const mobileNavigation: NavigationSection[] = [
  {
    label: 'Solutions',
    theme: mobileMegamenuTheme,
    items: [
      {
        label: 'Web Infrastructures',
        theme: mobileMegamenuTheme,
        items: infrastructureSolutionsItems,
      },
      {
        label: 'UI/UX',
        theme: mobileMegamenuTheme,
        items: uiUxSolutionsItems,
      },
      {
        label: 'Digital Marketing',
        theme: mobileMegamenuTheme,
        items: businessSolutionsItems,
      },
    ],
  },
  {
    label: 'Services',
    theme: mobileMegamenuTheme,
    items: [
      {
        label: 'Web Development',
        theme: mobileMegamenuTheme,
        items: webDevelopmentItems,
      },
      {
        label: 'UI/UX Design',
        theme: mobileMegamenuTheme,
        items: uiUxDesignItems,
      },
      {
        label: 'Digital Marketing',
        theme: mobileMegamenuTheme,
        items: digitalMarketingItems,
      },
    ],
  },
]

// Helper function to render navlinks with consistent theme
export const getNavlinkTheme = (isMobile: boolean = false, _isDropdown: boolean = false) => {
  return isMobile ? defaultNavlinkTheme : desktopNavlinkTheme
}
