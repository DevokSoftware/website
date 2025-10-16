import { 
  SimpleGrid, 
  Container,
  Box
} from "@chakra-ui/react";
import projects from "../../files/projects.json";
import { ProjectCard } from "./ProjectCard";

export const ProjectGrid = () => (
  <Container maxW="7xl" px={0}>
    <SimpleGrid 
      columns={{ base: 1, md: 2, lg: 2 }} 
      spacing={8}
      px={{ base: 4, md: 0 }}
    >
      {projects.map((project) => (
        <Box key={project.id}>
          <ProjectCard project={project} />
        </Box>
      ))}
    </SimpleGrid>
  </Container>
);

export const ProjectGridSingle = () => (
  <Container maxW="7xl" px={0}>
    <SimpleGrid 
      columns={1} 
      spacing={8}
      px={{ base: 4, md: 0 }}
    >
      {projects.map((project) => (
        <Box key={project.id}>
          <ProjectCard project={project} />
        </Box>
      ))}
    </SimpleGrid>
  </Container>
);
