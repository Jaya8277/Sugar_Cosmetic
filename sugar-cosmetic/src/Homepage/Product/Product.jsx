import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

export const Product = ({dummyProduct,count}) => {
  return (
    <>
      <Swiper
        slidesPerView={count?count:3}
        spaceBetween={30}
        slidesPerGroup={count?count:3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {dummyProduct.map(elem=>(
        <SwiperSlide>
           <img style={{width:"100%",cursor:"pointer"}} src={elem} alt="" />  
        </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
