import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './GlobeBanner.scss';

function GlobeBanner(props) {
    return (
        <Container className='globe-banner padding-horizontal-7'>
            <img src={props.img} alt='Globe Banner' className='center-vertical' />
            <Row>
                <Col xs={1}>
                </Col>
                <Col xs={11} className='background-gradient'>
                    {props.children}
                </Col>
            </Row>
        </Container>
    );
}

export default GlobeBanner;