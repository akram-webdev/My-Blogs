const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

      animation: {
        shine: "shine 1s",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
      
    },
  },
  plugins: [],
});
