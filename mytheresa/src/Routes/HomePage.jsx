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
import {newArrivalsData,shoesData,clothingData} from './api';

export const HomePage = () => {
 
  
  const [newArrivals, setNewArrivals] = React.useState([]);
  const [clothing, setClothing] = React.useState([]);
  const [shoes, setShoes] = React.useState([]);

  const scrollRight1 = () =>{
    const box = document.querySelector(".carousel1");
    const width = box.clientWidth;
    box.scrollLeft += width;
  }
  const scrollLeft1 = () =>{
    const box = document.querySelector(".carousel1");
    const width = box.clientWidth;
    box.scrollLeft -= width;
  }
  const scrollRight2 = () =>{
    const box = document.querySelector(".carousel2");
    const width = box.clientWidth;
    box.scrollLeft += width;
  }
  const scrollLeft2 = () =>{
    const box = document.querySelector(".carousel2");
    const width = box.clientWidth;
    box.scrollLeft -= width;
  }
  const scrollRight3 = () =>{
    const box = document.querySelector(".carousel3");
    const width = box.clientWidth;
    box.scrollLeft += width;
  }
  const scrollLeft3 = () =>{
    const box = document.querySelector(".carousel3");
    const width = box.clientWidth;
    box.scrollLeft -= width;
  }
 



  React.useEffect(() => {
    newArrivalsData(setNewArrivals);
    clothingData(setShoes);
    shoesData(setClothing);
  }, []);

  return (
    <Box>
      <Link to="/login"> Login </Link>
      {/* <Link to="/admin">Admin</Link> */}

      <Container maxWidth={"90%"} marginBottom="5">
        <Image
          src="https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_2022_CW50/BIG1_NEW/DESKTOP_2X_20221213142316.jpg?imwidth=1180&imdensity=1"
          alt="Banner Image"
        />
      </Container>

      <Text fontSize={"4xl"}>New Arrivals</Text>

      <Box margin={5}>
        <Center  >
          <Button
            variant={"ghost"}
            marginRight={"2"}
            marginBottom="50"
            onClick={() => scrollLeft1()}
          >
            <AiOutlineLeft size={"40"} />
          </Button>
          <HStack
         
            maxW={"82%"}
            gap="3"
            overflowX={"scroll"}
            overflow="hidden"
            scrollBehavior={'smooth'}
            className="carousel1"
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
            onClick={() => scrollRight1()}
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
            onClick={() => scrollLeft2()}
          >
            <AiOutlineLeft size={"40"} />
          </Button>
          <HStack
            maxW={"85%"}
            gap="5"
            overflowX={"scroll"}
            overflow="hidden"
            scrollBehavior={'smooth'}
            className="carousel2"
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
            onClick={() => scrollRight2()}
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
            onClick={() => scrollLeft3()}
          >
            <AiOutlineLeft size={"40"} />
          </Button>
          <HStack
            maxW={"82%"}
            gap="5"
            overflowX={"scroll"}
            overflow="hidden"
            scrollBehavior={'smooth'}
            className="carousel3"
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
            onClick={() => scrollRight3()}
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
