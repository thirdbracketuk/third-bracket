'use client'

import React, { useState } from 'react'
import { getClientSideURL } from '@/utilities/getURL'

interface CallbackFormProps {
  recaptchaSiteKey?: string
}

export default function CallbackForm({ recaptchaSiteKey }: CallbackFormProps) {
  const [phone, setPhone] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!phone.trim()) {
      setError('ফোন নম্বর দিন।')
      return
    }

    if (!window.grecaptcha || !recaptchaSiteKey) {
      setError('reCAPTCHA লোড হয়নি। পেজ রিফ্রেশ করুন।')
      return
    }

    setIsLoading(true)

    try {
      const gRecaptchaToken = await window.grecaptcha.execute(recaptchaSiteKey, {
        action: 'submit_form',
      })

      const res = await fetch(`${getClientSideURL()}/api/form-submissions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form: 2,
          submissionData: [
            { field: '69a1e289b8a0b284a790cbd8', value: phone },
            { field: 'gRecaptchaToken', value: gRecaptchaToken },
          ],
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data?.errors?.[0]?.message || 'Something went wrong.')
      }
      //FB Pixel
      setHasSubmitted(true)
      if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
        ;(window as any).fbq('track', 'Lead', {
          content_name: 'BD Campaign Callback',
          currency: 'BDT',
          value: 0,
        })
      }
      //GA4
      if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
        ;(window as any).gtag('event', 'generate_lead', {
          event_category: 'BD Campaign',
          event_label: 'Callback Form',
          currency: 'BDT',
          value: 0,
        })
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'কিছু একটা সমস্যা হয়েছে। আবার চেষ্টা করুন।')
    } finally {
      setIsLoading(false)
    }
  }

  if (hasSubmitted) {
    return (
      <div className="text-center py-4">
        <p className="text-lg font-bold bg-gradient-text dark:bg-gradient-text-dark bg-clip-text text-transparent mb-1">
          অনুরোধ পাঠানো হয়েছে!
        </p>
        <p className="text-sm text-primary-500 dark:text-primary-400">আমরা শীঘ্রই আপনাকে কল করব।</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <label className="block text-sm text-primary-600 dark:text-primary-400 mb-1">
        যোগাযোগের নম্বর <span className="text-accent-600 dark:text-accent-400">*</span>
      </label>

      <div className="flex gap-2">
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+8801XXXXXXXXX"
          className="flex-1 min-w-0 rounded-lg border border-primary-200 dark:border-primary-700 bg-white dark:bg-black text-primary-950 dark:text-primary-50 placeholder:text-primary-400 dark:placeholder:text-primary-600 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 dark:focus:ring-accent-400"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="shrink-0 rounded-lg px-4 py-2.5 text-sm font-semibold bg-primary-950 dark:bg-primary-50 text-white dark:text-primary-950 hover:bg-primary-800 dark:hover:bg-primary-200 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? '...' : 'রিকুয়েস্ট পাঠান'}
        </button>
      </div>

      {error && <p className="text-xs text-red-500 dark:text-red-400">{error}</p>}
    </form>
  )
}
