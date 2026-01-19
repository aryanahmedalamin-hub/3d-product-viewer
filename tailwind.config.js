/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DAA520", // Golden
        secondary: "#1A1A1A", // Dark
      },
      fontSize: {
        'xxs': '0.625rem', // 10px
        'tiny': '0.5625rem',  // 9px
      },
      letterSpacing: {
        'widest-plus': '0.2em',
      },
    },
  },
  plugins: [],
}
