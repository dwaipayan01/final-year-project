import React from 'react';
import { useParams } from 'react-router-dom';
import useData from '../../hooks/useData';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./hotel.css";
import { EffectFlip, Pagination, Navigation } from "swiper";
import HotelModal from './HotelModal';

const HotelImage = () => {

    const { id } = useParams();
    const [packages, setPackages] = useData(id);
    return (
        <div>
            <h1 className='text-2xl font-bold ml-[100px] mt-[50px]'>All hotel for this package.You can choose one</h1>
            <div className='flex mr-[100px] mb-[50px]'>
           <div className="card w-96 h-4/5 bg-base-100 shadow-xl ml-[100px] ">
  <figure className='w-96'><Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={packages?.hotelPicture1} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={packages?.hotelPicture2} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={packages?.hotelPicture3} alt="" />
        </SwiperSlide>
      </Swiper></figure>
  <div className="card-body">
    <h2 className="card-title font-bold">{packages?.hotelName1}</h2>
    <label htmlFor="hotel-modal"
                        // onClick={()=>setPackages(packages)} 
                         class="btn btn-green" 
                         className="btn modal-button">Book now</label>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl ml-[100px]">
  <figure className='w-96'><Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={packages?.hotelPicture4} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={packages?.hotelPicture5} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={packages?.hotelPicture6} alt="" />
        </SwiperSlide>
      </Swiper></figure>
  <div className="card-body">
    <h2 className="card-title font-bold">{packages?.hotelName2}</h2>
    <label htmlFor="hotel-modal"
                        // onClick={()=>setPackages(packages)} 
                         class="btn btn-green" 
                         className="btn modal-button">Book now</label>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl ml-[100px]">
  <figure className='w-96'><Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={packages?.hotelPicture7} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={packages?.hotelPicture8} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={packages?.hotelPicture9} alt="" />
        </SwiperSlide>
      </Swiper></figure>
  <div className="card-body">
    <h2 className="card-title font-bold">{packages?.hotelName3}</h2>
    <label htmlFor="hotel-modal"
                        // onClick={()=>setPackages(packages)} 
                         class="btn btn-green" 
                         className="btn modal-button">Book now</label>
  </div>
</div>
        </div>
        {packages && <HotelModal setPackages={setPackages}  packages={packages}></HotelModal>}
        </div>
    );
};

export default HotelImage;