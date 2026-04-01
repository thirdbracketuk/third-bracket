import {
  Bracket,
  Megamenu,
  MobileNav,
  Navbar,
  Navbrand,
  NavItem,
  Navlink,
} from '@thirdbracket/bracketui'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { BiArrowToRight, BiChevronRight, BiRightArrow } from 'react-icons/bi'
// import { MdSearch } from 'react-icons/md'

import {
  NavlinkItem,
  MegamenuItem,
  mainNavItems,
  webDevelopmentItems,
  seoGrowthItems,
  brandingCreativeItems,
  resourcesItems,
  // Legacy aliases kept to avoid TS errors from old commented code
  uiUxDesignItems,
  digitalMarketingItems,
  nextjsSolutionsItems,
  wordpressSolutionsItems,
  openSourceSolutionsItems,
  getNavlinkTheme,
  designSolutionsItems,
  platformToolItems,
  industrySolutionsItems,
} from '../data/navigationData'

import { MegamenuProps } from '@thirdbracket/bracketui'
import { HeaderCTAIllustration } from './Feature'
import { FaArrowRight } from 'react-icons/fa'
import { RiArrowRightLine } from 'react-icons/ri'
import { Logo } from '@/components/Logo'

interface MyMegamenuProp extends Omit<MegamenuProps, 'label'> {
  label: React.ReactNode
}

