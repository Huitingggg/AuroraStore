/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        stone: {
          50: "#F8F7F3",
          100: "#ECEAE2",
          200: "#DEDBD0",
        },
        ink: "#1B221D",
        pine: "#1F5C52",
        brass: "#C89B3C",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-plex)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
