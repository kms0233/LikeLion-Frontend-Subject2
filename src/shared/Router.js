import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
import Main from "../pages/Main";
import Header from "../Header/Header";
import Albums from "../pages/Albums";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/albums" element={<Albums />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
