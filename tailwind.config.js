/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'Magic': "url('./img/webp/bg-img.png')",
        'About': "url('./img/webp/bglayer-2.webp')",
        
      },
      fontFamily: {
        Balsamiq: ["Balsamiq Sans, sans-serif"],
        Dela: ["Dela Gothic One, sans-serif"],
      },
    },
  },
  plugins: [],
}

