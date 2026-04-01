'use client'

import { useState } from 'react'
import {
  RiLayout2Line,
  RiBracesLine,
  RiShoppingCart2Line,
  RiRefreshLine,
  RiToolsLine,
  RiSpeedLine,
  RiExchangeLine,
  RiWordpressLine,
  RiShoppingBag2Line,
  RiMapPinLine,
  RiGlobalLine,
  RiMoneyDollarCircleLine,
  RiStoreLine,
  RiDatabase2Line,
  RiSearchLine,
  RiBriefcaseLine,
  RiShieldLine,
  RiPrinterLine,
  RiInstagramLine,
  RiImageLine,
  RiFilmLine,
} from 'react-icons/ri'

import { Bracket, Card } from '@thirdbracket/bracketui'
import Link from 'next/link'

type TabId = 'web' | 'seo' | 'branding'

interface FeatureCard {
  icon: React.ElementType
  header: string
  href: string
  description: string
}

interface Tab {
  id: TabId
  label: string
  sublabel: string
}

const tabs: Tab[] = [
  { id: 'web', label: 'Website & Ecommerce', sublabel: 'Web' },
  { id: 'seo', label: 'SEO & Growth', sublabel: 'SEO' },
  { id: 'branding', label: 'Branding & Creative', sublabel: 'Branding' },
]

const tabDescriptions: Record<TabId, string> = {
  web: 'Bespoke websites and online stores built on modern frameworks. Fast, scalable and search-ready from day one.',
  seo: 'Organic growth that compounds. We build the technical and content foundation that gets your business found on Google.',
  branding:
    'Identity systems that mean something. From brand strategy to every visual touchpoint, built for consistency and recognition.',
}

const tabCards: Record<TabId, FeatureCard[]> = {
  web: [
    {
      icon: RiLayout2Line,
      header: 'Bespoke Web Design',
      href: '/services/web-development#bespoke-web-design',
      description: 'Custom designed from scratch around your brand. No templates, no shortcuts.',
    },
    {
      icon: RiBracesLine,
      header: 'Bespoke Web Development',
      href: '/services/web-development#bespoke-web-development',
      description:
        'Built on Next.js or WordPress, tailored to your business logic and requirements.',
    },
    {
      icon: RiShoppingCart2Line,
      header: 'E-commerce Development',
      href: '/services/web-development#ecommerce-development',
      description:
        'Custom online stores with seamless checkout, inventory management and conversion-focused design.',
    },
    {
      icon: RiRefreshLine,
      header: 'Website Redesign',
      href: '/services/web-development#website-redesign',
      description:
        'Modernise an outdated site with improved UX, faster load times and a design that reflects where your business is today.',
    },
    {
      icon: RiToolsLine,
      header: 'Website Repair',
      href: '/services/web-development#website-repair',
      description: 'Broken layouts, bugs or security issues? We diagnose and fix quickly.',
    },
    {
      icon: RiSpeedLine,
      header: 'Website Optimisation',
      href: '/services/web-development#website-optimisation',
      description:
        'Core Web Vitals, Lighthouse scores and image optimisation. We make your site fast and efficient.',
    },
    {
      icon: RiExchangeLine,
      header: 'Website Migration',
      href: '/services/web-development#website-migration',
      description:
        'Platform migrations from legacy stacks to modern frameworks with zero data loss.',
    },
  ],

  seo: [
    {
      icon: RiWordpressLine,
      header: 'WordPress SEO',
      href: '/services/digital-marketing#wordpress-seo',
      description:
        'Technical and on-page SEO built specifically for WordPress sites. Clean structure, fast load times, proper schema.',
    },
    {
      icon: RiShoppingBag2Line,
      header: 'WooCommerce SEO',
      href: '/services/digital-marketing#woocommerce-seo',
      description:
        'Product pages, category structure and schema optimised for search. Built to rank and convert.',
    },
    {
      icon: RiShoppingCart2Line,
      header: 'Custom Ecommerce SEO',
      href: '/services/digital-marketing#custom-ecommerce-seo',
      description:
        'SEO architecture for Next.js ecommerce builds. Performance-first, crawl-friendly and conversion-ready.',
    },
    {
      icon: RiMapPinLine,
      header: 'Local SEO',
      href: '/services/digital-marketing#local-seo',
      description:
        'Get found by customers in your area. Citations, location pages and Google Business optimisation.',
    },
    {
      icon: RiGlobalLine,
      header: 'GEO',
      href: '/services/digital-marketing#geo',
      description:
        'Generative Engine Optimisation. We structure your content to appear in AI-powered search results and answer engines.',
    },
    {
      icon: RiMoneyDollarCircleLine,
      header: 'SEO & PPC',
      href: '/services/digital-marketing#seo-ppc',
      description:
        'Organic and paid working together. We align your SEO strategy with targeted PPC campaigns for faster results.',
    },
    {
      icon: RiStoreLine,
      header: 'Google Business Setup',
      href: '/services/digital-marketing#google-business',
      description:
        'Full Google Business profile setup and optimisation. Reviews, posts, categories and local visibility sorted.',
    },
    {
      icon: RiDatabase2Line,
      header: 'Digital Foundation',
      href: '/services/digital-marketing#digital-foundation',
      description:
        'GA4, Search Console, GTag, branded email and automated review system. Everything configured and ready from day one.',
    },
  ],

  branding: [
    {
      icon: RiBriefcaseLine,
      header: 'Brand Strategy',
      href: '/services/ui-ux-design#brand-strategy',
      description:
        'Positioning, audience definition and messaging framework. We define who you are before we design anything.',
    },
    {
      icon: RiShieldLine,
      header: 'Brand Identity',
      href: '/services/ui-ux-design#brand-identity',
      description:
        'Logo, colour system, typography and usage guidelines. A complete visual identity built to last.',
    },
    {
      icon: RiPrinterLine,
      header: 'Print & Signage Design',
      href: '/services/ui-ux-design#print-signage',
      description:
        'Business cards, flyers, banners, boards and physical collateral designed to the same standard as your digital presence.',
    },
    {
      icon: RiInstagramLine,
      header: 'Social Media Branding',
      href: '/services/ui-ux-design#social-media-branding',
      description:
        'Profile assets, post templates and platform-ready visuals. Your brand looking sharp everywhere it shows up.',
    },
    {
      icon: RiImageLine,
      header: 'Illustration & Graphics',
      href: '/services/ui-ux-design#illustration-graphics',
      description:
        'Custom illustrations, icons and visual assets. Distinctive, on-brand and built for any format.',
    },
    {
      icon: RiFilmLine,
      header: 'Video Editing',
      href: '/services/ui-ux-design#video-editing',
      description:
        'Footage editing and social-ready video content. Clean cuts, proper pacing, ready to publish.',
    },
  ],
}

