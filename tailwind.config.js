/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      keyframes: {
        expand: {
          '0%': { width: '0%', height: '0%', opacity: '0' },
          '100%': { width: '500px', height: '100%', opacity: '1' },
        },
      },
      animation: {
        expand: 'expand 1s linear forwards',
      }
    },
  },
  plugins: [],
};
