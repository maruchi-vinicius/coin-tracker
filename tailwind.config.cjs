/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      border: ['focus'],
      colors: {
        myblack: '#09090a'
      },
    },
  },
  plugins: [],
}