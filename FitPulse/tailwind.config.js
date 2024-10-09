/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',  // This ensures that all JSX and TSX files are scanned for Tailwind classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
