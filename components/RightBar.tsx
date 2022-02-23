import { ArrowBackIcon, LinkIcon } from "@chakra-ui/icons";
import { Text, Button, Flex, InputGroup, Input, useColorModeValue, Select } from "@chakra-ui/react";

const RightBar = ({data}: any) => {
  return (

      <Flex
      w={["30%"]}
      p="2%"
      flexDir="column"
      overflow="auto"
      minW={["300px"]}
    >

        <Flex flexDir={"row"} >

        <Select variant='filled' placeholder='Avalanche' mr={1} bgColor={'#242731'} />
        <Select variant='outline' placeholder='Outline' ml={1} />

        </Flex>
       
        <Text color="white" mt={10} mb={1} h={"24px"}>
        <ArrowBackIcon/> Custom Link
        </Text>
        <Text color="white" mt={4} mb={1} h={"48px"}>
        https://testnet.xyz.xyz/trade?ref=
        </Text>
        <InputGroup  >
            <Input variant='filled' type="number" placeholder="ENTER" h={"50px"} 
            borderRadius="12px" bgColor="#242731"
            mb={4} border="none" borderColor="#242731"/>
        </InputGroup>
        <Flex flexDir={"row"} justifyContent={"space-evenly"} mx={4}>

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

        <Button

          mt={4}
          bgColor="#000"
          color="#fff"
          border={"1px #FFF solid"}
          py={1}
          borderRadius={10}
          px={8}
          mx={2}
          >

          <Text fontSize='s'> <LinkIcon/> cancel</Text>
        </Button>

          </Flex>
      </Flex>
  );
}

export default RightBar;