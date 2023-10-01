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
import { useState } from "react";
import { ExperienceGrid } from "../components/experience/ExperienceGrid";
import { ProjectGrid } from "../components/project/ProjectGrid";
import { InView, useInView } from "react-intersection-observer";

export const Homepage = () => {
  return (
    <>
      <Container color="white" id="test" maxW="5xl">
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={10}>
          <Box marginTop={{ base: "3vh", md: "10vh" }}>
            <Text as="b" fontSize="5xl">
              Leonel Gonçalves
            </Text>
            <Text fontSize="xl">Backend Developer</Text>
            <Box id="aboutme" marginTop={{ base: "1vh", md: "3vh" }}>
              <Stack spacing={4}>
                <Text
                  fontSize="sm"
                  color="rgb(148 163 184)"
                  textAlign="justify"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Text>

                <Text
                  fontSize="sm"
                  color="rgb(148 163 184)"
                  textAlign="justify"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
                <Text
                  fontSize="sm"
                  color="rgb(148 163 184)"
                  textAlign="justify"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
              </Stack>
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

            <Box id="projects" marginTop={{ base: "3vh", md: "5vh" }}>
              <ProjectGrid />
            </Box>
          </Box>
        </SimpleGrid>
      </Container>
    </>
  );
};

/*
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
import { useState } from "react";
import { ExperienceGrid } from "../components/experience/ExperienceGrid";
import { ProjectGrid } from "../components/project/ProjectGrid";

export const Homepage = () => {
  const [focusedSection, setFocusedSection] = useState("aboutme");
  const handleSectionClick = (section: string) => {
    setFocusedSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  type ListItemProps = {
    sectionId: string;
    label: string;
    focusedSection: string;
    onClick: (sectionId: string) => void;
  };

  const ListItem: React.FC<ListItemProps> = ({
    sectionId,
    label,
    focusedSection,
    onClick,
  }) => {
    const isFocused = sectionId === focusedSection;

    return (
      <Text
        fontSize="sm"
        color={isFocused ? "yellow.400" : "rgb(148 163 184)"}
        fontWeight={isFocused ? "bold" : "normal"}
        cursor="pointer"
        onClick={() => onClick(sectionId)}
      >
        {label}
      </Text>
    );
  };

  return (
    <>
      <Container color="white" id="test" maxW="5xl">
        <SimpleGrid columns={{ base: 1, md: 2 }}>
          <Box marginTop={{ base: "3vh", md: "10vh" }}>
            <Text as="b" fontSize="5xl">
              Leonel Gonçalves
            </Text>
            <Text fontSize="xl">Backend Developer</Text>
            <Text fontSize="sm" color="rgb(148 163 184)" marginTop="2vh">
              Lorem ipsum dolor sit amet
            </Text>

            <Box marginTop={{ base: "3vh" }}>
              <ListItem
                sectionId="aboutme"
                label="About Me"
                focusedSection={focusedSection}
                onClick={handleSectionClick}
              />
              <ListItem
                sectionId="experience"
                label="Experience"
                focusedSection={focusedSection}
                onClick={handleSectionClick}
              />
              <ListItem
                sectionId="projects"
                label="Projects"
                focusedSection={focusedSection}
                onClick={handleSectionClick}
              />
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
            <Box id="aboutme">
              <Stack spacing={4}>
                <Text fontSize="sm" color="rgb(148 163 184)">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Text>

                <Text fontSize="sm" color="rgb(148 163 184)">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
                <Text fontSize="sm" color="rgb(148 163 184)">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
              </Stack>
            </Box>
            <Box id="experience" marginTop={{ base: "3vh", md: "10vh" }}>
              <ExperienceGrid />
            </Box>
            <Box id="projects" marginTop={{ base: "3vh", md: "10vh" }}>
              <ProjectGrid />
            </Box>
          </Box>
        </SimpleGrid>
      </Container>
    </>
  );
};

*/
