// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{html,js,ts,jsx,tsx}", // if using `/app` directory

    './src/**/*.{html,js,ts,jsx,tsx}', // Adjust to your file structure
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
