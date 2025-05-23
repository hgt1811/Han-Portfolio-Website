/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FDEEEB',      // Soft cream
        accent: '#FADADD',          // Blush pink
        primary: '#A480CF',         // Soft violet
        rose: '#CE7E9E',            // Warm rose
        muted: '#8C94C1',           // Muted lavender blue
        gradientStart: '#E9A7B1',   // Button left
        gradientEnd: '#B3A1E6',     // Button right
        lilac: '#D4C7F2',           // Social icon background
        softWhite: '#F7F7F7',       // Light text/icon foreground
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'], 
      },
    },
  },
  plugins: [],
}
