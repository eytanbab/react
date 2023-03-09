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
        'destination-desktop':
          "url('../helpers/starter-code/assets/destination/background-destination-desktop.jpg')",
        'crew-desktop':
          "url('../helpers/starter-code/assets/crew/background-crew-desktop.jpg')",
        'technology-desktop':
          "url('../helpers/starter-code/assets/technology/background-technology-desktop.jpg')",
      },
      fontFamily: {
        barlow: ['Barlow Condensed'],
      },
    },
  },
  plugins: [],
};
