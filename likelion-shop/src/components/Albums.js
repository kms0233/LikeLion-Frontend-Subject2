import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/App.css";
import lilac from "../img/Lilac.jpg";
import lovepoem from "../img/LovePoem.jpg";
import palette from "../img/Palette.jpg";

function Albums() {
  return (
    <Container>
      <Row>
        <Col>
          <img src={lilac} className="album-img" alt="lilac-img"></img>
          <h5>Lilac</h5>
          <p>The 5th Mini Album</p>
        </Col>
        <Col>
          <img src={lovepoem} className="album-img" alt="lovepoem-img"></img>
          <h5>Love Poem</h5>
          <p>The 5th Album</p>
        </Col>
        <Col>
          <img src={palette} className="album-img" alt="palette-img"></img>
          <h5>Palette</h5>
          <p>The 4th Album</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Albums;
