import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  SimpleGrid,
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import { BlogGrid } from "../components/BlogGrid";

export const Blog = () => (
  <>
    <Box p={3} textAlign="center">
      <Text as="b" fontSize="xl">
        Welcome to my Blog 👋
      </Text>
      <Text fontSize="md">
        Here you can find some posts about what I'm doing and working on. Have a
        good time!
      </Text>
      <div style={{ marginTop: "100px" }} />
      <BlogGrid />
    </Box>
  </>
);
