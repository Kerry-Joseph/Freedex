/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class', 
  theme: {
    colors: {
      'FGI_white': '#f4ebd9',
      'FGI_blue' : '#44ccff',
      'FGI_dark_blue' : '#1b4079',
      'black': '#000000',
    },
    extend: {
      keyframes: {
        open_filters: {
          '0%': {transform: 'translateX(30rem)'},
          '100%': {transform: 'translateX(0)'}
        },
        open_filters_mobile: {
          '0%': {transform: 'translateY(2.2rem)'},
          '100%': {transform: 'translateX(0)'}
        },
        close_filters: {
          '0%': {transform: 'translateX(-30rem)'},
          '100%': {transform: 'translateX(0)'}
        }
      },

      animation: {
        open_filters: 'open_filters .5s',
        open_filters_mobile: 'open_filters_mobile .5s',
        close_filters: 'close_filters .5s'
      }
    },
  },
  plugins: [],
}
