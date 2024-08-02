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
        "max-2560": { max: "2560px" },
        "max-1922": { max: "1922px" },
        "max-1600": { max: "1600px" },
        "max-1440": { max: "1440px" },
        "max-1200": { max: "1200px" },
        "max-992": { max: "992px" },
        "max-768": { max: "768px" },
        "max-427": { max: "427px" },
      },
    },
  },
  plugins: [],
};
