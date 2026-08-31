/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: '#3B2A1F',
        button: '#C77D4A',
        footer: '#E9A85A',
        footerBottom: '#411A00',
      },
      fontFamily: {
        fredoka: ['var(--font-fredoka)'],
      },
    },
  },
  plugins: [],
}