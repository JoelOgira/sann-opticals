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
        // primary: '#ad1f26',
        secondary: '#2B6EDD',
        grey: '#333333'
      }
    },
  },
  plugins: [],
}
