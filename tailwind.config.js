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
      },
      spacing: {
        'full-content': 'calc(100% - 64px)'
      },
      keyframes: {
				slideDownAndFade: {
					from: { opacity: "0", transform: "translateY(-2px)" },
					to: { opacity: "1", transform: "translateY(0)" },
				},
				slideUpAndFade: {
					from: { opacity: "0", transform: "translateY(2px)" },
					to: { opacity: "1", transform: "translateY(0)" },
				},
			},
			animation: {
				slideDownAndFade:
					"slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
				slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
			},
    },
  },
  plugins: [],
}

