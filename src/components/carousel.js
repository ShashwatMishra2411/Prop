import React from 'react'
import '../App.css'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';





const swipe = ({product}) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><div className='s1' ><img src={product.images[0]} alt="" className="p1" /></div></SwiperSlide>
      <SwiperSlide><div className='s2' ><img src={product.images[1]} alt="" className="p2" /></div></SwiperSlide>
      <SwiperSlide><div className='s3' ><img src={product.images[2]} alt="" className="p3" /></div></SwiperSlide>
      <SwiperSlide><div className='s4' ><img src={product.images[3]} alt="" className="p4" /></div></SwiperSlide>
      ...
    </Swiper>
  );
};

export default swipe