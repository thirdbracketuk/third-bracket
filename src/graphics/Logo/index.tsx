import React from 'react'

const css = `
  html[data-theme="dark"] path {
    fill: #f6fafb;
  }

  .graphic-logo {
    width: 150px;
    height: auto;
  }`

export const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#101014"
      viewBox="0 0 432 432"
      className="graphic-logo"
    >
      <style type="text/css">{css}</style>
      <path d="M32.7 0A32.7 32.4 0 0 0 0 32.4v367.5A32.4 32.1 0 0 0 32.4 432h288L140 367.6 139 80 347.3 0zM432 33.5l-221.6 87.3-3 200 222.4 90a32.7 32.4 0 0 0 2.2-11.2z" />
    </svg>
  )
}
