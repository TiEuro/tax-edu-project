import React from 'react'
import { useState } from 'react';
import {Outlet, Navigate} from 'react-router-dom'
import swapPage from './Swap';


function PrivateRoute({state}) {
  
  console.log(state)
  if (state) {    

    
    return<Outlet/>;
  } 
  else {

    return <Navigate to={'/Registro'} replace/>;
  }

}

export default PrivateRoute;