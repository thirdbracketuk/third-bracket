import './globals.css'
import { ThemeScript } from '@thirdbracket/bracketui'
import Header from '../../components/Header'
import SiteFooter from '../../components/Footer'
import { Settings } from '../../utilities/meta'
import { Metadata } from 'next'

import GTM from '@/components/GTM'
import { Inter } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
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
    canonical: baseUrl,
    languages: {
      'en-GB': baseUrl,
    },
  },
}

// const globalJsonLd = {
//   '@context': 'https://schema.org',
//   '@type': 'Website',
//   url: 'https://www.thirdbracket.co.uk',
//   name: 'Third Bracket',

//   mainEntity: {
//     '@type': 'ProfessionalService',
//     name: 'Third Bracket',
//     url: 'https://www.thirdbracket.co.uk',
//     logo: {
//       '@type': 'ImageObject',
//       url: 'https://www.thirdbracket.co.uk/logo.svg',
//     },
//     description:
//       'Third Bracket is a UK-based digital agency offering affordable web devlopment, UI/UX design, and digital marketing services...',
//     foundingDate: '2024',
//     email: 'hello@thirdbracket.co.uk',
//     telephone: '+44-7425-694261',
//     founder: {
//       '@type': 'Person',
//       name: 'Musabbir Sagar',
//     },
//     sameAs: [
//       'https://www.facebook.com/thirdbracket.co.uk/',
//       'https://www.linkedin.com/company/thirdbracket/',
//       'https://github.com/thirdbracketuk',
//     ],
//     makesOffer: [
//       {
//         '@type': 'Offer',
//         itemOffered: { '@type': 'Service', name: 'Custom Web Development' },
//       },
//       {
//         '@type': 'Offer',
//         itemOffered: { '@type': 'Service', name: 'WordPress Website Development' },
//       },
//       { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tailwind UI Design' } },
//       {
//         '@type': 'Offer',
//         itemOffered: { '@type': 'Service', name: 'VPS setup & Cloud Integration' },
//       },
//       { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Search Engine Optimization' } },
//       { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Admin Panel' } },
//       { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Marketing' } },
//       {
//         '@type': 'Offer',
//         itemOffered: { '@type': 'Service', name: 'Video Production and Photography' },
//       },
//     ],

//     areaServed: [
//       {
//         '@type': 'Country',

//         name: 'United Kingdom',
//       },

//       {
//         '@type': 'Country',

//         name: 'Bangladesh',
//       },
//     ],
//   },
// }

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
        {/* Google Tag Manager - Head */}
        {/* <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5LLRMTFW');
            `,
          }}
        /> */}

        <meta name="gtm-id" content="GTM-5LLRMTFW" />

        <meta name="msvalidate.01" content="46803F5EEF01F535EF3999B5E1F48682" />
        <ThemeScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([websiteJsonLd]),
          }}
        />
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',

              '@graph': [
                {
                  '@type': 'WebPage',

                  '@id': 'https://www.thirdbracket.co.uk/',

                  url: 'https://www.thirdbracket.co.uk',

                  name: 'Third Bracket',

                  description:
                    'Third Bracket is a UK-based web design and development agency offering affordable, high-performance websites for small businesses, startups, and agencies.',

                  isPartOf: {
                    '@id': 'https://www.thirdbracket.co.uk/#website',
                  },

                  about: {
                    '@id': 'https://www.thirdbracket.co.uk/#organization',
                  },
                },

                {
                  '@type': 'WebSite',

                  '@id': 'https://www.thirdbracket.co.uk/#website',

                  url: 'https://www.thirdbracket.co.uk',

                  name: 'Third Bracket',

                  publisher: {
                    '@id': 'https://www.thirdbracket.co.uk/#organization',
                  },
                },

                {
                  '@type': 'Organization',

                  '@id': 'https://www.thirdbracket.co.uk/#organization',
                  url: 'https://www.thirdbracket.co.uk',
                  sameAs: [
                    'https://www.thirdbracket.co.uk/about',

                    'https://www.linkedin.com/company/thirdbracket/',

                    'https://github.com/thirdbracketuk',
                    'https://www.facebook.com/thirdbracket.co.uk/',
                    'https://g.co/kgs/X44FuDP',
                  ],
                  logo: 'https://www.thirdbracket.co.uk/logo.svg',

                  name: 'Third Bracket',
                  description:
                    'Third Bracket is a UK-based web design and development agency offering affordable, high-performance websites for small businesses, startups, and agencies.',
                  email: 'hello@thirdbracket.co.uk',
                  telephone: '+44-7425-694261',
                },
              ],
            }),
          }}
        /> */}
        <meta name="facebook-domain-verification" content="jvzc8wivgbd7yp2malwzexmw1rj7rh" />
      </head>
      <body suppressHydrationWarning>
        {/* <MegaHeader /> */}
        {/* Google Tag Manager - Body */}
        {/* <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5LLRMTFW"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript> */}
        <Header />
        <main className="bg-gradient-primary-dark dark:bg-gradient-primary py-[6rem] sm:py-[6.5rem]  lg:py-[8rem]  ">
          {children}
        </main>
        <SiteFooter />
        <GTM />
        <SpeedInsights />
      </body>
    </html>
  )
}
