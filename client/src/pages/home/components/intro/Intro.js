import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Heading3 } from '../../../../components';
import './Intro.scss';

function Intro(props) {
    return (
        <div className='intro'>
            <img className='purple-back' src='/Illustrations/RB_010.png' alt='back' />
            <Container>
                <Row>
                    <Col md={6}>
                        <Heading3
                            firstLine='Lorem ipsum dolor'
                            seconeLine='sit amet, consectetur'
                            thirdLine='adipiscing elit,'
                            fourthLine='sed do eiusmod tempo'
                            className="center-relative-vertical nowrap"
                        />
                    </Col>
                    <Col className='position-relative' md={6}>
                        <img className='intro-tv center-vertical' src='/Illustrations/RB_001.png' alt='tv' />
                        <img className='intro-jellybeans' src='/Illustrations/RB_002.png' alt='tv' />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Intro;