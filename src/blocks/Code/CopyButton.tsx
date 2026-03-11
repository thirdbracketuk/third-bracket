// 'use client'
// import { Button } from '@/components/ui/button'
// import { CopyIcon } from '@payloadcms/ui/icons/Copy'
// import { useState } from 'react'

// export function CopyButton({ code }: { code: string }) {
//   const [text, setText] = useState('Copy')

//   function updateCopyStatus() {
//     if (text === 'Copy') {
//       setText(() => 'Copied!')
//       setTimeout(() => {
//         setText(() => 'Copy')
//       }, 1000)
//     }
//   }

//   return (
//     <div className="flex justify-end align-middle">
//       <Button
//         className="flex gap-1"
//         variant={'secondary'}
//         onClick={async () => {
//           await navigator.clipboard.writeText(code)
//           updateCopyStatus()
//         }}
//       >
//         <p>{text}</p>
//         <CopyIcon />
//       </Button>
//     </div>
//   )
// }

'use client'
import { useState } from 'react'

export function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md transition-all
        text-primary-400 dark:text-primary-500
        hover:text-primary-700 dark:hover:text-primary-300
        hover:bg-primary-100 dark:hover:bg-primary-800/50
        active:scale-95"
      aria-label="Copy code"
    >
      {copied ? (
        <>
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Copied
        </>
      ) : (
        <>
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          Copy
        </>
      )}
    </button>
  )
}
