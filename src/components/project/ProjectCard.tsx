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
} from "@chakra-ui/react";
import { IProject } from "./Project";

interface ProjectCardProps {
  project: IProject;
}

export const ProjectCard = ({ project }: ProjectCardProps): JSX.Element => {
  return (
    <Card boxShadow="xl" rounded="2xl">
      <CardHeader padding={0}>
        <Link href={project.url} isExternal>
          <Image
            h="xs"
            roundedTop="2xl"
            objectFit="cover"
            src={"img/projects/" + project.image}
          />
        </Link>
      </CardHeader>
      <CardBody>
        <Heading size="md">{project.title}</Heading>
      </CardBody>
      <CardFooter paddingTop={0}>
        <Wrap spacing={4}>
          {project.technologies.map((technology) => (
            <WrapItem>
              <Button>{technology}</Button>
            </WrapItem>
          ))}
        </Wrap>
      </CardFooter>
    </Card>
  );
};
