import {
  Avatar,
  Button,
  Flex,
  Heading,
  HStack,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import {
  FiBriefcase,
  FiCalendar,
  FiDollarSign,
  FiGlobe,
  FiHome,
  FiScissors,
  FiSettings,
  FiUser,
} from "react-icons/fi";
import NavItem from "./NavItem";
import ThemeToggle from "./ThemeToggle";

const SideBar = () => {
  return (
    <Flex flexDir="column" minW={["220px"]} ml="1em">
      <Flex flexDir="column" justifyContent="space-between" justify="center">
        <Flex flexDir="row" mt={50}>
          <Flex mr="8px">
            <Avatar size="md" bg="blue.500" textColor="white" name="Name" />
          </Flex>
          <Flex>
            <Heading
              fontSize={["2xl"]}
              alignSelf="center"
              letterSpacing="tight"
            >
              Name
            </Heading>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        flexDir="column"
        w="90%"
        alignItems={"flex-start"}
        as="nav"
        mt="3em"
      >
        <NavItem icon={FiHome} title="Home" />
        <NavItem icon={FiCalendar} title="Section 1" />
        <NavItem icon={FiUser} title="Section 2" />
        <NavItem icon={FiScissors} title="Section 3" />
        <NavItem icon={FiDollarSign} title="Section 4" />
        <NavItem icon={FiBriefcase} title="Section 5" />
        <NavItem icon={FiSettings} title="Section 6" />
        <NavItem icon={FiSettings} title="Section 7" />
        <NavItem icon={FiSettings} title="Section 8" />
      </Flex>
      <Spacer />
      <Stack spacing="4px" direction="row" align="left" mb="8px" ml="1em">
        <Button size="xs">
          <Avatar
            size="2xs"
            bg="blue.500"
            textColor="white"
            name="Name"
            mr="2px"
          />
          xxxx
        </Button>
        <Button size="xs">Buy xyz</Button>
      </Stack>
      <HStack spacing="4px" justify="left" mb="8px" ml="1em">
        <Button size="xs">
          <FiGlobe />
        </Button>
        <ThemeToggle />
      </HStack>
    </Flex>
  );
};

export default SideBar;
