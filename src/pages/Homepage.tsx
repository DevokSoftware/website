import { AbsoluteCenter, Box, Button, Center, Text } from "@chakra-ui/react";

export const Homepage = () => (
  <>
    <Box h="100%">
      <AbsoluteCenter axis="both">
        <Text as="b" fontSize="6xl">
          I'm Leonel Gonçalves.
        </Text>
        <Center>
          <Text fontSize="xl">Backend Developer. </Text>
        </Center>
      </AbsoluteCenter>
    </Box>
  </>
);
