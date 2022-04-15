import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Heading3, ParaText2 } from '../../../../components';
import './ClientLogos.scss';

function ClientLogos(props) {
    return (
        <div className='client-logos background-gradient'>
            <Container className='padding-horizontal-7'>
                <Row>
                    <Col>
                        <Heading3
                            firstLine='Our Clients'
                            seconeLine=''
                            thirdLine=''
                            fourthLine=''
                            className="center-relative-vertical white-color"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ParaText2
                            firstLine='We take pride in working'
                            seconeLine='with companies across the globe'
                            thirdLine=''
                            fourthLine=''
                            className="white-color"
                        />
                    </Col>
                </Row>
                <Row className='justify-content-center margin-global-top-1'>
                    <Col md={4}>
                        <img src="/h-b-logo.png" alt="hex & bracket" />
                    </Col>
                    <Col md={4}>
                        <img src="/h-b-logo.png" alt="hex & bracket" />
                    </Col>
                    <Col md={4}>
                        <img src="/h-b-logo.png" alt="hex & bracket" />
                    </Col>
                </Row>
                <Row className='justify-content-center margin-global-top-2'>
                    <Col md={4}>
                        <img src="/h-b-logo.png" alt="hex & bracket" />
                    </Col>
                    <Col md={4}>
                        <img src="/h-b-logo.png" alt="hex & bracket" />
                    </Col>
                    <Col md={4}>
                        <img src="/h-b-logo.png" alt="hex & bracket" />
                    </Col>
                </Row>
                <Row className='justify-content-center margin-global-top-2'>
                    <Col md={4}>
                        <img src="/h-b-logo.png" alt="hex & bracket" />
                    </Col>
                    <Col md={4}>
                        <img src="/h-b-logo.png" alt="hex & bracket" />
                    </Col>
                    <Col md={4}>
                        <img src="/h-b-logo.png" alt="hex & bracket" />
                    </Col>
                </Row>
                <Row className='justify-content-center margin-global-top-2'>
                    <Col md={4}>
                        <img src="/h-b-logo.png" alt="hex & bracket" />
                    </Col>
                    <Col md={4}>
                        <img src="/h-b-logo.png" alt="hex & bracket" />
                    </Col>
                    <Col md={4}>
                        <img src="/h-b-logo.png" alt="hex & bracket" />
                    </Col>
                </Row>
                <Row className='justify-content-center margin-global-top-2'>
                    <Col md={4}>
                        <img src="/h-b-logo.png" alt="hex & bracket" />
                    </Col>
                    <Col md={4}>
                        <img src="/h-b-logo.png" alt="hex & bracket" />
                    </Col>
                    <Col md={4}>
                        <img src="/h-b-logo.png" alt="hex & bracket" />
                    </Col>
                </Row>
                <Row className='justify-content-center margin-global-top-2'>
                    <Col md={4}>
                        <img src="/h-b-logo.png" alt="hex & bracket" />
                    </Col>
                    <Col md={4}>
                        <img src="/h-b-logo.png" alt="hex & bracket" />
                    </Col>
                    <Col md={4}>
                        <img src="/h-b-logo.png" alt="hex & bracket" />
                    </Col>
                </Row>
                <Row className='justify-content-center margin-global-top-2'>
                    <Col md={4}>
                        <img src="/h-b-logo.png" alt="hex & bracket" />
                    </Col>
                    <Col md={4}>
                        <img src="/h-b-logo.png" alt="hex & bracket" />
                    </Col>
                    <Col md={4}>
                        <img src="/h-b-logo.png" alt="hex & bracket" />
                    </Col>
                </Row>
                <Row className='justify-content-center margin-global-top-2'>
                    <Col md={4}>
                        <img src="/h-b-logo.png" alt="hex & bracket" />
                    </Col>
                    <Col md={4}>
                        <img src="/h-b-logo.png" alt="hex & bracket" />
                    </Col>
                    <Col md={4}>
                        <img src="/h-b-logo.png" alt="hex & bracket" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ClientLogos;