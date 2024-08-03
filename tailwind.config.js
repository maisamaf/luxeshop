/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.{js,ts,tsx}', './app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        sfregular: ["sfregular", "sans-serif"],
        sfsemibold: ["sfsemibold", "sans-serif"],
        sfbold: ["sfbold", "sans-serif"],
        "sfregular-italic": ["sfregular-italic", "sans-serif"],
      },
      colors: {
        primary: '#FA5A2A',
        black: '#030711',
        grey: '#A4A8B5',
      },
    },
  },
  plugins: [],
};
