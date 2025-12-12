import type { TextField } from '@payloadcms/plugin-form-builder/types'
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'

// Unused imports removed
// import { Label } from '@/components/ui/label'
// import { Textarea as TextAreaComponent } from '@/components/ui/textarea'
import React from 'react'

import { Error } from '../Error'
import { Width } from '../Width'
import { FormLabel, FormTextarea } from '@thirdbracket/bracketui'

export const Textarea: React.FC<
  TextField & {
    errors: Partial<FieldErrorsImpl>
    register: UseFormRegister<FieldValues>
    rows?: number
  }
> = ({ name, defaultValue, errors, label, register, required, rows = 3, width }) => {
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

      <FormTextarea
        defaultValue={defaultValue}
        id={name}
        rows={rows}
        {...register(name, { required: required })}
        className="!bg-secondary-50 dark:!bg-secondary-950 !border-primary-100 dark:!border-primary-900 focus:!ring-primary-500 dark:focus:!ring-primary-400"
      />

      {errors[name] && <Error name={name} />}
    </Width>
  )
}
