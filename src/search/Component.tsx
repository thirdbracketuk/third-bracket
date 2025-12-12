'use client'

import React, { useState, useEffect } from 'react'
import { useDebounce } from '@/utilities/useDebounce'
import { useRouter } from 'next/navigation'
import { Form, FormInput, FormLabel } from '@thirdbracket/bracketui'
import { Button } from '@payloadcms/ui/elements/Button'

export const Search: React.FC = () => {
  const [value, setValue] = useState('')
  const router = useRouter()

  const debouncedValue = useDebounce(value)

  useEffect(() => {
    router.push(`/search${debouncedValue ? `?q=${debouncedValue}` : ''}`)
  }, [debouncedValue, router])

  return (
    <div>
      <Form
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <FormLabel htmlFor="search" className="sr-only">
          Search
        </FormLabel>
        <FormInput
          id="search"
          onChange={(event) => {
            setValue(event.target.value)
          }}
          placeholder="Search"
          className="w-full pl-4 pr-32  text-base rounded-md border border-primary-400 dark:border-primary-800      !bg-white  focus:!ring-primary-400 text-primary-700   dark:!bg-black  dark:focus:!ring-primary-800 dark:!text-primary-400"
        />
        <Button type="submit" className="sr-only">
          submit
        </Button>
      </Form>
    </div>
  )
}
