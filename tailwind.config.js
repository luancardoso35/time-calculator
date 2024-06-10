/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '400px',
    },
    extend: {
      backgroundImage: {
        'gradient-112': 'linear-gradient(112.1deg, var(--tw-gradient-stops))'
      },
    },
  },
  plugins: [],
}

