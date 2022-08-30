/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'components/Nav/Nav.jsx',
    'components/Header/Header.jsx',
    'components/Window/Window.jsx',
    'components/Layout/Layout.jsx',
    'components/Footer/Footer.jsx',
  ],
  theme: {
    extend: {},
    colors: {
      'special-grey': 'rgb(74,74,74)',
      'light-grey': 'rgb(217,217,217)',
      'white': 'rgb(255,255,255)',
    }
  },
  plugins: [],
}
