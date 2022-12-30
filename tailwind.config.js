/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const { fontFamily } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

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
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        // ".hvr-underline-from-left": {
        //   display: "inline-block",
        //   verticalAlign: "middle",
        //   transform: "perspective(1px) translateZ(0)",
        //   boxShadow: "0 0 1px rgba(0, 0, 0, 0)",
        //   position: "relative",
        //   overflow: "hidden",
        //   "&:before": {
        //     content: '""',
        //     position: "absolute",
        //     backgroundColor: theme("colors.current"),
        //     zIndex: "-1",
        //     left: "0",
        //     right: "100%",
        //     bottom: "0",
        //     height: "1px",
        //     transitionProperty: "right",
        //     transitionDuration: "0.3s",
        //     transitionTimingFunction: "ease-out",
        //   },
        //   "&:hover:before, &:focus:before, &:active:before": {
        //     right: "0",
        //   },
        // },
        ".burger-wrapper": {
          position: "relative",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "1.5rem",
          height: "1.5rem",
          "&:hover *, &:hover *:before, &:hover *:after": {
            backgroundColor: theme("colors.zinc.200"),
          },
        },
        ".burger": {
          display: "flex",
          "&, &:before, &:after": {
            width: "1.5rem",
            height: "2px",
            backgroundColor: theme("colors.current"),
            transition: "all 0.2s ease-in-out",
          },
          "&:before, &:after": {
            content: '""',
            position: "absolute",
          },
          "&:before": {
            transform: "translateY(-8px)",
          },
          "&:after": {
            transform: "translateY(8px)",
          },
        },
      });
    }),
  ],
};
