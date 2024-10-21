const path = require("path");

module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        slideRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        slideLeft: "slideLeft 20s linear infinite",
        slideRight: "slideRight 20s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-radix")()],
};
