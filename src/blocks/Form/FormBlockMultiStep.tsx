'use client'
import type { FormFieldBlock, Form as FormType } from '@payloadcms/plugin-form-builder/types'

import { useRouter } from 'next/navigation'
import React, { useCallback, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import RichText from '@/components/RichText'

import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

import { fields } from './fields'
import { getClientSideURL } from '@/utilities/getURL'

import { Button } from '@thirdbracket/bracketui'

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

export const FormBlockMultiStep: React.FC<
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
    defaultValues: {},
  })
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    trigger,
    getValues,
    reset,
  } = formMethods

  const [currentStep, setCurrentStep] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState<boolean>()
  const [error, setError] = useState<{ message: string; status?: string } | undefined>()
  const router = useRouter()

  // Define step groups for ContactProposal form
  const stepGroups = [
    ['businessname', 'contactname', 'email', 'phone'], // Step 1: About Business
    ['currentrevenue', 'currentbudget', 'website', 'social'], // Step 2: Current Digital Presence
    ['goal'], // Step 3: Digital Vision
  ]

  const totalSteps = stepGroups.length
  const currentFields =
    formFromProps?.fields?.filter((field: any) =>
      stepGroups[currentStep]?.includes((field as any).name),
    ) || []

  const nextStep = async () => {
    // Validate current step fields
    const currentStepFields = stepGroups[currentStep]
    const isValid = await trigger(currentStepFields as any)

    if (isValid && currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

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

        const dataToSend: SubmissionData[] = Object.entries(data).map(([name, value]) => ({
          field: name,
          value,
        }))

        //append the reCAPTCHA token to the submission data
        dataToSend.push({ field: 'gRecaptchaToken', value: gRecaptchaToken })

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
    <div className="w-full">
      {enableIntro && introContent && !hasSubmitted && (
        <div className="mb-6">
          <h2 className="text-2xl font-extrabold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-3">
            Get Your Free Proposal
          </h2>
          <RichText data={introContent} enableGutter={false} />
        </div>
      )}

      <FormProvider {...formMethods}>
        {!isLoading && hasSubmitted && confirmationType === 'message' && (
          <div className="text-center">
            <h2 className="text-2xl font-extrabold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-3">
              Proposal Request Received!
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
          <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md text-red-600 dark:text-red-400 mb-4 text-sm">
            {`${error.status || 'Error'}: ${error.message || 'Something went wrong'}`}
          </div>
        )}

        {!hasSubmitted && (
          <div>
            {/* Progress indicator */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-primary-600 dark:text-primary-400">
                  Step {currentStep + 1} of {totalSteps}
                </span>
                <span className="text-sm text-primary-600 dark:text-primary-400">
                  {Math.round(((currentStep + 1) / totalSteps) * 100)}%
                </span>
              </div>
              <div className="w-full bg-primary-200 dark:bg-primary-800 rounded-full h-2">
                <div
                  className="bg-gradient-text dark:bg-gradient-text-dark h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
                ></div>
              </div>
            </div>

            <form id={formID} onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Render current step fields */}
              {currentFields.map((field, index) => {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const Field: React.FC<any> = fields?.[field.blockType as keyof typeof fields]
                if (Field) {
                  return (
                    <div key={`${currentStep}-${(field as any).name}-${index}`}>
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

              {/* Navigation buttons */}
              <div className="flex justify-between pt-4">
                <Button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  variant="outline"
                  size="md"
                  theme={{
                    border: 'border-primary-300 dark:border-primary-700',
                    text: 'text-primary-700 dark:text-primary-300',
                    hoverBackground: 'hover:bg-primary-50 dark:hover:bg-primary-900',
                  }}
                >
                  Previous
                </Button>

                {currentStep < totalSteps - 1 ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    size="md"
                    theme={{
                      background: 'bg-gradient-text dark:bg-gradient-text-dark',
                      hoverBackground: '[@media(hover:hover)]:hover:opacity-90',
                      focusRing: 'focus:ring-primary-700 dark:focus:ring-secondary-300',
                      text: 'text-primary-50 dark:text-primary-950',
                    }}
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    isLoading={isLoading}
                    disabled={isLoading}
                    size="md"
                    theme={{
                      background: 'bg-gradient-text dark:bg-gradient-text-dark',
                      hoverBackground: '[@media(hover:hover)]:hover:opacity-90',
                      focusRing: 'focus:ring-primary-700 dark:focus:ring-secondary-300',
                      text: 'text-primary-50 dark:text-primary-950',
                    }}
                  >
                    {submitButtonLabel || 'Submit'}
                  </Button>
                )}
              </div>
            </form>
          </div>
        )}
      </FormProvider>
    </div>
  )
}
