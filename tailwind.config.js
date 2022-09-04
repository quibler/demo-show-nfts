/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Nhaas: ["NHaasGrotesk65Md", "sans"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
