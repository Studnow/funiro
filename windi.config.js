import { defineConfig } from "windicss/helpers";

export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        sans: ["Gilroy", "sans-serif"],
      },
      colors: {
        primary: "#E89F71",
        "primary-light": "#F9F1E7",
        "primary-lighter": "#FCF8F3",
        discount: "#E97171",
        novelty: "#2EC1AC",
        description: "#898989",
      },
    },
  },
  plugins: [
    require("windicss/plugin/typography"),
    require("windicss/plugin/forms"),
  ],
});
