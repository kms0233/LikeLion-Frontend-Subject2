import { NavbarBrand } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

function Header() {
  return (
    <>
        <Container>
        <Navbar bg="light" ></Navbar>
          <Navbar.Brand  href="/">
            <h2>멋사SHOP</h2>
            </Navbar.Brand> 
        </Container>
    </>
  );
}

export default Header;