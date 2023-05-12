import { SimpleGrid, Container } from "@chakra-ui/react";
import { BlogCard } from "./BlogCard";
import blogs from "../../blogs/blogs.json";

export const BlogGrid = () => (
  <Container maxW="7xl">
    <SimpleGrid spacing={10} columns={{ sm: 2, md: 3 }}>
      {blogs.map((blog) => (
        <BlogCard blog={blog} />
      ))}
    </SimpleGrid>
  </Container>
);
