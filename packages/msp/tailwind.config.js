// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

module.exports = {
  theme: {
    extend: {
      // Adds a new breakpoint in addition to the default breakpoints
      screens: {
        '3xl': '1600px',
      },
      colors: {
        light: colors.gray['900'],
        dark: colors.black,
        warning: colors.red['500'],
        bg: colors.gray,
        txc: colors.gray,
        txl: colors.gray,
        txd: colors.gray,
        bgl: colors.gray,
        bgd: colors.gray,
      },
    },
  },
};
