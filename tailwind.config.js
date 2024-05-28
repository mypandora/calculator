/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: false,
  },
  content: ['./index.html', './lib/**/*.js'],
  theme: {
    fontFamily: {
      sans: ['arial', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
