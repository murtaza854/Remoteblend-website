import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ContentCard, Heading3, LinkButton, ParaText2 } from '../../../../components';
import './Engineers.scss';

function Engineers(props) {
    return (
        <Container className='engineers padding-horizontal-7'>
            <Row>
                <Col>
                    <Heading3
                        firstLine='Lorem ipsum dolor'
                        seconeLine='sit amet.'
                        thirdLine=''
                        fourthLine=''
                        className="center-relative-vertical"
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <ParaText2
                        firstLine='Lorem ipsum dolor sit amet, consectetur'
                        seconeLine=''
                        thirdLine=''
                        fourthLine=''
                        className=""
                    />
                </Col>
            </Row>
            <Row className='justify-content-center margin-global-top-2'>
                <Col md={4}>
                    <ContentCard
                        title="Lorem ipsum"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet."
                    />
                </Col>
                <Col md={4}>
                    <ContentCard
                        title="Lorem ipsum"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet."
                    />
                </Col>
                <Col md={4}>
                    <ContentCard
                        title="Lorem ipsum"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet."
                    />
                </Col>
            </Row>
            <Row className='justify-content-center margin-global-top-2'>
                <Col md={4}>
                    <ContentCard
                        title="Lorem ipsum"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet."
                    />
                </Col>
                <Col md={4}>
                    <ContentCard
                        title="Lorem ipsum"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet."
                    />
                </Col>
                <Col md={4}>
                    <ContentCard
                        title="Lorem ipsum"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet."
                    />
                </Col>
            </Row>
            <Row className='margin-global-top-2'>
                <Col>
                    <LinkButton to="/" text="Build with Us" className="gradient-btn center-relative" />
                </Col>
            </Row>
        </Container>
    );
}

export default Engineers;