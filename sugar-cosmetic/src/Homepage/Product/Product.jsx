import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import style from './Product.module.css'
import { Pagination, Navigation } from "swiper";

export const Product = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={style.mySwiper}
      >
        <SwiperSlide>
           <img src="https://cdn.shopify.com/s/files/1/0906/2558/products/1_51afaa84-af89-42b5-bdb8-a51b01257bc0.jpg?v=1639582607" alt="" />  
        </SwiperSlide>
      </Swiper>
    </>
  );
}
