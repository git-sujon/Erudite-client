import React from 'react';
import { useContext } from 'react';
import { createContext } from 'react';

import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';





const PrivateRouteContext=createContext() 

const PrivateRoute = ({children}) => {
    const location= useLocation()
   //  const navigate= useNavigate()

    const {user, loading}= useContext(AuthContext)
   
    if(loading) {
      return <div class='loading h-1 w-[0%] bg-red-500 transition-all duration-200 absolute z-40 top-0 '></div>
    }
    
    if(!user){
       return <Navigate to='/login' state= {{from : location}} replace ></Navigate>
    }
    return children;


   
};

export default PrivateRoute;