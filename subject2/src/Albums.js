import { Container, Row, Col } from "react-bootstrap";
import { Lilac, LovePoem, Palette } from './img/index'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Albums.css'

function Albums() {
  return (
    <Container className="albums p-5">
      <Row>
        <Col className="m-3">
          <Row>
            <img className="col-4" style={{ width: 500 }} src={LovePoem} alt='LovePoem' id='LovePoem' />
            <p className="album-title">Love poem</p>
            <p className="album-subtitle">The 5th Mini Album</p>
          </Row>
        </Col>
        <Col className="m-3">
          <Row>
            <img className="col-4" style={{ width: 500 }} src={Lilac} alt='Lilac' />
            <p className="album-title">LILAC</p>
            <p className="album-subtitle">The 5th Album</p>
          </Row>
        </Col>
        <Col className="m-3">
          <Row>
            <img className="col-4" style={{ width: 500 }} src={Palette} alt='Palette' />
            <p className="album-title">Palette</p>
            <p className="album-subtitle">The 4th Album</p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Albums;