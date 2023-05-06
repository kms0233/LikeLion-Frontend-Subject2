import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">멋사 shop</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;
