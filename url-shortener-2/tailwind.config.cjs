/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        working: "url('./assets/images/illustration-working.svg')",
        shorten: "url('./assets/images/bg-shorten-mobile.svg')",
      },
    },
  },
  plugins: [],
};
