import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Heading3, ParaText3, StatsItem } from '../../../../components';
import './Stats.scss';

function Stats(props) {
    return (
        <div className='stats'>
            <Container className='padding-horizontal-7'>
                <Row className='justify-content-center'>
                    <Col md={6}>
                        <div className='center-vertical-relative'>
                            <Heading3
                                firstLine='Lorem ipsum dolor'
                                seconeLine='sit amet.'
                                thirdLine=""
                                fourthLine=""
                                className=""
                            />
                            <ParaText3
                                firstLine='Lorem ipsum dolor'
                                seconeLine='sit amet, consectetur'
                                thirdLine='adipiscing elit,'
                                fourthLine='sed do eiusmod tempo'
                                className=""
                            />
                        </div>
                    </Col>
                    <Col md={6} className='item-cont'>
                        <div className='center-relative'>
                            <div>
                                <div className='margin-global-top-4' />
                                <StatsItem
                                    text='Startups'
                                    number='12'
                                />
                                <div className='margin-global-top-1' />
                                <StatsItem
                                    text='Startups'
                                    number='12'
                                />
                            </div>
                            <div className='margin-horizontal-1' />
                            <div>
                                <StatsItem
                                    text='Startups'
                                    number='12'
                                />
                                <div className='margin-global-top-1' />
                                <StatsItem
                                    text='Startups'
                                    number='12'
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Stats;