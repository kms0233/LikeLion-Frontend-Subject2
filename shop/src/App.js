import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Main from './Main';
import Product from './Product';
import NotFound from './NotFound';
import Footer from './Components/Footer';
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <>


       <Header /> 
      <div className='main-bg' />

      <Routes>
        <Route path="" element={<Main />}></Route>
        <Route path="/product/*" element={<Product />}></Route>
        {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>


      <Footer />
    </>
  );
};



export default App;
