import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import category from '../../../../asset/data/category.json';

import CustomNavigation from 'component/swiper/CustomNavigation';
import './category.scss';

export interface CategoryType {
    key: number;
    name: string;
    link: string;
    image: string;
}
const cardStyle = {
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    p: 2,
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '70px',
};
export default function Category() {
    const navigate = useNavigate();

    return (
        <main className="category-main-section" style={{ position: 'relative' }}>
            <CustomNavigation uniqueClass="category" />
            <Swiper
                modules={[Navigation]}
                navigation={{
                    nextEl: '.category-next',
                    prevEl: '.category-prev',
                }}
                loop={true}
                spaceBetween={20}
                breakpoints={{
                    320: { slidesPerView: 2 },
                    580: { slidesPerView: 3 },
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 5 },
                    1280: { slidesPerView: 6 },
                }}
                style={{ padding: '0 60px', boxSizing: 'border-box' }}
            >
                {category.category.map((item: CategoryType) => (
                    <SwiperSlide key={item.key}>
                        <Box
                            // onClick={() => navigate(item.link)}
                            onClick={() => navigate('/#')}
                            sx={cardStyle}
                        >
                            <div className="icon">
                                <img
                                    src={item.image}
                                    alt={`${item.name} 아이콘`}
                                    style={{ width: '64px', height: '64px', objectFit: 'contain' }}
                                />
                            </div>
                            <Typography sx={{ textAlign: 'center', fontSize: '14px', fontWeight: 600 }}>
                                {item.name}
                            </Typography>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </main>
    );
}
