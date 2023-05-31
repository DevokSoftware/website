import { Box, Center, Text } from "@chakra-ui/react";
import { BlogGrid } from "../components/blog/BlogGrid";

export const Blog = () => (
  <>
    <Center>
      <Box mt={5} w="5xl">
        <Center>
          <Text as="b" fontSize="xl">
            Welcome to my Blog 👋
          </Text>
        </Center>
        <Text textAlign="center" mt={5} fontSize="md">
          I'm not a good writer. However I've decided to start a blog where I
          need to... WRITE.
        </Text>
        <Text textAlign="center" fontSize="md">
          What can go wrong? See by yourself.
        </Text>
      </Box>
    </Center>
    <Box mt={5}>
      <BlogGrid />
    </Box>
  </>
);
