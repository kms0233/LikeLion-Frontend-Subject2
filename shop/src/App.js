import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar'
import Main from './Screen/Main';
import { Albums } from './Screen/Albums';
import { Detail } from './Screen/Detail';
import Footer from './Footer';

function App() {
  return (
    <>
		<NavBar />
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Main />}></Route>
				<Route path='/albums' element={<Albums />}></Route>
				<Route path='/detail/:title' element={<Detail />}></Route>
			</Routes>
		</BrowserRouter>
		<Footer />
    </>
  );
}

export default App;
