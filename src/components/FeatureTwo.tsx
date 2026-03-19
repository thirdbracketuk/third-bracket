// 'use client'

// import {
//   RiAdminLine,
//   RiArticleLine,
//   RiBox1Line,
//   RiBracesLine,
//   RiLayout2Line,
//   RiNextjsLine,
//   RiSearchLine,
//   RiSeoLine,
//   RiShoppingCart2Line,
//   RiStackLine,
//   RiTailwindCssFill,
//   RiTailwindCssLine,
//   RiUbuntuLine,
//   RiWordpressLine,
// } from 'react-icons/ri'
// import { PiBracketsSquareBold } from 'react-icons/pi'

// import { Bracket, Card } from '@thirdbracket/bracketui'
// import Link from 'next/link'

// const features = [
//   {
//     icon: RiNextjsLine,
//     header: 'Custom Web Development',
//     href: '/services',
//     description:
//       'thirdbracket offers custom web development with Next.js - built for speed and advanced functionalities.',
//   },
//   {
//     icon: RiWordpressLine,
//     header: 'WordPress Website Development',
//     href: '/services',
//     description:
//       'Speed-optimized, secure, and easily manageable WordPress websites — perfect for content-heavy brands.',
//   },

//   {
//     icon: RiTailwindCssLine,
//     header: 'Tailwind UI Design',
//     href: '/services',
//     description:
//       'At thirdbracket, we craft clean, responsive UI designs with Tailwind CSS — focused on speed, clarity and modern patterns.',
//   },

//   {
//     icon: RiUbuntuLine,
//     header: 'VPS setup & Cloud Integration',
//     href: '/services',
//     description:
//       'From deployment pipelines to domain setup and server configs — we take care of everything behind the scenes.',
//   },
//   {
//     icon: RiSearchLine,
//     header: 'Search Engine Optimization',
//     href: '/services',
//     description:
//       'On-page SEO, meta setup, google analytics, schema markup, opengraph, google business and search console',
//   },
//   {
//     icon: RiAdminLine,
//     header: 'Custom Admin Panel',
//     href: '/services',
//     description:
//       'Need control? We build intuitive, secure admin dashboards that give you full ownership over your website.',
//   },
//   {
//     icon: RiSeoLine,
//     header: 'Digital Marketing',
//     href: '/services',
//     description:
//       'Integrated solutions for analytics, SEO, and performance tracking to grow traffic and boost conversions.',
//   },
// ]

// export function WhyChooseUsSection() {
//   return (
//     <section className="py-[3rem] sm:py-[3.75rem]  lg:py-[4rem] ">
//       <Bracket fluid centered padding="small">
//         <div className="mx-auto md:max-w-screen-xl">
//           <div className="mb-10 lg:mb-16">
//             <h2 className="mb-4 text-[1.75rem]/[1.4] lg:text-3xl  font-extrabold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text text-left md:text-center sm:mx-auto max-w-lg md:max-w-2xl lg:max-w-5xl tracking-tight">
//               What We Build & Deliver
//             </h2>
//             <p className=" text-primary-500  text-base/7  lg:text-[1.15rem]/8  text-left sm:mx-auto md:text-center  max-w-lg md:max-w-2xl lg:max-w-5xl">
//               From modern websites to tailored systems, thirdbracket help UK businesses thrive
//               with reliable, high-performance web development.
//             </p>
//           </div>

//           <div className="space-y-6 sm:grid sm:grid-cols-2 gap-4 sm:space-y-0 lg:grid-cols-3 ">
//             {features.map(({ icon: Icon, header, description, href }, index) => (
//               <Card
//                 key={index}
//                 size="lg"
//                 as={Link}
//                 href={href}
//                 isIcon
//                 theme={{
//                   background: 'bg-gradient-secondary-dark   dark:bg-gradient-secondary      ',
//                   border:
//                     'border-opacity-30  border-primary-500  dark:shadow-[0_0_2px_rgba(224,227,230,0.20)]  shadow-[0_0_2px_rgba(11,13,15,0.10)]',

