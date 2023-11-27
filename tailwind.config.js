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

    },
  },
  plugins: [require("daisyui")],
}