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
        'micro': '0.5rem',   // 8px
        'tiny': '0.5625rem',  // 9px
        'xxs': '0.625rem',   // 10px
      },
      letterSpacing: {
        'widest-plus': '0.2em',
      },
      boxShadow: {
        'glow-primary': '0 0 50px rgba(212, 175, 55, 0.3)',
      }
    },
  },
  plugins: [],
}
