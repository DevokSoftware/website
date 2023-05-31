import { Box, Center, Text } from "@chakra-ui/react";
import { ProjectGrid } from "../components/project/ProjectGrid";

export const Projects = () => (
  <>
    <Center>
      <Box mt={5} w="5xl">
        {/* <Text as="b" fontSize="xl">
        Welcome to my Projects 👋
      </Text> */}
        <Text textAlign="center" mt={5} fontSize="md">
          I build things in my free time.
        </Text>
        <Text textAlign="center" fontSize="md">
          Sometimes I only create the GitHub repository for a random idea and
          then I'll never go back there, but at other times I spend so much time
          on them that my phone keeps asking me why the screen time is being
          reduced so drastically.
        </Text>
        <br />
        <Center>
          <Text as="b" textAlign="center" fontSize="md">
            Here are some of those projects.
          </Text>
        </Center>
      </Box>
    </Center>
    <Box mt={5}>
      <ProjectGrid />
    </Box>
  </>
);
