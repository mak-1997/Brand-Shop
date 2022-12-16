import {
  Box,
  Container,
  Center,
  Text,
  Input,
  Stack,
  VStack,
  FormLabel,
  FormControl,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { AuthContext } from "../Context/AuthContext";

export const Login = () => {
  const {
    adminData,
    setAdminData,
    adminLogin,
    userData,
    setUserData,
    userLogin,
  } = React.useContext(AuthContext);

  const handleUserChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleAdminChange = (event) => {
    setAdminData({ ...adminData, [event.target.name]: event.target.value });
  };

  const handleUserSubmit = (event) => {
    event.preventDefault();
    userLogin(userData);
  };

  const handleAdminSubmit = (event, adminData) => {
    event.preventDefault();
    adminLogin(adminData);
  };

  return (
    <Box>
      <Center>
        <Text fontSize={"4xl"} as="b" padding={3}>
          Login
        </Text>
      </Center>
      <hr />
      <Stack
        direction={{ base: "column", md: "row", lg: "row" }}
        justifyContent={{ base: "center", md: "center", lg: "space-around" }}
      >
        {/* User Form*/}
        <VStack
          width={{ base: "100%", md: "70%", lg: "40%" }}
          padding="5"
          rowGap={5}
        >
          <Text fontSize={"xl"} as="b">
            User Login
          </Text>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Email Address"
              name="email"
              value={userData.email}
              onChange={(event) => handleUserChange(event)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={userData.password}
              onChange={(event) => handleUserChange(event)}
            />
          </FormControl>
          <Button
            onClick={(event) => handleUserSubmit(event, userData)}
            bg="black"
            color={"white"}
          >
            Login
          </Button>
        </VStack>

        {/* Admin Form */}

        <VStack
          width={{ base: "100%", md: "70%", lg: "40%" }}
          padding="5"
          rowGap={5}
        >
          <Text fontSize={"xl"} as="b">
            Admin Login
          </Text>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Email Address"
              name="email"
              value={adminData.email}
              onChange={(event) => handleAdminChange(event)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={adminData.password}
              onChange={(event) => handleAdminChange(event)}
            />
          </FormControl>
          <Button
            onClick={(event) => handleAdminSubmit(event, adminData)}
            bg="black"
            color={"white"}
          >
            Login
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};
