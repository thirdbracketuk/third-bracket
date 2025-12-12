import { cn } from '@/utilities/ui'

import * as React from 'react'

const Input: React.FC<
  {
    ref?: React.Ref<HTMLInputElement>
  } & React.InputHTMLAttributes<HTMLInputElement>
> = ({ type, className, ref, ...props }) => {
  return (
    <input
      className={cn(
        'w-full h-10 px-3 py-2 text-sm border border-primary-500/40 file:border-0 file:bg-transparent file:text-sm file:font-medium rounded bg-white dark:bg-black text-black dark:text-white placeholder:text-primary-400 placeholder:dark:text-primary-600  focus:outline-none focus:ring-1 focus-visible:ring-1 focus:ring-secondary-400  dark:focus:ring-secondary-700 focus-visible:ring-secondary-400 dark:focus-visible:ring-secondary-700 disabled:opacity-50 disabled:cursor-not-allowed',
        className,
      )}
      ref={ref}
      type={type}
      {...props}
    />
  )
}

export { Input }
