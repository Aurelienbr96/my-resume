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
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
