import { SimpleGrid, Container, Text, Box, Center } from "@chakra-ui/react";
import experience from "../../files/experience.json";
import { ExperienceCard } from "../experience/ExperienceCard";

export const ExperienceGrid = () => (
  <Container mb="5vh">
    {experience.map((job) => (
      <ExperienceCard job={job} />
    ))}
  </Container>
);
