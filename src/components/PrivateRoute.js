import React from 'react'
import { useState, useEffect } from 'react';
import {Outlet, Navigate} from 'react-router-dom'
import swapPage from './Swap';



function PrivateRoute() {
  let state = true;

  console.log(state)
  if (state) {    

    
    return<Outlet/>;
  } 
  else {

    return <Navigate to={'/Registro'} replace/>;
  }

}

export default PrivateRoute;