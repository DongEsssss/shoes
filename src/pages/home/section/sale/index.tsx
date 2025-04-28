import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { SpringItem } from 'asset/type/plus';
import MainHeader from 'component/mainHeader'
import React, { useEffect, useState } from 'react'
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SaleItem } from 'asset/type/sale';
import CountdownTimer from 'component/Timer';
import Mainnavigation from 'component/swiper/main-navigation';
import ArrowLink from 'component/ArrowLink';

// import './sale.scss';

export default function Sale() {
    const [saleitem, setSaleItem] = useState<SaleItem[]>([]);

    useEffect(() => {
        fetch('/asset/data/saleitem.json')
            .then((res) => res.json())
            .then(setSaleItem)
            .catch((err) => console.error('데이터 확인 요망 : ', err));
    }, []);

    const saleoption = {
        modules: [Navigation],
        spaceBetween: 30,
        slidesPerView: 2,
        breakpoints: {
            1200: {
                slidesPerView: 3,
            },
            741: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
        loop: true,
        navigation: {
            nextEl: `.sale-swiper-button-next`,
            prevEl: `.sale-swiper-button-prev`,
        },
        pagination: {
            clickable: true,
        },
    }

    return (
        <main className="sale-edition-section">
            <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <MainHeader
                    title={'April’s Must-Haves, Now on Sale'}
                    subTitle={'살랑살랑 봄바람, 착한 가격까지'} />
                <Mainnavigation classPrefix={'sale'} />
            </nav>
            <Swiper
                {...saleoption}>
                {saleitem?.map((item: any) => (
                    <SwiperSlide key={item.productCode}>
                        <Card
                            sx={{
                                borderRadius: '16px',
                                overflow: 'hidden',
                                boxShadow: 5,
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.03)',
                                },
                                position: 'relative',
                                backgroundColor: '#fff5f5',
                            }}
                        >
                            <div style={{
                                position: 'absolute',
                                top: 8,
                                left: 8,
                                backgroundColor: '#ff3b3b',
                                color: '#fff',
                                padding: '4px 8px',
                                borderRadius: 4,
                                fontWeight: 'bold',
                                fontSize: '12px',
                                zIndex: 1
                            }}>
                                HOT
                            </div>
                            <CardMedia
                                component="img"
                                image={item.image}
                                alt={item.name}
                                sx={{
                                    height: 200,
                                    objectFit: 'cover',
                                    borderBottom: '4px solid #ff6f61',
                                }}
                            />

                            <CardContent>
                                <div style={{
                                    backgroundColor: '#ffffff',
                                    color: '#fff',
                                    borderRadius: 6,
                                    display: 'inline-block',
                                    marginBottom: '8px',
                                    fontWeight: 'bold',
                                    fontSize: '0.875rem'
                                }}>
                                    <CountdownTimer endTime={item.saleEndTime} />
                                </div>

                                <Typography variant="h6" fontWeight="bold" sx={{ mb: 0.5 }}>
                                    {item.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                    {item.promotion}
                                </Typography>

                                <Typography variant="h6" color="error" fontWeight="bold">
                                    {item.price.toLocaleString()}원
                                </Typography>
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                ))}
                <ArrowLink classPrefix="sale" />
            </Swiper>
        </main>
    )
}
