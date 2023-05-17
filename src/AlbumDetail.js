import React, { useState, useEffect } from "react";
import data from "./data.js";
import { useParams } from "react-router-dom";
import { Alert } from "react-bootstrap";
import "./AlbumDetail.css";

function AlbumDetail(props) {
  const { title } = useParams();
  const [showSaleAlert, setShowSaleAlert] = useState(true);

  const album = data.find((album) => album.title === title);
  const imagePath = `${process.env.PUBLIC_URL}/images/${album.image}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSaleAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="container" >
      {showSaleAlert && (
        <Alert
          variant="success"
          style={{ backgroundColor: "#FFF3CD", height: "50px",border:"0px", marginTop:"15px"}}
          onClose={() => setShowSaleAlert(false)}
          dismissible={false}
        >
        <p style={{color: "#6E560E", margin: "auto", fontWeight:"bold",fontSize:"14px"}}>3초 안에 구매하면 30% 세일 중입니다!</p>
      </Alert>
)}

      <div className="row">
        <div className="col-4 d-flex">
          <div className="image-container d-flex align-items-center">
            <img src={imagePath} alt="Album" width="600px"/>
          </div>
        </div>
        <div className="col-8 d-flex flex-column">
          <h2 style={{ marginTop: "100px" }}>{album.title}</h2>
          <h4>{album.content}</h4>
          <h6>{album.price}</h6>
          <button
            className="button"
            style={{ marginLeft: "200px" }}
          >
            주문하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default AlbumDetail;
