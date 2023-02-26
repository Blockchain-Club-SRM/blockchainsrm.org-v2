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
        "navbar-gradient":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%);",
        "about-gradient":
          "linear-gradient(147.75deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);",
        "team-gradient":
          "linear-gradient(147.75deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);",
      },
    },
    fontFamily: {
      heading: ["Oxanium", "cursive"],
      body: ["Outfit", '"sans-serif"'],
    },
  },
  plugins: [],
};
