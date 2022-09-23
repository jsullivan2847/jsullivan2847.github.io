/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    screens: {
      'sm': '0px',
      'md': '540px',
      'lg': '900px'
    },

    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        bold: ['Poppins@500', 'sans-serif']
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
    variants: {

    },
    colors: {
      'special-grey': 'rgb(74,74,74)',
      'light-grey': 'rgb(217,217,217)',
      'white': 'rgb(255,255,255)',
      'yellow': 'rgb(253,226,147)',
      'pink': 'rgb(255,221,223)',
      'green': 'rgb(206,234,214)',
      'blue': 'rgb(114,191,207)',
      'red': 'rgb(251,68,66)',
      'black': 'rgb(64,63,63)'



    }
  },
  plugins: [],
}
