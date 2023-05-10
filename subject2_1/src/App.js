import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home';

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
      <Routes><Route path="/" element={<Home/>}  /> </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;