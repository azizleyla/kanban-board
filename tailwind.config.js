/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '2rem',
        xl: '2rem',
        '2xl': '2rem',
      },
    },

    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/img/bg.jpg')",

      },
      colors: {
        'black-rgba': "rgba(0,0,0,0.6)"
      }
    },
  },
  plugins: [],
}