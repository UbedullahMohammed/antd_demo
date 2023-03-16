import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>React-18</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Batching</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Hooks" id="collasible-nav-dropdown">
              <LinkContainer to="/useid">
                <NavDropdown.Item>useId Hook</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/usetransitionone">
                <NavDropdown.Item>useTransition Hook 1</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/usetransitiontwo">
                <NavDropdown.Item>useTransition Hook 2</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/usedeferrenvalue">
                <NavDropdown.Item>useDeferredValue Hook</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <NavDropdown title="Suspense" id="collasible-nav-dropdown">
              <LinkContainer to="/suspense">
                <NavDropdown.Item>Suspense Ex1</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <NavDropdown title="Strickmode" id="collasible-nav-dropdown">
              <LinkContainer to="/strickmode">
                <NavDropdown.Item>Strickmode useEfect Hook</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
          <Nav>
            <NavDropdown
              title="Global State Management"
              id="collasible-nav-dropdown"
            >
              <LinkContainer to="/statemanagement">
                <NavDropdown.Item>State Management</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/datafetchingone">
                <NavDropdown.Item>Data Fetching useState</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/datafetchingtwo">
                <NavDropdown.Item>Data Fetching useReducer</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            {/* <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
