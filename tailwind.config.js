/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  purge: [
    "./src/components/**/*.{js,jsx}",
    "./public/index.html",
  ],
  plugins: [],
}
