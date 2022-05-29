import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Heading3, ParaText2 } from '../../../../components';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Fade from 'react-reveal/Fade';
import './ClientLogos.scss';

function ClientLogos(props) {
    return (
        <>
            <div className='client-logos background-gradient padding-horizontal-7 hide-768'>
                <Fade>
                    <Container>
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
                </Fade>
            </div>
            <div className='client-logos background-gradient unhide-768'>
                <Container fluid>
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
                    <Swiper
                        slidesPerView={2}
                        loop={true}
                        centeredSlides={true}
                        spaceBetween={10}
                        grabCursor={true}
                        modules={[Pagination]}
                        className="mySwiper margin-global-top-2"
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            1268: {
                                slidesPerView: 4,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <img src="/h-b-logo.png" alt="hex & bracket" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/h-b-logo.png" alt="hex & bracket" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/h-b-logo.png" alt="hex & bracket" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/h-b-logo.png" alt="hex & bracket" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/h-b-logo.png" alt="hex & bracket" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/h-b-logo.png" alt="hex & bracket" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/h-b-logo.png" alt="hex & bracket" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/h-b-logo.png" alt="hex & bracket" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/h-b-logo.png" alt="hex & bracket" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/h-b-logo.png" alt="hex & bracket" />
                        </SwiperSlide>
                    </Swiper>
                </Container>
            </div>
        </>
    );
}

export default ClientLogos;