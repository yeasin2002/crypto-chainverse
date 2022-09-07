/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Acme: ["Acme", "sans-serif"],
        Combo: ["Combo", "cursive"],
        Flower: ["Indie Flower", "cursive"],
        Kalam: ["Kalam", "cursive"],
        Lobster: ["Lobster", "cursive"],
        Oswald: ["Oswald", "sans-serif"],
        Pacifico: ["Pacifico", "cursive"],
        Permanent: ["Permanent Marker", "cursive"],
        Playfair: ["Playfair Display", "serif"],
        Prompt: ["Prompt", "sans-serif"],
        Righteous: ["Righteous", "cursive"],
        Russo: ["Russo One", "sans-serif"],
        Satisfy: ["Satisfy", "cursive"],
        Ubuntu: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
};
