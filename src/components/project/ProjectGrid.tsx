import { SimpleGrid, Container, Text, Box, Center } from "@chakra-ui/react";
import projects from "../../blogs/projects.json";
import { ProjectCard } from "./ProjectCard";

export const ProjectGrid = () => (
  <>
    {projects.map((project) => (
      <ProjectCard project={project} />
    ))}
  </>
);
