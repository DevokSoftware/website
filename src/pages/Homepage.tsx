import {
  AbsoluteCenter,
  Box,
  Center,
  Container,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ExperienceGrid } from "../components/experience/ExperienceGrid";
import { AboutMe } from "../components/aboutme/AboutMe";
import GitHubIcon from "../shared/GitHubIcon";
import LinkedInIcon from "../shared/LinkedInIcon";
import LeetCodeIcon from "../shared/LeetCode";

export const Homepage = () => {
  return (
    <>
      <Container color="white" id="test" maxW="6xl">
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={10}>
          <Box marginTop={{ base: "3vh", md: "10vh" }}>
            <Center h="100%">
              <VStack>
                <Box textAlign="left">
                  <Text as="b" fontSize="4xl">
                    Leonel Gonçalves
                  </Text>
                </Box>

                <Text fontSize="12px" textTransform="uppercase" as="b">
                  Backend Developer
                </Text>

                <Box
                  id="aboutme"
                  marginTop={{ base: "2vh !important", md: "5vh !important" }}
                >
                  <AboutMe />
                </Box>
                <Box mt={{ base: "3vh !important", md: "10vh !important" }}>
                  <HStack gap={2}>
                    <GitHubIcon />
                    <LinkedInIcon />
                    <LeetCodeIcon />
                  </HStack>
                </Box>
              </VStack>
            </Center>
          </Box>
          <Box
            marginTop={{ base: "0vh", md: "5vh" }}
            overflowY="scroll"
            h="90vh"
            sx={{
              "::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <Box id="experience">
              <ExperienceGrid />
            </Box>
            {/* <Box id="projects" marginTop={{ base: "3vh", md: "5vh" }}>
              <ProjectGrid />
            </Box> */}
          </Box>
        </SimpleGrid>
      </Container>
    </>
  );
};
