import { FC } from 'react'

interface LogoProps {
  className?: string
}

export const LogoNew: FC<LogoProps> = ({ className = '' }) => {
  return (
    <div
      role="img"
      aria-label="Third Bracket Ltd Logo"
      className={`flex items-center gap-2 h-5 lg:h-6 w-auto ${className}`}
    >
      {/* Icon SVG - 24x24 recommended */}
      <div className="flex-shrink-0 h-full aspect-square">
        {/* Light mode icon */}
        <svg
          version="1.1"
          viewBox="0 0 24 24"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full dark:hidden fill-primary-900"
        >
          <defs>
            <clipPath id="lightClip">
              <rect
                x="10.6"
                y="10.6"
                width="264.6"
                height="264.6"
                ry="26.6"
                strokeDasharray="0.478269, 2.86962"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="20"
                strokeWidth=".5"
                style={{ paintOrder: 'markers fill stroke' }}
              />
            </clipPath>
          </defs>
          <path
            transform="matrix(.090703 0 0 .090703 -.96145 -.96145)"
            d="m0 0v285.7h236.8l-121-38.9-0.8-192.8 121.6-54zm285.8 26.3-123.4 52.7-1.4 136.4 124.8 40.2z"
            clipPath="url(#lightClip)"
            style={{ fontVariationSettings: "'wght' 500" }}
          />
        </svg>
        
        {/* Dark mode icon */}
        <svg
          version="1.1"
          viewBox="0 0 24 24"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full hidden dark:block"
        >
          <defs>
            <clipPath id="darkClip">
              <rect
                x="10.6"
                y="10.6"
                width="264.6"
                height="264.6"
                ry="26.6"
                strokeDasharray="0.478269, 2.86962"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="20"
                strokeWidth=".5"
                style={{ paintOrder: 'markers fill stroke' }}
              />
            </clipPath>
          </defs>
          <path
            transform="matrix(.090703 0 0 .090703 -.96145 -.96145)"
            d="m0 0v285.7h236.8l-121-38.9-0.8-192.8 121.6-54zm285.8 26.3-123.4 52.7-1.4 136.4 124.8 40.2z"
            clipPath="url(#darkClip)"
            fill="#fff"
            style={{ fontVariationSettings: "'wght' 500" }}
          />
        </svg>
      </div>

      {/* Text with gradients */}
      <div className="flex items-baseline">
        <span className="text-xl lg:text-2xl font-light tracking-tight bg-gradient-text dark:bg-gradient-text-dark bg-clip-text text-transparent uppercase">
          Third
        </span>
        <span className="text-xl lg:text-2xl font-medium tracking-tight bg-gradient-text dark:bg-gradient-text-dark bg-clip-text text-transparent uppercase">
          Bracket
        </span>
        <span className="text-sm font-normal ml-1 bg-gradient-to-r from-primary-800 via-secondary-700 to-secondary-600 dark:from-primary-200 dark:via-secondary-300 dark:to-secondary-400 bg-clip-text text-transparent uppercase">
          Ltd
        </span>
      </div>
    </div>
  )
}
