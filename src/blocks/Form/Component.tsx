'use client'
import type { FormFieldBlock, Form as FormType } from '@payloadcms/plugin-form-builder/types'

import { useRouter } from 'next/navigation'
import React, { useCallback, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import RichText from '@/components/RichText'

import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

import { fields } from './fields'
import { getClientSideURL } from '@/utilities/getURL'

import { Bracket, Button } from '@thirdbracket/bracketui'

type SubmissionData = {
  field: string
  value: any
}

export type FormBlockType = {
  blockName?: string
  blockType?: 'formBlock'
  enableIntro: boolean
  form: FormType
  introContent?: SerializedEditorState
  recaptchaSiteKey?: string
}

export const FormBlock: React.FC<
  {
    id?: string
  } & FormBlockType
> = (props) => {
  const {
    enableIntro,
    form: formFromProps,
    form: { id: formID, confirmationMessage, confirmationType, redirect, submitButtonLabel } = {},
    introContent,
    recaptchaSiteKey,
  } = props

  const formMethods = useForm({
    defaultValues: formFromProps.fields,
  })
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = formMethods

  const [isLoading, setIsLoading] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState<boolean>()
  const [error, setError] = useState<{ message: string; status?: string } | undefined>()
  const router = useRouter()

  const onSubmit = useCallback(
    (data: FormFieldBlock[]) => {
      let loadingTimerID: ReturnType<typeof setTimeout>
      const submitForm = async () => {
        setError(undefined)

        //recaptcha logic

        if (!window.grecaptcha || !recaptchaSiteKey) {
          //falback error if recaptcha has not loaded
          setError({ message: 'reCAPTCHA failed to load. Please refresh.' })
          return
        }

        //get recaptcha token
        const gRecaptchaToken = await window.grecaptcha.execute(recaptchaSiteKey, {
          action: 'submit_form',
        })

        // const dataToSend = Object.entries(data).map(([name, value]) => ({
        //   field: name,
        //   value,
        // }));

        const dataToSend: SubmissionData[] = Object.entries(data).map(([name, value]) => ({
          field: name,
          value,
        }))

        //append the reCAPTCHA token to the submission data
        dataToSend.push({ field: 'gRecaptchaToken', value: gRecaptchaToken })

        // delay loading indicator by 1s
        loadingTimerID = setTimeout(() => {
          setIsLoading(true)
        }, 1000)

        try {
          const req = await fetch(`${getClientSideURL()}/api/form-submissions`, {
            body: JSON.stringify({
              form: formID,
              submissionData: dataToSend,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'POST',
          })

          const res = await req.json()

          clearTimeout(loadingTimerID)

          if (req.status >= 400) {
            setIsLoading(false)

            setError({
              message: res.errors?.[0]?.message || 'Internal Server Error',
              status: res.status,
            })

            return
          }

          setIsLoading(false)
          setHasSubmitted(true)

          if (confirmationType === 'redirect' && redirect) {
            const { url } = redirect

            const redirectUrl = url

            if (redirectUrl) router.push(redirectUrl)
          }
        } catch (err) {
          console.warn(err)
          setIsLoading(false)
          setError({
            message: 'Something went wrong.',
          })
        }
      }

      void submitForm()
    },
    [router, formID, redirect, confirmationType, recaptchaSiteKey],
  )

  return (
    // <section className="py-[3rem] sm:py-[3.75rem]  lg:py-[4rem]">
    //   {enableIntro && introContent && !hasSubmitted && (
    //     <RichText className="mb-8 lg:mb-12" data={introContent} enableGutter={false} />
    //   )}

    //   <div className="p-6 lg:p-8 border border-primary-500/20 bg-gradient-primary-dark dark:bg-gradient-primary  rounded-xl">
    //     <FormProvider {...formMethods}>
    //       {!isLoading && hasSubmitted && confirmationType === 'message' && (
    //         <RichText data={confirmationMessage} />
    //       )}
    //       {isLoading && !hasSubmitted && <p>Loading, please wait...</p>}
    //       {error && <div>{`${error.status || '500'}: ${error.message || ''}`}</div>}
    //       {!hasSubmitted && (
    //         <form id={formID} onSubmit={handleSubmit(onSubmit)}>
    //           <div className="mb-4 last:mb-0">
    //             {formFromProps &&
    //               formFromProps.fields &&
    //               formFromProps.fields?.map((field, index) => {
    //                 // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //                 const Field: React.FC<any> = fields?.[field.blockType as keyof typeof fields]
    //                 if (Field) {
    //                   return (
    //                     <div className="mb-6 last:mb-0" key={index}>
    //                       <Field
    //                         form={formFromProps}
    //                         {...field}
    //                         {...formMethods}
    //                         control={control}
    //                         errors={errors}
    //                         register={register}
    //                       />
    //                     </div>
    //                   )
    //                 }
    //                 return null
    //               })}
    //           </div>

    //           <Button form={formID} type="submit">
    //             {submitButtonLabel}
    //           </Button>
    //         </form>
    //       )}
    //     </FormProvider>
    //   </div>
    // </section>

    <section className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem]">
      <div className="max-w-screen-md w-full mx-auto">
        {enableIntro && introContent && !hasSubmitted && (
          <div className="mb-8 lg:mb-12">
            <h2 className="text-3xl lg:text-4xl font-extrabold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-4">
              Get in Touch
            </h2>
            <RichText data={introContent} enableGutter={false} />
          </div>
        )}

        <div className="bg-white dark:bg-black border border-primary-500/20 rounded-lg p-8 lg:p-12">
          <FormProvider {...formMethods}>
            {!isLoading && hasSubmitted && confirmationType === 'message' && (
              <div className="text-center">
                <h2 className="text-3xl font-extrabold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-4">
                  Message Sent!
                </h2>
                <RichText data={confirmationMessage} />
              </div>
            )}

            {isLoading && !hasSubmitted && (
              <p className="text-center text-primary-700 dark:text-primary-300">
                Processing your request...
              </p>
            )}

            {error && (
              <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md text-red-600 dark:text-red-400 mb-4">
                {`${error.status || 'Error'}: ${error.message || 'Something went wrong'}`}
              </div>
            )}

            {!hasSubmitted && (
              <form id={formID} onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {formFromProps &&
                  formFromProps.fields &&
                  formFromProps.fields?.map((field, index) => {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    const Field: React.FC<any> = fields?.[field.blockType as keyof typeof fields]
                    if (Field) {
                      return (
                        <div key={index}>
                          <Field
                            form={formFromProps}
                            {...field}
                            {...formMethods}
                            control={control}
                            errors={errors}
                            register={register}
                          />
                        </div>
                      )
                    }
                    return null
                  })}

                <Button
                  type="submit"
                  isLoading={isLoading}
                  disabled={isLoading}
                  theme={{
                    background: 'bg-gradient-text dark:bg-gradient-text-dark w-full',
                    hoverBackground: '[@media(hover:hover)]:hover:opacity-90',
                    focusRing: 'focus:ring-primary-700 dark:focus:ring-secondary-300',
                    text: 'text-primary-50 dark:text-primary-950',
                  }}
                >
                  {submitButtonLabel || 'Submit'}
                </Button>
              </form>
            )}
          </FormProvider>
        </div>
      </div>
    </section>
  )
}
