import { ChakraProvider, Box } from "@chakra-ui/react";
import theme from "./assets/theme";
import { Homepage } from "./pages/Homepage";
import NavigationBar from "./components/layout/NavigationBar";

import { Projects } from "./pages/Projects";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Blog } from "./pages/Blog";

export const App = () => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <HashRouter>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<Homepage />} />
          </Routes>
        </HashRouter>
      </ChakraProvider>
    </>
  );
};
