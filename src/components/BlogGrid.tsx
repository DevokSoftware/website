import { SimpleGrid, Container } from "@chakra-ui/react";
import { BlogCard } from "./BlogCard";

export const BlogGrid = () => (
  <Container maxW="7xl">
    <SimpleGrid spacing={10} columns={{ sm: 2, md: 3 }}>
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </SimpleGrid>
  </Container>
);
