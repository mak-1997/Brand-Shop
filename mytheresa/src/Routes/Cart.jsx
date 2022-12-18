import React from "react";
import { getCartItems, removeFromCart } from "./api";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Image,
  Text,
  Grid,
  GridItem,
  Stack,
  Button,
} from "@chakra-ui/react";

export const Cart = () => {

    const navigate = useNavigate();
  const [cart, setCart] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  const handleRemove = (elem) => {
    removeFromCart(elem);
    getCartItems(setCart);
  };

  React.useEffect(() => {
    getCartItems(setCart);
    calculateTotal();
  }, []);

  const calculateTotal = async () => {
    setTotal(
      cart.reduce((accumulator, currentValue) => {
        return (
          accumulator + currentValue.discountedPrice * currentValue.quantity
        );
      }, 0)
    );

    console.log(total);
  };

  return (
    <Box>
      <Box display={"flex"} justifyContent={"space-around"} border="1px solid">
        <Text as="b" fontSize={"25"}>
          {" "}
          Quantity : {cart.length}{" "}
        </Text>
        <Text as="b" fontSize={"25"}>
          Total Amount : {total}
        </Text>
        <Button marginLeft={"10"} onClick={() => calculateTotal()}>
          Get Total
        </Button>
      </Box>

      <Container maxW={"90%"}>
        {cart.map((elem) => {
          return (
            <Box
              key={elem.id}
              display={"flex"}
              justifyContent="space-around"
              maxW="60%"
              margin={"auto"}
              marginTop="5"
              padding="10px"
              boxShadow={"lg"}
            >
              <Image src={elem.image} maxW="200px" marginRight={"10"} />
              <Stack gap="2">
                <Text
                  as="b"
                  color="red"
                  fontSize={"lg"}
                  textDecoration="line-through"
                >
                  Price : €{elem.price}
                </Text>

                <Text as="b" fontSize={"lg"}>
                  Discount : {elem.discountPercentage}% Off
                </Text>
                <Text as="b" fontSize={"lg"}>
                  Price : €{elem.discountedPrice}
                </Text>
                <Text as="b" fontSize={"lg"}>
                  Quantity : {elem.quantity}
                </Text>
                <Button
                  bg="black"
                  color="white"
                  onClick={() => handleRemove(elem)}
                >
                  {" "}
                  Remove{" "}
                </Button>
              </Stack>
            </Box>
          );
        })}
      </Container>

      <br />
      <Button bg="black" color="white" onClick={()=>{alert('Your order has been placed. Thank you for shopping with us!!'); navigate('/')}} >
        Proceed to payment
      </Button>
    </Box>
  );
};
