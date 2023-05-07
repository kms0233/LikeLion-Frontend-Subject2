import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page1 from './components/page1';
import Home from './components/Home';
import Footer from './components/footer';
import Albums from './components/Albums';


function App() {
  return (
    <Router>
      <Page1 />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Albums" element={<Albums />} />
      </Routes>
    
      <Footer />
    </Router>
  );
}

export default App;
