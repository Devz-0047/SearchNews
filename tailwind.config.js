/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Verdana", "Arial", "Helvetica", "sans-serif"], // Setting Verdana as the default sans font
      },
    },
  },
  plugins: [],
};
