import { FC } from 'react'

interface LogoProps {
  className?: string
  height?: number
  label?: string
}

export const Logo: FC<LogoProps> = ({ className = '', height, label = 'Thirdbracket Logo' }) => {
  return (
    <svg
      role="img"
      aria-label={label}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 281 32"
      fill="none"
      height={height}
      className={`w-auto ${className}`}
    >
      <title>{label}</title>

      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth=".3"
        strokeLinejoin="round"
        strokeMiterlimit="0"
        d="M2.4.1Q.3.3 0 2.4v27.2q.2 2 2.3 2.3h22.8L12 25.5v-19L25.2.1zm29.5 2.3L17.4 9.6l.1 12.8 14.4 7.2V2.4zm177.3 1.8c-6 0-10.4 4.4-10.4 11.8s4.4 11.8 10.4 11.8c5.1 0 8.8-3.2 9.5-7.7h-3.5c-.6 2.9-3 4.5-6 4.5-3.9 0-6.9-3-6.9-8.6s3-8.6 7-8.6c2.8 0 5.3 1.6 5.9 4.5h3.5c-.7-4.9-4.6-7.7-9.5-7.7zM42 4.5v2h7.3v21h2.2v-21h7.3v-2zm21.4 0v23h2.2V16.7h13v10.8h2.2v-23h-2.2v10.3h-13V4.5zm23.4 0v23H89v-23zm8.2 0v23h2.2v-9.2h6.2l5 9.2h2.5l-5.2-9.7q4.2-1.6 4.3-6.4c0-4-2.6-7-7.5-7zm20 0v23h6.8c7 0 11-4.3 11-11.6 0-7.1-4-11.4-10.6-11.4zm22.2 0v23h9c5.3 0 7.7-2.6 7.7-6.2 0-3.5-2.5-5.5-4.8-5.7v-.2c2.1-.5 4-2 4-4.9 0-3.4-2.5-6-7.4-6zm20.8 0v23h3.5v-8.7h5l4.6 8.7h4l-5-9.3q4-1.7 4.1-6.5c0-4.2-2.6-7.2-8-7.2zm26.9 0-8.3 23h3.9l2-6h9.1l2.1 6h3.9l-8.4-23zm37.9 0v23h3.5v-7.2l3.3-3.5 7.4 10.7h4.2l-9.2-13 9.1-10h-4.5l-6.5 7.1-3.8 4.8V4.5zm21.7 0v23H259v-3h-11v-7.1h10.1v-3H248V7.5h11v-3zm17.9 0v3h7.2v20h3.5v-20h7.2v-3zm-165.2 2h5.2q5.4.2 5.4 5c0 2.9-1.8 4.8-5.3 4.8h-5.3zm20 0h5c5.5 0 8.4 3.5 8.4 9.4s-3 9.7-8.9 9.7h-4.5zm69.8.7 2.2 7.5 1.4 3.8h-7l1.2-3.8zm-46.2.3h4.7c2.7 0 4 1.4 4 3.3 0 2.2-1.8 3.7-4.1 3.7h-4.6zm20.7 0h4.3q5 .2 4.9 4.2t-4.8 4.1h-4.4zm-20.7 9.7h5.1c2.8 0 4.5 1.8 4.5 4 0 1.9-1.3 3.3-4.6 3.3h-5z"
      />
    </svg>
  )
}

export default Logo
