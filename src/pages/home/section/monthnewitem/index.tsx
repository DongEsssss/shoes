import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './newitem.scss';
import EditionCard from 'component/SwiperSlideCard';
import MainHeader from 'component/mainHeader';
import CustomNavigation from 'component/swiper/CustomNavigation';

interface newItem {
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

const MonthNewItem = () => {
    const [newEdition, setnewEdition] = useState<newItem[]>([]);

    useEffect(() => {
        fetch('/asset/data/newEdtion.json')
            .then((response) => response.json())
            .then((data: newItem[]) => {
                setnewEdition(data);
            })
            .catch((error) => console.error('데이터 확인 요망 : ', error));
    }, []);

    const newItemSwiperOptions = {
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
            nextEl: '.new-swiper-button-next',
            prevEl: '.new-swiper-button-prev',
        },
        pagination: {
            clickable: true,
        },
    };

    return (
        <main className="new-edition-section">
            <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <MainHeader title={'Editor’s New Finds'} subTitle={'에디터의 레이더에 포착된 이번 달의 신상템.'} />
                <CustomNavigation uniqueClass="new" />
            </nav>
            <Swiper
                {...newItemSwiperOptions}
            >
                {newEdition.map((item) => (
                    <SwiperSlide key={item.productCode || item.id}>
                        <EditionCard
                            item={item}
                            onCardClick={(item: newItem) => console.log('Clicked:', item.name)}
                            sx={{ backgroundColor: '#f9f9f9' }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </main>
    );
};

export default MonthNewItem;
