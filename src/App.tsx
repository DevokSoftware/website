import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  SimpleGrid,
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Button,
  theme,
  ColorModeScript,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import { Homepage } from "./pages/Homepage";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box>
      <Homepage />
    </Box>
  </ChakraProvider>
);