export function WhyChooseUsSection() {
  const [activeTab, setActiveTab] = useState<TabId>('web')
  const [visible, setVisible] = useState(true)

  const handleTabChange = (id: TabId) => {
    if (id === activeTab) return
    setVisible(false)
    setTimeout(() => {
      setActiveTab(id)
      setVisible(true)
    }, 150)
  }

  const cards = tabCards[activeTab]

  return (
    <section className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem]">
      <Bracket fluid centered padding="small">
        <div className="mx-auto md:max-w-screen-xl">
          {/* Heading */}
          <div className="mb-10 lg:mb-12">
            <h2 className="mb-4 text-[clamp(1.5rem,3vw,2.25rem)] leading-tight font-extrabold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text text-left md:text-center sm:mx-auto max-w-lg md:max-w-2xl lg:max-w-5xl">
              What We Build & Deliver
            </h2>

            {/* Tab bar */}
            <div className="relative mb-8 lg:mb-10">
              <div className="overflow-x-auto scrollbar-hide">
                <div className="flex items-center gap-2 md:justify-center min-w-max mx-auto px-1 pb-1">
                  {tabs.map((tab) => {
                    const isActive = activeTab === tab.id
                    return (
                      <button
                        key={tab.id}
                        onClick={() => handleTabChange(tab.id)}
                        className={`
                          relative flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium
                          transition-all duration-300 cursor-pointer outline-none
                          focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2
                          ${
                            isActive
                              ? 'bg-gradient-text dark:bg-gradient-text-dark text-white dark:text-primary-950 shadow-sm'
                              : 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950 border border-primary-200 dark:border-primary-800 [@media(hover:hover)]:hover:border-primary-400 dark:[@media(hover:hover)]:hover:border-primary-600 [@media(hover:hover)]:hover:text-primary-900 dark:[@media(hover:hover)]:hover:text-primary-100'
                          }
                        `}
                      >
                        <span className="hidden sm:inline">{tab.label}</span>
                        <span className="sm:hidden">{tab.sublabel}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Dynamic tab description */}
            <p
              className={`text-[clamp(0.95rem,1.5vw,1.1rem)] leading-relaxed text-primary-500 dark:text-primary-400 text-left sm:mx-auto md:text-center max-w-lg md:max-w-2xl lg:max-w-5xl transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
            >
              {tabDescriptions[activeTab]}
            </p>
          </div>

          {/* Cards Grid */}
          <div
            className={`space-y-6 sm:grid sm:grid-cols-2 gap-4 sm:space-y-0 lg:grid-cols-3 mb-6 transition-opacity duration-300 ${
              visible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {cards.map(({ icon: Icon, header, description, href }, index) => (
              <Card
                key={`${activeTab}-${index}`}
                size="lg"
                as={Link}
                href={href}
                isIcon
                theme={{
                  background: 'bg-white dark:bg-black',
                  border:
                    'border-opacity-30 border-primary-500 dark:shadow-[0_0_2px_rgba(224,227,230,0.20)] shadow-[0_0_2px_rgba(11,13,15,0.10)]',
                  text: 'text-primary-500 dark:text-primary-600 leading-[1.45] font-normal',
                  hover:
                    '[@media(hover:hover)]:hover:border-opacity-50 [@media(hover:hover)]:hover:shadow-[0_0_3px_rgba(11,13,15,0.15)] [@media(hover:hover)]:dark:shadow-[0_0_2px_rgba(224,227,230,0.20)] focus-within:border-opacity-100 active:border-opacity-100',
                }}
                cover={
                  <div className="size-14 flex items-center justify-center border border-primary-100 dark:border-primary-900 rounded-lg">
                    <Icon size={24} className="text-secondary-700 dark:text-secondary-300" />
                  </div>
                }
                header={
                  <span className="font-bold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-2">
                    {header}
                  </span>
                }
              >
                {description}
              </Card>
            ))}
          </div>
        </div>
      </Bracket>
    </section>
  )
}
