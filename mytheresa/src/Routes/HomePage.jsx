import { Link } from "react-router-dom";
import {
  Container,
  Image,
  Box,
  Text,
  Grid,
  Center,
  HStack,
  Button,
  Divider
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export const HomePage = () => {
  const [newArrivals, setNewArrivals] = React.useState([]);
  const [clothing, setClothing] = React.useState([]);
  const [shoes, setShoes] = React.useState([]);

  const box = document.querySelector(".carousel");
  const nextBtn = () => {
    const width = box.clientWidth;
    box.scrollRight = box.scrollRight + width;
    console.log(box.scrollRight);
  };
  const prevBtn = () => {
    const width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    console.log(width);
  };

  const newArrivalsData = async () => {
    const res = await axios({
      method: "get",
      baseURL: `https://mytheresa-server.onrender.com/newArrivals/`,
      url: `?_limit=20`,
    });
    console.log(res);
    setNewArrivals(res.data);
    return res;
  };

  const shoesData = async () => {
    const res = await axios({
      method: "get",
      baseURL: `https://mytheresa-server.onrender.com/shoes/`,
      url: `?_limit=20`,
    });
    console.log(res);
    setShoes(res.data);
    return res;
  };

  const clothingData = async () => {
    const res = await axios({
      method: "get",
      baseURL: `https://mytheresa-server.onrender.com/clothing/`,
      url: `?_limit=20`,
    });
    console.log(res);
    setClothing(res.data);
    return res;
  };

  React.useEffect(() => {
    newArrivalsData();
    clothingData();
    shoesData();
  }, []);

  return (
    <Box>
      <Link to="/login"> Login </Link>
      <Link to="/admin">Admin</Link>

      <Container maxWidth={"90%"} marginBottom="5">
        <Image
          src="https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_2022_CW50/BIG1_NEW/DESKTOP_2X_20221213142316.jpg?imwidth=1180&imdensity=1"
          alt="Banner Image"
        />
      </Container>

      <Text fontSize={"4xl"}>New Arrivals</Text>

      <Box margin={5}>
        <Center>
          <Button
            variant={"ghost"}
            marginRight={"2"}
            marginBottom="50"
            onClick={() => prevBtn()}
          >
            <AiOutlineLeft size={"40"} />
          </Button>
          <HStack
            maxW={"82%"}
            gap="5"
            overflowX={"hidden"}
            className="carousel"
          >
            {newArrivals.map((elem) => {
              return (
                <Box key={elem.id} minW="250px">
                  <Image src={elem.image} alt={elem.description} />
                  <Text>{elem.brand}</Text>
                  <Text>{elem.price}</Text>
                </Box>
              );
            })}
          </HStack>
          <Button
            variant={"ghost"}
            marginLeft={"2"}
            marginBottom="50"
            onClick={() => nextBtn()}
          >
            <AiOutlineRight size={"40"} />
          </Button>
        </Center>
      </Box>

      <Button bg={"black"} color="white" borderRadius={"0"}>
        View All
      </Button>

      <Container
        maxWidth={"90%"}
        marginBottom="5"
        display={"flex"}
        marginTop="5"
      >
        <Box bg={"black"} width="50%">
          <Box>
            <Text fontSize={"6xl"} color="white">
              Winter shoes
            </Text>
            <Text fontSize={"md"} color="white">
              The temperature may rise and fall but style is constant
            </Text>
            <Button margin={"5"} bg="white" borderRadius={"0"}>
              SHOP NOW
            </Button>
          </Box>
        </Box>
        <Image
          src="https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_2022_CW49/BIG3/EN_ACTBOX1_DESKTOP_2x_20221205114710.jpg?imwidth=1180&imdensity=1"
          alt="Banner Image"
          width={"50%"}
        />
      </Container>

      <Box margin={5}>
        <Center>
          <Button
            variant={"ghost"}
            marginRight={"2"}
            marginBottom="50"
            onClick={() => prevBtn()}
          >
            <AiOutlineLeft size={"40"} />
          </Button>
          <HStack
            maxW={"82%"}
            gap="5"
            overflowX={"hidden"}
            className="carousel"
          >
            {shoes.map((elem) => {
              return (
                <Box key={elem.id} minW="250px">
                  <Image src={elem.image} alt={elem.description} />
                  <Text>{elem.brand}</Text>
                  <Text>{elem.price}</Text>
                </Box>
              );
            })}
          </HStack>
          <Button
            variant={"ghost"}
            marginLeft={"2"}
            marginBottom="50"
            onClick={() => nextBtn()}
          >
            <AiOutlineRight size={"40"} />
          </Button>
        </Center>
      </Box>

      <Button bg={"black"} color="white" borderRadius={"0"}>
        View All
      </Button>

      <Container
        maxWidth={"90%"}
        marginBottom="5"
        display={"flex"}
        marginTop="5"
      >
        <Image
          src="https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_2022_CW49/BIG3/EN_ACTBOX1_DESKTOP_2x_20221205114710.jpg?imwidth=1180&imdensity=1"
          alt="Banner Image"
          width={"50%"}
        />
        <Box bg={"black"} width="50%">
          <Box>
            <Text fontSize={"6xl"} color="white">
              SALE
            </Text>
            <Text fontSize={"md"} color="white">
              Starts now - up to 50% off
            </Text>
            <Button margin={"5"} bg="white" borderRadius={"0"}>
              SHOP SALE
            </Button>
          </Box>
        </Box>
      </Container>

      <Box margin={5}>
        <Center>
          <Button
            variant={"ghost"}
            marginRight={"2"}
            marginBottom="50"
            onClick={() => prevBtn()}
          >
            <AiOutlineLeft size={"40"} />
          </Button>
          <HStack
            maxW={"82%"}
            gap="5"
            overflowX={"hidden"}
            className="carousel"
          >
            {clothing.map((elem) => {
              return (
                <Box key={elem.id} minW="250px">
                  <Image src={elem.image} alt={elem.description} />
                  <Text>{elem.brand}</Text>
                  <Text>{elem.price}</Text>
                </Box>
              );
            })}
          </HStack>
          <Button
            variant={"ghost"}
            marginLeft={"2"}
            marginBottom="50"
            onClick={() => nextBtn()}
          >
            <AiOutlineRight size={"40"} />
          </Button>
        </Center>
      </Box>

      <Button bg={"black"} color="white" borderRadius={"0"}>
        View All
      </Button>

      <Center>
      <Divider width={'80%'} borderColor='gray.300' margin={'5'} />
      </Center>
    </Box>
  );
};
