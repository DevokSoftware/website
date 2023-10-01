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
import { IJob } from "./Job";

interface ExperienceCardProps {
  job: IJob;
}

export const ExperienceCard = ({ job }: ExperienceCardProps): JSX.Element => {
  return (
    <Card
      overflow="hidden"
      variant="outline"
      size="sm"
      marginTop="1vh"
      borderRadius="2xl"
    >
      <CardHeader>
        <Text
          fontSize="10px"
          textTransform="uppercase"
          as="b"
          color="rgb(148 163 184)"
        >
          {job.dates}
        </Text>
        <Heading size="sm"> {job.title}</Heading>
        <Heading fontSize="12px" color="rgb(148 163 184)">
          {job.company}
        </Heading>
      </CardHeader>
      <CardBody>
        <Box>
          <Stack spacing="1">
            {job.description.map((descriptionLine) => (
              <Text fontSize="xs" color="rgb(148 163 184)" textAlign="justify">
                {descriptionLine}
              </Text>
            ))}
          </Stack>
        </Box>
      </CardBody>
      <CardFooter>
        <HStack spacing={2}>
          {job.technologies.map((technology) => (
            <Tag size="sm" variant="subtle" colorScheme="cyan">
              <TagLabel>{technology}</TagLabel>
            </Tag>
          ))}
        </HStack>
      </CardFooter>
    </Card>
  );
};
