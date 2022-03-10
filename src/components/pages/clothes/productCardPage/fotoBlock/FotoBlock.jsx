import React, { useState } from 'react';
import { FreeMode, Navigation, Controller} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import cn from 'classnames'

import './../fotoBlock/fotoSwiper/fotoSwiper.css'
import './fotoBlock.css'

const FotoBlock = (p) => {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

    return (
  <div className='foto__block' data-test-id='product-slider'>
    <div className="image__slider">
      <div className="navigate">
        <button><div className={ cn('swiper-button-next', 'swiper-btn', 'swiper-btn-down') }/></button>
        <button><div className={ cn('swiper-button-prev', 'swiper-btn', 'swiper-btn-up') } /> </button>
      </div>
      <div className="image__img-list">
        {/* Маленький слайдер */}
        <Swiper
          modules={ [FreeMode, Navigation, Controller] }
          onSwiper={ setFirstSwiper }
          controller={{control: secondSwiper }}
          spaceBetween={ 16 }
          slidesPerView={ 4 }
          watchSlidesProgress={true}
          navigation={{ nextEl: '.swiper-button-next.swiper-btn.swiper-btn-down', prevEl: '.swiper-button-prev.swiper-btn.swiper-btn-up' }}
          className={ cn('mySwiper', 'fotos__swiper') }
          direction={ 'vertical' }
          speed={ 800 }
          freeMode={true}
          slideToClickedSlide={true}
        >
          { p.images.map ((img, index) =>
          <SwiperSlide>
            <img className={cn('fotos_img', { active: activeSlide !== index })} src= { `https://training.cleverland.by/shop${ p.images[index].url }` } alt='foto_product' /> 
          </SwiperSlide> )}
        </Swiper>
      </div>
    </div>

      {/* Большой слайдер */}
      <Swiper 
        modules={[FreeMode, Navigation, Controller]}
        onSwiper={ setSecondSwiper }
        controller={{control: firstSwiper}}
        className={ cn('mySwiper', 'foto__swiper') }
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        freeMode={true}
        slidesPerGroup={ 1 }
        watchSlidesProgress={true}
        speed={ 800 }
      >
        <button><div className={ cn('swiper-button-next', 'swiper-btn') }/></button>
        <button><div className={ cn('swiper-button-prev', 'swiper-btn') } /> </button>

        { p.images.map ((img, index) =>
          <SwiperSlide>
            <img className='front' src= { `https://training.cleverland.by/shop${ p.images[index].url }` } alt='foto_product' /> 
          </SwiperSlide> )}
      </Swiper>
    </div>
  );
};


export default FotoBlock;

