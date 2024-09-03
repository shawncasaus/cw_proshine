/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        grey: "#2D2D2D",        
        primary: "#FF6363",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke-3-black': {
          WebkitTextStrokeWidth: '1px',
          WebkitTextStrokeColor: 'black',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
