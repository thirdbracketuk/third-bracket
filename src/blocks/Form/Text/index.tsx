import type { TextField } from '@payloadcms/plugin-form-builder/types'
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'

// Unused imports removed
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'
import React from 'react'

import { Error } from '../Error'
import { Width } from '../Width'
import { FormInput, FormLabel } from '@thirdbracket/bracketui'
import { useFormContext } from 'react-hook-form'

export const Text: React.FC<
  TextField & {
    errors: Partial<FieldErrorsImpl>
    register: UseFormRegister<FieldValues>
  }
> = ({ name, defaultValue, errors, label, register, required, width }) => {
  const props = register(name, { required: required })
  const { setValue } = useFormContext()
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
        defaultValue=""
        id={name}
        type="text"
        placeholder={defaultValue}
        {...register(name, { required })}
        className="!bg-secondary-50 dark:!bg-secondary-950 !border-primary-100 dark:!border-primary-900 focus:!ring-primary-500 dark:focus:!ring-primary-400 input"
      />
      {errors[name] && <Error name={name} />}
    </Width>
  )
}
