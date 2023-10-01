import {
  AbsoluteCenter,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Container,
  Grid,
  HStack,
  Heading,
  SimpleGrid,
  Stack,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import { ExperienceGrid } from "../components/experience/ExperienceGrid";
import { ProjectGrid } from "../components/project/ProjectGrid";
import { AboutMe } from "../components/aboutme/AboutMe";

export const Homepage = () => {
  return (
    <>
      <Container color="white" id="test" maxW="5xl">
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={10}>
          <Box marginTop={{ base: "3vh", md: "10vh" }}>
            <Box textAlign="left">
              <Text as="b" fontSize="3xl">
                Leonel Gonçalves
              </Text>
            </Box>
            <Text fontSize="12px" textTransform="uppercase" as="b">
              Backend Developer
            </Text>
            <Box id="aboutme" marginTop={{ base: "1vh", md: "5vh" }}>
              <AboutMe />
            </Box>
          </Box>
          <Box
            marginTop={{ base: "3vh", md: "10vh" }}
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
