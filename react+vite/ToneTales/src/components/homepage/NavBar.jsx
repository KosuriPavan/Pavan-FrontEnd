import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";

function NavBarHomePage() {
  const navigate = useNavigate();

  const handleAdminLogin = () => {
    navigate("/login");
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Tone Tales</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <NavDropdown title="Open Mic Events" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Poetry</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Singing</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Comedy</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Our Top Performers"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3">Prasad</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Bhanu Prasad</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Bhanu</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Contact us</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">
              {""}
              <NavDropdown title="Login Here" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action1" onClick={handleAdminLogin}>
                  Participant <br /> Login
                </NavDropdown.Item>
                <NavDropdown.Item href="#action2" onClick={handleAdminLogin}>
                  Performer <br /> Login
                </NavDropdown.Item>
                <NavDropdown.Item href="#action3" onClick={handleAdminLogin}>
                  Admin <br /> Login
                </NavDropdown.Item>
              </NavDropdown>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarHomePage;