//                   text: ' text-primary-500  leading-[1.45] font-normal last:max-w-3xl',
//                   hover:
//                     '[@media(hover:hover)]:hover:border-opacity-50    [@media(hover:hover)]:hover:shadow-[0_0_3px_rgba(11,13,15,0.15)] [@media(hover:hover)]:dark:shadow-[0_0_2px_rgba(224,227,230,0.20)]         focus-within:border-opacity-100 active:border-opacity-100 ',
//                 }}
//                 cover={
//                   <div className="w-16 h-16 mb-4 flex items-center   justify-center   border  border-primary-100 dark:border-primary-900     rounded-xl bg-gradient-primary-dark  dark:bg-gradient-primary">
//                     <Icon size={32} className="text-secondary-700 dark:text-secondary-300" />
//                   </div>
//                 }
//                 header={
//                   <span className="font-semibold bg-gradient-text tracking-tight  dark:bg-gradient-text-dark text-transparent bg-clip-text mb-2 ">
//                     {header}
//                   </span>
//                 }
//               >
//                 {description}
//               </Card>
//             ))}
//           </div>
//         </div>
//       </Bracket>
//     </section>
//   )
// }

'use client'

import { useState, useEffect } from 'react'
import {
  RiNextjsLine,
  RiWordpressLine,
  RiShoppingCart2Line,
  RiLayout2Line,
  RiBracesLine,
  RiRefreshLine,
  RiToolsLine,
  RiSpeedLine,
  RiExchangeLine,
  RiSearchLine,
  RiMapPinLine,
  RiCodeLine,
  RiArticleLine,
  RiFileTextLine,
  RiLinkM,
  RiMailLine,
  RiMoneyDollarCircleLine,
  RiGroupLine,
  RiBrushLine,
  RiShieldLine,
  RiPrinterLine,
  RiStoreLine,
  RiQuillPenLine,
  RiInstagramLine,
  RiBookOpenLine,
  RiAwardLine,
  RiDatabase2Line,
  RiGridLine,
  RiImageLine,
  RiRocketLine,
  RiLayoutLine,
  RiPlugLine,
  RiGlobalLine,
  RiAdminLine,
  RiTranslate2,
  RiHardDriveLine,
  RiServerLine,
  RiRestaurantLine,
  RiBuildingLine,
  RiNewspaperLine,
  RiSlideshowLine,
  RiBriefcaseLine,
  RiBook3Line,
  RiListCheck2,
  RiCalendarLine,
  RiUserStarLine,
} from 'react-icons/ri'
import { PiBracketsSquareBold } from 'react-icons/pi'

import { Bracket, Card } from '@thirdbracket/bracketui'
import Link from 'next/link'

type TabId = 'web' | 'seo' | 'branding' | 'design' | 'tools' | 'industry'

interface FeatureCard {
  icon: React.ElementType
  header: string
  href: string
  description: string
}

interface Tab {
  id: TabId
  label: string
  group: 'Services' | 'Solutions'
}

const tabs: Tab[] = [
  { id: 'web', label: 'Web', group: 'Services' },
  { id: 'seo', label: 'SEO', group: 'Services' },
  { id: 'branding', label: 'Branding', group: 'Services' },
  { id: 'design', label: 'Design', group: 'Solutions' },
  { id: 'tools', label: 'Tools', group: 'Solutions' },
  { id: 'industry', label: 'Industry', group: 'Solutions' },
]

