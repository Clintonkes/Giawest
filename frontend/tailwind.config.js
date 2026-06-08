module.exports = {
  content: [
    "./index.html",
    "./*.{js,jsx,ts,tsx}",
    "./Pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./services/**/*.{js,jsx,ts,tsx}",
    "./data/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#1F3A5F',
          teal: '#4FB6B0',
          mint: '#DDF5EE',
          white: '#FFFFFF',
          gray: '#E5E7EB',
        }
      }
    },
  },
  plugins: [],
}
