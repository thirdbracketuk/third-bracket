import FormBlockSubscription from '@/blocks/Form/SubscriptionFormBlock'
import { ClientTestimonials } from '@/components/ClientTestomonial'
import CTASection from '@/components/CTASection'
import { DynamicHero } from '@/components/DynamicHeroSection'
import { FAQ } from '@/components/Faq'
import CardGrid from '@/components/Feature'
import { WhyChooseUsSection } from '@/components/FeatureTwo'
import { Hero as _Hero } from '@/components/HeroSection'
// import { LatestBlogSection } from '@/components/LatestBlogSection'
// import { LatestWorkSection } from '@/components/LatestWorkSection'
// import { Bracket } from '@thirdbracket/bracketui'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import Script from 'next/script'
import { faqData } from 'settings'
import { Bracket } from '@thirdbracket/bracketui'

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

// async function getFormData() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/forms/2`, {
//     cache: 'force-cache',
//     next: { revalidate: 3600 },
//     // Ensures fresh data on each request
//   })

//   if (!res.ok) return null
//   return res.json()
// }

// Fetch contact form data for modal
async function getContactFormData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/forms/4`, {
      next: { revalidate: 3600 },
    })

    if (!res.ok) return null
    return res.json()
  } catch (error) {
    console.error('Error fetching contact form data:', error)
    return null
  }
}

export default async function Home() {
  const payload = await getPayload({ config: configPromise })

  const contactForm = await getContactFormData()

  // Provide fallback contact form structure if API call fails
  const fallbackContactForm = contactForm || {
    id: '4',
    fields: [],
    submitButtonLabel: 'Get Proposal',
    confirmationType: 'message',
    confirmationMessage:
      'Thank you for your request. We will get back to you soon with your proposal.',
  }

  return (
    <>
      {/* <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        strategy="afterInteractive"
      /> */}
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section>
        <DynamicHero contactForm={fallbackContactForm} />
        <CardGrid />
        <WhyChooseUsSection />

        {/* Latest Work Section */}
        {/* {latestWorks.docs && latestWorks.docs.length > 0 && (
          <LatestWorkSection works={latestWorks.docs} />
        )} */}

        <ClientTestimonials />

        {/* Latest Blog Section */}
        {/* {latestBlogs.docs && latestBlogs.docs.length > 0 && (
          <LatestBlogSection blogs={latestBlogs.docs} />
        )} */}

        <FAQ />

        <CTASection
          title="Ready to Start Your Project?"
          description="Let's build something exceptional together. Get in touch and we'll craft a solution tailored to your needs."
          primary={{
            label: 'Contact Us',
            href: '/contact',
          }}
          secondary={{
            label: 'View Our Work',
            href: '/work',
          }}
        />
      </section>
    </>
  )
}
