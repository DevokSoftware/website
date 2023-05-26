import { SimpleGrid, Container } from "@chakra-ui/react";
import { BlogCard } from "./BlogCard";
import blogs from "../../blogs/blogs.json";

export const BlogGrid = () => (
  <Container maxW="7xl">
    <SimpleGrid spacing={10} columns={{ sm: 2, md: 3 }}>
      {/* TODO - In the future blogs will come from a server, from now they come from a json file*/}
      {blogs.map((blog) => (
        <BlogCard blog={blog} />
      ))}
    </SimpleGrid>
  </Container>
);
