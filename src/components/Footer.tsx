import {
  Footer,
  FooterBottom,
  FooterBrand,
  FooterLink,
  FooterSection,
  FooterSocial,
  FooterText,
  ThemeToggle,
} from '@thirdbracket/bracketui'

import {
  RiFacebookLine,
  RiGithubLine,
  RiGoogleLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiWhatsappLine,
  RiYoutubeLine,
} from 'react-icons/ri'
import { Logo } from '@/components/Logo'

const SiteFooter = () => {
  return (
    <Footer
      theme={{
        background: 'bg-white dark:bg-black',
        border: 'border-primary-500/40',
      }}
    >
      <FooterSection className="col-span-2 !py-4 md:py-0">
        <FooterBrand logo={<Logo className="text-secondary-900 dark:text-secondary-100 h-6" />}>
          <p className="text-primary-600 dark:text-primary-500   leading-relaxed ">
            High-performance web design and SEO built for SMEs.
          </p>
          <p className="text-primary-600 dark:text-primary-500 text-  leading-relaxed ">
            hello@thirdbracket.co.uk
          </p>
        </FooterBrand>

        <div className="flex  gap-x-6 justify-start items-center">
          <FooterSocial
            href="https://www.facebook.com/thirdbracketltd"
            icon={<RiFacebookLine size={20} />}
            label="Facebook"
          />
          <FooterSocial
            href="https://www.linkedin.com/company/thirdbracketltd"
            icon={<RiLinkedinLine size={20} />}
            label="LinkedIn"
          />
          <FooterSocial
            href="https://github.com/thirdbracketuk"
            icon={<RiGithubLine size={20} />}
            label="Facebook"
          />
          <FooterSocial
            href="https://www.instagram.com/thirdbracketuk"
            icon={<RiInstagramLine size={20} />}
            label="Instagram"
          />
          <FooterSocial
            href="https://www.youtube.com/@thirdbracketuk"
            icon={<RiYoutubeLine size={20} />}
            label="Youtube"
          />
          <FooterSocial
            href="https://www.google.com/search?kgmid=/g/11lnppz35t&q=Third+Bracket"
            icon={<RiGoogleLine size={20} />}
            label="Business"
          />
        </div>
      </FooterSection>

      <FooterSection title="About">
        <FooterLink
          theme={{
            text: 'text-primary-900 dark:text-primary-50',
            states:
              'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
          }}
          href="/about#company"
        >
          Company
        </FooterLink>
        <FooterLink
          theme={{
            text: 'text-primary-900 dark:text-primary-50',
            states:
              'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
          }}
          href="/about#team"
        >
          Team
        </FooterLink>
        <FooterLink
          theme={{
            text: 'text-primary-900 dark:text-primary-50',
            states:
              'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
          }}
          href="/about#roadmap"
        >
          Roadmap
        </FooterLink>
        <FooterLink
          theme={{
            text: 'text-primary-900 dark:text-primary-50',
            states:
              'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
          }}
          href="/about#opensource"
        >
          Open Source
        </FooterLink>
        <FooterLink
          theme={{
            text: 'text-primary-900 dark:text-primary-50',
            states:
              'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
          }}
          href="/about#culture"
        >
          Work culture
        </FooterLink>
      </FooterSection>

      <FooterSection title="Partners">
        <FooterLink
          target="_blank"
          theme={{
            text: 'text-primary-900 dark:text-primary-50',
            states:
              'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
          }}
          href="https://be.elementor.com/visit/?bta=229022&brand=elementor"
        >
          Elementor
        </FooterLink>
        <FooterLink
          target="_blank"
          theme={{
            text: 'text-primary-900 dark:text-primary-50',
            states:
              'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
          }}
          href="https://www.designrush.com/agency/website-design-development/uk/manchester"
        >
          DesignRush
        </FooterLink>
        <FooterLink
          target="_blank"
          theme={{
            text: 'text-primary-900 dark:text-primary-50',
            states:
              'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
          }}
          href="https://www.bayxbengal.com/"
        >
          BayofBengal
        </FooterLink>
      </FooterSection>

      <FooterSection title="Legal">
        <FooterLink
          theme={{
            text: 'text-primary-900 dark:text-primary-50',
            states:
              'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
          }}
          href="/privacy"
        >
          Privacy Policy
        </FooterLink>
        <FooterLink
          theme={{
            text: 'text-primary-900 dark:text-primary-50',
            states:
              'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
          }}
          href="/privacy"
        >
          Terms
        </FooterLink>
      </FooterSection>
      <FooterSection title="Bracket UI">
        <FooterLink
          target="_blank"
          theme={{
            text: 'text-primary-900 dark:text-primary-50',
            states:
              'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
          }}
          href="https://www.npmjs.com/package/bracketui"
        >
          NPM Package
        </FooterLink>
        <FooterLink
          target="_blank"
          theme={{
            text: 'text-primary-900 dark:text-primary-50',
            states:
              'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
          }}
          href="https://github.com/thirdbracketuk/bracketui"
        >
          Source Code
        </FooterLink>
        <FooterLink
          target="_blank"
          theme={{
            text: 'text-primary-900 dark:text-primary-50',
            states:
              'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
          }}
          href="https://bracketui-web.vercel.app/"
        >
          Showcase
        </FooterLink>
        <a
          href="https://www.producthunt.com/products/bracketui-v4?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-bracketui-v4"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-3"
        >
          <img
            alt="BracketUI v4 - Open source TailwindCSS component library for Next.js | Product Hunt"
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1163801&theme=light&t=1780859273126"
            width={250}
            height={54}
            className="block dark:hidden"
          />
          <img
            alt="BracketUI v4 - Open source TailwindCSS component library for Next.js | Product Hunt"
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1163801&theme=dark&t=1780859273126"
            width={250}
            height={54}
            className="hidden dark:block"
          />
        </a>
      </FooterSection>
      {/* <FooterSection title="Useful Links">
        <FooterLink
          href="https://www.business-directory-uk.co.uk/web-design.htm"
          target="_blank"
          rel="noopener noreferrer"
          theme={{
            text: 'text-primary-900 dark:text-primary-50',
            states:
              'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
          }}
        >
          UK Web Designers - Directory of Web Design Companies in the UK
        </FooterLink>
      </FooterSection> */}

      <FooterBottom>
        <FooterText> © {new Date().getFullYear()} thirdbracket. All rights reserved.</FooterText>

        <ThemeToggle />
        {/* <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-start md:items-center">
    <a
      href="https://www.business-directory-uk.co.uk/web-design.htm"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-primary-700 dark:text-primary-500 underline hover:text-primary-800 dark:hover:text-primary-300"
    >
      UK Web Designers - Directory of Web Design Companies in the UK
    </a>
    <ThemeToggle />
  </div> */}
      </FooterBottom>
    </Footer>
  )
}
export default SiteFooter
