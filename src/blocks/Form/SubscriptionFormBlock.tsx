'use client'

import React, { useState } from 'react'
import { Bracket, Button, Form, FormInput, FormLabel } from '@thirdbracket/bracketui'
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

const FormBlockSubscription: React.FC<Props> = ({ form: { id: formID } = {} }) => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address')
      setIsSubmitting(false)
      return
    }

    try {
      const res = await fetch(`${getClientSideURL()}/api/form-submissions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form: formID,
          submissionData: [{ field: 'email', value: email }],
        }),
      })

      const json = await res.json()

      if (!res.ok) {
        throw new Error(json.errors?.[0]?.message || 'Failed to subscribe')
      }

      setIsSuccess(true)
      setEmail('')
    } catch (err) {
      console.error(err)
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className=" pt-[3rem] sm:pt-[3.75rem]  lg:pt-[4rem]">
      <Bracket fluid centered padding="small">
        <div className="md:max-w-screen-xl mx-auto bg-accent-radial dark:bg-accent-radial-dark rounded-xl p-8 lg:p-12 border border-primary-500/20">
          {isSuccess ? (
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-12">
              <div>
                <h2 className="text-3xl font-extrabold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-2 lg:mb-6">
                  Got it!
                </h2>
                <p className="dark:text-primary-300 text-primary-700 font-light text-base/[1.6] md:text-lg/[1.75rem] lg:text-xl/[1.85rem] max-w-md">
                  All set! We will follow up with you shortly.
                </p>
              </div>
              <div className="max-w-xl w-full">
                <div className="relative text-5xl lg:text-right">🎉</div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-12">
              <div>
                <h2 className="text-3xl lg:text-4xl font-extrabold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-2 lg:mb-6">
                  Lets Connect
                </h2>
                <p className="dark:text-primary-300 text-primary-700 font-light text-base/[1.6] md:text-lg/[1.75rem] lg:text-xl/[1.85rem] max-w-md">
                  Leave your email, and we will reach out as soon as possible to continue the
                  conversation.
                </p>
              </div>
              <div className="flex-1 max-w-xl w-full">
                <Form onSubmit={handleSubmit}>
                  <div className="relative">
                    <FormLabel className="sr-only">Email address</FormLabel>
                    <FormInput
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-4 pr-32 h-14 text-base rounded-md border border-primary-500/20 bg-white dark:bg-black text-primary-700 dark:text-primary-400 placeholder:text-primary-500/70"
                    />
                    <div className="absolute right-1 top-1/2 -translate-y-1/2">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        isLoading={isSubmitting}
                        size="md"
                        theme={{
                          background: 'bg-gradient-text dark:bg-gradient-text-dark',
                          hoverBackground: '[@media(hover:hover)]:hover:opacity-90',
                          focusRing: 'focus:ring-primary-700 dark:focus:ring-secondary-300',
                          text: 'text-primary-50 dark:text-primary-950',
                        }}
                      >
                        Lets Talk
                      </Button>
                    </div>
                  </div>

                  {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
                  <p className="mt-2 text-sm text-primary-700 dark:text-primary-300 font-light">
                    We respect your privacy. Unsubscribe anytime.
                  </p>
                </Form>
              </div>
            </div>
          )}
        </div>
      </Bracket>
    </section>
  )
}

export default FormBlockSubscription

// 'use client'

// import React, { useState } from 'react'
// import { Bracket, Button, Form, FormInput, FormLabel } from '@thirdbracket/bracketui'

// export default function SubscriptionForm() {
//   const [email, setEmail] = useState('')
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [isSuccess, setIsSuccess] = useState(false)
//   const [error, setError] = useState<string | null>(null)

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)
//     setError(null)

//     // Basic validation
//     if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       setError('Please enter a valid email')
//       setIsSubmitting(false)
//       return
//     }

//     try {
//       // ✅ Call the local proxy route instead of Payload directly
//       const res = await fetch('/api/submit', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email }),
//       })

//       const json = await res.json()
//       if (!res.ok) throw new Error(json.error || 'Submission failed')

//       setIsSuccess(true)
//       setEmail('')
//     } catch (err) {
//       setError(err instanceof Error ? err.message : 'Something went wrong')
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   return (
//     <section className=" pt-[3rem] sm:pt-[3.75rem]  lg:pt-[4rem]">
//       <Bracket fluid centered padding="small">
//         <div className="md:max-w-screen-xl mx-auto bg-accent-radial dark:bg-accent-radial-dark rounded-xl p-8 lg:p-12 border border-primary-500/20">
//           {isSuccess ? (
//             <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-12">
//               <div>
//                 <h2 className="text-3xl font-extrabold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-2 lg:mb-6">
//                   Got it!
//                 </h2>
//                 <p className="dark:text-primary-300 text-primary-700 font-light text-base/[1.6] md:text-lg/[1.75rem] lg:text-xl/[1.85rem] max-w-md">
//                   All set! We will follow up with you shortly.
//                 </p>
//               </div>
//               <div className="max-w-xl w-full">
//                 <div className="relative text-5xl lg:text-right">🎉</div>
//               </div>
//             </div>
//           ) : (
//             <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-12">
//               <div>
//                 <h2 className="text-3xl lg:text-4xl font-extrabold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-2 lg:mb-6">
//                   Lets Connect
//                 </h2>
//                 <p className="dark:text-primary-300 text-primary-700 font-light text-base/[1.6] md:text-lg/[1.75rem] lg:text-xl/[1.85rem] max-w-md">
//                   Leave your email, and we will reach out as soon as possible to continue the
//                   conversation.
//                 </p>
//               </div>
//               <div className="flex-1 max-w-xl w-full">
//                 <Form onSubmit={handleSubmit}>
//                   <div className="relative">
//                     <FormLabel className="sr-only">Email address</FormLabel>
//                     <FormInput
//                       type="email"
//                       placeholder="Enter your email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       className="w-full pl-4 pr-32 h-14 text-base rounded-md border border-primary-500/20 bg-white dark:bg-black text-primary-700 dark:text-primary-400 placeholder:text-primary-500/70"
//                     />
//                     <div className="absolute right-1 top-1/2 -translate-y-1/2">
//                       <Button
//                         type="submit"
//                         disabled={isSubmitting}
//                         isLoading={isSubmitting}
//                         size="md"
//                         theme={{
//                           background: 'bg-gradient-text dark:bg-gradient-text-dark',
//                           hoverBackground: '[@media(hover:hover)]:hover:opacity-90',
//                           focusRing: 'focus:ring-primary-700 dark:focus:ring-secondary-300',
//                           text: 'text-primary-50 dark:text-primary-950',
//                         }}
//                       >
//                         Lets Talk
//                       </Button>
//                     </div>
//                   </div>
//                   {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
//                   <p className="mt-2 text-sm text-primary-700 dark:text-primary-300 font-light">
//                     We respect your privacy. Unsubscribe anytime.
//                   </p>
//                 </Form>
//               </div>
//             </div>
//           )}
//         </div>
//       </Bracket>
//     </section>
//   )
// }
