import { FC } from 'react'

interface LogoProps {
  className?: string
}

export const Logo: FC<LogoProps> = ({ className = '' }) => {
  return (
    <div
      role="img"
      aria-label="Third Bracket Logo"
      className={`flex  gap-[5px] h-5 lg:h-6 w-auto   ${className}`}
    >
      {/* Logo SVG */}
      <div className="flex-shrink-0 h-full aspect-square self-center">
        {/* Light mode gradient */}
        <svg
          // width="24"
          // height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="dark:hidden"
        >
          <defs>
            <linearGradient
              id="a"
              x1={135.56}
              x2={54.956}
              y1={69.655}
              y2={69.723}
              gradientTransform="translate(.002 .001) scale(.94486)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} />
              <stop offset={0.359} stopColor="#0d0d0d" />
              <stop offset={1} stopColor="#333b48" />
            </linearGradient>
            <linearGradient
              id="b"
              x1={0.001}
              x2={120.22}
              y1={67.733}
              y2={67.733}
              gradientTransform="translate(.002 .001) scale(.94486)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} />
              <stop offset={0.185} stopColor="#0d0d0d" />
              <stop offset={1} stopColor="#333b48" />
            </linearGradient>
          </defs>
          {/* <g strokeMiterlimit={50} strokeWidth={0}> */}
          <path
            fill="url(#a)"
            d="M127.47 113.08a18.904 18.904 0 0 0 .524-3.986v-90.19a18.904 18.904 0 0 0-.575-4.585L71.312 33.277l-.64 61.477z"
            style={{
              fontVariationSettings: '&quot',
            }}
            transform="scale(.18751)"
          />
          <path
            fill="url(#b)"
            d="M113.59.558A18.904 18.904 0 0 0 109.093 0h-90.19A18.904 18.904 0 0 0-.001 18.905v90.19A18.904 18.904 0 0 0 18.903 128h90.19a18.904 18.904 0 0 0 2.229-.293l-61.006-18.802-.318-86.832z"
            style={{
              fontVariationSettings: '&quot',
            }}
            transform="scale(.18751)"
          />
          <path
            fill="none"
            d="M113.59.558 49.999 22.072l.318 86.832 61.006 18.802a18.904 18.904 0 0 0 16.15-14.625L70.676 94.755l.64-61.477 56.106-18.958A18.904 18.904 0 0 0 113.592.557z"
            style={{
              fontVariationSettings: '&quot',
            }}
            transform="scale(.18751)"
          />
          {/* </g> */}
        </svg>

        {/* Dark mode gradient */}
        <svg
          // width="24"
          // height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden dark:block"
        >
          <defs>
            <linearGradient
              id="c"
              x1={135.56}
              x2={54.956}
              y1={69.655}
              y2={69.723}
              gradientTransform="translate(.002 .001) scale(.94486)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.359} stopColor="#f2f2f2" />
              <stop offset={1} stopColor="#c4c9cf" />
            </linearGradient>
            <linearGradient
              id="d"
              x1={0.001}
              x2={120.22}
              y1={67.733}
              y2={67.733}
              gradientTransform="translate(.002 .001) scale(.94486)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.185} stopColor="#f2f2f2" />
              <stop offset={1} stopColor="#c4c9cf" />
            </linearGradient>
          </defs>
          {/* <g strokeMiterlimit={50} strokeWidth={0}> */}
          <path
            fill="url(#c)"
            d="M127.47 113.08a18.904 18.904 0 0 0 .524-3.986v-90.19a18.904 18.904 0 0 0-.575-4.585L71.312 33.277l-.64 61.477z"
            style={{
              fontVariationSettings: '&quot',
            }}
            transform="scale(.18751)"
          />
          <path
            fill="url(#d)"
            d="M113.59.558A18.904 18.904 0 0 0 109.093 0h-90.19A18.904 18.904 0 0 0-.001 18.905v90.19A18.904 18.904 0 0 0 18.903 128h90.19a18.904 18.904 0 0 0 2.229-.293l-61.006-18.802-.318-86.832z"
            style={{
              fontVariationSettings: '&quot',
            }}
            transform="scale(.18751)"
          />
          <path
            fill="none"
            d="M113.59.558 49.999 22.072l.318 86.832 61.006 18.802a18.904 18.904 0 0 0 16.15-14.625L70.676 94.755l.64-61.477 56.106-18.958A18.904 18.904 0 0 0 113.592.557z"
            style={{
              fontVariationSettings: '&quot',
            }}
            transform="scale(.18751)"
          />
        </svg>
      </div>

      {/* Text */}
      <span className=" text-xl lg:text-2xl tracking-tight bg-gradient-text self-center leading-none dark:bg-gradient-text-dark text-transparent bg-clip-text  uppercase">
        <span className="font-light">Third</span>Bracket
      </span>
    </div>
  )
}
