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
      },
      screens: {
        'xs': '475px',
        'xxs': '375px',
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
}