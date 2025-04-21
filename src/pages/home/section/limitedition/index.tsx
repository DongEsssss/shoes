import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Typography } from '@mui/material';
import limitedEdtion from "../../../../asset/data/limitedEdtion.json";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './limited.scss';

const SliderComponent = () => {
    return (
        <main className="limited-edition-section">
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography fontSize={30} fontWeight={700} color="#000" textAlign="left" marginTop={3} marginBottom={1}>
                    Limited Edition Exclusives
                </Typography>
                <div className="limited-nav">
                    <div className="limited-nav-wrapper left">
                        <div className="limited-swiper-button-prev">‹</div>
                    </div>
                    <div className="limited-nav-wrapper right">
                        <div className="limited-swiper-button-next">›</div>
                    </div>
                </div>
            </header>
            <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={3}
                breakpoints={{
                    1200: {
                        slidesPerView: 2,
                    },
                    1000: {
                        slidesPerView: 1,
                    }
                }}
                loop={true}
                navigation={{
                    nextEl: '.limited-swiper-button-next',
                    prevEl: '.limited-swiper-button-prev',
                }}
                pagination={{ clickable: true }}
            >
                {limitedEdtion.map((item) => (
                    <SwiperSlide key={item.productCode}>
                        <Box
                            sx={{
                                backgroundColor: '#f9f9f9',
                                borderRadius: '12px',
                                p: 2,
                                cursor: 'pointer',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '300px',
                                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                style={{
                                    width: '100%',
                                    height: '180px',
                                    objectFit: 'contain',
                                    borderRadius: '8px',
                                    marginBottom: '10px',
                                }}
                            />
                            <Typography sx={{ textAlign: 'center', fontSize: '16px', fontWeight: 500 }}>
                                {item.name}
                            </Typography>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </main>
    );
};

export default SliderComponent;
