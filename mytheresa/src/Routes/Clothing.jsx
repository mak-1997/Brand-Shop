import React from "react";
import {
  Grid,
  Box,
  Container,
  Text,
  Divider,
  Image,
  Button,
  VStack,
  Input,
  HStack,
  Select,
  Stack,
  Checkbox,
} from "@chakra-ui/react";
import {
  clothingData,
  addToCart,
  removeFromCart,
  setQuantityOfClothing,
} from "./api";
import { Pagination } from "../Components/Pagination";
import { AuthContext } from "../Context/AuthContext";

export const Clothing = () => {
  const { totalItems, setTotalItems } = React.useContext(AuthContext);
  const [clothing, setClothing] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [sortPara, setSortPara] = React.useState("discountPercentage");
  const [orderPara, setOrderPara] = React.useState("asc");

  const handleAddToCart = async (elem) => {
    elem.quantity = elem.quantity === 0 ? 1 : elem.quantity;
    await setQuantityOfClothing(elem);
    await addToCart(elem);
    setTotalItems(totalItems + 1);
  };

  const handleRemoveFromCart = async (elem) => {
    elem.quantity = 0;
    await setQuantityOfClothing(elem);
    await removeFromCart(elem);
    setTotalItems(totalItems - 1);
  };

  const handleIncrement = async (elem) => {
    elem.quantity++;
    await setQuantityOfClothing(elem);

    setTotalItems(totalItems + 1);
  };

  const handleDecrement = async (elem) => {
    elem.quantity--;
    await setQuantityOfClothing(elem);

    setTotalItems(totalItems - 1);
  };

  React.useEffect(() => {
    clothingData(setClothing, page, sortPara, orderPara);
  }, [page, totalItems, sortPara, orderPara]);
  return (
    <Box justifyContent={"center"}>
      <Box display="flex" maxW="90%" margin="auto" justifyContent={"right"}>
        <Text as="b" alignSelf={"center"}>
          Sort By :
        </Text>
        <Select
          maxW={"200"}
          margin="3"
          onChange={(event) => setSortPara(event.target.value)}
        >
          <option value="discountPercentage">Discount Available</option>
          <option value="discountedPrice">Price</option>
          <option value="brand">Brand</option>
        </Select>

        <Text as="b" alignSelf={"center"}>
          Select Order :
        </Text>
        <Select
          maxW={"200"}
          margin="3"
          onChange={(event) => setOrderPara(event.target.value)}
        >
          <option value="asc">low to high</option>
          <option value="desc">high to low</option>
        </Select>
        <Pagination setPage={setPage} page={page} />
      </Box>
      <Divider
        borderColor={"gray.300"}
        maxW="90%"
        margin={"auto"}
        marginBottom="5"
      />
      <Container
        maxW={{ base: "100%", md: "90%", lg: "90%", "2xl": "60%" }}
        display="flex"
        gap={"5"}
      >
        <Box width={"30%"} padding="5" textAlign={"left"}>
          <Stack>
            <Checkbox>NEW ARRIVALS</Checkbox>
            <Checkbox defaultChecked as="b">
              Current Week
            </Checkbox>
            <Checkbox>Previouse Weeks</Checkbox>
            <Checkbox>Essentials</Checkbox>
            <Checkbox>Tailoring Edit</Checkbox>
            <Checkbox>Loungewear</Checkbox>
            <Checkbox>Outdoor & Activewear</Checkbox>
            <Checkbox>Cold Weather Edit</Checkbox>
            <Checkbox>The Ski Edit</Checkbox>
          </Stack>
          <Divider margin={"2"} color="gray.400" />
          <Stack>
            <Checkbox>Accessories</Checkbox>
            <Checkbox>Bags</Checkbox>
            <Checkbox>Clothing</Checkbox>
            <Checkbox>Shoes</Checkbox>
          </Stack>
          <Divider margin={"2"} color="gray.400" />
          <Stack>
            <Text as="b">Designers</Text>
            <Input placeholder="Search Designers" />
            <Checkbox>Acne Studios</Checkbox>
            <Checkbox>Adidas</Checkbox>
            <Checkbox>Alexander McQueen</Checkbox>
            <Checkbox>Ami Paris</Checkbox>
            <Checkbox>Balenciaga</Checkbox>
            <Checkbox>Berluti</Checkbox>
            <Checkbox>Bottegga Veneta</Checkbox>
            <Checkbox>Brunello Cucinelli</Checkbox>
            <Checkbox>Burberry</Checkbox>
            <Checkbox>Celine Eyewear</Checkbox>
          </Stack>
          <Divider margin={"2"} color="gray.400" />
          <Stack>
            <Text as="b">Colors</Text>
            <Checkbox>Beige</Checkbox>
            <Checkbox>Black</Checkbox>
            <Checkbox>Blue</Checkbox>
            <Checkbox>Brown</Checkbox>
            <Checkbox>Gold</Checkbox>
            <Checkbox>Green</Checkbox>
            <Checkbox>Grey</Checkbox>
            <Checkbox>Multicoloured</Checkbox>
            <Checkbox>Neutrals</Checkbox>
          </Stack>
          <Divider margin={"2"} color="gray.400" />
          <Stack>
            <Text as="b">Pattern</Text>
            <Checkbox>Checked</Checkbox>
            <Checkbox>Embellished</Checkbox>
            <Checkbox>Embroidered</Checkbox>
            <Checkbox>Patterned</Checkbox>
            <Checkbox>Plain</Checkbox>
            <Checkbox>Printed</Checkbox>
            <Checkbox>Striped</Checkbox>
          </Stack>
        </Box>
        <Grid templateColumns={"repeat(3,1fr)"} gap="5" rowGap="85" padding={5}>
          {clothing.map((elem) => {
            return (
              <VStack
                key={elem.id}
                maxW="250px"
                boxShadow={"md"}
                paddingBottom="4"
              >
                <Image src={elem.image} alt={elem.description} />
                <Text marginTop="2">{elem.brand}</Text>
                <Text
                  color="gray.500"
                  noOfLines={"1"}
                  marginTop="2"
                  marginBottom={"3"}
                >
                  {elem.description}{" "}
                </Text>
                <Text as="b" color="red" textDecoration="line-through">
                  Price : €{elem.price}
                </Text>

                <Text as="b">Discount : {elem.discountPercentage}% Off</Text>
                <Text as="b">Price : €{elem.discountedPrice}</Text>
                <HStack>
                  <Button
                    size="xs"
                    bg="teal"
                    color="white"
                    onClick={() => handleDecrement(elem)}
                  >
                    -
                  </Button>
                  <Text>{elem.quantity}</Text>
                  <Button
                    size="xs"
                    bg="teal"
                    color="white"
                    onClick={() => handleIncrement(elem)}
                  >
                    +
                  </Button>
                </HStack>
                <Button
                  size="xs"
                  bg="teal"
                  color="white"
                  onClick={() => handleAddToCart(elem)}
                >
                  Add To Cart
                </Button>
                <Button
                  size="xs"
                  bg="teal"
                  color="white"
                  onClick={() => handleRemoveFromCart(elem)}
                >
                  Remove From Cart
                </Button>
              </VStack>
            );
          })}
        </Grid>
      </Container>
      <Divider
        borderColor={"gray.300"}
        maxW="90%"
        margin={"auto"}
        marginBottom="5"
      />
      <Pagination setPage={setPage} page={page} />
    </Box>
  );
};
