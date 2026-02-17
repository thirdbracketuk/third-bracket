'use client'

import { isValidPhoneNumber, parsePhoneNumber, CountryCode } from 'libphonenumber-js'
import React, { useState } from 'react'
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'
import { useFormContext } from 'react-hook-form'
import { FormLabel, FormInput } from '@thirdbracket/bracketui'
import { Error } from '../Error'
import { Width } from '../Width'

type Props = {
  name: string
  label?: string
  placeholder?: string
  required?: boolean
  width?: number
  defaultCountry?: string
  errors: Partial<FieldErrorsImpl>
  register: UseFormRegister<FieldValues>
}

function sanitizeInput(value: string): string {
  return value.replace(/[^\d+()\-\s]/g, '')
}

export const Phone: React.FC<Props> = ({
  name,
  label,
  placeholder,
  defaultCountry = 'GB',
  required,
  width,
  register,
  errors,
}) => {
  const { setValue } = useFormContext() // same pattern as your TextField
  const country = defaultCountry === 'INTL' ? undefined : (defaultCountry as CountryCode)

  return (
    <Width width={width}>
      <FormLabel htmlFor={name}>
        {label}
        {required && (
          <span className="required">
            * <span className="sr-only">(required)</span>
          </span>
        )}
      </FormLabel>

      <FormInput
        id={name}
        type="tel"
        autoComplete="tel"
        defaultValue=""
        placeholder={placeholder ?? (country === 'GB' ? '+44 7911 123456' : '+1 555 000 1234')}
        className="!bg-secondary-50 dark:!bg-secondary-950 !border-primary-100 dark:!border-primary-900 focus:!ring-primary-500 dark:focus:!ring-primary-400"
        {...register(name, {
          required: required ? 'This field is required.' : false,
          validate: (value: string) => {
            if (!value && !required) return true

            const trimmed = value.trim()
            const valid =
              isValidPhoneNumber(trimmed) ||
              (country ? isValidPhoneNumber(trimmed, country) : false)

            if (!valid) {
              return country
                ? `Enter a valid ${country} or international phone number (e.g. +44 7911 123456)`
                : 'Enter a valid international phone number (e.g. +1 555 000 1234)'
            }

            try {
              const parsed = country
                ? parsePhoneNumber(trimmed, country)
                : parsePhoneNumber(trimmed)
              setValue(name, parsed.format('E.164'))
            } catch {
              // already validated above — safe to ignore
            }

            return true
          },
        })}
      />

      {errors[name] && <Error name={name} />}
    </Width>
  )
}
