// Use CommonJS module syntax
/** @type {import('tailwindcss').Config} */

// tailwind.config.js
export default {
  content: [
    "./index.html", 
    "./components/**/*.{js,ts,jsx,tsx}", 
    "./pages/**/*.{js,ts,jsx,tsx}", 
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  safelist: [
    'bg-background',
    'bg-accent',
    'text-muted',
    'text-primary',
    'text-rose',
    'from-gradientStart',
    'to-gradientEnd',
    'bg-lilac',
    'text-softWhite',
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
        sans: ["Nunito", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
