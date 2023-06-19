import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {AiOutlineUser, AiOutlineSearch} from 'react-icons/ai';

function Header() {
  return (
    <>
      <div>

        <Navbar variant="light" bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#home">
              <img className='header_logo' src="../assets/image/demo-logo.png" alt='Logo' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-light-example" />
            <Navbar.Collapse id="navbar-light-example">
              <Nav>
                <NavDropdown
                  id="nav-dropdown-light-example"
                  title="HOME"
                  menuVariant="light"
                >
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <NavDropdown
                  id="nav-dropdown-light-example"
                  title="COURSES"
                  menuVariant="light"
                >
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <NavDropdown
                  id="nav-dropdown-light-example"
                  title="EVENTS"
                  menuVariant="light"
                >
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <NavDropdown
                  id="nav-dropdown-light-example"
                  title="PAGES"
                  menuVariant="light"
                >
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <NavDropdown
                  id="nav-dropdown-light-example"
                  title="BLOG"
                  menuVariant="light"
                >
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#CONTACT">Contact</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#"><AiOutlineUser /></Nav.Link>
                <Nav.Link href="#login">Login/Register</Nav.Link>
                <Nav.Link href="#"><AiOutlineSearch /></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

    </>
  );
}

export default Header;