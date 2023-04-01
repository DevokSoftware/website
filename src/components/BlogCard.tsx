import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  SimpleGrid,
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Button,
  Container,
  Image,
  Flex,
  Avatar,
  IconButton,
} from "@chakra-ui/react";

export const BlogCard = () => (
  <Card maxW="md" boxShadow="2xl" rounded="2xl">
    <CardHeader>
      <Image
        objectFit="cover"
        src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
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
        <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />

        <Box>
          <Heading size="sm">Segun Adebayo</Heading>
          <Text>Creator, Chakra UI</Text>
        </Box>
      </Flex>
    </CardFooter>
  </Card>
);
