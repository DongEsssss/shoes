import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import shoes1 from '../../../../asset/image/shose1.png';
import shoes2 from '../../../../asset/image/shose2.png';
import shoes3 from '../../../../asset/image/shose3.png';
import shoes4 from '../../../../asset/image/shose4.png';

import './slider.scss'

export default function Mainslider() {
    const swiperOptions = {
        modules: [Navigation, Autoplay],
        spaceBetween: 0,
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.main-slider-nav.next',
            prevEl: '.main-slider-nav.prev',
        },
    };

    return (
        <div className="main-slider-wrapper">
            <Swiper
                {...swiperOptions}
                className="main-swiper"
            >
                {[shoes1, shoes2, shoes3, shoes4].map((src, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={src}
                            alt={`메인 슬라이드 이미지 ${index + 1}`}
                            className="main-swiper-image"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
