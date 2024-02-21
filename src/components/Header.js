import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/header.css';
import { FiMenu, FiX} from 'react-icons/fi';
import React, { useState } from 'react';

function Header() {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
            <Container style={{alignItems: 'center'}}>
                <Navbar.Brand href="/"><h1><strong>YOLO</strong></h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/creators"><Button variant='secondary'>Creators</Button></Nav.Link>
                        <Nav.Link href="/developers"><Button variant='secondary'>Developers</Button></Nav.Link>
                        <Nav.Link href='/checkout?t=premium'>
                            <Button
                            
                                variant='secondary'
                                style={{
                                    background: 'linear-gradient(to right, #ffd700, #ffcc00)',
                                    boxShadow: '0 3px 10px 0 rgba(255,215,0,0.3)',
                                    border: 'none',
                                }}
                            >
                                <a >Explore Premium</a>
                            </Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <div>
                <Button variant='tertiary' onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FiX size={30}/> : <FiMenu size={30}/>}
                </Button>
            </div>

        </Navbar>
    );
}

export default Header;