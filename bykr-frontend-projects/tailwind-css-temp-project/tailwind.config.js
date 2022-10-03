/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        "DEFAULT": "1rem",
        "sm": "2rem",
        "lg": "3rem",
        "xl": "15rem",
        "2xl": "1rem",
      },
    },
    extend: {
      fontSize: {
        "xs": "12px",
        "sm": "16px",
        "base": "18px",
        "xl": "24px",
        "2xl": "48px",
        "3xl": "70px",
        "4xl": "150px",
      },
      colors: {
        "purple": "#0A142F",
        "yellow": "#FFC93E",
        "gray": "#353F5B",
        "light-gray": "#E0E5F3",
      },
      fontFamily: {
        sans: ["inter", "sans-serif"],
      },
      borderRadius: {
        button: "30px",
        default: "50px",
      },
      margin: {
        "lg-right-img": "-170px 0 0 -120px",
        "xl-right-img": "-170px 0 0 -140px",
        // "item-bottom": "0 0 40px",
      },
      lineHeight: {
        default: "none",
      },
    },
  },
  plugins: [],
};
