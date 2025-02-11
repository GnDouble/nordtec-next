/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Definieren deiner benutzerdefinierten Farben
        'bg': '#e5e7eb', // Slate 200 als Hintergrundfarbe
        'fg': '#374151', // Grau als Schriftfarbe
        'highlight-color': '#fbbf24',
        'primary-color': '#4169E1', // Blau als Primärfarbe
        'footer-bg': '#4169E1', // Blau für den Footer-Hintergrund
        'card-bg': '#ffffff', // Weiß für Kartenhintergrund
      },
    },
  },
  plugins: [],
};
