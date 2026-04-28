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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 79.999786 80" className="admin-icon">
      <style type="text/css">{css}</style>
      <path d="M 5.6330148,7.5195312e-6 C 2.5064068,0.02900752 8.1980334e-7,2.5554175 8.1980334e-7,5.6888275 V 74.310998 c 0,3.13431 2.51120598019666,5.66151 5.63871398019666,5.68901 H 63.26586 L 29.73277,63.927968 V 16.072848 L 63.26586,8.0751953e-4 Z M 79.9952,5.6442275 43.65511,23.966268 l 0.13358,32.21708 36.21109,18.17305 V 5.7842275 c -0.001,-0.0464 0,-0.0928 0,-0.13891 z" />
    </svg>
  )
}

export default Icon
