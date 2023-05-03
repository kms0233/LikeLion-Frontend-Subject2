import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../header/Header";
import Main from "../pages/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
