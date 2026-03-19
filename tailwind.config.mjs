// /** @type {import('tailwindcss').Config} */
// const config = {
//   darkMode: 'class',
//   content: [
//     './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/components/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/app/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
//     './pages/**/*.{ts,tsx}',
//     './components/**/*.{ts,tsx}',
//     './app/**/*.{ts,tsx}',
//     './src/**/*.{ts,tsx}',

//     './node_modules/@thirdbracket/bracketui/**/*.{js,ts,jsx,tsx}',
//     './node_modules/@thirdbracket/bracketui/src/**/*.{js,ts,jsx,tsx}',
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ['var(--font-roboto)', 'var(--font-noto-bengali)'],
//       },
//       backgroundImage: {
//         'gradient-gray': 'radial-gradient(125% 125% at 50% 90%, #e0e3e6b2 40%, #737e8cb2 100%)',
//         'gradient-gray-dark':
//           'radial-gradient(125% 125% at 50% 10%, #22283066 40%, #333b48b2 100%)',
//         'gradient-primary-dark':
//           'conic-gradient(from 0deg at center, #fff, #f6f7f8, #f7f7f7, #f6f7f8,#f7f7f7, #fff  )',
//         'gradient-primary':
//           'conic-gradient(from 0deg at center, #000000, #050708, #080808,#050708, #080808  ,   #000000  )',
//         'gradient-secondary-dark': 'conic-gradient(at bottom left, #fff,#f7f7f7, #f6f7f8  )',
//         'gradient-secondary': 'conic-gradient(at bottom left, #000, #080808, #0f1215 )',

//         'gradient-text': 'conic-gradient(at bottom left, #3b3b3b, #333b48, #3b3b3b  )',
//         'gradient-text-dark': 'conic-gradient(at bottom left, #dbdbdb, #c4c4c4, #adadad )',

//         'overlayDot-light': 'radial-gradient( #737e8c30 1px, transparent 1px)',
//         'overlayDot-dark': 'radial-gradient(   #737e8c40 1px, transparent 1px)',
//         'overlayDot-testimonial': 'radial-gradient(   #c4c9cf60 1px, transparent 1px)',
//         'overlayDot-testimonial-dark': 'radial-gradient(   #333b4840 1px, transparent 1px)',

//         'overlay-radial': 'radial-gradient(#f1f2f4_1px,transparent_1px)',
//         'overlay-radial-dark': 'radial-gradient(#0b0d0e_1px,transparent_1px)',

//         // CTA light: accent-50 → accent-100 → accent-50 — barely-there blush that
//         // signals the accent brand without overwhelming the neutral page
//         'accent-radial':
//           'radial-gradient(ellipse at 30% 0%, #fcf3f6 0%, #f5d5e1 55%, #fcf3f6 100%)',

//         // CTA dark: accent-950 → accent-900 — deep wine, atmospheric not harsh;
//         // clearly distinct from the #080808 page background
//         'accent-radial-dark':
//           'radial-gradient(ellipse at 30% 0%, #47101c 0%, #3a0e1a 55%, #47101c 100%)',
//       },
//       colors: {
//         accent: {
//           50: '#fcf3f6',
//           100: '#f9eaf0',
//           200: '#f5d5e1',
//           300: '#eeb3c8',
//           400: '#e383a3',
//           500: '#d75d82',
//           600: '#bc3a5b',
//           700: '#a82e4a',
//           800: '#8c283d',
//           900: '#752637',
//           950: '#47101c',
//         },

//         secondary: {
//           50: '#f6f7f8', // hsl(210, 12%, 97%)
//           100: '#e0e3e6', // hsl(210, 11%, 89%)
//           200: '#c4c9cf', // hsl(213, 10%, 79%)
//           300: '#a8afb8', // hsl(214, 10%, 69%)
//           400: '#8c95a1', // hsl(214, 10%, 59%)
//           500: '#737e8c', // hsl(214, 10%, 50%)
//           600: '#5d6774', // hsl(213, 11%, 41%)
//           700: '#48515b', // hsl(212, 12%, 32%)
//           800: '#333b48', // hsl(215, 17%, 24%)
//           900: '#222830', // hsl(214, 17%, 16%)
//           950: '#050708', // hsl(210,17%,7%)
//         },

