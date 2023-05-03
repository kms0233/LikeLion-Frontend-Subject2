import { Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'

function NavBar() {
  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">멋사Shop</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}
export default NavBar;