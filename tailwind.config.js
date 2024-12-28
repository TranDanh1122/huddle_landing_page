/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "pink": "hsl(322, 100%, 66%)",
        "very_pale_cyan": "hsl(193, 100%, 96%)",
        "very_dark_cyan": "hsl(192, 100%, 9%)",
        "grayish_blue": "hsl(208, 11%, 55%)"
      },
      fontFamily: {
        "popin": "Poppins , sans-serif",
        'opsans': "Open Sans, sans-serif"
      },
      screens: {
        "mb": { min: "0", max: "1024px" }
      }
    },
  },
  plugins: [],
}

