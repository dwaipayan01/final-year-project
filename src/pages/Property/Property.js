import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import image from "../../images/d1.webp"
import image1 from "../../images/d2.webp"
import image2 from "../../images/d3.webp"
import image3 from "../../images/d4.webp"
import image4 from "../../images/d5.webp"
import image5 from "../../images/3.jpg"
import image6 from "../../images/d6.webp"
import image7 from "../../images/4.jpg";
import "./Property.module.css";


const Property = () => {
    return (
        <div>
            <h1 className='text-2xl font-bold mt-[80px] lg:ml-[90px] ml-[20px]'>Browse by property type</h1>
            <div className='lg:ml-[90px] ml-[20px] mr-5 '>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={image} alt="" />
                        <h1 className='text-2xl font-bold'>Hotels</h1>
                        <p className='text-gray-400'>1000 hotels</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image1} alt="" />
                        <h1 className='text-2xl font-bold'>Apartments</h1>
                        <p className='text-gray-400'>1000 Apartments</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image2} alt="" />
                        <h1 className='text-2xl font-bold'>Resorts</h1>
                        <p className='text-gray-400'>1000 Resorts</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image3} alt="" />
                        <h1 className='text-2xl font-bold'>Villas</h1>
                        <p className='text-gray-400'>1000 Villas</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image4} alt="" />
                        <h1 className='text-2xl font-bold'>Cabins</h1>
                        <p className='text-gray-400'>1000 Cabins</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image5} alt="" />
                        <h1 className='text-2xl font-bold'>Cottages</h1>
                        <p className='text-gray-400'>1000 Cottages</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image6} alt="" />
                        <h1 className='text-2xl font-bold'>Motels</h1>
                        <p className='text-gray-400'>1000 Motels</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image7} alt="" />
                        <h1 className='text-2xl font-bold'>Farm stays</h1>
                        <p className='text-gray-400'>1000 Farm stays</p>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Property;