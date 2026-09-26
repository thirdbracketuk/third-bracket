import './globals.css'
import { ThemeScript } from '@thirdbracket/bracketui'
import Header from '../../components/Header'
import SiteFooter from '../../components/Footer'
import { Settings } from '../../utilities/meta'
import { Metadata } from 'next'

import GTM from '@/components/GTM'
import { Inter, Noto_Sans_Bengali } from 'next/font/google'
import Script from 'next/script'

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-5LLRMTFW'
const roboto = Inter({
  subsets: ['latin'],
  // weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  preload: true,
  variable: '--font-roboto',
})

const notoBengali = Noto_Sans_Bengali({
  subsets: ['bengali'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-bengali',
})

const baseUrl = Settings.metadataBase

export const metadata: Metadata = {
  title: {
    template: `%s | ${Settings.title}`,
    default: `Web Design & SEO for SMEs | ${Settings.title}`,
  },

  metadataBase: new URL(baseUrl),
  description: Settings.description,

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

const graphJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.thirdbracket.co.uk/#organization',
      name: 'Third Bracket',
      legalName: 'Third Bracket Limited',
      url: 'https://www.thirdbracket.co.uk',
      email: 'hello@thirdbracket.co.uk',
      telephone: '+8801765692886',
      description:
        'ThirdBracket is a web design and SEO agency built to give small businesses access to the quality normally reserved for large corporations. We design high-performance websites and deliver SEO that drives real growth without traditional agency overhead.',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.thirdbracket.co.uk/logo-v2.svg',
      },
      image: [
        'https://www.thirdbracket.co.uk/logo-v2.svg',
        'https://www.thirdbracket.co.uk/og-image.png',
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Nowab Manjil, Town Hall Road, Habiganj Sadar',
        addressLocality: 'Habiganj',
        addressRegion: 'Sylhet',
        postalCode: '3300',
        addressCountry: 'BD',
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Habiganj',
      },
      sameAs: [
        'https://www.linkedin.com/company/thirdbracketltd',
        'https://www.youtube.com/@thirdbracketltd',
        'https://github.com/thirdbracketuk',
        'https://www.facebook.com/thirdbracketltd',
        'https://www.instagram.com/thirdbracketuk',
      ],
      founder: {
        '@type': 'Person',
        '@id': 'https://www.thirdbracket.co.uk/#founder',
        name: 'Musabbir Sagar',
        jobTitle: 'Founder & CEO',
        worksFor: [
          { '@id': 'https://www.thirdbracket.co.uk/#organization' },
          { '@id': 'https://www.bayxbengal.com/#organization' },
        ],
        alternateName: ['S M A Musabbir Sagar', 'sagarmusabbir', 'Musabbir'],
        knowsAbout: [
          'Full-Stack Web Development',
          'Next.js',
          'Payload CMS',
          'WordPress Development',
          'JavaScript',
          'TypeScript',
          'React',
          'Product Development',
          'Product Management',
          'SaaS Architecture',
          'B2B Marketplace Development',
          'E-commerce Platforms',
          'Business Development',
          'Startup Founding',
          'Digital Agency Management',
          'Web Application Architecture',
          'DevOps',
          'Server Infrastructure',
          'CI/CD Pipelines',
          'UI/UX Design Systems',
          'International Trade Technology',
          'Export-Import Business Operations',
        ],
        sameAs: [
          'https://www.linkedin.com/in/sagarmusabbir/',
          'https://github.com/sagarmusabbir/',
          'https://www.facebook.com/wwolverinee',
          'https://www.musabbirsagar.me/',
          'https://x.com/sagarmusabbir',
          'https://peerlist.io/sagarmusabbir',
          'https://www.indiehackers.com/sagarmusabbir',
        ],
      },
      subOrganization: {
        '@id': 'https://www.bayxbengal.com/#organization',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.thirdbracket.co.uk/#website',
      url: 'https://www.thirdbracket.co.uk',
      name: 'ThirdBracket',
      publisher: { '@id': 'https://www.thirdbracket.co.uk/#organization' },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${notoBengali.variable} antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <meta name="msvalidate.01" content="46803F5EEF01F535EF3999B5E1F48682" />

        <ThemeScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([graphJsonLd]),
          }}
        />

        <meta name="facebook-domain-verification" content="jvzc8wivgbd7yp2malwzexmw1rj7rh" />
      </head>
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '1511303064341320');
      fbq('track', 'PageView');
    `,
        }}
      />
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
        <main className="bg-gradient-primary-dark dark:bg-gradient-primary py-[4rem] sm:py-[4.5rem]  lg:py-[4.5rem]  ">
          {children}
        </main>
        <SiteFooter />
        <GTM gtmId={GTM_ID} />
      </body>
    </html>
  )
}
