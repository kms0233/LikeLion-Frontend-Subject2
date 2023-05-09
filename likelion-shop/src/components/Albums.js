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
        <Col md>
          <img src={lilac} className="albumImg" alt="lilac-img"></img>
          <div className="albumTitle">Lilac</div>
          <div className="albumCaption">The 5th Mini Album</div>
        </Col>
        <Col md>
          <img src={lovepoem} className="albumImg" alt="lovepoem-img"></img>
          <div className="albumTitle">Love Poem</div>
          <div className="albumCaption">The 5th Album</div>
        </Col>
        <Col md>
          <img src={palette} className="albumImg" alt="palette-img"></img>
          <div className="albumTitle">Palette</div>
          <div className="albumCaption">The 4th Album</div>
        </Col>
      </Row>
    </Container>
  );
}

export default Albums;
