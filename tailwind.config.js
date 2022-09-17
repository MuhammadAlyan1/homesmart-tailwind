/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: '#fbbf24',
        orange: '#d97706',
        black: '#262626',
        lightGray: '#525252',
        darkGray: '#171717',
        darkGreen: '#134e4a',
        white: '#e5e5e5',
      },
      screens: {
        '3xl': '1800px',
      },
      backgroundImage: {
        featuresPattern:
          "url('/src/assets/images/dots.svg'), url('/src/assets/images/dots.svg')",
      },
    },
  },
  plugins: [],
};
