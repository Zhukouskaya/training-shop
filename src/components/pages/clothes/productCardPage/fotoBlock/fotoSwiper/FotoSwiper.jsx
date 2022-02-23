import React, { useState } from 'react';

import { FreeMode, Navigation, Thumbs, Controller} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/thumbs'
import cn from 'classnames'

import './fotoSwiper.css'

const FotoSwiper = (p) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

    return (
  <div className='foto__block' data-test-id='product-slider'>
    <div className="image__slider">
      <div className="navigate">
        <button><div className={ cn('swiper-button-next', 'swiper-btn', 'swiper-btn-down') }/></button>
        <button><div className={ cn('swiper-button-prev', 'swiper-btn', 'swiper-btn-up') } /> </button>
      </div>
      <div className="image__img-list">
        <Swiper
          modules={ [FreeMode, Navigation, Thumbs, Controller] }
          navigation={true}
          onSwiper={ setFirstSwiper }
          controller={{control: secondSwiper }}
          spaceBetween={ 16 }
          slidesPerView={ 3 }
          watchSlidesProgress={true}
          freeMode={ false}
          navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
          className={ cn('mySwiper', 'fotos__swiper') }
          direction={ 'vertical' }
          speed={ 800 }
        >
          <SwiperSlide>
            <img className='fotos_img' src= { `https://training.cleverland.by/shop${ p.images[0].url }` } alt='foto_product' /> 
          </SwiperSlide>  
          <SwiperSlide>
            <img className='fotos_img' src= { `https://training.cleverland.by/shop${ p.images[0].url }` } alt='foto_product' /> 
          </SwiperSlide>  
          <SwiperSlide>
            <img className='fotos_img' src= { `https://training.cleverland.by/shop${ p.images[0].url }` } alt='foto_product' /> 
          </SwiperSlide>  
          <SwiperSlide>
            <img className='fotos_img' src= { `https://training.cleverland.by/shop${ p.images[0].url }` } alt='foto_product' /> 
          </SwiperSlide>
          <SwiperSlide>
            <img className='fotos_img' src= { `https://training.cleverland.by/shop${ p.images[0].url }` } alt='foto_product' /> 
          </SwiperSlide>  
          <SwiperSlide>
            <img className='fotos_img' src= { `https://training.cleverland.by/shop${ p.images[0].url }` } alt='foto_product' /> 
          </SwiperSlide>  
        </Swiper>
      </div>
    </div>

      <Swiper 
        modules={[FreeMode, Navigation, Thumbs, Controller]}
        navigation={true}
        // thumbs={{ swiper: thumbsSwiper }}
        onSwiper={ setSecondSwiper }
        controller={{control: firstSwiper}}
        className={ cn('mySwiper', 'foto__swiper') }
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        freeMode={ false}
        speed={ 800 }
      >
        <button><div className={ cn('swiper-button-next', 'swiper-btn') }/></button>
        <button><div className={ cn('swiper-button-prev', 'swiper-btn') } /> </button>
        
        <SwiperSlide>
          <img className='front' src= { `https://training.cleverland.by/shop${ p.images[0].url }` } alt='foto_product' /> 
        </SwiperSlide>
        <SwiperSlide>
          <img className='front' src= { `https://training.cleverland.by/shop${ p.images[0].url }` } alt='foto_product' /> 
        </SwiperSlide>
        <SwiperSlide>
          <img className='front' src= { `https://training.cleverland.by/shop${ p.images[0].url }` } alt='foto_product' /> 
        </SwiperSlide>
        <SwiperSlide>
          <img className='front' src= { `https://training.cleverland.by/shop${ p.images[0].url }` } alt='foto_product' /> 
        </SwiperSlide>
        <SwiperSlide>
          <img className='front' src= { `https://training.cleverland.by/shop${ p.images[0].url }` } alt='foto_product' /> 
        </SwiperSlide>
        <SwiperSlide>
          <img className='front' src= { `https://training.cleverland.by/shop${ p.images[0].url }` } alt='foto_product' /> 
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FotoSwiper;











