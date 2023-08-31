// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// import required modules
import {Autoplay, EffectFade, Pagination,} from 'swiper/modules';

import slide1 from '/public/assets/img/ih1.jpg'
import slide2 from '/public/assets/img/ih2.jpg'
import slide3 from '/public/assets/img/ih3.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '@/public/styles/style.scss';

import Image from "next/image";
import TextCarousel from "@/app/components/TextCarousel";

const Carousel = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return `<Image src='/assets/img/ih${index + 1}.jpg' alt={'slide-${index + 1}'} class='${className}' fill  priority placeholder = 'empty'>`;
        },
    };
    return (
        <>
            <div className="swiperImage">
                <Swiper
                    pagination={pagination}
                    effect={'fade'}
                    speed={1000}
                    loop={true}
                    keyboard={{
                        enabled: true,
                    }}
                    autoplay={{
                        delay: 50000,
                        disableOnInteraction: false,
                    }}
                    // lazy={true}
                    modules={[Autoplay, EffectFade, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className={'h-full relative'}>
                        <Image src={slide1} alt={'slide-1'} className="object-cover" fill priority placeholder = 'empty'/>
                        <TextCarousel n={0}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={slide2} alt={'slide-2'} className="object-cover" fill priority placeholder = 'empty'/>
                        <TextCarousel n={1}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={slide3} alt={'slide-3'} className="object-cover" fill priority placeholder = 'empty'/>
                        <TextCarousel n={2}/>
                    </SwiperSlide>


                </Swiper>
            </div>


        </>
    );
}

export default Carousel;