import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

import PageHeader from '@/components/PageHeader'
import { FormBlock } from '@/blocks/Form/Component'
import { Metadata } from 'next'
import { Bracket } from '@thirdbracket/bracketui'
import Script from 'next/script'
import type { Form as FormType } from '@payloadcms/plugin-form-builder/types'

export const metadata: Metadata = {
  // metadataBase: new URL(Settings.metadataBase),
  title: 'Contact thirdbracket, Start Your Project Today',
  description:
    'Get in touch with thirdbracket to discuss your website, ecommerce or digital project.',
  openGraph: {
    title: 'Contact Us, Start Your Project or Ask a Question',
    description:
      'Send a message to thirdbracket and tell us about your project, idea or challenge. A simple form to start clear, honest conversations.',
  },
}

async function getFormData() {
  try {
    const payload = await getPayload({ config: configPromise })
    const form = await payload.findByID({
      collection: 'forms',
      id: '1',
    })
    return form
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
  const fallbackForm: FormType = (form as unknown as FormType) || {
    id: '1',
    title: 'Contact Form',
    fields: [],
    submitButtonLabel: 'Send Message',
    confirmationType: 'message',
    confirmationMessage: {
      root: {
        type: 'root',
        format: '',
        indent: 0,
        version: 1,
        children: [
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                mode: 'normal',
                text: 'Thank you for your message. We will get back to you soon.',
                type: 'text',
                style: '',
                detail: 0,
                format: 0,
                version: 1,
              },
            ],
            direction: 'ltr',
          },
        ],
        direction: 'ltr',
      },
    },
    emails: [],
  }

  return (
    <section>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        strategy="beforeInteractive"
      />
      <Bracket fluid centered padding="small">
        <div className="md:max-w-screen-xl mx-auto">
          {/* Structured data now in layout.tsx */}
          <PageHeader
            title="Contact thirdbracket"
            description="Use the form below to tell us what you need help with."
          />
          <div className="">
            <FormBlock
              form={fallbackForm}
              enableIntro={false}
              recaptchaSiteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            />
          </div>
        </div>
      </Bracket>
    </section>
  )
}
