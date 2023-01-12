/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        fondo:'linear-gradient(to bottom, #6190e8, #a7bfe8)',
        cajita:'linear-gradient(90deg, #283048, #859398)'
      },
      colors:{
        'marca': '#76b852',
        'nuevoBoton': '#DD936B',
        'nuevoBoton2': '#ea7067'
      }
    },
    fontFamily: {
      logo: ['Kdam Thmor Pro']
    }
  },
  plugins: [],
}
