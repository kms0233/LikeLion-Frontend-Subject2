import React, { useState, useEffect } from "react";
import data from "./data.js";
import { useParams } from "react-router-dom";
import { Alert } from "react-bootstrap";
import "./AlbumDetail.css";

function AlbumDetail(props) {
  const { title } = useParams();
  const [showSaleAlert, setShowSaleAlert] = useState(true);
  const [currentPrice, setCurrentPrice] = useState(0);

  const album = data.find((album) => album.title === title);
  const imagePath = `${process.env.PUBLIC_URL}/images/${album.image}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSaleAlert(false);
      setCurrentPrice(20000);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    setCurrentPrice(14000);
  }, [album]);

  return (
    <div className="container">
      {showSaleAlert && (
        <Alert
          variant="primary"
          onClose={() => setShowSaleAlert(false)}
          dismissible={false}
          style={{ height: "50px" ,marginTop:"10px"}}
        >
          <Alert.Heading style={{ fontSize: "14px", fontWeight: "bold", margin: 0 }}>
            3초 안에 구매하면 30% 세일 중입니다!
          </Alert.Heading>
        </Alert>
      )}

      <div className="row">
        <div className="col-4 d-flex">
          <div className="image-container d-flex align-items-center">
            <img src={imagePath} alt="Album" width="600px" />
          </div>
        </div>
        <div className="col-8 d-flex flex-column">
          <h2 style={{ marginTop: "100px" }}>{album.title}</h2>
          <h4>{album.content}</h4>
          <h6>{currentPrice}원</h6>
          <button className="btn btn-primary" style={{ width: "100px", marginLeft: "200px" }}>
            주문하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default AlbumDetail;
