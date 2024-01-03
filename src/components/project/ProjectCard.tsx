import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Image,
  Link,
  Wrap,
  WrapItem,
  Button,
  Text,
  Stack,
  Box,
  HStack,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import { IProject } from "./Project";

interface ProjectCardProps {
  project: IProject;
}

export const ProjectCard = ({ project }: ProjectCardProps): JSX.Element => {
  return (
    <Card
      cursor="pointer"
      overflow="hidden"
      variant="outline"
      size="sm"
      marginTop="1vh"
      marginBottom="1vh"
      borderRadius="2xl"
      transition="transition: transform 0.3s, box-shadow 0.3s"
      sx={{
        ":hover": {
          boxShadow: "0px 0px 14px 6px rgb(115 150 177 / 10%)",
          transform: "scale(1.01)",
        },
      }}
    >
      <CardHeader>
        <Text
          fontSize="10px"
          textTransform="uppercase"
          as="b"
          color="rgb(148 163 184)"
        >
          {project.year}
        </Text>
        <Heading size="sm">
          <Link href={project.url} isExternal>
            {project.title}
          </Link>
        </Heading>
      </CardHeader>
      <CardBody pt="0">
        <Box>
          <Stack spacing="1.5">
            {project.description.map((descriptionLine) => (
              <Text fontSize="xs" color="rgb(148 163 184)" textAlign="justify">
                {descriptionLine}
              </Text>
            ))}
          </Stack>
        </Box>
      </CardBody>
      <CardFooter>
        <HStack spacing={2}>
          {project.technologies.map((technology) => (
            <Tag size="sm" variant="subtle" colorScheme="cyan">
              <TagLabel>{technology}</TagLabel>
            </Tag>
          ))}
        </HStack>
      </CardFooter>
    </Card>
  );
};
