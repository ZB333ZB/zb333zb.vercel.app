/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/pages/**/*.{html,js}", "./src/comps/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--ff-roboto-flex)", ...fontFamily.sans],
        serif: ["var(--ff-roboto-serif)", ...fontFamily.serif],
        mono: ["var(--ff-roboto-mono)", ...fontFamily.mono],
        display: ["var(--ff-righteous)", ...fontFamily.mono],
      },
      gridTemplateColumns: {
        _1fr60rem1fr:
          "minmax(1rem, 1fr) minmax(min-content, 60rem) minmax(1rem, 1fr)",
      },
    },
  },
  plugins: [],
};
