import {
  Box,
  Text,
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Image,
  Flex,
  Avatar,
} from "@chakra-ui/react";

export const BlogCard = () => (
  <Card
    maxW="md"
    boxShadow="md"
    rounded="2xl"
    _hover={{
      boxShadow: "2xl",
      position: "relative",
      top: "-10px",
      transition: "top ease 0.5s",
    }}
  >
    <CardHeader>
      <Image
        objectFit="cover"
        src="https://drexel.edu/~/media/Images/cci/Stories/Remote%20Software%20Engineering-Page.ashx?h=1000&w=1500&hash=6BB2151F2495C52A21F368DADF9D7D9604BC1936"
        alt="Chakra UI"
      />
    </CardHeader>
    <CardBody>
      <Text>
        With Chakra UI, I wanted to sync the speed of development with the speed
        of design. I wanted the developer to be just as excited as the designer
        to create a screen.
      </Text>
    </CardBody>

    <CardFooter>
      <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
        <Avatar
          name="Leonel Gonçalves"
          src="https://web-jeromejose.github.io/images/anthony.jpg"
        />
        <Box>
          <Heading size="sm">Leonel Gonçalves</Heading>
          <Text>Creator, Chakra UI</Text>
        </Box>
      </Flex>
    </CardFooter>
  </Card>
);
