import Lilac from '../img/Lilac.jpg';
import LovePoem from '../img/LovePoem.jpg';
import Palette from '../img/Palette.jpg';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import '../App.css';


function Album() {
    return(
        <Container className='p-5'>
            <Row className='p-5'>
                <Col>
                    <Link to="/Albums/lilac">
                    <img src={Lilac} className='album' alt='react' width="90%"/>
                    </Link>    
                </Col>
                <Col>
                <Link to="/Albums/LovePoem">
                <img src={LovePoem} className='album' alt='react' width="90%"/>
                </Link>
                </Col>
                <Col>
                <Link to="/Albums/Palette">
                <img src={Palette} className='album' alt='react' width="90%"/>
                </Link>
                </Col>
            </Row>
        </Container>
       // <img src={Palette} className='album' alt='react'/>
    );
};


export default Album;
