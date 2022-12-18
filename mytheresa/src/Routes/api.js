import axios from "axios";

export const newArrivalsData = async (setNewArrivals,page) => {
  const res = await axios({
    method: "get",
    baseURL: `https://mytheresa-server.onrender.com/newArrivals/`,
    url: `?_limit=20&_page=${page}`,
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

export const addToCart = async (elem) =>{
   const res = await axios({
    method : "post",
    baseURL : `https://mytheresa-server.onrender.com/cart/`,
    data : {
      ...elem
    }
   });
   console.log(res);
   
}

export const removeFromCart = async (elem) =>{
   const res = await axios({
    method : "delete",
    url: `https://mytheresa-server.onrender.com/cart/${elem.id}`,
   });
   console.log(res);
   
}

export const setQuantity= async (elem)=>{
  const res = await axios({
    method: 'patch',
    url: `https://mytheresa-server.onrender.com/newArrivals/${elem.id}`,
    data:{
      ...elem
    }
  });
  console.log(res);
}

export const getCartItems = async (setCartItems) =>{
  const res = await axios({
    method : 'get',
    url : `https://mytheresa-server.onrender.com/cart`,
  })
  setCartItems(res.data);
  return res;
}