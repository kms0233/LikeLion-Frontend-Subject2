import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';

function Navigation() {
  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>          
          <Navbar.Brand href="/">멋사Shop</Navbar.Brand>          
          <Nav className="me-auto">
          <Nav.Link href="/albums">Albums</Nav.Link>          
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Navigation;