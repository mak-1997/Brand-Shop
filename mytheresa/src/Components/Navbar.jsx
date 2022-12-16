import React from "react";
import {HiOutlineShoppingBag} from 'react-icons/fa'

import {
  Box,
  Container,
  Stack,
  HStack,
  Text,
  Link,
  Center,
  Image,
} from "@chakra-ui/react";

export const Navbar = () => {
  const changeColor = (e) => {
    e.target.style.color = "black";
    e.target.style.cursor = "pointer";
  };

  const defaultColor = (e) => {
    e.target.style.color = "gray";
  };

  return (
    <Container
      border={"1px solid"}
      height="200"
      maxW={{ base: "100%", md: "100%", lg: "90%", xl: "90%", "2xl": "60%" }}
    >
      <HStack justifyContent={"space-between"} padding="3">
        <HStack columnGap={"5"}>
          <Text onMouseOver={changeColor}>WOMEN</Text>
          <Text onMouseOver={changeColor}>MEN</Text>
          <Text onMouseOver={changeColor}>KIDS</Text>
          <Text onMouseOver={changeColor}>LIFE</Text>
        </HStack>
        <HStack columnGap={"5"}>
          <Text
            onMouseEnter={changeColor}
            onMouseLeave={defaultColor}
            fontSize={"12"}
            as="b"
            color={"gray"}
          >
            Signup for Newsletter
          </Text>
          <Text
            onMouseEnter={changeColor}
            onMouseLeave={defaultColor}
            fontSize={"12"}
            as="b"
            color={"gray"}
          >
            My account
          </Text>
          <Text
            onMouseEnter={changeColor}
            onMouseLeave={defaultColor}
            fontSize={"12"}
            as="b"
            color={"gray"}
          >
            My wishlist
          </Text>
          <Text
            onMouseEnter={changeColor}
            onMouseLeave={defaultColor}
            fontSize={"12"}
            as="b"
            color={"gray"}
          >
            International | English
          </Text>
        </HStack>
      </HStack>
      <Center paddingTop={'7'} border="1px solid" >
        <Image height={"20"} src={"projectLogo.png"} alt="BRAND SHOP" />
        {/* <HiOutlineShoppingBag /> */}
      </Center>
    </Container>
  );
};
