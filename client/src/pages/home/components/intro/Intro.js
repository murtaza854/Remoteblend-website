import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Heading3 } from '../../../../components';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import './Intro.scss';

function Intro(props) {
    return (
        <div className='intro'>
            <div className='purple-back-container'>
            <img className='purple-back' src='/Illustrations/RB_010.png' alt='back' />
            </div>
            <Container>
                <Row>
                    <Col md={6}>
                        <Fade left>
                            <Heading3
                                firstLine='Lorem ipsum dolor'
                                seconeLine='sit amet, consectetur'
                                thirdLine='adipiscing elit,'
                                fourthLine='sed do eiusmod tempo'
                                className="nowrap"
                            />
                        </Fade>
                    </Col>
                    <Col className='position-relative tv-col' md={6}>
                        <Fade right>
                            <img className='intro-tv center-vertica' src='/Illustrations/RB_001.png' alt='tv' />
                        </Fade>
                        <Bounce right>
                            <img className='intro-jellybeans' src='/Illustrations/RB_002.png' alt='tv' />
                        </Bounce>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Intro;