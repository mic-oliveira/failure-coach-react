/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./src/components/**/*.{js,jsx}",
    "./public/index.html",
  ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
