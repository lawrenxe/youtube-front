/** @type {import('tailwindcss').Config} */
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
  plugins: [require("daisyui")],
  darkMode: "class", // Set darkMode to false
  daisyui: {
    themes: ["light"], // Specify only the light theme or your custom theme
  },
};
