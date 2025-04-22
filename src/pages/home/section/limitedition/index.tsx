import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Typography } from '@mui/material';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './limited.scss';

interface LimitedItem {
    id: string;
    title: string;
    content: string;
    category: string;
    image?: string;
    createdAt: string;
    updatedAt: string;
    isPinned: boolean;
    visible: boolean;
    name?: string;
    price?: number;
    promotion?: string;
    productCode?: string;
}

const SliderComponent: React.FC = () => {
    const [limitedEdition, setLimitedEdition] = useState<LimitedItem[]>([]);

    useEffect(() => {
        fetch('/asset/data/limitedEdtion.json')
            .then((response) => response.json())
            .then((data: LimitedItem[]) => {
                setLimitedEdition(data);
            })
            .catch((error) => console.error('데이터 확인 요망 : ', error));
    }, []);

    return (
        <main className="limited-edition-section">
            <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography fontSize={30} fontWeight={700} color="#000" textAlign="left" marginTop={3} marginBottom={1}>
                    Limited Edition Promotion
                </Typography>
                <div className="limited-nav">
                    <div className="limited-nav-wrapper left">
                        <div className="limited-swiper-button-prev">‹</div>
                    </div>
                    <div className="limited-nav-wrapper right">
                        <div className="limited-swiper-button-next">›</div>
                    </div>
                </div>
            </nav>
            <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={2}
                breakpoints={{
                    1200: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    0: {
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
                {limitedEdition.map((item) => (
                    <SwiperSlide key={item.productCode || item.id}
                        style={{ padding: '20px 0px', boxSizing: 'border-box' }}>
                        <Box
                            sx={{
                                backgroundColor: '#ffffff',
                                borderRadius: '16px',
                                p: 2,
                                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                transition: 'transform 0.3s',
                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                },
                            }}
                        >
                            <Box sx={{ position: 'relative' }}>
                                {/* 카테고리 배지 */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 10,
                                        left: 10,
                                        backgroundColor: '#000',
                                        color: '#fff',
                                        fontSize: 12,
                                        px: 1.5,
                                        py: 0.5,
                                        borderRadius: '8px',
                                        textTransform: 'uppercase',
                                    }}
                                >
                                    {item.category}
                                </Box>

                                <img
                                    src={item.image}
                                    alt={item.name || 'Limited Edition'}
                                    style={{
                                        width: '100%',
                                        height: '180px',
                                        objectFit: 'cover',
                                        borderRadius: '12px',
                                    }}
                                />
                            </Box>

                            {/* 제품 정보 */}
                            <Box sx={{ mt: 2 }}>
                                <Typography
                                    sx={{ fontSize: '18px', fontWeight: 600, color: '#333', textAlign: 'left' }}
                                >
                                    {item.name}
                                </Typography>
                                <Typography
                                    sx={{ fontSize: '14px', fontWeight: 400, color: '#888', textAlign: 'left', mt: 0.5 }}
                                >
                                    ₩{item.price?.toLocaleString()}
                                </Typography>
                            </Box>

                            {/* 프로모션 문구 */}
                            <Typography
                                sx={{
                                    fontSize: '13px',
                                    color: '#555',
                                    mt: 2,
                                    textAlign: 'left',
                                    fontStyle: 'italic',
                                    lineHeight: 1.4,
                                }}
                            >
                                {item.promotion}
                            </Typography>
                        </Box>
                    </SwiperSlide>

                ))}
            </Swiper>
        </main>
    );
};

export default SliderComponent;
