/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      animation: {
        "right-top": "moveRightTop 0.1s ease-in-out forwards",
        "fade-in": "fadeInUp 0.5s ease-in-out forwards",
        "fade-in-left": "fadeInLeft 0.5s ease-in-out forwards",
      },
      colors: {
        "light-purple": "#5C5C83",
        "light-grey": "#F2F5F7",
        "strong-purple": "#545790",
        "dark-purple": "#262745",
        "color-medium-light": "#E9E9E9",
        "color-dark": "#10172B",
        "alice-blue": "#F7FAFC",
        error: "#C81E1D",
      },
      boxShadow: {
        strong: '0 3px 6px 0px rgba(0, 0, 0, 0.16)',
      },
      keyframes: {
        moveRightTop: {
          "100%": { transform: "translate(3px, -3px)" },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: 0, transform: "translateX(-20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
  ],
};
