/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: '#874ccc',
      },
    },
    fontFamily: {
      sans: ['Helvetica', 'georgia'],
      body: ['Helvetica', 'georgia'],
    },
  },
  plugins: [],
};
