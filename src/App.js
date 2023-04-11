import React from "react";
import { useState } from "react";
import QuizV2 from "./components/QuizV2"
import {Styles} from './Styles/Styles'
import PageLogin from "./components/PageLogin";
import {BrowserRouter as Router, Routes, Route, BrowserRouter, useNa} from 'react-router-dom'
import PrivateRoute from "./components/PrivateRoute";
import PrivateRoutesblock from "./components/PrivateRoutesblock";


function App() {
  const [isAuth, setAuth] = useState(false);

  return (
    <Styles>
      <div className="main">
         
         <div className="App container">
          <img className="taxLogo" src="taxlogo.png"></img>
          <h1 class="title">MINHA 1ª DECLARAÇÃO DE IMPOSTO DE RENDA</h1>
            <BrowserRouter>
            <Routes>
            <Route path="/Registro" element={<PageLogin/>} /> 
                    
            <Route path="/" element={<PrivateRoutesblock/>} >              
                <Route path="Quiz" element={<QuizV2/>}/>
              </Route>                
            </Routes>
            </BrowserRouter>
        
    </div>
    </div>
    </Styles>



    
    
  );
}

export default App;
