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
    },
    variants: {

    },
    colors: {
      'special-grey': 'rgb(74,74,74)',
      'light-grey': 'rgb(217,217,217)',
      'white': 'rgb(255,255,255)',
    }
  },
  plugins: [],
}
