/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#2b6cb0', // Blue
        secondary: '#38b2ac', // Teal
        accent: '#90cdf4', // Light Blue
      },
    },
  },
  plugins: [],
};


