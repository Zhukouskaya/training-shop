import React, { useState }from 'react';
import { Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import cn from 'classnames'

import './../fotoBlock.css'

const FotosSwaiper = (p) => {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  const [activeSlide, setActiveSlide] =useState(0)
  return (
    <div className='fotos'>
    
      <Swiper 
        className={ cn('mySwiper', 'fotos__swiper') }
        modules={[Controller]} 
        onSwiper={setFirstSwiper} 
        controller={{ control: secondSwiper }} 
        slidesPerView={ '4' } 
        direction={ 'vertical' }
        navigation={{ nextEl:'.swiper-button-next', prevEl:'.swiper-button-prev' }}
        spaceBetween='16'
        speed={ 800 }
        >
        <div className={ cn('swiper-button-next', 'swiper-btn') }/><div className={ cn('swiper-button-prev', 'swiper-btn') }/>
        <SwiperSlide>
          <img className={ cn('fotos__img') } src= { `https://training.cleverland.by/shop${ p.images[0].url }` } alt='foto_product' />
        </SwiperSlide>
        <SwiperSlide>
          <img className={ cn('fotos__img') } src= { `https://training.cleverland.by/shop${ p.images[0].url }` } alt='foto_product' />
        </SwiperSlide>
        <SwiperSlide>
          <img className={ cn('fotos__img') } src= { `https://training.cleverland.by/shop${ p.images[0].url }` } alt='foto_product' />
        </SwiperSlide>
    



      </Swiper>
      <Swiper modules={[Controller]} onSwiper={setSecondSwiper} controller={{ control: firstSwiper }}> 

      </Swiper>
      
  </div>
  );
};

export default FotosSwaiper;