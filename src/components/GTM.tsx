// 'use client'

// import { useEffect } from 'react'

// declare global {
//   interface Window {
//     dataLayer: Record<string, unknown>[]
//   }
// }

// export default function GTM() {
//   useEffect(() => {
//     const loadGTM = () => {
//       const gtmId = document.querySelector('meta[name="gtm-id"]')?.getAttribute('content')
//       if (!gtmId || document.getElementById('gtm-script')) return

//       // 1. Set up the dataLayer
//       window.dataLayer = window.dataLayer || []
//       window.dataLayer.push({
//         event: 'gtm.js',
//         'gtm.start': new Date().getTime(),
//       })

//       // 2. Load GTM script
//       const script = document.createElement('script')
//       script.id = 'gtm-script'
//       script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`
//       script.async = true
//       document.head.appendChild(script)

//       // Remove event listeners after GTM is loaded
//       window.removeEventListener('scroll', loadGTM)
//       window.removeEventListener('click', loadGTM)
//     }

//     // Load GTM after first interaction
//     window.addEventListener('scroll', loadGTM, { once: true })
//     window.addEventListener('click', loadGTM, { once: true })

//     return () => {
//       window.removeEventListener('scroll', loadGTM)
//       window.removeEventListener('click', loadGTM)
//     }
//   }, [])

//   return null
// }

'use client'

import { useEffect } from 'react'

/**
 * 💡 Type Declaration:
 * This declares the existence and structure of window.dataLayer
 * for TypeScript, ensuring type safety when pushing events.
 */
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}

interface GTMProps {
  gtmId: string | undefined // Accept gtmId as a prop, can be undefined
}

export default function GTM({ gtmId }: GTMProps) {
  useEffect(() => {
    // 1. *Guard Clause:* Exit if no GTM ID or script is already loaded.
    if (!gtmId || document.getElementById('gtm-script')) {
      return
    }

    const loadGTM = () => {
      // Prevent running if the script is somehow already being loaded by another trigger
      if (document.getElementById('gtm-script')) return

      // 2. *Setup DataLayer:* Initialize and push the gtm.start event.
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: 'gtm.js',
        'gtm.start': new Date().getTime(),
      })

      // 3. *Load GTM Script:* Create, set attributes, and append the script.
      const script = document.createElement('script')
      script.id = 'gtm-script'
      script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`
      script.async = true
      document.head.appendChild(script)

      // 4. *Cleanup Listeners:* Remove the triggers once GTM has been loaded.
      window.removeEventListener('scroll', loadGTM)
      window.removeEventListener('click', loadGTM)
    }

    // A. *Primary Triggers:* Load GTM on the first interaction (scroll or click).
    window.addEventListener('scroll', loadGTM, { once: true })
    window.addEventListener('click', loadGTM, { once: true })

    // B. *Fallback Trigger:* Load GTM after 7 seconds if the user is idle.
    const timerId = setTimeout(() => {
      loadGTM()
    }, 7000)

    // *Component Unmount Cleanup:* Remove event listeners and clear the timer.
    return () => {
      window.removeEventListener('scroll', loadGTM)
      window.removeEventListener('click', loadGTM)
      clearTimeout(timerId)
    }
  }, [gtmId])

  return null
}
