/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        mobile: "url('./assets/images/bg-sidebar-mobile.svg')",
      },
    },
  },
  plugins: [],
};
