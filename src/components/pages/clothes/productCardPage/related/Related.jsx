import React from 'react';
import ProductCard from '../../productCard/ProductCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import cn from 'classnames'

import 'swiper/css'
import 'swiper/css/navigation';

import './related.css'

const Related = (p) => {
  return (
    <div className='related'>
      <div className='related__title'>
        <p className='related__title_text'>RELATED PRODUCTS</p>
        <div className='related_navigate'>
          <button><div className={ cn('swiper-button-prev', 'swiper-btn', 'btn-related-prev') } /> </button>
          <button> <div className={ cn('swiper-button-next', 'swiper-btn', 'btn-related-next') } /></button>
          
        </div> 
      </div>
      <div className='related__product' data-test-id='related-slider'>
        <Swiper
        spaceBetween={30}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={ [Navigation] }
        navigation={{ nextEl:'.swiper-button-next.swiper-btn.btn-related-next', prevEl:'.swiper-button-prev.swiper-btn.btn-related-prev' }}
        breakpoints={{320: {slidesPerView: 1}, 670: {slidesPerView: 2}, 950: {slidesPerView: 3}, 1220: {slidesPerView: 4}}}
        >
          { p.DataRelated.map (Card => <SwiperSlide><ProductCard id={ Card.id } name={ Card.name } price={ Card.price } star={ Card.star } images= {Card.images[0].url } category={ Card.category } rating={ Card.rating } /></SwiperSlide>)}
        </Swiper>
      </div>
    </div>
  );
};

export default Related;