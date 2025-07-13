/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'logotype': ['Myfont', 'sans-serif']
      },
      animation: {
        'slide-down': 'slideDown 0.3s ease-out forwards',
      },
      keyframes: {
        slideDown: {
          '0%': { opacity: 0, transform: 'translateY(-10%)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },

  },
  plugins: [],
}
