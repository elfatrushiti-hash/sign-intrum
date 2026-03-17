/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "intrum-purple-100": "#29074A",
        "intrum-purple-80": "#4F1D8D",
        "intrum-purple-60": "#8750E5",
        "intrum-purple-40": "#C9B0EF",
        "intrum-purple-20": "#F1E8FA",
        "intrum-grey-20": "#F5F4F2",
        "accent-1": "#170456",
        "accent-2": "#1316C7",
        "accent-3": "#2395FF",
        "accent-4": "#033334",
        "accent-5": "#0E6D74",
        "accent-6": "#ABDCDE",
        "accent-7": "#03A4AD"
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
}