import { extendTheme } from "@chakra-ui/react";

const colors = {
  grey: {
    dark: "hsl(0, 0%, 59%)",
    darker: "hsl(0, 0%, 17%)",
  },
};

const fonts = { rubik: `"Rubik", sans-serif` };

const breakpoints = {
  base: "0",
  phone: "30em", // ~480px
  tablet: "50em", // ~768px
  smallScreen: "60em", // ~960px
  pc: "80em", // ~1280px
};

export default extendTheme({
  styles: {
    global: {
      "*": {
        fontFamily: fonts.rubik,
      },
    },
  },
  colors,
  breakpoints,
});
