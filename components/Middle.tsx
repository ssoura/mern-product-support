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
} from "@chakra-ui/react";
import axios from "axios";
import { FiX } from "react-icons/fi";
import useSWR from "swr";

const Middle = () => {
  const address = `https://raw.githubusercontent.com/akshita151199/APIs/main/data`;
  const fetcher = async (url: string) =>
    await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(address, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <>
      <Flex
        w={["100%", "100%", "80%"]}
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
        {/* First Column Box */}
        <Flex alignContent="center">
          <Box
            borderRadius="10px"
            mt={4}
            w={"100%"}
            h="86px"
            bgGradient="linear(to-t, #abe8ff, #abe8ff)"
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
            zIndex="100"
            fontSize="s"
          >
            <Icon as={FiX} />
          </Flex>
        </Flex>

        {/* Second Column Box */}

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
              <Text color="gray.400">xxxxxxxxxxxx</Text>
              <Text fontWeight="bold" fontSize="xl">
                xxxxxxxxxxxxxxxxx
              </Text>
              <Text mb={4}>xxxxxxxxxxxxxxxxxxxxxxxxx</Text>
            </Flex>
            <Flex
              direction={"row"}
              align="center"
              verticalAlign={"center"}
              pr={"32px"}
            >

              <Text>xxxxxxxxxxxx</Text>
            </Flex>
          </Flex>
        </Box>

        {/* 3rd Column Boxes */}
        <Flex
          p=".5em"
          color="#fff"
          flexDir="row"
          h="100%"
          justify="space-around"
          w="100%"
        >
          <Box
            borderRadius="25px"
            mt={4}
            mr="0.25em"
            w="100%"
            h="200px"
            backgroundColor="#191b20"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex
              p="1em"
              color="#fff"
              flexDir="column"
              h="100%"
              justify="space-between"
            >
              <Flex justify="space-between" w="100%" align="flex-start">
                <Flex flexDir="column">
                  <Text color="gray.400">xxxxxxxxxxxxxxxxxxxx</Text>
                  <Text fontWeight="bold" fontSize="xl">
                    xxxxxxxxxxxxxxxx
                  </Text>
                </Flex>
              </Flex>
              <Text mb={4}></Text>
            </Flex>
          </Box>

          <Box
            borderRadius="25px"
            mt={4}
            ml="0.25em"
            w="100%"
            h="200px"
            backgroundColor="#191b20"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex
              p="1em"
              color="#fff"
              flexDir="column"
              h="100%"
              justify="space-between"
            >
              <Flex justify="space-between" w="100%" align="flex-start">
                <Flex flexDir="column">
                  <Text color="gray.400">xxxxxxxxxxxxxxxxxxxxxxx</Text>
                  <Text fontWeight="bold" fontSize="xl">
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Box>
        </Flex>

        <Flex justifyContent="space-between" mt={8}>
          <Flex align="flex-end">{/* TODO */}</Flex>
        </Flex>
        <Flex flexDir="column">
          <Flex overflow="auto">
                <Table  variant="simple" size="sm" mt={4}>
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