//         primary: {
//           50: '#f7f7f7',
//           100: '#dbdbdb',
//           200: '#c4c4c4',
//           300: '#adadad',
//           400: '#969696',
//           500: '#808080',
//           600: '#696969',
//           700: '#525252',
//           800: '#3b3b3b',
//           900: '#242424',
//           950: '#080808',
//         },
//       },
//     },
//   },
//   plugins: [require('@tailwindcss/typography')],
// }
// export default config

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',

    './node_modules/@thirdbracket/bracketui/**/*.{js,ts,jsx,tsx}',
    './node_modules/@thirdbracket/bracketui/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)', 'var(--font-noto-bengali)'],
      },
      animation: {
        'bounce-x': 'bounce-x 1s ease-in-out infinite',
      },
      keyframes: {
        'bounce-x': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(3px)' },
        },
      },
      boxShadow: {
        // accent-600 = #bc3a5b = rgb(188,58,91)
        'nav-glow':
          '0 1px 0 0 rgba(188,58,91,0.25), 0 1px 40px 0 rgba(188,58,91,0.14), 0 4px 80px 0 rgba(188,58,91,0.08)',
        'nav-glow-dark':
          '0 1px 0 0 rgba(188,58,91,0.35), 0 1px 50px 0 rgba(188,58,91,0.22), 0 4px 100px 0 rgba(188,58,91,0.12)',
      },
      backgroundImage: {
        'hero-glow-light':
          'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(188,58,91,0.07) 0%, transparent 70%)',
        'hero-glow-dark':
          'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(188,58,91,0.18) 0%, transparent 70%)',
        'gradient-gray': 'radial-gradient(125% 125% at 50% 90%, #e0e3e6b2 40%, #737e8cb2 100%)',
        'gradient-gray-dark':
          'radial-gradient(125% 125% at 50% 10%, #22283066 40%, #333b48b2 100%)',
        // Light bg: pure white center fading to cool off-white edge — natural depth
        'gradient-primary-dark':
          'radial-gradient(ellipse 120% 100% at 50% 0%, #ffffff 0%, #f6f7f8 50%, #eef0f2 100%)',
        // Dark bg: slightly lifted charcoal center fading to pure black edge — atmospheric depth
        'gradient-primary':
          'radial-gradient(ellipse 120% 100% at 50% 0%, #111316 0%, #080808 55%, #000000 100%)',
        // gradient-secondary-dark = light mode card surface + dark mode text gradient
        // → needs to be near-white: elevates above white bg AND reads as light text on dark
        'gradient-secondary-dark': 'linear-gradient(160deg, #f6f8fa 0%, #edf1f5 100%)',

        // gradient-secondary = dark mode card surface + light mode text gradient
        // → needs to be near-black: elevates above black bg AND reads as dark text on white
        'gradient-secondary': 'linear-gradient(160deg, #1c2028 0%, #13161b 100%)',

        // Heading text gradient — linear works far better than conic for bg-clip-text
        // Light: rich near-black → dark charcoal (crisp, high contrast)
        // 'gradient-text': 'linear-gradient(135deg, #1a1a1a 0%, #3b3b3b 60%, #4a4a4a 100%)',
        // Dark: pure white → light gray (crisp, no muddy middle tones)
        // 'gradient-text-dark': 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 60%, #c4c4c4 100%)',

        'gradient-text':
          'radial-gradient(ellipse at 30% 0%, #0d0d0d 0%, #2e2e2e 55%, #141414 100%)',
        'gradient-text-dark':
          'radial-gradient(ellipse at 30% 0%, #ffffff 0%, #e2e2e2 55%, #f0f0f0 100%)',

        'gradient-accent': 'linear-gradient(120deg, #b71050 0%, #e30b5c 55%, #b71050 100%)',
        'gradient-accent-dark': 'linear-gradient(120deg, #e30b5c 0%, #ee538f 55%, #e30b5c 100%)',

        'overlayDot-light': 'radial-gradient( #737e8c30 1px, transparent 1px)',
        'overlayDot-dark': 'radial-gradient(   #737e8c40 1px, transparent 1px)',
        'overlayDot-testimonial': 'radial-gradient(   #c4c9cf60 1px, transparent 1px)',
        'overlayDot-testimonial-dark': 'radial-gradient(   #333b4840 1px, transparent 1px)',

        'overlay-radial': 'radial-gradient(#f1f2f4_1px,transparent_1px)',
        'overlay-radial-dark': 'radial-gradient(#0b0d0e_1px,transparent_1px)',

        // CTA light: off-white center with the faintest blush tint — elegant not pink
        'accent-radial':
          'radial-gradient(ellipse 110% 100% at 30% 0%, #ffffff 0%, #fdf0f4 40%, #f9e8ee 100%)',

        // CTA dark: very dark wine center bleeding to near-black — moody not maroon
        'accent-radial-dark':
          'radial-gradient(ellipse 110% 100% at 30% 0%, #1e0a10 0%, #130608 50%, #080808 100%)',
      },
      colors: {
        // accent: {
        //   50: '#fcf3f6',
        //   100: '#f9eaf0',
        //   200: '#f5d5e1',
        //   300: '#eeb3c8',
        //   400: '#e383a3',
        //   500: '#d75d82',
        //   600: '#bc3a5b',
        //   700: '#a82e4a',
        //   800: '#8c283d',
        //   900: '#752637',
        //   950: '#47101c',
        // },

        accent: {
          50: '#fff0f6', // hsl(337, 100%, 97%)
          100: '#fedce9', // hsl(337,  95%, 93%)
          200: '#fbbbd4', // hsl(337,  90%, 86%)
          300: '#f589b3', // hsl(337,  85%, 75%)
          400: '#ee538f', // hsl(337,  82%, 63%)
          500: '#e30b5c', // hsl(337,  91%, 47%) ← anchor
          600: '#b71050', // hsl(337,  84%, 39%)
          700: '#8e1040', // hsl(337,  80%, 31%)
          800: '#700f34', // hsl(337,  76%, 25%)
          900: '#530e28', // hsl(337,  72%, 19%)
          950: '#340416', // hsl(337,  86%, 11%)
        },

        secondary: {
          50: '#f6f7f8', // hsl(210, 12%, 97%)
          100: '#e0e3e6', // hsl(210, 11%, 89%)
          200: '#c4c9cf', // hsl(213, 10%, 79%)
          300: '#a8afb8', // hsl(214, 10%, 69%)
          400: '#8c95a1', // hsl(214, 10%, 59%)
          500: '#737e8c', // hsl(214, 10%, 50%)
          600: '#5d6774', // hsl(213, 11%, 41%)
          700: '#48515b', // hsl(212, 12%, 32%)
          800: '#333b48', // hsl(215, 17%, 24%)
          900: '#222830', // hsl(214, 17%, 16%)
          950: '#050708', // hsl(210,17%,7%)
        },

        primary: {
          50: '#f7f7f7',
          100: '#dbdbdb',
          200: '#c4c4c4',
          300: '#adadad',
          400: '#969696',
          500: '#808080',
          600: '#696969',
          700: '#525252',
          800: '#3b3b3b',
          900: '#242424',
          950: '#080808',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
