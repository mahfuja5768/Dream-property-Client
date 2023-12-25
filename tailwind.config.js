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
    borderColor: {
      borderImage: 'linear-gradient(to right, #0F1B4C, #e7efff)', 
      borderImageSlice: 1,
      borderWidth: '4px',
      borderStyle: 'solid',
    },

    },
  },
  plugins: [require("daisyui")],
}