import React from 'react'

const css = `
  .admin-icon {
    fill: #353942;
  }
  
  html[data-theme="dark"] .admin-icon {
    fill: #f6fafb;
  }
`

export const Icon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="admin-icon">
      <style type="text/css">{css}</style>
      <path d="M127.47 113.08a18.904 18.904 0 0 0 .524-3.986v-90.19a18.904 18.904 0 0 0-.575-4.585L71.312 33.277l-.64 61.477z" transform="scale(.18751)" />
      <path d="M113.59.558A18.904 18.904 0 0 0 109.093 0h-90.19A18.904 18.904 0 0 0-.001 18.905v90.19A18.904 18.904 0 0 0 18.903 128h90.19a18.904 18.904 0 0 0 2.229-.293l-61.006-18.802-.318-86.832z" transform="scale(.18751)" />
      <path d="M113.59.558 49.999 22.072l.318 86.832 61.006 18.802a18.904 18.904 0 0 0 16.15-14.625L70.676 94.755l.64-61.477 56.106-18.958A18.904 18.904 0 0 0 113.592.557z" fill="none" transform="scale(.18751)" />
    </svg>
  )
}
