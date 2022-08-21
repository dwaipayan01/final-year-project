import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Country.css";
import { EffectCoverflow, Pagination } from "swiper";
import picture1 from "../../images/dj2.webp";
import picture2 from "../../images/dj3.webp";
import picture3 from "../../images/2.jpg";
import picture4 from "../../images/dj5.webp";


const Country = () => {
    return (
        <>
            <h1 className='mt-[80px] text-3xl text-center font-bold'>Explore Bangladesh</h1>
            <p className="text-gray-400 text-center text-2xl">These popular destinations have a lot to offer</p>
            <Swiper
                className="px-12"
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={picture1} />
                    <h1 className='font-bold text-2xl'>Sylhet</h1>
                    <p>50 properties</p>

                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt=" " />
                    <h1 className='font-bold text-2xl'>Kuakata</h1>
                    <p>10 properties</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="" />
                    <h1 className='font-bold text-2xl'>Bandarban</h1>
                    <p>10 properties</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={picture2} alt="" />
                    <h1 className='font-bold text-2xl'>Cox's bazar</h1>
                    <p>10 properties</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="" />
                    <h1 className='font-bold text-2xl'>Rajshahi</h1>
                    <p>6 properties</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={picture3} alt="" />
                    <h1 className='font-bold text-2xl'>Sreemangal</h1>
                    <p>10 properties</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={picture4} alt="" />
                    <h1 className='font-bold text-2xl'>Hobigonj</h1>
                    <p>10 properties</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="" />
                    <h1 className='font-bold text-2xl'>Gaziput</h1>
                    <p>10 properties</p>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Country;