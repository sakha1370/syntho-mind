// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// import required modules
import {Pagination, Autoplay, } from 'swiper/modules';

import slide1 from '/public/assets/img/slide-1.jpg'
import slide2 from '/public/assets/img/slide-2.jpg'
import slide3 from '/public/assets/img/slide-3.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '@/public/styles/style.scss';

import Image from "next/image";
import TextCarousel from "@/app/components/TextCarousel";
import React from "react";
import {SlSpeech} from "react-icons/sl";
import ScrollAnimation from "@/app/components/ScrollAnimation";

const Testimonial = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return `
        <Image src='/assets/img/slide-${index + 1}.jpg' alt='slide-${index + 1}' class='${className}' fill/>

    `;
        },
    };
    return (
        <>
            <div className="mt-16"></div>
            <ScrollAnimation>
                <div className="text-center mx-auto mb-5"  style={{maxWidth: '700px'}}>
                    <h4 className="text-sky-500 font-bold text-xl mb-3">TESTIMONIAL</h4>
                    <h1 className="font-extrabold text-5xl mb-5 mb-0">Trusted by a Diverse Community:</h1>
                    <h1 className="font-extrabold text-5xl mb-5 mt-0">Our Services Speak for Themselves</h1>
                </div>
                <div className="swiperText">
                    <Swiper
                        pagination={pagination}
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
                        modules={[Autoplay, Pagination]}
                        className="mySwiperText"
                    >
                        <SwiperSlide className={'h-full relative'}>
                            <div className="text-center p-4  pt-24 w-1/2 mx-auto">
                                <p className='me-3  text-warm-gray my-6'>1Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                <h3 className="my-1 font-bold text-2xl">Architect Name 1</h3>
                                <span className="text-sky-500">Designation</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="text-center p-4 pt-24 w-1/2 mx-auto">
                                <p className='me-3  text-warm-gray my-6'>1Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                <h3 className="my-1 font-bold text-2xl">Architect Name 2</h3>
                                <span className="text-sky-500">Designation</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="text-center p-4 pt-24 w-1/2 mx-auto">
                                <p className='me-3  text-warm-gray my-6'>1Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                <h3 className="my-1 font-bold text-2xl">Architect Name 3</h3>
                                <span className="text-sky-500">Designation</span>
                            </div>
                        </SwiperSlide>


                    </Swiper>
                </div>
            </ScrollAnimation>
            <div className="mb-16"></div>


        </>
    );
}

export default Testimonial;