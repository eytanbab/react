/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        rain: "url('./assets/rain-bg-desktop.jpg')",
        sunny: "url('./assets/sunny-bg-desktop.jpg')",
        placeholder: "url('./assets/placeholder-bg.svg')",
      },
    },
  },
  plugins: [],
};
