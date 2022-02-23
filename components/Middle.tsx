import { CopyIcon, LinkIcon } from "@chakra-ui/icons";
import {
  Text,
  Box,
  Flex,
  Heading,
  Icon,
  Avatar,
  Tbody,
  Tr,
  Th,
  Td,
  Thead,
  Table,
  InputGroup,
  Input,
  InputRightElement,
  VStack,
  Button,
} from "@chakra-ui/react";
import { FiX } from "react-icons/fi";

const Middle = ({ data }: any) => {
  return (
    <>
      <Flex
        w={["70%"]}
        p="3%"
        flexDir="column"
        overflow="auto"
        minH="100vh"
        borderLeft={[
          "none",
          "none",
          "0px solid #242731",
          "2px solid #242731",
          "2px solid #242731",
        ]}
        borderRight={[
          "none",
          "none",
          "0px solid #242731",
          "2px solid #242731",
          "2px solid #242731",
        ]}
        css={{
          "&::-webkit-scrollbar": {
            width: "0px",
          },
          "&::-webkit-scrollbar-track": {
            width: "0px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#222",
            borderRadius: "0px",
          },
        }}
      >
        <Heading fontWeight="normal" mb={4} letterSpacing="tight">
          Section
        </Heading>
        {/* Row 1 */}
        <Flex alignContent="center">
          <Box
            borderRadius="10px"
            bgImage={'../public/11.png'}
            mt={4}
            w={"100%"}
            h="86px"
            bgColor="#abe8ff"
          >
            <Flex p="1rem" color="#222" flexDir="column" h="100%">
              <Text mb={2}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Asperiores quia blanditiis
              </Text>
            </Flex>
          </Box>

          <Flex
            w={25}
            h={25}
            bgColor="#fff"
            borderRadius="50%"
            color="#000"
            align="center"
            justify="center"
            ml="-3"
            mt="-2"
            zIndex="99"
            fontSize="s"
          >
            <Icon as={FiX} />
          </Flex>
        </Flex>

        {/* Row 2 */}

        <Box
          borderRadius="25px"
          mt={4}
          w="100%"
          h="200px"
          backgroundColor="#191b20"
        >
          <Flex
            p="1em"
            color="#fff"
            h="100%"
            flexDir="row"
            justify="space-between"
            w="100%"
            align="flex-start"
          >
            <Flex flexDir="column" pl={"32px"}>
              <Text fontSize="l" >Your rewards</Text>
              <Text fontWeight="bold" fontSize="xl">
                $ 0.24435345464
              </Text>
              <Text mb={4}>xxxxxxxxxxxxxxxxxxxxxxxxx</Text>
            </Flex>
            <Flex
              direction={"row"}
              align="center"
              verticalAlign={"center"}
              pr={"32px"}
            >
                      <Button
          mt={4}
          bgColor="#3772FF"
          color="#FFF"
          py={1}
          borderRadius={10}
          px={8}
          mx={2}
          >
          <Text fontSize='s'><LinkIcon/> custom link</Text>
        </Button>
            </Flex>
          </Flex>
        </Box>

        {/* Row 3 */}
        <Flex
          p=".5em"
          color="#fff"
          flexDir="row"
          h="100%"
          justify="space-around"
          w="100%"
        >
          <Box
            display="flex"
            borderRadius="25px"
            mt={4}
            mr="0.25em"
            w="100%"
            h="200px"
            backgroundColor="#191b20"
          >
              
            <VStack spacing="24px">
              <Text color="gray.400">xxxxxxxxxx</Text>
              <Text fontWeight="bold" fontSize="xl">
                xxxxxxxxxxxxxxxx
              </Text>
              <InputGroup>
                <InputRightElement pointerEvents="none">
                  <CopyIcon color="gray.300" />
                </InputRightElement>
                <Input type="tel" value="https://unityexchange.design " />
              </InputGroup>
            </VStack>
              
          </Box>

          <Box
            borderRadius="25px"
            mt={4}
            ml="0.25em"
            w="100%"
            h="200px"
            backgroundColor="#191b20"
            display="flex"
          >
            <VStack spacing="24px">
              <Text color="gray.400">xxxxxxxxxxxxxxxxxxxx</Text>
              <Text fontWeight="bold" fontSize="xl">
                xxxxxxxxxxxxxxxxedfefefefe
              </Text>

              <InputGroup>
                <InputRightElement pointerEvents="none">
                  <CopyIcon color="gray.300" />
                </InputRightElement>
                <Input type="tel" value="https://unityexchange.design " />
              </InputGroup>
            </VStack>
          </Box>
        </Flex>

        {/* Table */}

        <Flex justifyContent="space-between" mt={8}>
          <Flex align="flex-end">{/* TODO */}</Flex>
        </Flex>
        <Flex flexDir="column">
          <Flex overflow="auto">
            <Table variant="simple" size="sm" mt={4}>
              <Thead m={2}>
                <Tr>
                  <Th>Name of transaction</Th>
                  <Th>Category</Th>
                  <Th>Cashback</Th>
                  <Th isNumeric>Amount</Th>
                </Tr>
              </Thead>
              <Tbody m={2}>
                {data &&
                  data.data.map((item: any) => (
                    <Tr key={item.user}>
                      <Td>
                        <Flex align="center" flexDir="row">
                          <Flex>
                            <Avatar size="sm" mr={2} src={item.img} />
                          </Flex>
                          <Flex align="left" pl={2} flexDir={"column"}>
                            <Flex>
                              <Heading size="sm" letterSpacing="tight">
                                {item.asset}
                              </Heading>
                            </Flex>
                            <Flex flexDir={"row"}>
                              <Flex mr={3}>{item.type}</Flex>
                              <Flex>
                                <Avatar
                                  size="2xs"
                                  mr={1}
                                  src={item.chain.img}
                                />
                                <Flex>{item.chain.name}</Flex>
                              </Flex>
                            </Flex>
                          </Flex>
                        </Flex>
                      </Td>
                      <Td>
                        <Flex flexDir="column">
                          <Heading size="sm" letterSpacing="tight">
                            {item.amount}
                          </Heading>
                          <Flex>{item.state}</Flex>
                        </Flex>
                      </Td>
                      <Td>
                        {item.user.substring(0, 5) +
                          " ... " +
                          item.user.slice(item.user.length - 7)}
                      </Td>
                      <Td isNumeric>{item.referral_earnings}</Td>
                    </Tr>
                  ))}
              </Tbody>
            </Table>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Middle;
