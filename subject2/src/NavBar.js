import { Nav, Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'

function NavBar() {
  return (
    <Container>
      <Navbar bg="light" expand="lg">
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
export default NavBar;