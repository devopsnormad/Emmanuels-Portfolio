/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#121212',
        'sidebar-gray': '#181818',
        'card-gray': '#242526',
        'text-color': '#e4e6eb',
        'card-color': '#F8F8FF',
        'bg-color': '#f5f5fa'
      },
      boxShadow: {
        'glow': '0 0 10px #00f, 0 0 20px #00f, 0 0 30px #00f, 0 0 40px #00f',
      },
    },
  },
  plugins: [],
}