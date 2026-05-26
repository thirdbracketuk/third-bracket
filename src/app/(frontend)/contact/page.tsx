import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

import PageHeader from '@/components/PageHeader'
import { FormBlock } from '@/blocks/Form/Component'
import { Metadata } from 'next'
import { Bracket, Card } from '@thirdbracket/bracketui'
import Script from 'next/script'
import type { Form as FormType } from '@payloadcms/plugin-form-builder/types'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

export const metadata: Metadata = {
  // metadataBase: new URL(Settings.metadataBase),
  title: 'Contact ThirdBracket, Start Your Project Today',
  description:
    'Get in touch with ThirdBracket to discuss your website, ecommerce or digital project.',
  openGraph: {
    title: 'Contact Us, Start Your Project or Ask a Question',
    description:
      'Send a message to ThirdBracket and tell us about your project, idea or challenge. A simple form to start clear, honest conversations.',
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
            title="Contact ThirdBracket"
            description="Use the form below to tell us what you need help with."
          />

          {/* Two-column layout: Form | Contact Info + Map */}
          <section className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem]">
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12">
              {/* Left Column: Contact Form */}
              <div className="order-1">
                <FormBlock
                  form={fallbackForm}
                  enableIntro={false}
                  recaptchaSiteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                />
              </div>

              {/* Right Column: Contact Info + Map */}
              <div className="space-y-6 order-2">
                {/* Contact Info Cards */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Phone Card */}
                  <Card
                    size="lg"
                    theme={{
                      background: 'bg-white dark:bg-black',
                      border:
                        'border-opacity-50 border-primary-500 dark:shadow-[0_0_2px_rgba(224,227,230,0.20)] shadow-[0_0_2px_rgba(11,13,15,0.10)]',
                      hover:
                        '[@media(hover:hover)]:hover:border-opacity-100 [@media(hover:hover)]:hover:shadow-[0_0_3px_rgba(11,13,15,0.15)]',
                      text: 'text-primary-500 font-normal',
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent-100 dark:bg-accent-900/40 flex-shrink-0">
                        <FaPhone size={18} className="text-accent-600 dark:text-accent-400" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-primary-900 dark:text-primary-100 mb-1">
                          Phone
                        </h3>
                        <a
                          href="tel:+8801765692886"
                          className="text-sm text-primary-600 dark:text-primary-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                        >
                          +880 1765 692886
                        </a>
                      </div>
                    </div>
                  </Card>

                  {/* Email Card */}
                  <Card
                    size="lg"
                    theme={{
                      background: 'bg-white dark:bg-black',
                      border:
                        'border-opacity-50 border-primary-500 dark:shadow-[0_0_2px_rgba(224,227,230,0.20)] shadow-[0_0_2px_rgba(11,13,15,0.10)]',
                      hover:
                        '[@media(hover:hover)]:hover:border-opacity-100 [@media(hover:hover)]:hover:shadow-[0_0_3px_rgba(11,13,15,0.15)]',
                      text: 'text-primary-500 font-normal',
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent-100 dark:bg-accent-900/40 flex-shrink-0">
                        <FaEnvelope size={18} className="text-accent-600 dark:text-accent-400" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-primary-900 dark:text-primary-100 mb-1">
                          Email
                        </h3>
                        <a
                          href="mailto:hello@thirdbracket.co.uk"
                          className="text-sm text-primary-600 dark:text-primary-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors break-all"
                        >
                          hello@thirdbracket.co.uk
                        </a>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Address Card */}
                <Card
                  size="lg"
                  theme={{
                    background: 'bg-white dark:bg-black',
                    border:
                      'border-opacity-50 border-primary-500 dark:shadow-[0_0_2px_rgba(224,227,230,0.20)] shadow-[0_0_2px_rgba(11,13,15,0.10)]',
                    hover:
                      '[@media(hover:hover)]:hover:border-opacity-100 [@media(hover:hover)]:hover:shadow-[0_0_3px_rgba(11,13,15,0.15)]',
                    text: 'text-primary-500 font-normal',
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent-100 dark:bg-accent-900/40 flex-shrink-0">
                      <FaMapMarkerAlt size={18} className="text-accent-600 dark:text-accent-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-primary-900 dark:text-primary-100 mb-1">
                        Office Address
                      </h3>
                      <p className="text-sm text-primary-600 dark:text-primary-400 leading-relaxed">
                        Nowab Manjil, Town Hall Rd
                        <br />
                        Habiganj 3300, Bangladesh
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Office Hours Card */}
                <Card
                  size="lg"
                  theme={{
                    background: 'bg-white dark:bg-black',
                    border:
                      'border-opacity-50 border-primary-500 dark:shadow-[0_0_2px_rgba(224,227,230,0.20)] shadow-[0_0_2px_rgba(11,13,15,0.10)]',
                    hover:
                      '[@media(hover:hover)]:hover:border-opacity-100 [@media(hover:hover)]:hover:shadow-[0_0_3px_rgba(11,13,15,0.15)]',
                    text: 'text-primary-500 font-normal',
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent-100 dark:bg-accent-900/40 flex-shrink-0">
                      <FaClock size={18} className="text-accent-600 dark:text-accent-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-primary-900 dark:text-primary-100 mb-1">
                        Office Hours
                      </h3>
                      <p className="text-sm text-primary-600 dark:text-primary-400">
                        Monday - Friday: 2:00 PM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Google Maps */}
                <div className="rounded-xl overflow-hidden border border-primary-200 dark:border-primary-800 shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.7618016000003!2d91.4102013!3d24.3809008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3751445732f8de53%3A0xf7ad0fa14dcac9d!2sThird%20Bracket%20Limited!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Third Bracket Office Location"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </Bracket>
    </section>
  )
}
