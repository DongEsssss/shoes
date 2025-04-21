import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import './category.scss';
import 'swiper/css';
import 'swiper/css/navigation';

import category from "../../../../asset/data/category.json";

export interface CategoryType {
    key: number;
    name: string;
    link: string;
    image: string;
}

export default function Category() {
    const navigate = useNavigate();

    return (
        <main className="category-main-section">
            {/* 왼쪽 네모 박스 + 화살표 */}
            <div className="custom-nav-wrapper left">
                <div className="custom-swiper-button-prev">‹</div>
            </div>

            {/* 슬라이드 */}
            <Swiper
                modules={[Navigation]}
                navigation={{
                    nextEl: '.custom-swiper-button-next',
                    prevEl: '.custom-swiper-button-prev',
                }}
                loop={true}
                spaceBetween={20}
                breakpoints={{
                    320: { slidesPerView: 3 },
                    480: { slidesPerView: 4 },
                    768: { slidesPerView: 5 },
                    1024: { slidesPerView: 5 },
                    1280: { slidesPerView: 6 },
                }}
                style={{
                    padding: '0 60px', // 네모 박스 공간 확보
                    boxSizing: 'border-box',
                    position: 'relative'
                }}
            >
                {category.category.map((item: CategoryType) => (
                    <SwiperSlide key={item.key}>
                        <Box
                            onClick={() => navigate(item.link)}
                            sx={{
                                backgroundColor: '#f9f9f9',
                                borderRadius: '12px',
                                p: 2,
                                cursor: 'pointer',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '70px',
                            }}
                        >
                            <div className="icon" style={{ marginBottom: '8px' }}>
                                <img
                                    src={item.image}
                                    alt={`${item.name} 아이콘`}
                                    style={{ width: '64px', height: '64px', objectFit: 'contain' }}
                                />
                            </div>
                            <Typography sx={{ textAlign: 'center', fontSize: '14px', fontWeight: 500 }}>
                                {item.name}
                            </Typography>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* 오른쪽 네모 박스 + 화살표 */}
            <div className="custom-nav-wrapper right">
                <div className="custom-swiper-button-next">›</div>
            </div>
        </main>
    );
}
