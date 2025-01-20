/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {

        PrimaryColor: "#FFA500",
        SecondaryColor: "#00FFFF",
        DarkColor: "#d4a373",
        ExtraDarkColor: "#a98467",
      },
    },
  },
  plugins: [],
};