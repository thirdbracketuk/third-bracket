'use client'

import React, { useState } from 'react'
import {
  // Bracket, // Commented out - not used in modal context
  Button,
  Form,
  FormInput,
  FormLabel,
  FormTextarea,
  FormSelect,
} from '@thirdbracket/bracketui'
import { getClientSideURL } from '@/utilities/getURL'
import type { Form as FormType } from '@payloadcms/plugin-form-builder/types'

export type FormBlockType = {
  blockName?: string
  blockType?: 'formBlock'

  form: FormType
}

type Props = {
  id?: string
} & FormBlockType

const ContactForm: React.FC<Props> = ({ form: { id: formID } = {} }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    topic: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const { fullName, email, phone, topic, message } = formData

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address')
      setIsSubmitting(false)
      return
    }

    if (!fullName || !phone || !topic || !message) {
      setError('Please fill in all the fields')
      setIsSubmitting(false)
      return
    }

    try {
      const res = await fetch(`${getClientSideURL()}/api/form-submissions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form: formID,
          submissionData: [
            { field: 'fullName', value: fullName },
            { field: 'email', value: email },
            { field: 'phone', value: phone },
            { field: 'topic', value: topic },
            { field: 'message', value: message },
          ],
        }),
      })

      const json = await res.json()

      if (!res.ok) throw new Error(json.errors?.[0]?.message || 'Failed to send message')

      setIsSuccess(true)
      setFormData({ fullName: '', email: '', phone: '', topic: '', message: '' })
    } catch (err) {
      console.error(err)
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    // <Bracket fluid centered> {/* Commented out for modal usage */}
    <div className="max-w-screen-md w-full bg-transparent border-0 mx-auto p-0">
      {isSuccess ? (
        <div className="text-center">
          <h2 className="text-3xl font-extrabold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-4">
            Message Sent!
          </h2>
          <p className="text-primary-700 dark:text-primary-300 text-lg font-light">
            Thanks for reaching out — we’ll get back to you shortly.
          </p>
        </div>
      ) : (
        <Form onSubmit={handleSubmit} className="space-y-6">
          {error && <p className="text-sm text-red-500">{error}</p>}

          <div>
            <FormLabel htmlFor="fullName">Full Name</FormLabel>
            <FormInput
              id="fullName"
              name="fullName"
              // placeholder="First and Last Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="!bg-secondary-50 dark:!bg-secondary-950 !border-primary-100 dark:!border-primary-900 focus:!ring-primary-500 dark:focus:!ring-primary-400"
            />
          </div>

          <div>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput
              type="email"
              id="email"
              name="email"
              // placeholder="Work Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="!bg-secondary-50 dark:!bg-secondary-950 !border-primary-100 dark:!border-primary-900 focus:!ring-primary-500 dark:focus:!ring-primary-400"
            />
          </div>

          <div>
            <FormLabel htmlFor="phone">Phone</FormLabel>
            <FormInput
              type="tel"
              id="phone"
              name="phone"
              // placeholder="(000)000-0000"
              value={formData.phone}
              onChange={handleChange}
              required
              className="!bg-secondary-50 dark:!bg-secondary-950 !border-primary-100 dark:!border-primary-900 focus:!ring-primary-500 dark:focus:!ring-primary-400"
            />
          </div>

          <div>
            <FormLabel htmlFor="topic">Topic</FormLabel>
            <FormSelect
              id="topic"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              required
              className="!bg-secondary-50 dark:!bg-secondary-950 !border-primary-100 dark:!border-primary-900 focus:!ring-primary-500 dark:focus:!ring-primary-400"
            >
              {/* <option value="" disabled>
                Select your topic
              </option> */}
              <option value="General Inquiry">General Inquiry</option>
              <option value="Project Proposal">Project Proposal</option>
              <option value="Support">Support</option>
              <option value="Other">Other</option>
            </FormSelect>
          </div>

          <div>
            <FormLabel htmlFor="message">How may we best assist you?</FormLabel>
            <FormTextarea
              id="message"
              name="message"
              placeholder="Tell us about your project or inquiry..."
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              className="!bg-secondary-50 dark:!bg-secondary-950 !border-primary-100 dark:!border-primary-900 focus:!ring-primary-500 dark:focus:!ring-primary-400"
            />
          </div>

          <Button
            size="md"
            type="submit"
            isLoading={isSubmitting}
            disabled={isSubmitting}
            theme={{
              background: 'bg-gradient-text dark:bg-gradient-text-dark',
              hoverBackground: '[@media(hover:hover)]:hover:opacity-90',
              focusRing: 'focus:ring-primary-700 dark:focus:ring-secondary-300',
              text: 'text-primary-50 dark:text-primary-950',
            }}
          >
            Send Message
          </Button>
        </Form>
      )}
    </div>
    // </Bracket> {/* Commented out for modal usage */}
  )
}

export default ContactForm
