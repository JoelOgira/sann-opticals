/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#19479A',
        lightBlue: '#8ED9F8',
        brightRed: '#ad1f26',
        lightRed: '#ec4949',
        grey: '#333333'
      }
    },
  },
  plugins: [],
}