const Header: FC = () => {
  // Helper function to render a navlink
  const renderNavlink = (item: NavlinkItem, isMobile: boolean = false) => {
    const theme = getNavlinkTheme(isMobile, item.isDropdownItem)

    return (
      <Navlink
        key={`${item.label}-${item.href}`}
        theme={theme}
        as={Link}
        href={item.href}
        isDropdownItem={item.isDropdownItem}
        cto={item.cto}
        className={item.icon ? 'block md:inline-flex md:items-center gap-1 ' : undefined}
      >
        {item.label}
        {item.icon && <span>{item.icon}</span>}
      </Navlink>
    )
  }

  // Note: This function is currently not used but kept for future reference
  // If you need to use it later, remove the underscore prefix
  const _renderMegamenuItems = (
    items: (NavlinkItem | MegamenuItem)[],
    isMobile: boolean = true,
    // props: MyMegamenuProp
  ) => {
    return items.map((item) => {
      if ('items' in item) {
        // This is a megamenu item
        return (
          <Megamenu
            key={item.label}
            //  {...(props as MegamenuProps & {label:any})}
            label={item.label}
            theme={
              item.theme ||
              (isMobile
                ? {
                    text: 'text-primary-900 dark:text-primary-200 text-base md:text-sm',
                    states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
                    menu: 'bg-white dark:bg-black',
                  }
                : {
                    text: 'text-primary-900 dark:text-primary-200 text-base md:text-sm',
                    states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
                    menu: 'bg-white dark:bg-black',
                  })
            }
          >
            <div className="space-y-2 py-1.5">{_renderMegamenuItems(item.items, isMobile)}</div>
          </Megamenu>
        )
      } else {
        // This is a navlink item
        return renderNavlink(item, isMobile)
      }
    })
  }

  return (
    <header>
      <Navbar
        theme={{
          background: 'bg-white/88 dark:bg-black/90 backdrop-blur-md backdrop-saturate-[1.8]',
          border:
            'border-black/[0.03] dark:border-white/[0.05] shadow-[0_1px_2px_rgba(0,0,0,0.05),0_0_0_1px_rgba(0,0,0,0.02)] dark:shadow-[inset_0_1px_0_0_rgba(215,93,130,0.25),0_10px_30px_-10px_rgba(215,93,130,0.15),0_0_0_1px_rgba(215,93,130,0.05)]',
          mobileMenu: 'bg-white dark:bg-black',
        }}
      >
        <Navbrand
          logo={<Logo height={20} className="text-secondary-900 dark:text-secondary-100 " />}
          href="/"
        ></Navbrand>

        <NavItem>
          {/* Services Megamenu */}
          <Megamenu
            label="Services"
            theme={{
              text: 'text-primary-900 dark:text-primary-50  text-base md:text-sm',
              states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
              menu: 'bg-white dark:bg-black',
            }}
          >
            <div className="grid w-full grid-flow-col gap-x-8 lg:grid-cols-[280px_repeat(3,1fr)_220px] grid-cols-[280px_repeat(3,1fr)] pb-1">
              <div className="flex flex-col h-full mr-3">
                <div className="flex flex-col space-y-4">
                  <Link
                    href="/services/website-ecommerce"
                    className="opacity-75 focus-within:opacity-100 active:opacity-100 [@media(hover:hover)]:hover:opacity-100 text-primary-900 dark:text-primary-50"
                  >
                    <div className="p-4 bg-secondary-50 dark:bg-secondary-950 border border-primary-300 dark:border-primary-700 rounded-lg ">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-medium">Website & Ecommerce</span>
                        <BiChevronRight size={16} />
                      </div>
                      <div className="text-xs mt-2 text-primary-600 dark:text-primary-400">
                        Bespoke websites and ecommerce development services for businesses.
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/services/seo-growth"
                    className="opacity-75 focus-within:opacity-100 active:opacity-100 [@media(hover:hover)]:hover:opacity-100 text-primary-900 dark:text-primary-50"
                  >
                    <div className="p-4 bg-secondary-50 dark:bg-secondary-950 border border-primary-300 dark:border-primary-700 rounded-lg">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-medium">SEO & Growth</span>
                        <BiChevronRight size={16} />
                      </div>
                      <div className="text-xs mt-2 text-primary-600 dark:text-primary-400">
                        SEO and digital marketing to boost rankings, traffic, and leads.
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/services/branding-creative"
                    className="opacity-75 focus-within:opacity-100 active:opacity-100 [@media(hover:hover)]:hover:opacity-100 text-primary-900 dark:text-primary-50"
                  >
                    <div className="p-4 bg-secondary-50 dark:bg-secondary-950 border border-primary-300 dark:border-primary-700 rounded-lg">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-medium">Branding & Creative</span>
                        <BiChevronRight size={16} />
                      </div>
                      <div className="text-xs mt-2 text-primary-600 dark:text-primary-400">
                        Brand strategy and creative design for website, social media and print.
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <h3 className="text-xs font-medium text-primary-500 dark:text-primary-500 ">
                    Web
                  </h3>
                </div>
                <div className="flex flex-col space-y-[2px]">
                  {webDevelopmentItems.map((item) => renderNavlink(item))}
                </div>
              </div>
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <h3 className="text-xs font-medium text-primary-500 dark:text-primary-500 ">
                    SEO & Growth
                  </h3>
                </div>
                <div className="flex flex-col space-y-[2px]">
                  {seoGrowthItems.map((item) => renderNavlink(item))}
                </div>
              </div>
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <h3 className="text-xs font-medium text-primary-500 dark:text-primary-500 ">
                    Branding & Creative
                  </h3>
                </div>

                <div className="flex flex-col space-y-[2px] ">
                  {brandingCreativeItems.map((item) => renderNavlink(item))}
                </div>
              </div>
              {/* Compact banner column */}
              <div className="hidden lg:flex flex-col justify-center h-full">
                <div className="p-6 bg-gradient-primary-dark dark:bg-gradient-primary border border-primary-500/30 rounded-2xl overflow-hidden relative">
                  {/* Subtle background shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 via-transparent to-accent-500/3 pointer-events-none" />
                  <div className="relative z-10 text-center">
                    <HeaderCTAIllustration />
                    <h3 className="text-base font-semibold text-primary-900 dark:text-primary-50 mb-1.5">
                      Ready to Start?
                    </h3>
                    <p className="text-xs text-primary-600 dark:text-primary-400 mb-4 leading-relaxed">
                      Get agency-quality work without the agency price tag.
                    </p>
                    <Navlink
                      theme={{
                        text: 'text-primary-50 dark:text-primary-950 bg-gradient-text dark:bg-gradient-text-dark px-4 py-2 rounded-lg text-sm font-medium',
                        states: '[@media(hover:hover)]:hover:opacity-90 transition-opacity',
                      }}
                      as={Link}
                      href="/contact"
                    >
                      Start a project
                    </Navlink>
                  </div>
                </div>
              </div>
            </div>
          </Megamenu>

          {/* BracketUI standalone */}
          <Navlink
            theme={{
              text: 'text-primary-900 dark:text-primary-50 text-base md:text-sm',
              states:
                'focus-within:opacity-100 active:opacity-100 [@media(hover:hover)]:hover:opacity-100',
            }}
            as={Link}
            href="/bracketui"
          >
            BracketUI
          </Navlink>

          {/* Resources Megamenu */}
          <Megamenu
            label="Resources"
            theme={{
              text: 'text-primary-900 dark:text-primary-50  text-base md:text-sm',
              states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
              menu: 'bg-white dark:bg-black',
            }}
          >
            <div className="flex flex-col space-y-[2px] py-1 min-w-[180px]">
              {resourcesItems.map((item) => renderNavlink(item))}
            </div>
          </Megamenu>

          {/* Main navigation items */}
          {mainNavItems.map((item) => renderNavlink(item))}

          {/* <Navlink
            theme={{
              text: 'text-primary-900 dark:text-primary-50',
              states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
            }}
            as={Link}
            href="/search"
          >
            <span className="sr-only">Search</span>
            <MdSearch className="w-5 text-primary" />
          </Navlink> */}
        </NavItem>

        <MobileNav>
          <div className="space-y-2 py-1.5">
            <Megamenu
              label="Services"
              theme={{
                text: 'text-primary-900 dark:text-primary-50  text-base md:text-sm',
                states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
                menu: 'bg-white dark:bg-black',
              }}
            >
              <div className="space-y-2 py-1.5">
                <Megamenu
                  label="Website & Ecommerce"
                  theme={{
                    text: 'text-primary-900 dark:text-primary-50  text-base md:text-sm',
                    states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
                    menu: 'bg-white dark:bg-black',
                  }}
                >
                  <div className="space-y-2 py-1.5">
                    {webDevelopmentItems.map((item) => renderNavlink(item, true))}
                  </div>
                </Megamenu>

                <Megamenu
                  label="Seo & Growth"
                  theme={{
                    text: 'text-primary-900 dark:text-primary-50  text-base md:text-sm',
                    states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
                    menu: 'bg-white dark:bg-black',
                  }}
                >
                  <div className="space-y-2 py-1.5">
                    {brandingCreativeItems.map((item) => renderNavlink(item, true))}
                  </div>
                </Megamenu>

                <Megamenu
                  label="Branding & Creative"
                  theme={{
                    text: 'text-primary-900 dark:text-primary-50  text-base md:text-sm',
                    states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
                    menu: 'bg-white dark:bg-black',
                  }}
                >
                  <div className="space-y-2 py-1.5">
                    {seoGrowthItems.map((item) => renderNavlink(item, true))}
                  </div>
                </Megamenu>
              </div>
            </Megamenu>

            <Navlink
              theme={{
                text: 'text-primary-900 dark:text-primary-50 text-base md:text-sm',
                states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
              }}
              as={Link}
              href="/bracketui"
            >
              BracketUI
            </Navlink>

            <Megamenu
              label="Resources"
              theme={{
                text: 'text-primary-900 dark:text-primary-50  text-base md:text-sm',
                states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
                menu: 'bg-white dark:bg-black',
              }}
            >
              <div className="space-y-2 py-1.5">
                {resourcesItems.map((item) => renderNavlink(item, true))}
              </div>
            </Megamenu>

            {/* Main navigation items for mobile */}
            {mainNavItems.map((item) => renderNavlink(item, true))}
          </div>
        </MobileNav>
      </Navbar>
    </header>
  )
}

export default Header
