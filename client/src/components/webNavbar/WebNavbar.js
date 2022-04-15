import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkButton } from '../';
import './WebNavbar.scss';

function WebNavbar(props) {
    return (
        <div className='web-navbar'>
            <Navbar bg="transparent">
                <Container fluid>
                    <Link to="/">
                        <img src="/logo.png" alt="logo" className="logo" />
                    </Link>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                    >
                    </Nav>
                    <div className="d-flex">
                        <LinkButton to="/" text="Careers" className="transparent-bg" />
                        <LinkButton to="/" text="Build with Us" className="gradient-txt" />
                    </div>
                </Container>
            </Navbar>
        </div>
    );
}

export default WebNavbar;