import { Box, Text } from "@chakra-ui/react";
import { BlogGrid } from "../components/BlogGrid";
import { Link } from "react-router-dom";

export const Blog = () => (
  <>
    <Box mt={10} textAlign="center">
      <Text as="b" fontSize="xl">
        Welcome to my Blog 👋
      </Text>
      <Text fontSize="md">
        Here you can find some posts about what I'm doing and working on. Have a
        good time!
      </Text>
    </Box>
    <Box mt={50}>
      <BlogGrid />
    </Box>
  </>
);
