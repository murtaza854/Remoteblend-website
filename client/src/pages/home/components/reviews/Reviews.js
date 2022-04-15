import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ContentCard, Heading3, ParaText2 } from '../../../../components';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import './Reviews.scss';

function Reviews(props) {
    return (
        <div className='reviews'>
            <Container>
                <Row className='justify-content-between'>
                    <Col xs={5}>
                        <img className='reviews-star' src='/Illustrations/RB_004.png' alt='stars' />
                    </Col>
                    <Col xs={6}>
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
                    </Col>
                </Row>
            </Container>
            <div className='margin-global-top-4'>
                <Swiper
                    slidesPerView={4}
                    loop={true}
                    centeredSlides={true}
                    spaceBetween={30}
                    grabCursor={true}
                    modules={[Pagination]}
                    className="mySwiper"
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