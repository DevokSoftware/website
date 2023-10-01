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
} from "@chakra-ui/react";
import { IProject } from "./Project";

interface ProjectCardProps {
  project: IProject | null;
}

export const ProjectCard = ({ project }: ProjectCardProps): JSX.Element => {
  return (
    <Card
      overflow="hidden"
      direction={{ base: "column", sm: "row" }}
      variant="outline"
      size="sm"
      marginTop="1vh"
    >
      <CardHeader>
        <Text fontSize="10px" textTransform="uppercase" as="b">
          DEC 2015 - JULY 2016
        </Text>
      </CardHeader>
      <CardBody>
        <Heading size="sm">Full Stack Engineer</Heading>
        <Heading size="xs" color="rgb(148 163 184)">
          NOS
        </Heading>
        <Stack spacing="2">
          <Box>
            <Text pt="2" fontSize="xs" color="rgb(148 163 184)">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};
