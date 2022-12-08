/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: '#064663',
        nav: '#ECB365',
        fondo: 'rgba(0, 0, 0, 0.47)',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        '3x0': ' 0px 0px 4px rgba(0, 0, 0, 0.25)',
        '3x1': '0px 0px 22px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
