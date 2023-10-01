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

interface ExperienceCardProps {
  experience: any;
}

export const ExperienceCard = ({
  experience,
}: ExperienceCardProps): JSX.Element => {
  return (
    <Card overflow="hidden" variant="outline" size="sm" marginTop="1vh">
      <CardHeader w={{ base: "100%", md: "10vw" }}>
        <Text
          fontSize="10px"
          textTransform="uppercase"
          as="b"
          color="rgb(148 163 184)"
        >
          JAN 2022 - Present
        </Text>
      </CardHeader>
      <CardBody>
        <Heading size="sm">Full Stack Engineer</Heading>
        <Heading size="xs" color="rgb(148 163 184)">
          Realworks
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
      <CardFooter>
        <HStack spacing={2}>
          <Tag size="sm" variant="subtle" colorScheme="cyan">
            <TagLabel>Java</TagLabel>
          </Tag>
          <Tag size="sm" variant="subtle" colorScheme="cyan">
            <TagLabel>Spring Boot</TagLabel>
          </Tag>
          <Tag size="sm" variant="subtle" colorScheme="cyan">
            <TagLabel>React</TagLabel>
          </Tag>
        </HStack>
      </CardFooter>
    </Card>
  );
};
