import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./PackagePicture.css";
import { EffectFade, Navigation, Pagination } from "swiper";
import useData from '../../hooks/useData';
import { useParams } from 'react-router-dom';

const PackagePicture = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const { id } = useParams();
    const [packages, setPackages] = useData(id);
    return (
        <div className="w-8/12 lg:ml-[100px] ml-[50px]">
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={packages.picture} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={packages.picture1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={packages.picture2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={packages.picture3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={packages.picture4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={packages.picture5} alt="" />
                </SwiperSlide>

            </Swiper>
            <button>see details</button>
        </div>
    );
};

export default PackagePicture;