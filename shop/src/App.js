import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar'
import Main from './Screen/Main';
import Footer from './Footer';

function App() {
  return (
    <>
		<NavBar />
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Main />}></Route>
			</Routes>
		</BrowserRouter>
		<Footer />
    </>
  );
}

export default App;
