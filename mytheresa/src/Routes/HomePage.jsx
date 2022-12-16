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
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export const HomePage = () => {
  const [newArrivals, setNewArrivals] = React.useState([]);

  // const bannerImg = "//img.mytheresa.com/media/static/raw/cms/l/MW_HP_2022_CW50/BIG1_NEW/MOBILE_2X_20221213142316.jpg?imwidth=700&imdensity=1, //img.mytheresa.com/media/static/raw/cms/l/MW_HP_2022_CW50/BIG1_NEW/MOBILE_2X_20221213142316.jpg?imwidth=700&imdensity=2 2x"

const box = document.querySelector('.carousel');
  const nextBtn = ()=>{
    const width = box.clientWidth;
    box.scrollRight = box.scrollRight + width;
    console.log(box.scrollRight);
  }
  const prevBtn = () =>{
    const width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width; 
    console.log(width);
  }
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
  React.useEffect(() => {
    newArrivalsData();
  }, []);

  return (
    <Box>
      <Text>Home Page</Text>
      <Link to="/login"> Login </Link>
      <Link to="/admin">Admin</Link>

      <Container maxWidth={"90%"} marginBottom="5">
        <Image
          src="https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_2022_CW50/BIG1_NEW/DESKTOP_2X_20221213142316.jpg?imwidth=1180&imdensity=1"
          alt="Banner Image"
        />
      </Container>
      <Text fontSize={"4xl"}>New Arrivals</Text>
      <Box>
        <Center>
          <Button variant={"ghost"} marginRight={"2"} marginBottom="50" onClick={()=>prevBtn()} >
            <AiOutlineLeft size={"40"} />
          </Button>
          <HStack maxW={"80%"} gap="5" overflowX={"hidden"} className="carousel" >
            {newArrivals.map((elem) => {
              return (
                <Box key={elem.id} minW="250px">
                  <Image src={elem.image} alt={elem.description}  />
                  <Text>{elem.brand}</Text>
                  <Text>{elem.price}</Text>
                </Box>
              );
            })}
          </HStack>
          <Button variant={"ghost"} marginLeft={"2"} marginBottom="50" onClick={()=>nextBtn()} >
            <AiOutlineRight size={"40"} />
          </Button>
        </Center>
      </Box>
    </Box>
  );
};
