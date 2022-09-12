/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,ts}"],
  theme: {
    extend: {
      fontFamily: ["Arial", "sans-serif"],
      spacing: {
        600: "600px",
      },
    },
  },
  plugins: [],
};
