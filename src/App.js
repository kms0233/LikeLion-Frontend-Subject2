import React from 'react';
import {BrowserRouter as  Router,Routes, Route } from "react-router-dom";
import  NavBar  from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Album from './components/album';
import './App.css';

function App(){
  return (
    <React.Fragment>
      <NavBar/>
          <React.Fragment>
            <Router>
            <Routes>
            <Route exact path="/" element={<Home/>}/>  
            <Route exact path="/Album" element={<Album/>}/>
            </Routes>
            </Router>
          </React.Fragment>
      <Footer/>
    </React.Fragment>
  );
}

export default App;