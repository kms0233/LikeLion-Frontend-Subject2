import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Lilac from './Lilac.jpg';
import LovePoem from './LovePoem.jpg';
import Palette from './Palette.jpg';
import './Albums.css'

function AutoLayoutExample() {
  return (
    <Container className='p-5'>
      <Row>
        <Col>
        <img className="col-8" src={Lilac} />
        <p>LILAC</p>
        <p className="album-sub">The 5th Album</p>
        </Col>        
        <Col>
        <img className="col-8" src={LovePoem} />
        <p>Love poem</p>
        <p className="album-sub">The 5th Mini Album</p>
        </Col>
        <Col>
        <img className="col-8" src={Palette} />
        <p>Palette</p>
        <p className="album-sub">The 4th Album</p>
        </Col>
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;