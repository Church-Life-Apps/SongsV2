/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.tsx"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        brand: colors.lime,
        background: {
          dark: colors.zinc[800],
          light: colors.orange[50]
        },
        typography: {
          dark: colors.gray[200],
          light: colors.stone[950]
        },
        muted: {
          dark: colors.slate[300],
          light: colors.stone[700]
        }
      },
    }
  },
  plugins: [],
};
