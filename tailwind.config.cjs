/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "light-purple": "#5C5C83",
        "light-grey": "#F2F5F7",
        "strong-purple": "#545790",
        'color-medium-light': '#E9E9E9',
        "error": "#C81E1D"
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
