import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { SpringItem } from 'asset/type/plus';
import MainHeader from 'component/mainHeader'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SaleItem } from 'asset/type/sale';
import CountdownTimer from 'component/Timer';

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
        spaceBetween: 30,
        slidesPerView: 2,
        breakpoints: {
            1200: {
                slidesPerView: 3,
            },
            600: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
        loop: true,
        navigation: {
            nextEl: '.sale-swiper-button-next',
            prevEl: '.sale-swiper-button-prev',
        },
        pagination: {
            clickable: true,
        },
    }

    return (
        <main>
            <MainHeader title={'April’s Must-Haves, Now on Sale'} subTitle={'살랑살랑 봄바람, 착한 가격까지'} />
            <Swiper
                {...saleoption}>
                {saleitem?.map((item: any) => (
                    <SwiperSlide key={item.productCode}>
                        <Card sx={{ borderRadius: '16px', overflow: 'hidden', boxShadow: 3 }}>
                            <CardMedia
                                component="img"
                                image={item.image}
                                alt={item.name}
                                sx={{ height: 200, objectFit: 'cover' }}
                            />
                            <CardContent>
                                <CountdownTimer endTime={item.saleEndTime} />
                                <Typography variant="h6">{item.name}</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.promotion}
                                </Typography>
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                ))}

            </Swiper>
        </main>
    )
}
