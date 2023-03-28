/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
        'xl': '1440px',
      },
      fontFamily: {
        'sans': ['var(--ff-primary)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--primary) / <alpha-value>)'
        },
        card: {
          fill: 'hsl(var(--card-fill) / <alpha-value>)',
          active: 'hsl(var(--card-active) / <alpha-value>)'
        },
        text: {
          base: 'hsl(var(--text-base) / <alpha-value>)'
        },
        fill: {
          main: 'hsl(var(--main-fill) / <alpha-value>)'
        }
      },
      letterSpacing: {
        'btn': 'var(--tracking-btn)'
      }
    },
  },
  plugins: [],
}
