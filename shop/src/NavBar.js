import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
return (
	<Navbar bg="light" expand="lg">
		<Container>
			<Navbar.Brand href="/">멋사Shop</Navbar.Brand>
			<Navbar.Collapse>
			<Nav>
				<Nav.Link href="/albums">Albums</Nav.Link>
			</Nav>
			</Navbar.Collapse>
		</Container>
	</Navbar>
	);
}

export default NavBar;