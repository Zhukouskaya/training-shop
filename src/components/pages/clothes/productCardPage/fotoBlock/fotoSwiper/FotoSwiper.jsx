import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import cn from 'classnames'

import './../fotoBlock.css'

import 'swiper/css'
import 'swiper/css/navigation';


const FotoSwiper = (p) => {
  return (
    <Swiper navigation={ true } modules={ [Navigation] } className={ cn('mySwiper', 'foto__swiper') } navigation={{ nextEl:'.swiper-button-next', prevEl:'.swiper-button-prev' }}>
      <div className={ cn('swiper-button-next', 'swiper-btn') }/>
      <SwiperSlide>
      <div className='front__block'>
        <img className='front' src= { `https://training.cleverland.by/shop${ p.images[0].url }` } alt='foto_product' /> 
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='front__block'>
        <img className='front' src= { `https://training.cleverland.by/shop${ p.images[0].url }` } alt='foto_product' /> 
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='front__block'>
        <img className='front' src= { `https://training.cleverland.by/shop${ p.images[0].url }` } alt='foto_product' /> 
      </div>
      </SwiperSlide>
      <div className={ cn('swiper-button-prev', 'swiper-btn') } /> 
    </Swiper>
  );
};

export default FotoSwiper;