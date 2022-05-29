import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ContentCard, Heading3, ParaText2 } from '../../../../components';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Slide from 'react-reveal/Slide';
import './Reviews.scss';

function Reviews(props) {
    return (
        <div className='reviews'>
            <Container>
                <Row className='justify-content-between'>
                    <Col md={5}>
                        <Slide left>
                            <img className='reviews-star' src='/Illustrations/RB_004.png' alt='stars' />
                        </Slide>
                    </Col>
                    <Col md={6}>
                        <Slide right>
                            <Row>
                                <Col>
                                    <Heading3
                                        firstLine='Lorem ipsum dolor'
                                        seconeLine='sit amet.'
                                        thirdLine=''
                                        fourthLine=''
                                        className=""
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <ParaText2
                                        firstLine='Lorem ipsum dolor sit amet.'
                                        seconeLine=''
                                        thirdLine=''
                                        fourthLine=''
                                        className=""
                                    />
                                </Col>
                            </Row>
                        </Slide>
                    </Col>
                </Row>
            </Container>
            <div className='margin-global-top-4'>
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
        </div>
    );
}

export default Reviews;