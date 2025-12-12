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
        sans: ['var(--font-roboto)'],
      },
      backgroundImage: {
        'gradient-gray': 'radial-gradient(125% 125% at 50% 90%, #e0e3e6b2 40%, #737e8cb2 100%)',
        'gradient-gray-dark':
          'radial-gradient(125% 125% at 50% 10%, #22283066 40%, #333b48b2 100%)',
        'gradient-primary-dark':
          'conic-gradient(from 0deg at center, #fff, #f6f7f8, #f7f7f7, #f6f7f8,#f7f7f7, #fff  )',
        'gradient-primary':
          'conic-gradient(from 0deg at center, #000000, #050708, #080808,#050708, #080808  ,   #000000  )',
        'gradient-secondary-dark': 'conic-gradient(at bottom left, #fff,#f7f7f7, #f6f7f8  )',
        'gradient-secondary': 'conic-gradient(at bottom left, #000, #080808, #0f1215 )',

        'gradient-text': 'conic-gradient(at bottom left, #3b3b3b, #333b48, #3b3b3b  )',
        'gradient-text-dark': 'conic-gradient(at bottom left, #dbdbdb, #c4c4c4, #adadad )',

        'overlayDot-light': 'radial-gradient( #737e8c30 1px, transparent 1px)',
        'overlayDot-dark': 'radial-gradient(   #737e8c40 1px, transparent 1px)',
        'overlayDot-testimonial': 'radial-gradient(   #c4c9cf60 1px, transparent 1px)',
        'overlayDot-testimonial-dark': 'radial-gradient(   #333b4840 1px, transparent 1px)',

        'overlay-radial': 'radial-gradient(#f1f2f4_1px,transparent_1px)',
        'overlay-radial-dark': 'radial-gradient(#0b0d0e_1px,transparent_1px)',

        'accent-radial': 'radial-gradient(circle at center,      #df9faf  , #eec4ce )',
        'accent-radial-dark': 'radial-gradient(circle at center,     #66192d, #3d0f1b )',
      },
      colors: {
        accent: {
          50: '#faebee',
          100: '#eec4ce',
          200: '#df9faf',
          300: '#d2798f',
          400: '#c65370',
          500: '#ac3956',
          600: '#8a2841',
          700: '#66192d',
          800: '#3d0f1b',
          900: '#2a0911',
          950: '#160408',
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
