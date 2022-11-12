/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,css}",
    "./src/**/*.{html,cssjs}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'cursive']
      }
    },
  },
  plugins: [],
}
