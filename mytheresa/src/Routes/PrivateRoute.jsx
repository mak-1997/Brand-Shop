import { AdminPage } from "./AdminPage";
import { Navigate } from "react-router-dom";
import React from "react";
import { AuthContext } from "../Context/AuthContext";
import { HomePage } from "./HomePage";

export const PrivateRoute = ({ children }) => {
  const { adminAuth } = React.useContext(AuthContext);
  console.log(adminAuth);

  return adminAuth ? children : <Navigate to="/login" />;
};

export const PrivateUserRoute = ({children}) =>{
  const { userAuth } = React.useContext(AuthContext);
  console.log(userAuth);

  return userAuth ? children : <Navigate to="/login" />;
}