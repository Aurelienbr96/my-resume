/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: [
    "./src/**/*.{html,js,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  variants: {
    extend: {
      opacity: ["dark", "group-hover"],
    },
  },
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      fontSize: {
        sm: ["12px", "14px"],
        sm1: ["13px", "14px"],
        sm2: ["14px", "18px"],
        sm3: ["14px", "20px"],
        base: ["15px", "20px"],
        base2: ["16px", "19px"],
        "text-tutorial": ["16px", "23px"],
        base3: ["18px", "20px"],
        base4: ["18px", "22px"],
        lg: ["20px", "28px"],
        xxl: ["36px", "44px"],
        huge: ["45px", "50px"],
      },
      animation: {
        "right-top": "moveRightTop 0.1s ease-in-out forwards",
        "fade-in": "fadeInUp 0.5s ease-in-out forwards",
        "fade-in-left": "fadeInLeft 0.5s ease-in-out forwards",
        "fade-in-right": "fadeInRight 0.5s ease-in-out forwards",
        "fade-in-down": "fadeInDown 0.5s ease-in-out forwards",
      },
      colors: {
        "light-purple": "#5C5C83",
        "light-grey": "#F2F5F7",
        "strong-purple": "#545790",
        "violet-poison": "#7935c9",
        "violet-light": "#a27fdf",
        "dark-purple": "#262745",
        "purple-white": "#efeafb",
        "color-medium-light": "#E9E9E9",
        "color-dark": "#10172B",
        "alice-blue": "#F7FAFC",
        dark: "#0F182C",
        "dark-text": "#8396BD",
        "dark-highlight": "#D8E1EE",
        "dark-skill-text": "#53D3D3",
        "dark-skill-bg": "#1A3655",
        error: "#C81E1D",
      },
      boxShadow: {
        strong: "0 3px 6px 0px rgba(0, 0, 0, 0.16)",
      },
      keyframes: {
        moveRightTop: {
          "100%": { transform: "translate(3px, -3px)" },
        },
        fadeInDown: {
          "0%": { opacity: 0, transform: "translateY(-20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: 0, transform: "translateX(-20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeInRight: {
          "0%": { opacity: 0, transform: "translateX(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
