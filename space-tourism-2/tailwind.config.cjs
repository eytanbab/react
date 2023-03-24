/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#0B0D17',
        'light-purple': '#D0D6F9',
      },
      fontFamily: {
        bellefair: ['Bellefair'],
        barlow: ['Barlow'],
        'barlow-condensed': ['Barlow Condensed'],
      },
      backgroundImage: {
        mobile: "url('./assets/home/background-home-mobile.jpg')",
      },
    },
  },
  plugins: [],
};
