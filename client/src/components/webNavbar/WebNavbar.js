import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkButton } from '../';
import './WebNavbar.scss';

function WebNavbar(props) {

    const onClickHamburger = () => {
        const sidebar = document.getElementById('client-sidebar');
        const check = sidebar.classList.contains('client-sidebar-closed');
        const notActive = sidebar.classList.contains('client-sidebar-not-active');
        if (notActive) {
            sidebar.classList.remove('client-sidebar-not-active');
            sidebar.classList.add('client-sidebar-open');
        } else {
            if (check) {
                sidebar.classList.remove('client-sidebar-closed');
                sidebar.classList.add('client-sidebar-open');
            } else {
                sidebar.classList.add('client-sidebar-closed');
                sidebar.classList.remove('client-sidebar-open');
            }
        }
    }

    let color = 'black';
    if (window.location.pathname === '/') color = 'white';

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
                    <div className='hide-992'>
                        <div className="d-flex">
                            <LinkButton to="/careers" text="Careers" className="transparent-bg" />
                            <LinkButton to="/build-with-us" text="Build with Us" className="gradient-txt" />
                        </div>
                    </div>
                    <div className='unhide-992'>
                        <div className="d-flex">
                            <i id="client-sidebar-hamburger" style={{ color: color }} className="fa fa-bars" onClick={onClickHamburger} />
                        </div>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
}

export default WebNavbar;