import React from "react";
import {
  Container,
  Box,
  Input,
  FormControl,
  FormLabel,
  VStack,
  Select,
  Text,
  Button,
  Link
} from "@chakra-ui/react";
import axios from "axios";

export const AdminPage = () => {

    const handleAddProduct = async (addData) =>{
        try {
            const res = await axios({
                method : "post",
                baseURL : `https://mytheresa-server.onrender.com/`,
                url : `${addData.category}`,
                data : {
                    ...addData,
                }
            });
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    const initValue = {
        category : "",
        image : "",
        brand : "",
        description : "",
        price : "",
        discountedPrice : "",
        discount : "",
    };

  const [addData, setAddData] = React.useState(initValue);

  const handleChange = (event) =>{
    setAddData({...addData,[event.target.name] : event.target.value });
    console.log(addData);
  }

  return (
    <Container>
      <Text fontSize="2xl"> Admin Page</Text>
        
      <VStack gap="3" >
        <FormControl>
          <Text>Add Data</Text>
          <FormLabel>Select Category</FormLabel>
          <Select onChange={(event)=>handleChange(event)} name="category" type="text" placeholder="category" >
            <option value="clothing">Clothing</option>
            <option value="shoes">Shoes</option>
            <option value="newArrivals">New Arrivals</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Image URL</FormLabel>
          <Input onChange={(event)=>handleChange(event)} type="text" name="image" value={addData.image} placeholder="Enter Image URL" />
        </FormControl>
        <FormControl>
          <FormLabel>Brand Name</FormLabel>
          <Input onChange={(event)=>handleChange(event)} type="text" name="brand" value={addData.brand} placeholder="Enter Brand Name" />
        </FormControl>
        <FormControl>
          <FormLabel>Product Description</FormLabel>
          <Input onChange={(event)=>handleChange(event)} type="text" name="description" value={addData.description} placeholder="Enter Product Description" />
        </FormControl>
        <FormControl>
          <FormLabel>Product Price</FormLabel>
          <Input onChange={(event)=>handleChange(event)} type="number" name="price" value={ addData.price} placeholder="Enter Product Price*" />
        </FormControl>
        <FormControl>
          <FormLabel>Product Price After Discount</FormLabel>
          <Input onChange={(event)=>handleChange(event)} type="text" name="discountedPrice" value={addData.discountedPrice} placeholder="Enter Product Price after discount*" />
        </FormControl>
        <FormControl>
          <FormLabel>Discount</FormLabel>
          <Input onChange={(event)=>handleChange(event)} type="text" name="discount" value={addData.discount } placeholder="Enter Discount percentage*" />
        </FormControl>
        <Button onClick={()=>handleAddProduct(addData)} >Add Product</Button>
      </VStack>
    </Container>
  );
};
