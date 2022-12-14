import React from "react";
import axios from "axios";

export const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
  const initState = {
    email: "",
    password: "",
  };

  const [userData, setUserData] = React.useState(initState);
  const [adminData, setAdminData] = React.useState(initState);

  const userLogin = async (userData) => {
    try {
      const res = await axios({
        method: "post",
        url: `https://reqres.in/api/login`,
        data: {
          email: userData.email,
          password: userData.password,
        },
      });
      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const adminLogin = async (adminData) => {
    try {
      const res = await axios({
        method: "post",
        url: `https://reqres.in/api/login`,
        data: {
          email: adminData.email,
          password: adminData.password,
        },
      });
      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        userData,
        setUserData,
        userLogin,
        adminData,
        setAdminData,
        adminLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
