import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Image,
  Link,
  Text,
  Stack,
  Box,
  HStack,
  Tag,
  TagLabel,
  useColorModeValue,
  Badge,
  VStack,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { IProject } from "./Project";

interface ProjectCardProps {
  project: IProject;
}

export const ProjectCard = ({ project }: ProjectCardProps): JSX.Element => {
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("gray.800", "white");
  const yearColor = useColorModeValue("gray.500", "gray.400");
  const hoverShadow = useColorModeValue(
    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
  );

  return (
    <Card
      bg={cardBg}
      border="1px"
      borderColor={borderColor}
      borderRadius="xl"
      overflow="hidden"
      h="full"
      transition="all 0.3s ease"
      _hover={{
        transform: "translateY(-4px)",
        boxShadow: hoverShadow,
        borderColor: useColorModeValue("blue.200", "blue.600"),
      }}
      cursor="pointer"
      onClick={() => window.open(project.url, "_blank")}
    >
      {/* Project Image */}
      <Box position="relative" h="200px" overflow="hidden">
        <Image
          src={`/img/projects/${project.image}`}
          alt={project.title}
          objectFit="cover"
          w="full"
          h="full"
          transition="transform 0.3s ease"
          _groupHover={{ transform: "scale(1.05)" }}
        />
        <Badge
          position="absolute"
          top={3}
          right={3}
          colorScheme="blue"
          variant="solid"
          borderRadius="full"
          px={3}
          py={1}
        >
          {project.year}
        </Badge>
      </Box>

      <VStack align="stretch" h="full">
        <CardHeader pb={2}>
          <Flex align="center" justify="space-between">
            <Heading 
              size="md" 
              color={headingColor}
              fontWeight="bold"
              lineHeight="1.3"
            >
              {project.title}
            </Heading>
            <Text fontSize="sm" color={textColor} opacity={0.7}>
              ↗
            </Text>
          </Flex>
        </CardHeader>

        <CardBody pt={0} flex="1">
          <Stack spacing={3}>
            {project.description.map((descriptionLine, index) => (
              <Text 
                key={index}
                fontSize="sm" 
                color={textColor} 
                lineHeight="1.6"
              >
                {descriptionLine}
              </Text>
            ))}
          </Stack>
        </CardBody>

        <CardFooter pt={0}>
          <Box w="full">
            <HStack spacing={2} flexWrap="wrap" align="start">
              {project.technologies.map((technology, index) => (
                <Tag 
                  key={index}
                  size="sm" 
                  variant="subtle" 
                  colorScheme="blue"
                  borderRadius="md"
                  fontWeight="medium"
                  mb={1}
                >
                  <TagLabel>{technology}</TagLabel>
                </Tag>
              ))}
            </HStack>
          </Box>
        </CardFooter>
      </VStack>
    </Card>
  );
};
