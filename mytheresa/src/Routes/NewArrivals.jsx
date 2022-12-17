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
} from "@chakra-ui/react";
import { newArrivalsData, NewArrivalsData } from "./api";

export const NewArrivals = () => {
  const [newArrived, setNewArrived] = React.useState([]);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    newArrivalsData(setNewArrived);
  }, [page]);
  return (
    <Box justifyContent={"center"}>
      <Text>Pagination Component</Text>
      <Divider
        borderColor={"gray.300"}
        maxW="90%"
        margin={"auto"}
        marginBottom="5"
      />
      <Container maxW={"90%"} display="flex" border={"1px solid"} gap={"5"}>
        <Box width={"30%"} border="1px solid">
          <VStack>
            <Text>NEW ARRIVALS</Text>
            <Text as="b">Current Week</Text>
            <Text>Previouse Weeks</Text>
            <Text>Essentials</Text>
            <Text>Tailoring Edit</Text>
            <Text>Loungewear</Text>
            <Text>Outdoor & Activewear</Text>
            <Text>Cold Weather Edit</Text>
            <Text>The Ski Edit</Text>
          </VStack>
          <VStack>
            <Text>Accessories</Text>
            <Text>Bags</Text>
            <Text>Clothing</Text>
            <Text>Shoes</Text>
          </VStack>
          <VStack>
            <Text as="b">Designers</Text>
            <Input />
            <Text>Acne Studios</Text>
            <Text>Adidas</Text>
            <Text>Alexander McQueen</Text>
            <Text>Ami Paris</Text>
            <Text>Balenciaga</Text>
            <Text>Berluti</Text>
            <Text>Bottegga Veneta</Text>
            <Text>Brunello Cucinelli</Text>
            <Text>Burberry</Text>
            <Text>Celine Eyewear</Text>
          </VStack>
          <VStack>
            <Text as="b">Colors</Text>
            <Text>Beige</Text>
            <Text>Black</Text>
            <Text>Blue</Text>
            <Text>Brown</Text>
            <Text>Gold</Text>
            <Text>Green</Text>
            <Text>Grey</Text>
            <Text>Multicoloured</Text>
            <Text>Neutrals</Text>
          </VStack>
          <VStack>
            <Text as="b">Pattern</Text>
            <Text>Checked</Text>
            <Text>Embellished</Text>
            <Text>Embroidered</Text>
            <Text>Patterned</Text>
            <Text>Plain</Text>
            <Text>Printed</Text>
            <Text>Striped</Text>
          </VStack>
        </Box>
        <Grid templateColumns={"repeat(3,1fr)"} gap="5" padding={5}>
          {newArrived.map((elem) => {
            return (
              <VStack
                key={elem.id}
                maxW="250px"
                boxShadow={"md"}
                paddingBottom="4"
                onMouseOver={"scale(1.25)"}
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
                <Text as="b"> {elem.price} </Text>
                <Button>Add To Cart</Button>
              </VStack>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};
