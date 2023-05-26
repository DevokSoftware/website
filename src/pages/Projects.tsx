import { Box, Text } from "@chakra-ui/react";
import { ProjectGrid } from "../components/project/ProjectGrid";

export const Projects = () => (
  <>
    <Box mt={10} textAlign="center">
      <Text as="b" fontSize="xl">
        Welcome to my Projects 👋
      </Text>
      <Text mt={5} fontSize="md">
        I'm an full-stack developer and all coding projects are built from the
        ground up, from planning and designing all the way to solving real-life
        problems with code.
      </Text>
    </Box>

    <Box mt={50}>
      <ProjectGrid />
    </Box>
  </>
);
