import axios from "axios";

export const newArrivalsData = async (setNewArrivals,page,sortPara,orderPara) => {
  const res = await axios({
    method: "get",
    baseURL: `https://mytheresa-server.onrender.com/newArrivals/`,
    url: `?_limit=20&_page=${page}&_sort=${sortPara}&_order=${orderPara}`,
  });
  console.log(res);
  setNewArrivals(res.data);
  return res;
};

export const shoesData = async (setShoes,page,sortPara,orderPara) => {
  const res = await axios({
    method: "get",
    baseURL: `https://mytheresa-server.onrender.com/shoes/`,
    url: `?_limit=20&_page=${page}&_sort=${sortPara}&_order=${orderPara}`,
  });
  console.log(res);
  setShoes(res.data);
  return res;
};

export const clothingData = async (setClothing,page,sortPara,orderPara) => {
  const res = await axios({
    method: "get",
    baseURL: `https://mytheresa-server.onrender.com/clothing/`,
    url: `?_limit=20&_page=${page}&_sort=${sortPara}&_order=${orderPara}`,
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

export const setQuantityOfNewArrivals= async (elem)=>{
  const res = await axios({
    method: 'patch',
    url: `https://mytheresa-server.onrender.com/newArrivals/${elem.id}`,
    data:{
      ...elem
    }
  });
  console.log(res);
}

export const setQuantityOfShoes= async (elem)=>{
  const res = await axios({
    method: 'patch',
    url: `https://mytheresa-server.onrender.com/shoes/${elem.id}`,
    data:{
      ...elem
    }
  });
  console.log(res);
}

export const setQuantityOfClothing= async (elem)=>{
  const res = await axios({
    method: 'patch',
    url: `https://mytheresa-server.onrender.com/clothing/${elem.id}`,
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