import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ContentCard, Heading3, LinkButton, ParaText2 } from '../../../../components';
import Fade from 'react-reveal/Fade';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import './Engineers.scss';

function Engineers(props) {
    return (
        <div className='padding-horizontal-7'>
            <Container className='engineers'>
                <Row>
                    <Col>
                        <Heading3
                            firstLine='Engineers'
                            seconeLine=''
                            thirdLine=''
                            fourthLine=''
                            className=""
                        />
                        <ParaText2
                            firstLine='We have a team of experts who can help you with your project.'
                            seconeLine=''
                            thirdLine=''
                            fourthLine=''
                            className=""
                        />
                    </Col>
                </Row>
                <div className='unhide-768'>
                    <Swiper
                        slidesPerView={1}
                        loop={true}
                        centeredSlides={true}
                        spaceBetween={10}
                        grabCursor={true}
                        modules={[Pagination]}
                        className="mySwiper"
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
                            <ContentCard
                                title="Lorem ipsum"
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet."
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ContentCard
                                title="Lorem ipsum"
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet."
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ContentCard
                                title="Lorem ipsum"
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet."
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ContentCard
                                title="Lorem ipsum"
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet."
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ContentCard
                                title="Lorem ipsum"
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet."
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ContentCard
                                title="Lorem ipsum"
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet."
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className='hide-768'>
                    <Fade left>
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
                    </Fade>
                </div>
                <div className='hide-768'>
                    <Fade right>
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
                    </Fade>
                </div>
                <Row className='margin-global-top-2'>
                    <Col>
                        <LinkButton to="/build-with-us" text="Build with Us" className="gradient-btn center-relative" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Engineers;