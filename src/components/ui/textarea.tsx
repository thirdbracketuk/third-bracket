import { cn } from '@/utilities/ui'
import * as React from 'react'

const Textarea: React.FC<
  {
    ref?: React.Ref<HTMLTextAreaElement>
  } & React.TextareaHTMLAttributes<HTMLTextAreaElement>
> = ({ className, ref, ...props }) => {
  return (
    <textarea
      className={cn(
        'flex min-h-[80px] w-full rounded border border-primary-500/40  bg-white dark:bg-black px-3 py-2 text-sm placeholder:text-primary-400 placeholder:dark:text-primary-600 focus-visible:outline-none focus:ring-1 focus-visible:ring-1 text-black dark:text-white focus:ring-secondary-400  dark:focus:ring-secondary-700 focus-visible:ring-secondary-400 dark:focus-visible:ring-secondary-700  disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
}

export { Textarea }
