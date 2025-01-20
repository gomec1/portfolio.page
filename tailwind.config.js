/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}", // Passe dies an dein Projektverzeichnis an
    "./components/**/*.{html,js}",
    "./**/*.{html,js}", // Falls du ein components-Verzeichnis hast
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
};
