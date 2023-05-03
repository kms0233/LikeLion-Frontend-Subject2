import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const NavBar = () => {
return (
	<Navbar bg="light" expand="lg">
		<Container>
			<Navbar.Brand href="/">멋사Shop</Navbar.Brand>
		</Container>
	</Navbar>
	);
}

export default NavBar;