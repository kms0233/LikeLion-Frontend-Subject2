import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

function App() {
  return (
    <div className="wrapper">
      <NavBar />
      <div className="contentWrapper">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
        <li>리스트</li>
        <li>리스트</li>
        <li>리스트</li>
        <li>리스트</li>
        <li>리스트</li>
        <li>리스트</li>
        <li>리스트</li>
        <li>리스트</li>
        <li>리스트</li>
        <li>리스트</li>
        <li>리스트</li>
        <li>리스트</li>
        <li>리스트</li>
        <li>리스트</li>
      </div>
      <Footer />
    </div>
  );
}

export default App;
