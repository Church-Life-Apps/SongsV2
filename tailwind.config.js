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
        brand: {
          '50': '#f3f9fc',
          '100': '#e6f3f8',
          '200': '#c6e8f1',
          '300': '#a3dbe8',
          '400': '#5cbfd4',
          '500': '#37a8c0',
          '600': '#2789a2',
          '700': '#206d84',
          '800': '#1e5d6e',
          '900': '#1e4d5c',
          '950': '#14333d',
        },
        background: {
          dark: colors.zinc[800],
          light: colors.stone[100]
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
