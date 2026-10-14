/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        linen: "#F2EEE4",
        ink: "#1C1B19",
        bottle: "#163C33",
        bottledark: "#0F2B24",
        brass: "#B8923F",
        brasslight: "#D8C28A",
        hairline: "#DAD4C4",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-plex)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
