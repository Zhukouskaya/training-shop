import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import cn from 'classnames'

import './../banner.css'
import 'swiper/css'
import 'swiper/css/navigation';


const BannerSwiper = () => {
  return (
    <Swiper navigation={ true } modules={ [Navigation] } className={ cn('mySwiper', 'banner__swiper') } navigation={{ nextEl:'.swiper-button-next', prevEl:'.swiper-button-prev' }}>
      <div className={ cn('swiper-button-next', 'swiper-btn') }/>
      <SwiperSlide>
        <div className="banner__bloсk"> 
          <div className='banner__title_container'>
            <div className='banner__subtitle'>Banner</div>
            <div className='banner__title'>Your Title text</div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>    
        <div className="banner__bloсk">   
          <div className='banner__title_container'>
            <div className='banner__subtitle'>Banner</div>
            <div className='banner__title'>Your Title text</div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>    
        <div className="banner__bloсk">   
          <div className='banner__title_container'>
            <div className='banner__subtitle'>Banner</div>
            <div className='banner__title'>Your Title text</div>
          </div>
        </div>
      </SwiperSlide>
      <div className={ cn('swiper-button-prev', 'swiper-btn') } /> 
    </Swiper>
  );
};

export default BannerSwiper;

