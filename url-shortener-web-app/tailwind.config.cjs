/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    backgroundImage: {
      desktop: "url('./bg-shorten-desktop.svg')",
      mobile: "url('./assets/bg-shorten-mobile.svg')",
    },
    extend: {},
  },
  plugins: [],
};
