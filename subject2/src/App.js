import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Albums from "./Albums";
import Detail from "./Detail";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
