import {Navbar, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ContainerInsideExample() {
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand href="#">멋사Shop</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default ContainerInsideExample;