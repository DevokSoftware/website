import { Container, Text } from "@chakra-ui/react";
import projects from "../../files/projects.json";
import { ProjectCard } from "./ProjectCard";

export const ProjectGrid = () => (
  <>
    {projects.map((project) => (
      <ProjectCard project={project} />
    ))}
  </>
);
