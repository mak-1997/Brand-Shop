import {AdminPage} from './AdminPage';
import {Navigate} from 'react-router-dom';
import React from 'react';
import {AuthContext} from '../Context/AuthContext';
import {HomePage} from './HomePage';

export const PrivateRoute = ({children}) =>{

    const {adminAuth,userAuth} = React.useContext(AuthContext);
    console.log(adminAuth);

   return adminAuth ? children : <Navigate to='/login' />

}