/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#00D1FF",
        "primary-pink": "#AD1AAF",
      },
      backgroundImage: {
        "subheading-gradient":
          "linear-gradient(90.13deg, #FFFFFF 0%, #F81DFB 99.96%);",
      },
    },
    fontFamily: {
      heading: ["Oxanium", "cursive"],
      body: ["Outfit", '"sans-serif"'],
    },
  },
  plugins: [],
};
