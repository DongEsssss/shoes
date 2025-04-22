import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import 'swiper/css/navigation';
import 'swiper/css';
import './monthbest.scss';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { JSX } from 'react/jsx-runtime';

interface HotItem {
    id: string;
    title: string;
    content: string;
    category: string;
    image?: string;
    set?: {
        map(arg0: (item: any, idx: number) => JSX.Element): React.ReactNode;
        name: string;
        price: number;
        category: string;
        description: string;
        productCode: string;
        image: string;
    }
    createdAt: string;
    updatedAt: string;
    isPinned: boolean;
    visible: boolean;
    name?: string;
    price?: number;
    promotion?: string;
    productCode?: string;
}

export default function MonthBestItem() {
    const [hotitem, setHotItem] = useState<HotItem[]>([]);

    useEffect(() => {
        fetch('/asset/data/hotitem.json')
            .then((response) => response.json())
            .then((data: HotItem[]) => {
                setHotItem(data);
            })
            .catch((error) => console.error('데이터 확인 요망 : ', error));
    }, []);

    return (
        <main className="hot-item-section">
            <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <Typography fontSize={30} fontWeight={700} color="#000" textAlign="left" marginTop={3} marginBottom={0}>
                        This Month's Must-Haves
                    </Typography>
                    <Typography fontSize={16} color="#666" marginTop={0} marginBottom={2}>
                        요즘 가장 핫한 조합을 소개합니다!
                    </Typography>
                </div>
                <div className="hot-nav">
                    <Button
                        sx={{
                            backgroundColor: '#000',
                            color: '#fff',
                            borderRadius: '8px',
                            padding: '8px 16px',
                            '&:hover': {
                                backgroundColor: '#333',
                            }
                        }}>
                        More +
                    </Button>
                </div>
            </nav>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1.5}
                coverflowEffect={{
                    rotate: 10,
                    stretch: 0,
                    depth: 50,
                    modifier: 1,
                    slideShadows: true,
                }}
                loop={true}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {hotitem.map((product: HotItem) => (
                    <SwiperSlide key={product.id} className="swiper-slide">
                        <div className="hotitem-card">
                            <div className="hotitem-image-wrap">
                                <img src={product.image} alt={product.name || ''} className="hotitem-image" />
                            </div>
                            <div className="hotitem-info">
                                <div className="hotitem-promo">{product.promotion}</div>
                                <Typography fontWeight={600} fontSize={18} marginBottom={1}>
                                    세트 구성
                                </Typography>
                                <div className="hotitem-set">
                                    {product.set && product.set.map((item: any, idx: number) => (
                                        <div key={idx} className="hotitem-set-item">
                                            <img src={item.image} alt={item.name} className="set-list-img" />
                                            <div className="set-item-desc">
                                                <strong>{item.name}</strong><br />
                                                {item.price.toLocaleString()}원
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="sellandetail">
                                    <Button variant="contained" sx={{ backgroundColor: '#000', color: '#fff', borderRadius: '8px' }}>
                                        구매하기
                                    </Button>
                                    <Button variant='outlined' sx={{ color: '#000', borderColor: '#000', borderRadius: '8px', marginLeft: 1, padding: "4.5px" }}>
                                        <AddIcon sx={{ fontSize: '16px' }} />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </main>
    );
}
