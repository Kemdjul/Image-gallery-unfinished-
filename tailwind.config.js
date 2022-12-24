/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Libre Baskerville", "serif"],
        sans: ["Roboto", "sans-serif"],
      },

      gridTemplateColumns: {
        'layout': 'repeat(auto-fill, 250px)',
      },

      gridAutoRows: {
        'layout': '10px',
      },
    },
  },
  plugins: [],
}
