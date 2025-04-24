import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import 'swiper/css';
import 'swiper/css/navigation';
import './monthbest.scss';
import { EffectCoverflow } from 'swiper/modules';
import MainHeader from 'component/mainHeader';
import { HotItem } from 'asset/type/hot';

export default function MonthBestItem() {
    const [hotitem, setHotItem] = useState<HotItem[]>([]);

    useEffect(() => {
        fetch('/asset/data/hotitem.json')
            .then((res) => res.json())
            .then(setHotItem)
            .catch((err) => console.error('데이터 확인 요망 : ', err));
    }, []);

    const swiperOptions = {
        modules: [EffectCoverflow],
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1.5,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 50,
            modifier: 1,
            slideShadows: true,
        },
        loop: true,
    };

    return (
        <div className="hot-item-section">
            <main>
                <nav className="hot-nav">
                    <MainHeader title="This Month's Must-Haves" subTitle="요즘 가장 핫한 조합을 소개합니다!" />
                    <Button
                        sx={{
                            bgcolor: '#000', color: '#fff', borderRadius: '8px', px: 2,
                            '&:hover': { bgcolor: '#333' },
                        }}
                    >
                        More +
                    </Button>
                </nav>
            </main>

            <Swiper {...swiperOptions} className="mySwiper">
                {hotitem.map(({ id, image, name, promotion, set }) => (
                    <SwiperSlide key={id} className="swiper-slide">
                        <div className="hotitem-card">
                            <div className="hotitem-image-wrap">
                                <img src={image} alt={name || ''} className="hotitem-image" />
                            </div>

                            <div className="hotitem-info">
                                {promotion && <div className="hotitem-promo">{promotion}</div>}

                                <Typography fontWeight={600} fontSize={18} mb={1}>
                                    세트 구성
                                </Typography>

                                <div className="hotitem-set">
                                    {set?.map((item, i) => (
                                        <div key={i} className="hotitem-set-item">
                                            <img src={item.image} alt={item.name} className="set-list-img" />
                                            <div className="set-item-desc">
                                                <strong>{item.name}</strong><br />
                                                {item.price.toLocaleString()}원
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="sellandetail">
                                    <Button
                                        variant="contained"
                                        sx={{ bgcolor: '#000', color: '#fff', borderRadius: '8px', width: 82, height: 36 }}
                                    >
                                        구매하기
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            color: '#000', borderColor: '#000', borderRadius: '8px',
                                            px: 2, width: 82, height: 36,
                                        }}
                                    >
                                        <AddIcon fontSize="small" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
