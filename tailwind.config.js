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
        'full-content': 'calc(100% - 64px)',
        'trigger-dropdown': 'var(--radix-dropdown-menu-trigger-width)',
        'trigger-popover': 'var(--radix-popover-trigger-width)'
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
        overlayShow: {
					from: { opacity: "0" },
					to: { opacity: "1" },
				},
				contentShow: {
					from: {
						opacity: "0",
						transform: "translate(-50%, -48%) scale(0.96)",
					},
					to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
				},
        skeleton: {
          '100%': {
            left: '100%'
          }
        },
        overlayHidden: {
          from: {
            opacity: '100'
          },
          to: {
            opacity: '0'
          }
        }
			},
			animation: {
				slideDownAndFade:
					"slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
				slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        overlayShow: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        overlayHidden: "overlayHidden 150ms cubic-bezier(0.16, 1, 0.3, 1)",
				contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        skeleton: 'skeleton 800ms infinite'
			},
    },
  },
  plugins: [],
}
