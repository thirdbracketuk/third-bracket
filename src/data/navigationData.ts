import { ReactNode } from 'react'

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
  theme?: { text?: string; states?: string; menu?: string }
}

export interface NavigationSection {
  label: string
  items: (NavlinkItem | MegamenuItem)[]
  theme?: { text?: string; states?: string; menu?: string }
}

const defaultNavlinkTheme = {
  text: 'text-black dark:text-white',
  states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
}

const desktopNavlinkTheme = {
  text: 'text-primary-900 dark:text-primary-50',
  states:
    'focus-within:opacity-100 active:opacity-100 [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
}

const mobileMegamenuTheme = {
  text: 'text-black dark:white text-base md:text-sm',
  states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
  menu: 'bg-gradient-primary-dark dark:bg-gradient-primary',
}

// Services: Website & Ecommerce
export const webDevelopmentItems: NavlinkItem[] = [
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
    label: 'E-commerce Development',
    href: '/services/web-development#ecommerce-development',
    isDropdownItem: true,
  },
  {
    label: 'WordPress Development',
    href: '/services/web-development#wordpress-development',
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
    href: '/services/web-development#website-optimisation',
    isDropdownItem: true,
  },
  {
    label: 'Website Migration',
    href: '/services/web-development#website-migration',
    isDropdownItem: true,
  },
]

// Services: SEO & Growth
export const seoGrowthItems: NavlinkItem[] = [
  {
    label: 'WordPress SEO',
    href: '/services/digital-marketing#wordpress-seo',
    isDropdownItem: true,
  },
  {
    label: 'WooCommerce SEO',
    href: '/services/digital-marketing#woocommerce-seo',
    isDropdownItem: true,
  },
  {
    label: 'Custom Ecommerce SEO',
    href: '/services/digital-marketing#custom-ecommerce-seo',
    isDropdownItem: true,
  },
  { label: 'Local SEO', href: '/services/digital-marketing#local-seo', isDropdownItem: true },
  { label: 'GEO', href: '/services/digital-marketing#geo', isDropdownItem: true },
  { label: 'SEO & PPC', href: '/services/digital-marketing#seo-ppc', isDropdownItem: true },
  {
    label: 'Google Business Setup',
    href: '/services/digital-marketing#google-business',
    isDropdownItem: true,
  },
  {
    label: 'Digital Foundation',
    href: '/services/digital-marketing#digital-foundation',
    isDropdownItem: true,
  },
]

// Services: Branding & Creative
export const brandingCreativeItems: NavlinkItem[] = [
  {
    label: 'Brand Strategy',
    href: '/services/ui-ux-design#brand-strategy',
    isDropdownItem: true,
  },
  {
    label: 'Brand Identity',
    href: '/services/ui-ux-design#brand-identity',
    isDropdownItem: true,
  },
  {
    label: 'Print & Signage Design',
    href: '/services/ui-ux-design#print-signage',
    isDropdownItem: true,
  },
  {
    label: 'Social Media Branding',
    href: '/services/ui-ux-design#social-media-branding',
    isDropdownItem: true,
  },
  {
    label: 'Illustration & Graphics',
    href: '/services/ui-ux-design#illustration-graphics',
    isDropdownItem: true,
  },
  {
    label: 'Video Editing',
    href: '/services/ui-ux-design#video-editing',
    isDropdownItem: true,
  },
]

// Resources — Blog by category
export const blogItems: NavlinkItem[] = [
  { label: 'Web Development', href: '/blog?category=web-development', isDropdownItem: true },
  { label: 'UI/UX Design', href: '/blog?category=ui-ux-design', isDropdownItem: true },
  { label: 'Digital Marketing', href: '/blog?category=digital-marketing', isDropdownItem: true },
  { label: 'SEO & Growth', href: '/blog?category=seo-growth', isDropdownItem: true },
  { label: 'WordPress Tips', href: '/blog?category=wordpress', isDropdownItem: true },
  { label: 'Next.js Guides', href: '/blog?category=nextjs', isDropdownItem: true },
  { label: 'All Articles', href: '/blog', isDropdownItem: true },
]

// Resources — Portfolio by category
export const workItems: NavlinkItem[] = [
  { label: 'Websites & Apps', href: '/work?category=websites-apps', isDropdownItem: true },
  { label: 'UI & Components', href: '/work?category=ui-components', isDropdownItem: true },
  { label: 'Dev Tools', href: '/work?category=dev-tools', isDropdownItem: true },
  { label: 'All Projects', href: '/work', isDropdownItem: true },
]

// Resources — Open Source
export const openSourceItems: NavlinkItem[] = [
  { label: 'BracketUI', href: '/bracketui', isDropdownItem: true, cto: true },
  {
    label: 'create-bracketui-app',
    href: 'https://github.com/sagarmusabbir/create-bracketui-app',
    isDropdownItem: true,
  },
  {
    label: 'Eventually Hugo Theme',
    href: 'https://github.com/sagarmusabbir/eventually',
    isDropdownItem: true,
  },
  {
    label: 'Geolocation Template',
    href: 'https://github.com/sagarmusabbir/geolocation-template',
    isDropdownItem: true,
  },
  {
    label: 'Notion Blog',
    href: 'https://github.com/sagarmusabbir/notion-blog',
    isDropdownItem: true,
  },
  {
    label: 'All Repositories',
    href: 'https://github.com/sagarmusabbir',
    isDropdownItem: true,
  },
]

// Legacy flat list kept for mobile fallback
export const resourcesItems: NavlinkItem[] = [
  { label: 'Blog', href: '/blog', isDropdownItem: true },
  { label: 'Portfolio', href: '/work', isDropdownItem: true },
  { label: 'BracketUI', href: '/bracketui', isDropdownItem: true },
  { label: 'Open Source', href: 'https://github.com/sagarmusabbir', isDropdownItem: true },
]

// Standalone nav items
export const mainNavItems: NavlinkItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const getNavlinkTheme = (isMobile: boolean = false, _isDropdown: boolean = false) => {
  return isMobile ? defaultNavlinkTheme : desktopNavlinkTheme
}

// Legacy aliases to avoid breaking other imports
export const digitalMarketingItems = seoGrowthItems
export const uiUxDesignItems = brandingCreativeItems
export const designSolutionsItems: NavlinkItem[] = []
export const platformToolItems: NavlinkItem[] = []
export const industrySolutionsItems: NavlinkItem[] = []
export const nextjsSolutionsItems: NavlinkItem[] = []
export const wordpressSolutionsItems: NavlinkItem[] = []
export const openSourceSolutionsItems: NavlinkItem[] = []
