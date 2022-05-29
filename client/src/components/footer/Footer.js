import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './Footer.scss'

function Footer(props) {
    return (
        <div className='footer-container'>
            <Fade>
                <Row className='justify-content-between align-items-end illustrations-row'>
                    <img className='footer-img1' src='/Illustrations/RB_006.png' alt='Build with us' />
                    <img className='footer-img2' src='/Illustrations/RB_005.png' alt='Build with us' />
                </Row>
            </Fade>
            <footer className="footer-distributed">
                <div className="footer-left">
                    <h3><span>remote blend.</span></h3>
                    <p className="footer-links">
                        <Link to="/" className="link-1">Home</Link>
                        <Link to="/careers" className="link-2">Careers</Link>
                        <Link to="/build-with-us" className="link-3">Build with Us</Link>
                    </p>
                    <p className="footer-company-name">remote blend © 2022</p>
                </div>
                <div className="footer-center">
                    <div className="special">
                        <i className="fa fa-envelope" />
                        <p><a href="mailto:info@remoteblend.com">info@remoteblend.com</a></p>
                    </div>
                </div>
                <div className="footer-right">
                    <div className="footer-icons">
                        Follow Us<br />
                        <a target="_blank" href="/"><i className="fa fa-facebook" /></a>
                        <a target="_blank" href="/"><i className="fa fa-pinterest" /></a>
                        <a target="_blank" href="/"><i className="fa fa-instagram" /></a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;