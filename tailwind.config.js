/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        italia: ["Italiana"],
        poppins: ["Poppins"],
        manrope: ["Manrope"],
      },
      boxShadow: {
        "custom-peach": "22px -21px 0px -2px #FBF2EE",
      },
      screens: {
        xl2: "1800px",
      },
    },
  },
  plugins: [],
};
