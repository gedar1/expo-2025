/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4b25c5",
          100: "#ba82ff",
          200: "#9e6bf1",
          300: "#8354e2",
          400: "#673cd4",
        },
        secondary: {
          600: "#848484",
          700: "#6c6c6c",
          800: "#555555",
          900: "#3d3d3d",
          DEFAULT: "#252525",
        },
      },
      fontFamily: {
        "workSans-light": ["WorkSans-Light", "sans-serif"],
        "workSans-black": ["WorkSans-Black", "sans-serif"],
        "workSans-medium": ["WorkSans-Medium", "sans-serif"],
        "firacode-light": ["FiraCode-Light", "sans-serif"],
        "firacode-regular": ["FiraCode-Regular", "sans-serif"],
        "firacode-medium": ["FiraCode-Medium", "sans-serif"],
      },
    },
  },
  plugins: [],
};
