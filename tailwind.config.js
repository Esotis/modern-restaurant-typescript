/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        golden: "#DCCA87",
        grey: "#AAAAAA",
        crimson: "#F5EFDB",
        gold: "rgb(220, 202, 135)",
        "custom-gray": "rgb(170, 170, 170)",
      },
      fontFamily: {
        base: ['"Cormorant Upright"', "serif"],
        alt: ['"Open Sans"', "sans-serif"],
      },
      backgroundImage: {
        main: "url('./assets/bg.png')",
      },
    },
  },
  plugins: [],
};
