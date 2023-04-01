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
  Container,
  Image,
  Flex,
  Avatar,
  IconButton,
} from "@chakra-ui/react";
import { BlogCard } from "./BlogCard";

export const BlogGrid = () => (
  <Container maxW="7xl">
    <SimpleGrid spacing={10} templateColumns="repeat(3, minmax(0px, 1fr))">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </SimpleGrid>
  </Container>
);
