import React from 'react'
import {
    Flex,
    Text,
    Icon,
    Link,
    Menu,
    MenuButton,
    MenuList
} from '@chakra-ui/react'
import { IconType } from 'react-icons'

export default function NavItem({ icon, title, }:
    { icon: IconType, title: string, }):
     JSX.Element {
    return (
        <Flex
            flexDir="column"
            w="100%"
            alignItems="flex-start"
        >
            <Menu placement="right">
                <Link
                    p={2}
                    borderRadius={8}
                    _hover={{ textDecor: 'none', backgroundColor: "#191B20" }}
                    w={"100%"}
                >
                    <MenuButton w="100%">
                        <Flex justifyContent={"left"} verticalAlign={"center"}>
                            <Icon as={icon} display={"flex"} fontSize="sm" color={"gray.500"} />
                            <Text ml={5} display={"flex"} fontSize="sm" color={"gray.500"}>{title}</Text>
                        </Flex>
                    </MenuButton>
                </Link>

            </Menu>
        </Flex>
    )
}