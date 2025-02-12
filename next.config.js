/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Statischen Export aktivieren
    images: {
      unoptimized: true, // Deaktiviert die Bildoptimierung für statische Seiten
    },
    trailingSlash: true, // Optional für saubere URLs
  };
  
  module.exports = nextConfig;
  