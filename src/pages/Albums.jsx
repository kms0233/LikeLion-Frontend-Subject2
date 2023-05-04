import { Container, Row, Col } from "react-bootstrap";
import "../App.css";

const Albums = () => {
  const Lilac = require("../img/Lilac.jpg");
  const LovePoem = require("../img/LovePoem.jpg");
  const Palette = require("../img/Palette.jpg");

  return (
    <Container className="p-5">
      <Row>
        <Col className="m-3">
          <Row>
            <img
              className="col-4"
              style={{ width: "400px" }}
              src={LovePoem}
              alt=""
            />
            <div className="album-title">Love peom</div>
            <div> The 5th Mini Album</div>
          </Row>
        </Col>
        <Col className="m-3">
          <Row>
            <img
              className="col-4"
              style={{ width: "400px" }}
              src={Lilac}
              alt=""
            />
            <div className="album-title">Lilac</div>
            <div> The 5th Album</div>
          </Row>
        </Col>
        <Col className="m-3">
          <Row>
            <img
              className="col-4"
              style={{ width: "400px" }}
              src={Palette}
              alt=""
            />
            <div className="album-title">Palette</div>
            <div> The 4th Album</div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Albums;
