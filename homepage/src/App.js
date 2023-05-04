import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Album from "./pages/album";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/albums" exact={true} element={<Album />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
