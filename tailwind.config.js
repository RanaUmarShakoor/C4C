/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        height: 'max-height',
        width: "max-widht",
      },
      transitionDuration: {
        DEFAULT: '500ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'ease',
      },
      boxShadow: {
        customOrange: '0px 0px 0px 4px rgba(255, 165, 0, 0.5)',
        customBlue: '0px 0px 0px 4px rgba(0, 112, 255, 0.5)',
        customBlack: '0px 4px 14px 0px rgba(0, 0, 0, 0.25)',
      },
      screens: {
        'xxl': '1400px',
        'xs': '475px',
        'xxs': '375px',
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
}