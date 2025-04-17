import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// image
import shoes1 from '/Users/kitworks/Desktop/dongesssss/shoes/src/asset/image/shose1.png';
import shoes2 from '../../asset/image/shose2.png';
import shoes3 from '../../asset/image/shose3.png';
import shoes4 from '../../asset/image/shose4.png';

export default function SwiperComponent() {
    return (
        <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            loop={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,

            }}
            style={{ width: '100%', height: '100%' }}
            className="mySwiper"
        >
            <SwiperSlide>
                <img
                    src={shoes1}
                    alt="Slide 1"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src={shoes2}
                    alt="Slide 2"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src={shoes3}
                    alt="Slide 3"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src={shoes4}
                    alt="Slide 4"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </SwiperSlide>
        </Swiper>
    );
}
