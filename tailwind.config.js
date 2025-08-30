import { colors } from './src/assets/styles/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif']
      },
      colors,
      boxShadow: {
        default: '0px 11px 20px rgba(0, 0, 0, 0.1)'
      },
      blur: {
        default: '10px'
      },
      borderRadius: {
        default: '16px',
        pill: '100%'
      }
    },
  },
  plugins: [],
}

