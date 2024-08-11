/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
      animation: {
        "border-animation": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
