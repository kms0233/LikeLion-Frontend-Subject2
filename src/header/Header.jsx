import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand onClick={() => navigate("/")}>멋사 Shop</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
