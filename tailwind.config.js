/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        custom: {
          purple: '#be71f9',
          'purple-dark': '#a85de0',
        },
      },
    },
  },
  plugins: [],
};