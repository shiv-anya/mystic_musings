/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        phone: "300px",
      },
      animation: {
        feather: "float 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(-10px)", // Move up
          },
          "50%": {
            transform: "translateY(10px)", // Move down
          },
        },
      },
    },
  },
  plugins: [],
};
