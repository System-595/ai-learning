/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Includes all your React files
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")], // Add Typography plugin
};
