import { 
  Box, 
  Center, 
  Text, 
  VStack, 
  Container, 
  Heading,
  useColorModeValue,
  Divider
} from "@chakra-ui/react";
import { ProjectGrid } from "../components/project/ProjectGrid";

export const Projects = () => {
  const textColor = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("gray.800", "white");

  return (
    <Container maxW="7xl" py={12}>
      <VStack spacing={8} align="center">
        {/* Header Section */}
        <VStack spacing={4} textAlign="center" maxW="4xl">
          <Heading 
            size="2xl" 
            color={headingColor}
            fontWeight="bold"
            lineHeight="1.2"
          >
            My Projects
          </Heading>
          <Text 
            fontSize="lg" 
            color={textColor}
            lineHeight="1.6"
          >
            I build things in my free time.
          </Text>
          <Text 
            fontSize="md" 
            color={textColor}
            lineHeight="1.6"
            maxW="2xl"
          >
            Sometimes I only create the GitHub repository for a random idea and
            then I'll never go back there, but at other times I spend so much time
            on them that my phone keeps asking me why the screen time is being
            reduced so drastically.
          </Text>
          <Text 
            fontSize="lg" 
            fontWeight="semibold" 
            color={headingColor}
            mt={4}
          >
            Here are some of those projects.
          </Text>
        </VStack>

        <Divider borderColor={useColorModeValue("gray.200", "gray.600")} />

        {/* Projects Grid */}
        <Box w="full">
          <ProjectGrid />
        </Box>
      </VStack>
    </Container>
  );
};
