/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        "raleway": ['Raleway', 'sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('flowbite/plugin')

  ],
}

