import { Box, Text } from "@chakra-ui/react";
import { BlogGrid } from "../components/blog/BlogGrid";

export const Blog = () => (
  <>
    <Box mt={10} textAlign="center">
      <Text as="b" fontSize="xl">
        Welcome to my Blog 👋
      </Text>
      <Text mt={5} fontSize="md">
        Here you can find some posts about what I'm doing and working on. Have a
        good time!
      </Text>
    </Box>
    <Box mt={50}>
      <BlogGrid />
    </Box>
  </>
);
