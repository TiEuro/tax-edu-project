import React from "react";
import {Outlet, Navigate} from 'react-router-dom'

function swapPage(){
    return <Navigate to={'/Quiz'}/>
}

export default swapPage;