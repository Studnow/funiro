import { defineConfig } from "windicss/helpers";

export default defineConfig({
  theme: {
    extend: {
      screens: {
        "hover-hover": { raw: "(hover: hover)" },
        "hover-none": { raw: "(hover: none)" },
      },
      fontFamily: {
        sans: ["Gilroy", "sans-serif"],
      },
      colors: {
        primary: "#E89F71",
        "primary-light": "#F9F1E7",
        "primary-lighter": "#FCF8F3",
        danger: "#E97171",
        success: "#2EC1AC",
        description: "#898989",
        "description-light": "#F4F5F7",
      },
    },
  },
  plugins: [
    require("windicss/plugin/typography"),
    require("windicss/plugin/forms"),
  ],
});
