import React from 'react';
import Home from "./Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

function App(){
  return (
    <React.Fragment>
      <NavBar/>
      <>
        <BrowserRouter>
        <Routes>
          <Route path="/" exact={true} element={<Home/>}/>
          </Routes>
          </BrowserRouter>
      </>
      <Footer/>
      </React.Fragment>
  );
}

export default App;