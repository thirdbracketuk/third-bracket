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
import { LogoNew } from './Logo/LogoNew'

const SiteFooter = () => {
  return (
    <Footer
      theme={{
        background: 'bg-white dark:bg-black',
        border: 'border-primary-500/40',
      }}
    >
      <FooterSection className="col-span-2 !py-4 md:py-0">
        <FooterBrand logo={<LogoNew className="h-4 lg:h-5" />}>
          <p className="text-primary-600 dark:text-primary-500 text-base ">
            Making the web a better place with Third Bracket Ltd.
          </p>
          <p className="text-primary-600 dark:text-primary-500 text-base ">
            hello@thirdbracket.co.uk
          </p>
        </FooterBrand>

        <div className="flex  gap-x-6 justify-start items-center">
          <FooterSocial
            href="https://www.facebook.com/thirdbracketuk"
            icon={<RiFacebookLine size={20} />}
            label="Facebook"
          />
          <FooterSocial
            href="https://www.linkedin.com/company/thirdbracket"
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
          theme={{
            text: 'text-primary-900 dark:text-primary-50',
            states:
              'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
          }}
          href="#"
        >
          Verify Property
        </FooterLink>
        <FooterLink
          theme={{
            text: 'text-primary-900 dark:text-primary-50',
            states:
              'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
          }}
          href="#"
        >
          Products of Bd
        </FooterLink>
        <FooterLink
          theme={{
            text: 'text-primary-900 dark:text-primary-50',
            states:
              'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
          }}
          href="#"
        >
          Habiganj Properties
        </FooterLink>
      </FooterSection>

      <FooterSection title="Legal">
        <FooterLink
          theme={{
            text: 'text-primary-900 dark:text-primary-50',
            states:
              'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
          }}
          href="#"
        >
          Privacy Policy
        </FooterLink>
        <FooterLink
          theme={{
            text: 'text-primary-900 dark:text-primary-50',
            states:
              'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
          }}
          href="#"
        >
          Terms
        </FooterLink>
      </FooterSection>
      <FooterSection title="Bracket UI">
        <FooterLink
          theme={{
            text: 'text-primary-900 dark:text-primary-50',
            states:
              'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
          }}
          href="#"
        >
          Components
        </FooterLink>
        <FooterLink
          theme={{
            text: 'text-primary-900 dark:text-primary-50',
            states:
              'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
          }}
          href="#"
        >
          Blocks
        </FooterLink>
        <FooterLink
          theme={{
            text: 'text-primary-900 dark:text-primary-50',
            states:
              'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
          }}
          href="#"
        >
          Pages
        </FooterLink>
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
        <FooterText>© 2025 Third Bracket Ltd.</FooterText>

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
