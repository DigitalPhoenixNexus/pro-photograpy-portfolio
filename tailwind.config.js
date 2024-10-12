/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "first": "#F1EFED",
        "sec": "#DED3C9"
      },
      height: {
        "ful":"calc(100vh - 50px)",
        "mid": "calc(100vh - 64px)"
      },
      
    }
  },
  plugins: [],
};
