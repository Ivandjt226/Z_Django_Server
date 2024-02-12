
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Routes, Route} from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Chatbot from "./components/Chatbot";


function App() {
  return (
    <BrowserRouter>
      <Navigation />
       <Routes>
         <Route exact path="/" element={<Home/>} />
         <Route path="/UNAB_Virtual_Assistant" element={<Chatbot/>} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
