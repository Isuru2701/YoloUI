import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/header.css';

function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">YOLO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/creators">Creators</Nav.Link>
                        <Nav.Link href="/developers">Developers</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>

            <Button variant='tertiary'><a href='/register'>Register</a></Button>
            <Button variant='tertiary'><a href='/login'>Login</a></Button>

        </Navbar>
    );
}

export default Header;