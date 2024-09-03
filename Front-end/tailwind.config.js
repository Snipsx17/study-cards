/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: '#874ccc',
        purpleButton: '#A161F3',
      },
    },
    fontFamily: {
      sans: ['Helvetica', 'georgia'],
      body: ['Helvetica', 'georgia'],
    },
    gridTemplateColumns: {
      cardsGrid2: 'repeat(2, minmax(300px, 1fr))',
      cardsGrid3: 'repeat(3, minmax(300px, 1fr))',
    },
  },
  plugins: [],
};
