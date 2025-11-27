import React from 'react'

// Bracket is not used
// import { Bracket } from '@thirdbracket/bracketui'
import PageHeader from '@/components/PageHeader'
import { FormBlock } from '@/blocks/Form/Component'
// Structured data now in layout.tsx
import { Metadata } from 'next'
import { Bracket } from '@thirdbracket/bracketui'
import { Settings } from '@/utilities/meta'

export const metadata: Metadata = {
  // metadataBase: new URL(Settings.metadataBase),
  title: 'Contact Third Bracket, Start Your Project Today',
  description:
    'Get in touch with Third Bracket to discuss your website, ecommerce or digital project.',
  openGraph: {
    title: 'Contact Us, Start Your Project or Ask a Question',
    description:
      'Send a message to Third Bracket and tell us about your project, idea or challenge. A simple form to start clear, honest conversations.',
  },
}

async function getFormData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/forms/1`, {
      next: { revalidate: 3600 },
    })

    if (!res.ok) return null
    return res.json()
  } catch (error) {
    console.error('Error fetching form data:', error)
    return null
  }
}

// export const dynamic = 'force-static'
// export const revalidate = false
export default async function ContactPage() {
  const form = await getFormData()

  // Provide a fallback form structure if the API call fails
  const fallbackForm = form || {
    id: '1',
    fields: [],
    submitButtonLabel: 'Send Message',
    confirmationType: 'message',
    confirmationMessage: '<p>Thank you for your message. We will get back to you soon.</p>',
  }

  return (
    <section>
      <Bracket fluid centered padding="small">
        <div className="md:max-w-screen-xl mx-auto">
          {/* Structured data now in layout.tsx */}
          <PageHeader
            title="Contact Third Bracket"
            description="Use the form below to tell us what you need help with."
          />
          <div className="">
            <FormBlock form={fallbackForm} enableIntro={false} />
          </div>
        </div>
      </Bracket>
    </section>
  )
}

//comment
