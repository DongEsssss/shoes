import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import shoes1 from '../../asset/image/shose1.png';
import shoes2 from '../../asset/image/shose2.png';
import shoes3 from '../../asset/image/shose3.png';
import shoes4 from '../../asset/image/shose4.png';

import './mainslider.scss';

export default function SwiperComponent() {
    return (
        <div className="main-slider-wrapper">
            <div className="main-slider-nav prev">‹</div>
            <div className="main-slider-nav next">›</div>
            <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation={{
                    prevEl: '.main-slider-nav.prev',
                    nextEl: '.main-slider-nav.next',
                }}
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
