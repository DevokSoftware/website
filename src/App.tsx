import { ChakraProvider, Box } from "@chakra-ui/react";
import theme from "./assets/theme";
import { Homepage } from "./pages/Homepage";
import NavigationBar from "./components/layout/NavigationBar";

import { Projects } from "./pages/Projects";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Blog } from "./pages/Blog";

export const App = () => {
  const routes = [
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
    {
      path: "*",
      element: <Homepage />,
    },
  ];
  return (
    <>
      <ChakraProvider theme={theme}>
        <NavigationBar />
        <RouterProvider router={createBrowserRouter(routes)} />
      </ChakraProvider>
    </>
  );
};
