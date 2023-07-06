const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['"Rubik"', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [],
};
