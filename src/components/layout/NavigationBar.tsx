import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
  useColorModeValue,
  Icon,
  Stack,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
const Links = [
  { label: "Home", to: "home" },
  { label: "Blog", to: "blog" },
  { label: "Projects", to: "projects" },
];

const NavLink = ({ link }: { link: { label: string; to: string } }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"/" + link.to}
  >
    {link.label}
  </Link>
);

export default function NavigationBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <Icon /> : <Icon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            spacing={8}
            alignItems={"center"}
            as={"nav"}
            display={{ base: "none", md: "flex" }}
          >
            {Links.map((link) => (
              <NavLink key={link.label} link={link} />
            ))}
          </HStack>
          <Flex alignItems={"center"}>
            <ColorModeSwitcher mr={5} />
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={"https://web-jeromejose.github.io/images/anthony.jpg"}
                />
              </MenuButton>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
