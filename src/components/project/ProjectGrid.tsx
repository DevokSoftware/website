import { SimpleGrid, Container } from "@chakra-ui/react"
import projects from "../../blogs/projects.json";
import { ProjectCard } from "./ProjectCard";

export const ProjectGrid = () => (
  <Container maxW="7xl">
    <SimpleGrid spacing={10} columns={{ sm: 2, md: 3 }}>
    {/* TODO - In the future projects will come from a server, from now they come from a json file*/}
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </SimpleGrid>
  </Container>
);
