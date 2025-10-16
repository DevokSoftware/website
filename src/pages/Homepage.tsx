import {
  AbsoluteCenter,
  Box,
  Center,
  Container,
  HStack,
  Heading,
  Icon,
  ModalHeader,
  SimpleGrid,
  Stack,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ExperienceGrid } from "../components/experience/ExperienceGrid";
import { AboutMe } from "../components/aboutme/AboutMe";
import GitHubIcon from "../shared/GitHubIcon";
import LinkedInIcon from "../shared/LinkedInIcon";
import LeetCodeIcon from "../shared/LeetCode";
import { ProjectGridSingle } from "../components/project/ProjectGrid";

export const Homepage = () => {
  return (
    <>
      <Container color="white" id="test" maxW="6xl">
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={10}>
          <Box marginTop={{ base: "3vh", md: "10vh" }}>
            <Center h="100%">
              <VStack position={{ base: "relative", md: "fixed" }}>
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
                    <GitHubIcon color="white" />
                    <LinkedInIcon color="white" />
                    <LeetCodeIcon color="white" />
                  </HStack>
                </Box>
              </VStack>
            </Center>
          </Box>
          <Box marginTop={{ base: "0vh", md: "5vh" }} h="90vh">
            <Tabs position="relative" variant="unstyled">
              <Center>
                <TabList>
                  <Tab
                    fontSize="12px"
                    textTransform="uppercase"
                    as="b"
                    color="rgb(148 163 184)"
                    cursor="pointer"
                  >
                    Experience
                  </Tab>
                  <Tab
                    fontSize="12px"
                    textTransform="uppercase"
                    as="b"
                    color="rgb(148 163 184)"
                    cursor="pointer"
                  >
                    Projects
                  </Tab>
                </TabList>
              </Center>
              <TabIndicator
                mt="-1.5px"
                height="2px"
                bg="cyan.100"
                borderRadius="1px"
              />
              <TabPanels>
                <TabPanel>
                  <Box id="experience">
                    <ExperienceGrid />
                  </Box>
                </TabPanel>
                <TabPanel>
                  <Box id="projects">
                    <ProjectGridSingle />
                  </Box>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </SimpleGrid>
      </Container>
    </>
  );
};
