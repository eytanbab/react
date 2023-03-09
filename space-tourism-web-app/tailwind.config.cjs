/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'home-dekstop':
          "url('../helpers/starter-code/assets/home/background-home-desktop.jpg')",
        'home-tablet':
          "url('../helpers/starter-code/assets/home/background-home-tablet.jpg')",
        'home-mobile':
          "url('../helpers/starter-code/assets/home/background-home-mobile.jpg')",
        moon: 'url(../helpers/starter-code/assets/destination/image-moon.png)',
      },
      fontFamily: {
        barlow: ['Barlow Condensed'],
      },
    },
  },
  plugins: [],
};
