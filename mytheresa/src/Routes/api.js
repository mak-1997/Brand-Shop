import axios from "axios";

export const newArrivalsData = async (setNewArrivals) => {
  const res = await axios({
    method: "get",
    baseURL: `https://mytheresa-server.onrender.com/newArrivals/`,
    url: `?_limit=20`,
  });
  console.log(res);
  setNewArrivals(res.data);
  return res;
};

export const shoesData = async (setShoes) => {
  const res = await axios({
    method: "get",
    baseURL: `https://mytheresa-server.onrender.com/shoes/`,
    url: `?_limit=20`,
  });
  console.log(res);
  setShoes(res.data);
  return res;
};

export const clothingData = async (setClothing) => {
  const res = await axios({
    method: "get",
    baseURL: `https://mytheresa-server.onrender.com/clothing/`,
    url: `?_limit=20`,
  });
  console.log(res);
  setClothing(res.data);
  return res;
};

const addToCart = () =>{
  
}