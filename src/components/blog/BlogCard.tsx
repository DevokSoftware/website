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
  Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IBlog } from "./Blog";
import moment from "moment";

interface BlogCardProps {
  blog: IBlog;
}

export const BlogCard = ({ blog }: BlogCardProps): JSX.Element => {
  return (
    <Link to="test">
      <Card
        maxW="md"
        boxShadow="xl"
        rounded="2xl"
        _hover={{
          boxShadow: "2xl",
          position: "relative",
          top: "-10px",
          transition: "top ease 0.5s",
        }}
      >
        <CardHeader>
          <Image objectFit="cover" src={blog.imageUrl} />
        </CardHeader>
        <CardBody>
          <Stack spacing="3">
            <Heading size="sm">{blog.title}</Heading>
            <Text>{blog.summary}</Text>
          </Stack>
        </CardBody>

        <CardFooter>
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar
              name="Leonel Gonçalves"
              src="https://web-jeromejose.github.io/images/anthony.jpg"
            />
            <Box>
              <Heading size="sm">Leonel Gonçalves</Heading>
              <Text>
                {moment(blog.date, "DD/MM/YYYY").format("MMMM, YYYY")}
              </Text>
            </Box>
          </Flex>
        </CardFooter>
      </Card>
    </Link>
  );
};
