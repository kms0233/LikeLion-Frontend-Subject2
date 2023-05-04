import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';
import NavBar from "./component/Navbar"
import Footer from "./component/Footer";
import Home from "./pages/Home";


function App() {
  return (<>
    <NavBar />
    <Routes>
      <Route path='/' element = {<Home />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
