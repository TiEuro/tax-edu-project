import React from "react";
import {Routes, Route} from "react-router-dom";
import QuizV2 from "./QuizV2";
import PageLogin from "./PageLogin";


export default function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<PageLogin/>}/>
            <Route path="/QuizV2" element={<QuizV2/>}/>
        </Routes>
    )
}