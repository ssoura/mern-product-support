import React, { useState } from "react";
import { Flex, useColorModeValue, useColorMode } from "@chakra-ui/react";

import SideBar from "./SideBar";
import RightBar from "./RightBar";

import axios from "axios";
import useSWR from "swr";
import Middle from "./Middle";

export default function App() {
  const [display, changeDisplay] = useState("hide");
  const [value, changeValue] = useState(1);

  const { toggleColorMode } = useColorMode();

  const bg = useColorModeValue("#ffffff", "#020202");
  const color = useColorModeValue("020202", "#ffffff");

  const address = `https://raw.githubusercontent.com/akshita151199/APIs/main/data`;
  const fetcher = async (url: string) =>
    await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(address, fetcher);

  // if (error) return <div>Failed to load</div>;
  // if (!data) return <div>Loading...</div>;

  return (
    <>
      <Flex
        as="header"
        position="fixed"
        w="100%"
        backgroundColor="#3772ff"
        color="#fff"
        justifyContent="center"
        zIndex={100}
      >
        Lorem ipsum, dolor sit amet consectetur
      </Flex>

      <Flex
        h={[null, null, "100vh"]}
        maxW="2000px"
        flexDir={["column", "column", "row"]}
        overflow="hidden"
        backgroundColor={bg}
        color={color}
        pt={"24px"}
      >
        <SideBar />
        <Middle data={data} />
        <RightBar data={data} />
      </Flex>
    </>
  );
}
