import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import Nav from './Nav';
import './App.css'
import Footer from './footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
        <div className="main-bg"></div>
        <Footer />                
      </BrowserRouter>
      
    </>
  );
}

export default App;