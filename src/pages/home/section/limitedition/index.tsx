import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import MainHeader from 'component/mainHeader';
import EditionCard from 'component/SwiperSlideCard';
import { LimitedItem } from 'asset/type/limited';
import Mainnavigation from 'component/swiper/main-navigation';
import ArrowLink from 'component/ArrowLink';


export default function SliderComponent() {
    const [limitedEdition, setLimitedEdition] = useState<LimitedItem[]>([]);

    useEffect(() => {
        fetch('/asset/data/limitedEdtion.json')
            .then((response) => response.json())
            .then((data: LimitedItem[]) => {
                setLimitedEdition(data);
            })
            .catch((error) => console.error('데이터 확인 요망 : ', error));
    }, []);

    const limitedItemSwiperOptions = {
        modules: [Navigation],
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
            nextEl: '.limited-swiper-button-next',
            prevEl: '.limited-swiper-button-prev',
        },
        pagination: {
            clickable: true,
        },
    };

    return (
        <main className="limited-edition-section">
            <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'self-end' }}>
                <MainHeader title={'Limited Edition Promotion'} subTitle={'지금 가장 주목받는 한정판 컬렉션!'} />
                <Mainnavigation classPrefix={'limited'} />
            </nav>
            <Swiper {...limitedItemSwiperOptions} >
                {limitedEdition.map((item) => (
                    <SwiperSlide key={item.productCode || item.id}>
                        <EditionCard
                            item={item}
                            onCardClick={(item: LimitedItem) => console.log('Clicked:', item.name)}
                            sx={{ backgroundColor: '#f9f9f9' }}
                        />
                    </SwiperSlide>
                ))}
                <ArrowLink classPrefix='limited' />
            </Swiper>
        </main>
    );
}
