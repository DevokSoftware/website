// theme.ts

// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";

const theme = {
  fonts: {
    // heading: '"Avenir Next", sans-serif',
    // body: '"Open Sans", sans-serif',
  },
  styles: {
    global: {},
  },

  config: {
    initialColorMode: "dark", // 'dark' | 'light'
    useSystemColorMode: true,
  },
};

export default extendTheme(theme);
