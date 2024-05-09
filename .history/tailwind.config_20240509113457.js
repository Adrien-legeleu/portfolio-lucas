/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blackGray: "#242629",
        gray: "#646B73",
        whiteGray: "#CED2D4",
      },
      fontFamily: {
        montserrat: ["Montserrat, sans-serif"],
      },
      textShadow: {
        lg: "0 -2px 10px white",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
