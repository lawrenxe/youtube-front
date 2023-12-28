/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        solidShadow: "16px 16px 0 rgba(0, 0, 0, 0.25)",
        solidShadowButton: "4px 4px 0 rgba(0, 0, 0, 0.25)",
        innerSolidShadow: "inset  16px 16px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [
    require("daisyui"),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
      });
    }),
  ],
  darkMode: "class", // Set darkMode to false
  daisyui: {
    themes: ["light"], // Specify only the light theme or your custom theme
  },
};
