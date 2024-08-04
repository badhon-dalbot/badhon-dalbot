/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      animation: {
        "border-animation": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
