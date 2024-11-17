/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender: {
          100: '#E6E6FA',
          200: '#D8D8FF',
        }
      }
    }
  },
  plugins: [],
}