import { useEffect, useState } from "react";
import { Typography, Card, CardContent, CardMedia } from '@mui/material';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";

import MainHeader from 'component/mainHeader'
import { SpringItem } from "asset/type/plus";

export default function Specialplus() {
    const [plusitem, setPlusItem] = useState<SpringItem[]>([]);

    useEffect(() => {
        fetch('/asset/data/plusitem.json')
            .then((res) => res.json())
            .then(setPlusItem)
            .catch((err) => console.error('데이터 확인 요망 : ', err));
    }, []);

    const pluswiperoption = {
        modules: [Navigation],
        spaceBetween: 30,
        slidesPerView: 2,
        breakpoints: {
            800: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
        loop: true,
        navigation: {
            nextEl: '.plus-swiper-button-next',
            prevEl: '.plus-swiper-button-prev',
        },
        pagination: {
            clickable: true,
        },
    }
    return (
        <main>
            <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <MainHeader
                    title={'Light Steps, New Season'}
                    subTitle={'가볍게, 산뜻하게. 봄 신상과 함께하는 특별한 하루.'} />
            </nav>
            <Swiper
                {...pluswiperoption}
            >
                {plusitem.map((item: any) => (
                    <SwiperSlide key={item.productCode}>
                        <Card sx={{ borderRadius: '16px', overflow: 'hidden', boxShadow: 3 }}>
                            <CardMedia
                                component="img"
                                image={item.image}
                                alt={item.name}
                                sx={{ height: 400, objectFit: 'cover' }}
                            />
                            <CardContent sx={{ backgroundColor: '#f7fdfb' }}>
                                <Typography variant="subtitle2" color="text.secondary">
                                    {item.promotion}
                                </Typography>
                                <Typography variant="h6" fontWeight={600} mt={1}>
                                    {item.name}
                                </Typography>
                                <Typography variant="body1" color="text.primary">
                                    {item.price.toLocaleString()}원
                                </Typography>
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </main>
    )
}
