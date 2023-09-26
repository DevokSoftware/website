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
  Image,
  SimpleGrid,
  Stack,
  StackDivider,
  Tag,
  TagLabel,
  Text,
  VStack,
} from "@chakra-ui/react";

export const Homepage = () => (
  <>
    <Container color="white" id="test" maxW="5xl">
      <SimpleGrid columns={{ base: 1, md: 2 }}>
        <Box marginTop={{ base: "3vh", md: "10vh" }}>
          <Text as="b" fontSize="5xl">
            Leonel Gonçalves
          </Text>
          <Text fontSize="xl">Backend Developer</Text>
          <Text fontSize="sm" color="rgb(148 163 184)" marginTop="2vh">
            I build things that are not normally seen by users.
          </Text>
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
          <Stack spacing={4}>
            <Text fontSize="sm" color="rgb(148 163 184)">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>

            <Text fontSize="sm" color="rgb(148 163 184)">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
            <Text fontSize="sm" color="rgb(148 163 184)">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Stack>
          <Heading
            fontSize="l"
            marginTop={{ base: "3vh", md: "10vh" }}
            color="yellow.300"
          >
            Experience
          </Heading>
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
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
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

          <Heading
            fontSize="l"
            marginTop={{ base: "3vh", md: "10vh" }}
            color="yellow.400"
          >
            Projects
          </Heading>
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
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </Box>
      </SimpleGrid>
    </Container>
  </>
);
