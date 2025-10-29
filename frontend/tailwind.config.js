/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        dark: '#070707ff',
        grayish: '#2e2d2dff',
        saffron: '#ff4b33ff',
        purewhite: '#ffffffcc',
        offwhite: '#f5f5f5',  
      },
    },
  },
  plugins: [],
};
