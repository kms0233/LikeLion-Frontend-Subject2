import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Navbar>
      <Container>
        <Navbar.Brand onClck={() => navigate("/")}>멋사 shop</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as:{" "}
            <a href="https://github.com/seoyeon-jung">seoyeon-jung</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
