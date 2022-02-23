import {
  Avatar,
  Flex,
  Heading,
  Spacer,
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
    <Flex 
    flexDir="column" 
    alignItems="center"
    minW={["220px"]}
    
    >
      <Flex
        flexDir="column"
        // h={"100%"}
        justifyContent="space-between"
      >
        <Flex flexDir="column" as="nav">
          <Flex
            flexDir="row"
            mt={50}
          >
            <Flex mr='8px'>
              <Avatar size='md' bg='blue.500' textColor='white' name='Name'/>
            </Flex>
            <Flex>
              <Heading
                fontSize={["3xl"]}
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
        w="80%"
        alignItems={"flex-start"}
        as="nav"
        pt={4}
        ml={"12px"}
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
      <Spacer/>
      <Flex p="2%" flexDir="column" w="100%" mb={4} >
        <Flex direction={"row"} justifyContent='flex-start' mx={"20%"} gap='8px'>
          <FiGlobe />
          <ThemeToggle />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SideBar;
