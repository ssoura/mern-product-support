import {
  Avatar,
  Flex,
  Heading,
  Icon,
  Link,
  Spacer,
  Text,
} from "@chakra-ui/react";
import {
  FiBox,
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
    <Flex w={["100%", "50%%", "18%"]} flexDir="column" alignItems="center">
      <Flex
        flexDir="column"
        // h={"100%"}
        justifyContent="space-between"
      >
        <Flex flexDir="column" as="nav">
          <Flex
            flexDir="row"
            mt={50}
            // mb={[25, 50, 100]}
          >
            <Flex>
              <Avatar src="avatar-2.jpg" />
            </Flex>
            <Flex>
              <Heading
                fontSize={["3xl", "3xl", "1xl", "2xl", "3xl"]}
                alignSelf="center"
                letterSpacing="tight"
              >
                Name
              </Heading>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        flexDir="column"
        w="90%"
        alignItems={"flex-start"}
        as="nav"
        pt={4}
        ml={"4px"}
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

      <Flex p="2%" flexDir="column" w="100%" mb={4}>
        <Flex flexDir={"row"} ml={4} display="flex"></Flex>
        <Flex direction={"row"} justify={"space-evenly"} mx={"20%"}>
          <FiGlobe />
          <Spacer />
          <ThemeToggle />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SideBar;
