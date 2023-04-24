/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        primary: {
          50: "#FDF1E8",
          100: "#F8D4B7",
          200: "#F5BF94",
          300: "#F1A164",
          400: "#EE8F45",
          500: "#EA7317",
          600: "#D56915",
          700: "#A65210",
          800: "#813F0D",
          900: "#62300A",
        },
        secondary: {
          50: "#E7E9EB",
          100: "#B6BBC0",
          200: "#929AA2",
          300: "#616C77",
          400: "#424F5D",
          500: "#132334",
          600: "#11202F",
          700: "#0D1925",
          800: "#0A131D",
          900: "#080F16",
        },
        black: "#929292",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
