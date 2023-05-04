import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";
import Logo from "./logo";



export default function Page1() {
  return (
    <Navbar bg="light" expand="lg">
      <Logo />
      <Container>
        <Navbar.Brand href="#home">멋사 Shop</Navbar.Brand>
       
       
      </Container>
    </Navbar>
  );
}


