import { ChakraProvider, Box } from "@chakra-ui/react";
import theme from "./assets/theme";
import { Homepage } from "./pages/Homepage";
import NavigationBar from "./pages/NavigationBar";

export const App = () => (
  <ChakraProvider theme={theme}>
    <NavigationBar />
    <Homepage />
  </ChakraProvider>
);
