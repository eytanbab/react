/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow:{
        'glow' : '0 0 10px 3px rgba(82, 255, 174, 0.5)'
      }
    },
  },
  plugins: [],
};
