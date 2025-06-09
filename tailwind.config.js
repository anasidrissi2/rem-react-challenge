/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#0037C1',
          darker: '#002a99' // 25% darker than primary-blue
        },
        secondary: {
          blue: '#2563eb'
        },
        dark: {
          bg: '#1C1C1C',
          border: '#2A2A2A'
        }
      },
    },
  },
  plugins: [],
}