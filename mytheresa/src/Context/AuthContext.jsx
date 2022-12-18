import React from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

export const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {

  const navigate = useNavigate();
  const navigateToAdmin = ()=>{
    navigate('/admin')
  }

  const[adminAuth, setAdminAuth] = React.useState(false);
  const[userAuth, setUserAuth] = React.useState(false);
  const [totalItems, setTotalItems] = React.useState(0);

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
      setUserAuth(true);
      
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
      setAdminAuth(true);
      navigateToAdmin();
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
        adminAuth,
        userAuth,
        totalItems,
        setTotalItems
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
