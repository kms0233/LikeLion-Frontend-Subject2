import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import Nav from './Navigation';
import Footer from './footer';
import Albums from './Albums';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
        <Routes>
          <Route path="/albums" element={<Albums/>}></Route>
        </Routes>
        <Footer />                
      </BrowserRouter>
      
    </>
  );
}

export default App;