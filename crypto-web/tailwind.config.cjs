/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        electric: {
          50: '#F1E5FF',
          100: '#E2CCFF',
          200: '#C599FF',
          300: '#A866FF',
          400: '#8B33FF',
          500: '#6F00FF',
          600: '#5800CC',
          700: '#420099',
          800: '#2C0066',
          900: '#160033',
          950: '#0B0019',
        },
      },
    },
  },
  plugins: [],
};
