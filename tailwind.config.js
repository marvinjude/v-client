const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    content: ["./src/**/*.jsx", "./src/App.js"],
  },
  corePlugins: {
    outline: true,
  },
  theme: {
    extend: {
      colors: {
        gray: {
          "50": "#f9fafb",
          ...colors.gray,
        },
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "odd", "hover", "focus"],
    textColor: ["disabled"],
  },

  plugins: [require("@tailwindcss/custom-forms")],
};
