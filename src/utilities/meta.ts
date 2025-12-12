import {
  companylink,
  companyname,
  description,
  imagealt,
  keywords,
  sitename,
  socialLinks,
  twitterhandle,
  url,
  urlimage,
} from '../../settings'

export const Company = {
  name: companyname,
  link: companylink,
  socialLinks: socialLinks,
}

export const Settings = {
  title: sitename,
  metadataBase: url,
  description: description,
  // siteicon: siteicon,
  keywords: keywords,
  openGraph: {
    type: 'website' as const,
    title: 'Trusted Web Design & Development Services in the UK',
    description: description,
    siteName: sitename,
    images: [
      {
        url: urlimage,
        width: 1200,
        height: 630,
        alt: imagealt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image' as const,
    title: 'Trusted Web Design & Development Services in the UK | Third Bracket Ltd',
    description: description,
    site: twitterhandle,
    images: [
      {
        url: urlimage,
        alt: imagealt,
      },
    ],
  },
  canonical: url,
}