const tabCards: Record<TabId, FeatureCard[]> = {
  web: [
    {
      icon: RiNextjsLine,
      header: 'Next.js Development',
      href: '/services/web-development#nextjs-development',
      description:
        'Blazing-fast, SEO-ready web applications built with Next.js — perfect for modern businesses that demand performance.',
    },
    {
      icon: RiWordpressLine,
      header: 'WordPress Development',
      href: '/services/web-development#wordpress-development',
      description:
        'Speed-optimised, secure, and easily manageable WordPress websites — ideal for content-heavy and business sites.',
    },
    {
      icon: RiShoppingCart2Line,
      header: 'E-commerce Development',
      href: '/services/web-development#e-commerce-development',
      description:
        'Custom-built online stores with seamless checkout, inventory management, and conversion-focused design.',
    },
    {
      icon: RiLayout2Line,
      header: 'Bespoke Web Design',
      href: '/services/web-development#bespoke-web-design',
      description:
        'Pixel-perfect, brand-aligned web designs crafted from scratch — no templates, just your vision made real.',
    },
    {
      icon: RiBracesLine,
      header: 'Bespoke Web Development',
      href: '/services/web-development#bespoke-web-development',
      description:
        'Fully custom web development tailored to your business logic, integrations, and unique technical requirements.',
    },
    {
      icon: RiRefreshLine,
      header: 'Website Redesign',
      href: '/services/web-development#website-redesign',
      description:
        'Modernise your outdated site with a fresh look, improved UX, and performance gains that make a real difference.',
    },
    {
      icon: RiToolsLine,
      header: 'Website Repair',
      href: '/services/web-development#website-repair',
      description:
        'Broken layouts, bugs, or security issues? We diagnose and fix your site quickly to get you back on track.',
    },
    {
      icon: RiSpeedLine,
      header: 'Website Optimisation',
      href: '/services/web-development#website-optimization',
      description:
        'Core Web Vitals, Lighthouse scores, caching, and image optimisation — we make your site fast and efficient.',
    },
    {
      icon: RiExchangeLine,
      header: 'Website Migration',
      href: '/services/web-development#migration-modernization',
      description:
        'Seamless platform migrations — from legacy stacks to modern frameworks — with zero data loss and minimal downtime.',
    },
  ],

  seo: [
    {
      icon: RiSearchLine,
      header: 'Full SEO',
      href: '/services/digital-marketing#search-engine-optimisation',
      description:
        'End-to-end SEO strategy covering on-page, off-page, and technical optimisation to dominate search rankings.',
    },
    {
      icon: RiMapPinLine,
      header: 'Local SEO',
      href: '/services/digital-marketing#search-engine-marketing',
      description:
        'Get found by local customers — Google Business optimisation, local citations, and location-based keyword targeting.',
    },
    {
      icon: RiCodeLine,
      header: 'Technical SEO',
      href: '/services/digital-marketing#content-marketing',
      description:
        'Schema markup, site architecture, crawlability audits, and Core Web Vitals fixes to strengthen your SEO foundation.',
    },
    {
      icon: RiArticleLine,
      header: 'Content Marketing',
      href: '/services/digital-marketing#affiliate-marketing',
      description:
        'Strategic content creation that attracts, engages, and converts — built around what your audience actually searches for.',
    },
    {
      icon: RiFileTextLine,
      header: 'Copywriting',
      href: '/services/digital-marketing#email-marketing',
      description:
        'Persuasive, keyword-rich copy for landing pages, blogs, and ads that ranks well and drives real action.',
    },
    {
      icon: RiLinkM,
      header: 'Link Building',
      href: '/services/digital-marketing#social-media-marketing',
      description:
        'White-hat backlink acquisition through outreach and quality content to boost domain authority and rankings.',
    },
    {
      icon: RiMailLine,
      header: 'Email Marketing',
      href: '/services/digital-marketing#conversational-marketing',
      description:
        'Automated, segmented email campaigns that nurture leads, re-engage customers, and deliver measurable ROI.',
    },
    {
      icon: RiMoneyDollarCircleLine,
      header: 'Paid Advertising',
      href: '/services/digital-marketing#ppc-advertising',
      description:
        'Google Ads and PPC campaigns managed for maximum return — targeted, trackable, and continuously optimised.',
    },
    {
      icon: RiGroupLine,
      header: 'Social Media Marketing',
      href: '/services/digital-marketing#marketing-analytics-audit',
      description:
        'Platform-specific strategies across Instagram, LinkedIn, and more to grow your brand and generate qualified leads.',
    },
  ],

  branding: [
    {
      icon: RiBriefcaseLine,
      header: 'Brand Strategy',
      href: '/services/ui-ux-design#ui-ux-design',
      description:
        'Define your brand positioning, messaging, and competitive edge with a clear strategy that resonates with your audience.',
    },
    {
      icon: RiShieldLine,
      header: 'Brand Identity',
      href: '/services/ui-ux-design#website-design',
      description:
        'Logo design, colour palette, typography, and visual language — everything that makes your brand instantly recognisable.',
    },
    {
      icon: RiBrushLine,
      header: 'Graphic Design',
      href: '/services/ui-ux-design#website-redesign',
      description:
        'Creative graphic design for digital and print — from banners and infographics to illustrations and marketing assets.',
    },
    {
      icon: RiPrinterLine,
      header: 'Print Design',
      href: '/services/ui-ux-design#social-media-design',
      description:
        'Business cards, brochures, flyers, and packaging — professionally designed for maximum visual impact in print.',
    },
    {
      icon: RiStoreLine,
      header: 'Business Listing',
      href: '/services/ui-ux-design#branding',
      description:
        'Optimised and consistent business listings across Google, Bing, and directories to improve local trust and visibility.',
    },
    {
      icon: RiQuillPenLine,
      header: 'Website Creative',
      href: '/services/ui-ux-design#design-system-development',
      description:
        'Art direction, layout design, and creative concepts for websites that make a lasting first impression.',
    },
    {
      icon: RiInstagramLine,
      header: 'Social Media',
      href: '/services/ui-ux-design#graphic-design',
      description:
        'On-brand social media visuals, templates, and content kits that keep your feeds looking sharp and consistent.',
    },
    {
      icon: RiBookOpenLine,
      header: 'Brand Guidelines',
      href: '/services/ui-ux-design#elementor-template-design',
      description:
        'A comprehensive brand guidelines document ensuring consistent use of your identity across every channel and touchpoint.',
    },
    {
      icon: RiAwardLine,
      header: 'Brand Audit',
      href: '/services/ui-ux-design#printable-design',
      description:
        'A full review of your existing brand to identify gaps, inconsistencies, and opportunities to strengthen your presence.',
    },
  ],

  design: [
    {
      icon: PiBracketsSquareBold,
      header: 'BracketUI',
      href: '/solutions/design-solutions#bracketui',
      description:
        'Our open-source React component library — accessible, beautifully styled, and ready for production use.',
    },
    {
      icon: RiLayoutLine,
      header: 'Elementor Templates',
      href: '/solutions/design-solutions#elementor-template',
      description:
        'Professionally designed Elementor page templates to launch stunning WordPress websites without starting from scratch.',
    },
    {
      icon: RiLayout2Line,
      header: 'Tailwindcss Templates',
      href: '/solutions/design-solutions#tailwindcss-templates',
      description:
        'Clean, responsive Tailwind CSS templates built for speed, flexibility, and easy customisation for any project.',
    },
    {
      icon: RiCodeLine,
      header: 'HTML5 Templates',
      href: '/solutions/design-solutions#html5-templates',
      description:
        'Lightweight, standards-compliant HTML5 templates — no framework dependencies, just clean and portable code.',
    },
    {
      icon: RiFileTextLine,
      header: 'Hugo Theme',
      href: '/solutions/design-solutions#hugo-themes',
      description:
        'Fast and minimal Hugo themes for blogs, portfolios, and documentation sites — built for the Jamstack era.',
    },
    {
      icon: RiGridLine,
      header: 'Icon Packs',
      href: '/solutions/design-solutions#icon-packs',
      description:
        'Curated SVG icon sets in multiple styles — consistent, scalable, and ready to drop into any web project.',
    },
    {
      icon: RiImageLine,
      header: 'SVG Illustrations',
      href: '/solutions/design-solutions#svg-illustration',
      description:
        'Hand-crafted SVG illustration packs for hero sections, empty states, and feature visuals across any web product.',
    },
    {
      icon: RiRocketLine,
      header: 'Starter Kit',
      href: '/solutions/design-solutions#starter-kit',
      description:
        'Full-featured starter kits with pre-configured tooling, component structure, and design tokens to jumpstart projects.',
    },
    {
      icon: RiBracesLine,
      header: 'UI Kits',
      href: '/solutions/design-solutions#ui-kits',
      description:
        'Comprehensive UI kits with forms, cards, navbars, modals, and more — designed in Figma and ready to code.',
    },
  ],

  tools: [
    {
      icon: RiNextjsLine,
      header: 'Next.js Starter',
      href: '/solutions/platform-tools#nextjs-starter',
      description:
        'A production-ready Next.js boilerplate with auth, routing, SEO, and styling pre-configured — ship faster.',
    },
    {
      icon: RiDatabase2Line,
      header: 'PayloadCMS Starter',
      href: '/solutions/platform-tools#payloadcms-starter',
      description:
        'Headless CMS starter built on PayloadCMS — flexible content types, REST/GraphQL API, and full TypeScript support.',
    },
    {
      icon: RiArticleLine,
      header: 'Notion Blog',
      href: '/solutions/platform-tools#notion-blog',
      description:
        'Turn your Notion workspace into a fully functional blog — with ISR, custom styling, and zero-code content management.',
    },
    {
      icon: RiPlugLine,
      header: 'CMS Integration',
      href: '/solutions/platform-tools#cms-integration',
      description:
        'Connect any headless CMS — Sanity, Contentful, Strapi, or Payload — into your Next.js or WordPress stack.',
    },
    {
      icon: RiGlobalLine,
      header: 'Geo Redirect',
      href: '/solutions/platform-tools#geo-redirect',
      description:
        'Smart geo-based redirect logic that routes visitors to region-specific content, pricing, or language variants.',
    },
    {
      icon: RiAdminLine,
      header: 'Admin Panel',
      href: '/solutions/platform-tools#admin-panel',
      description:
        'Custom admin dashboards with role-based access, data management, and clean UX — built for real business workflows.',
    },
    {
      icon: RiTranslate2,
      header: 'Internationalization',
      href: '/solutions/platform-tools#internationalization',
      description:
        'Multi-language support with next-intl or i18next — locale routing, translated content, and RTL compatibility.',
    },
    {
      icon: RiHardDriveLine,
      header: 'Asset Management',
      href: '/solutions/platform-tools#asset-management',
      description:
        'Centralised media and asset management pipelines with CDN integration, optimisation, and organised storage.',
    },
    {
      icon: RiServerLine,
      header: 'VPS Setup',
      href: '/solutions/platform-tools#vps-setup',
      description:
        'Full VPS provisioning — Nginx, SSL, PM2, and CI/CD pipelines — so your site runs securely on your own infrastructure.',
    },
  ],

  industry: [
    {
      icon: RiRestaurantLine,
      header: 'Restaurant',
      href: '/solutions/industry-solutions#bracketui',
      description:
        'Ready-to-launch restaurant websites with menus, reservations, opening hours, and local SEO baked right in.',
    },
    {
      icon: RiBuildingLine,
      header: 'Real Estate',
      href: '/solutions/industry-solutions#real-estate',
      description:
        'Property listing platforms with search filters, map integration, agent profiles, and lead capture forms.',
    },
    {
      icon: RiNewspaperLine,
      header: 'Blog',
      href: '/solutions/industry-solutions#blog',
      description:
        'High-performance blog systems with categories, tags, newsletter integration, and optimised for organic search.',
    },
    {
      icon: RiSlideshowLine,
      header: 'Landing Page',
      href: '/solutions/industry-solutions#landing-page',
      description:
        'Conversion-focused landing pages with A/B testing support, fast load times, and clear calls to action.',
    },
    {
      icon: RiBriefcaseLine,
      header: 'Portfolio',
      href: '/solutions/industry-solutions#portfolio',
      description:
        'Stunning portfolio websites for creatives and agencies — case studies, project galleries, and contact flows.',
    },
    {
      icon: RiBook3Line,
      header: 'LMS',
      href: '/solutions/industry-solutions#lms',
      description:
        'Learning management systems with course builder, student progress tracking, payments, and video support.',
    },
    {
      icon: RiListCheck2,
      header: 'Directory Listing',
      href: '/solutions/industry-solutions#directory-listing',
      description:
        'Searchable directory platforms for businesses, professionals, or services — with filters, ratings, and map view.',
    },
    {
      icon: RiCalendarLine,
      header: 'Booking & Reservation',
      href: '/solutions/industry-solutions#booking',
      description:
        'Real-time booking systems for salons, clinics, hotels, and events — with calendar sync and payment integration.',
    },
    {
      icon: RiUserStarLine,
      header: 'Membership',
      href: '/solutions/industry-solutions#membership',
      description:
        'Gated membership sites with subscription tiers, exclusive content, user dashboards, and recurring billing.',
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
          {/* Heading & Description */}
          <div className="mb-10 lg:mb-12">
            <h2 className="mb-4    text-[clamp(1.5rem,3vw,2.25rem)] leading-tight font-extrabold  bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text text-left md:text-center sm:mx-auto max-w-lg md:max-w-2xl lg:max-w-5xl">
              What We Build & Deliver
            </h2>

            {/* Horizontal Scrollable Tabs */}
            <div className="relative mb-8 lg:mb-10">
              {/* Group labels — desktop only */}
              <div className="hidden md:flex items-center justify-center gap-1 mb-3">
                {(['Services', 'Solutions'] as const).map((group) => {
                  const groupTabs = tabs.filter((t) => t.group === group)
                  const isGroupActive = groupTabs.some((t) => t.id === activeTab)
                  return (
                    <span
                      key={group}
                      className={`text-[clamp(0.72rem,1.2vw,0.78rem)] leading-none font-medium px-3 py-1 rounded-full transition-colors duration-300 ${
                        isGroupActive
                          ? 'text-primary-800 dark:text-secondary-100 bg-gradient-accent-dark dark:bg-gradient-accent  '
                          : 'text-primary-400 dark:text-primary-600'
                      }`}
                    >
                      {group}
                    </span>
                  )
                })}
              </div>

              {/* Tab bar */}
              <div className="overflow-x-auto scrollbar-hide">
                <div className="flex items-center gap-2 md:justify-center min-w-max mx-auto px-1 pb-1">
                  {tabs.map((tab, i) => {
                    const isActive = activeTab === tab.id
                    const showDivider = i === 3

                    return (
                      <div key={tab.id} className="flex items-center gap-2">
                        {showDivider && (
                          <span className="hidden md:block w-px h-5 bg-primary-200 dark:bg-primary-800 mx-1 flex-shrink-0" />
                        )}
                        <button
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
                          {tab.label}
                        </button>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Cards Grid */}
            <p className="text-[clamp(0.95rem,1.5vw,1.1rem)] leading-relaxed text-primary-500 dark:text-primary-400 text-left sm:mx-auto md:text-center max-w-lg md:max-w-2xl lg:max-w-5xl">
              From modern websites to tailored systems, thirdbracket help UK businesses thrive with
              reliable, high-performance web development.
            </p>
          </div>
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
                  text: 'text-primary-500 dark:text-primary-600 leading-[1.45] font-normal last:max-w-3xl',
                  hover:
                    '[@media(hover:hover)]:hover:border-opacity-50 [@media(hover:hover)]:hover:shadow-[0_0_3px_rgba(11,13,15,0.15)] [@media(hover:hover)]:dark:shadow-[0_0_2px_rgba(224,227,230,0.20)] focus-within:border-opacity-100 active:border-opacity-100',
                }}
                cover={
                  <div
                    // className="size-14 mb-4 flex items-center justify-center border border-primary-100 dark:border-primary-900 rounded-lg bg-gradient-secondary-dark dark:bg-gradient-secondary"
                    className="size-14  flex items-center justify-center border border-primary-100 dark:border-primary-900 rounded-lg "
                  >
                    <Icon size={24} className="text-secondary-700 dark:text-secondary-300" />
                  </div>
                }
                header={
                  <span className="font-bold bg-gradient-text dark:bg-gradient-text-dark   text-transparent bg-clip-text mb-2">
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
