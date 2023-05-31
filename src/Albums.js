import data from './data.js';
import { Route, Routes, Link } from "react-router-dom";
import React, { useState } from "react";

function Albums(props) {
  const [album, setData] = useState(data);
  return (
    <div class="container" className="albums">
      <div class="row">
        <div class="col-3 m-2">
        <Link to={`/detail/${album[0].title}`}>
          <img src={`${process.env.PUBLIC_URL}/images/album1.jpg`} alt="Album" width="300px"/>
        </Link>
          <p>{album[0].title}</p>
          <h5>{album[0].content}</h5>
        </div>
        <div class="col-3 m-2">
        <Link to={`/detail/${album[1].title}`}>
          <img src={`${process.env.PUBLIC_URL}/images/album2.jpg`} alt="Album" width="300px" />
        </Link>
          <p>{album[1].title}</p>
          <h5>{album[1].content}</h5>
        </div>
        <div class="col-3 m-2">
        <Link to={`/detail/${album[2].title}`}>
          <img src={`${process.env.PUBLIC_URL}/images/album3.jpg`} alt="Album" width="300px" />
        </Link>
          <p>{album[2].title}</p>
          <h5>{album[2].content}</h5>
        </div>
      </div>
      <Routes>
        <Route path="/detail/:title" />
      </Routes>
    </div>
  );
}



export default Albums;