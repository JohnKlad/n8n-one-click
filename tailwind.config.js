/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'n8n-orange': '#ff6d5a',
        'primary-dark-blue': '#1e293b',
        'secondary-dark-blue': '#334155',
      }
    },
  },
  plugins: [],
}