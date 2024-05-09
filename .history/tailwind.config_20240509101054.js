/** @type {import('tailwindcss').Config} */

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
    },
  },
  plugins: [],
};
