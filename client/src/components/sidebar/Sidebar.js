import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Sidebar.scss';

function Sidebar(props) {

    useEffect(() => {
        document.addEventListener('click', function (event) {
            const isClickInsideSidebar = document.getElementById('client-sidebar').contains(event.target);
            const isClickInsideHamburger = document.getElementById('client-sidebar-hamburger').contains(event.target);

            if (!isClickInsideSidebar && !isClickInsideHamburger) {
                const sidebar = document.getElementById('client-sidebar');
                const check = sidebar.classList.contains('client-sidebar-open');
                if (check) {
                    sidebar.classList.remove('client-sidebar-open');
                    sidebar.classList.add('client-sidebar-closed');
                }
            }
        });
    }, []);

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

    return (
        <Container id="client-sidebar" className="client-sidebar client-sidebar-not-active" fluid>
            <div className="center-relative-vertical">
                <Row>
                    <Col>
                        <Link to="/">
                            <img src="logo.png" alt="logo" className="logo" />
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to="/">
                            Home
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to="/careers">
                            Careers
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to="/build-with-us">
                            Build with Us
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <i id="client-sidebar-hamburger" className="fa fa-close" onClick={onClickHamburger} />
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default Sidebar;