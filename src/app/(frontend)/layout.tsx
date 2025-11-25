import './globals.css'
import { ThemeScript } from '@thirdbracket/bracketui'
import Header from '../../components/Header'
import SiteFooter from '../../components/Footer'
import { Settings } from '../../utilities/meta'
import { Metadata } from 'next'

import GTM from '@/components/GTM'
import { Inter } from 'next/font/google'

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-5LLRMTFW'
const roboto = Inter({
  subsets: ['latin'],
  // weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  preload: true,
  variable: '--font-roboto',
})

const baseUrl = Settings.metadataBase

export const metadata: Metadata = {
  title: {
    template: `%s | ${Settings.title}`,
    default: `Web Design & Development Agency Manchester | ${Settings.title}`,
  },

  metadataBase: new URL(baseUrl),
  description: Settings.description,
  keywords: Settings.keywords,
  openGraph: {
    type: Settings.openGraph.type,
    url: baseUrl,
    title: Settings.openGraph.title,
    description: Settings.openGraph.description,
    siteName: Settings.openGraph.siteName,
    images: Settings.openGraph.images.map((image) => ({
      ...image,
      url: `${baseUrl}${image.url}`,
    })),
  },
  twitter: {
    card: Settings.twitter.card,
    title: Settings.twitter.title,
    description: Settings.twitter.description,
    site: Settings.twitter.site,
    images: Settings.twitter.images.map((image) => ({
      ...image,
      url: `${baseUrl}${image.url}`,
    })),
  },

  alternates: {
    languages: {
      'en-GB': baseUrl,
    },
  },
}

const websiteJsonLd = {
  '@context': 'https://schema.org',

  '@type': 'WebSite',

  url: 'https://www.thirdbracket.co.uk',

  name: 'Third Bracket',

  publisher: {
    '@type': 'Organization',

    name: 'Third Bracket',

    url: 'https://www.thirdbracket.co.uk',

    sameAs: [
      'https://www.thirdbracket.co.uk/about',

      'https://www.linkedin.com/company/thirdbracket/',
      'https://www.youtube.com/@thirdbracketuk',

      'https://github.com/thirdbracketuk',
      'https://www.facebook.com/thirdbracketuk/',
      'https://www.google.com/search?kgmid=/g/11lnppz35t&q=Third+Bracket',
      'https://www.instagram.com/thirdbracketuk',
    ],

    image: [
      'https://www.thirdbracket.co.uk/logo.svg',
      'https://www.thirdbracket.co.uk/og-image.png',
      'https://www.thirdbracket.co.uk/services/web.svg',
      'https://www.thirdbracket.co.uk/services/ui.svg',
      'https://www.thirdbracket.co.uk/services/digital.svg',
    ],

    logo: {
      '@type': 'ImageObject',
      url: 'https://www.thirdbracket.co.uk/logo.svg',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '340 Dickenson Rd',
      addressLocality: 'Longsight',
      addressCountry: 'GB',
      addressRegion: 'North-west',
      postalCode: 'M130NG',
    },

    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Manchester',
    },

    description:
      'Third Bracket delivers custom website design, development, SEO, branding, and creative solutions for UK businesses.',
    email: 'hello@thirdbracket.co.uk',
    telephone: '+44-7425-694261',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <meta name="msvalidate.01" content="46803F5EEF01F535EF3999B5E1F48682" />
        <ThemeScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([websiteJsonLd]),
          }}
        />

        <meta name="facebook-domain-verification" content="jvzc8wivgbd7yp2malwzexmw1rj7rh" />
      </head>
      <body suppressHydrationWarning>
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
              title="gtm-noscript" // Added title for accessibility
            />
          </noscript>
        )}

        <Header />
        <main className="bg-gradient-primary-dark dark:bg-gradient-primary py-[6rem] sm:py-[6.5rem]  lg:py-[8rem]  ">
          {children}
        </main>
        <SiteFooter />
        <GTM gtmId={GTM_ID} />
      </body>
    </html>
  )
}
