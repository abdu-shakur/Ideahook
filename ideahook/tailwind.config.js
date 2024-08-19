/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5D3FD3',
        secondary: '#E6E6FA',
        Accent: '#FF6F61',
        Complementary: '#98FF98',
      },
    },
  },
  plugins: [],
}

