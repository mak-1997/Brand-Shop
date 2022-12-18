import React from "react";
import { BsHandbag } from "react-icons/bs";
import { HiSearch } from "react-icons/hi";
import { Divider } from "@chakra-ui/react";
import { AuthContext } from "../Context/AuthContext";

import { useNavigate, NavLink, Navigate } from "react-router-dom";

import {
  Box,
  Container,
  Stack,
  HStack,
  Text,
  Link,
  Center,
  Image,
  Grid,
  GridItem,
  InputGroup,
  InputRightElement,
  Input,
} from "@chakra-ui/react";
import { getCartItems } from "../Routes/api";

export const Navbar = () => {

  const {totalItems, setTotalItems} = React.useContext(AuthContext);

  const navigate = useNavigate();

  const changeColor = (e) => {
    e.target.style.color = "black";
    e.target.style.cursor = "pointer";
  };

  const defaultColor = (e) => {
    e.target.style.color = "gray";
  };

  return (
    <Box>
      <Container
        height="200"
        maxW={{ base: "100%", md: "100%", lg: "90%", xl: "90%", "2xl": "60%" }}
      >
        <HStack justifyContent={"space-between"} padding="3">
          <HStack columnGap={"5"} fontSize="sm">
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
              onClick={()=>navigate('/login')}
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

        <Grid paddingTop={"5"} templateColumns={"repeat(3,1fr)"}>
          <GridItem
            colStart={"2"}
            colEnd="3"
            onClick={() => {
              navigate("/");
            }}
            onMouseOver={(e) => (e.target.style.cursor = "pointer")}
          >
            <Center>
              <Image height={"20"} src={"projectLogo.png"} alt="BRAND SHOP" />
            </Center>
          </GridItem>
          <GridItem
            display={"flex"}
            justifyContent="end"
            alignItems={"center"}
            gap="5"
            onClick={()=> navigate('/cart')}
          >
            <Text as="b"> Total Items : {totalItems}</Text>
            <BsHandbag size={"25"} />
          </GridItem>
        </Grid>

        <HStack justifyContent={"space-between"}>
          <HStack color={"gray"} gap={"3"} fontSize="sm">
            <NavLink to={"/newArrivals"}>NEW ARRIVALS</NavLink>
            <Text>DESIGNERS</Text>
            <NavLink to={"/clothing"}>CLOTHING</NavLink>
            <NavLink to={"/shoes"}>SHOES</NavLink>
            <Text>BAGS</Text>
            <Text>ACCESSORIES</Text>
            <Text>FESTIVE SEASON</Text>
            <Text color={"tomato"}>SALE</Text>
          </HStack>
          <Box>
            <InputGroup size={"sm"}  >
              <Input placeholder="Search for..." />
              <InputRightElement children={<HiSearch />} />
            </InputGroup>
          </Box>
        </HStack>
      </Container>
      <Divider orientation="horizontal" borderColor="gray.300" marginTop="-3" />
    </Box>
  );
};
