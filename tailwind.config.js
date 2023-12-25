/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: { 
      fontFamily: {
        inter: "'Inter', sans-serif",
      },
    colors: {
      primary: '#0F1B4C',
      secondary: "#e7efff",
    },
    borderImage: {
      'multicolor': 'linear-gradient(to right, #ff8a65, #ffb74d, #ffca28, #d4e157, #aed581)',
    },

    },
  },
  plugins: [require("daisyui")],
}