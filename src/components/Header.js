// there are 3 ways to create a component
// method 1: default functional component
// method 2: arrow function component
// method 3: default return component
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// method 1
export default function Header() {
    return(
        <>
            <Navbar expand="lg" className="bg-dark" variant={"dark"}>
                <Container>
                    <Navbar.Brand className={"text-white"} href="#home">Fahad</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className={"text-white"}  href="#home">Projects</Nav.Link>
                            <Nav.Link className={"text-white"}  href="#link">Reviews</Nav.Link>
                            <NavDropdown className={"text-white text-light dropdown-section"}  title="Reviews" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.2">
                                   Seller Review
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">
                                    Buyer Review
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className={"text-white"}  href="#link">Contact Us</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}