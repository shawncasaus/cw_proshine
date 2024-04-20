/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        primary: "#FF6363",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
      fontFamily: {
        body: ["Nunito"],
      },
    },
  },
  plugins: [],
};
