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
      </div>
      <div className='related__product'>
        <Swiper
        spaceBetween={30}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={ [Navigation] }
        navigation={{ nextEl:'.swiper-button-next', prevEl:'.swiper-button-prev' }}
        >
        <div className='related_arrow'>
          <div className={ cn('swiper-button-next', 'swiper-btn') } /><div className={ cn('swiper-button-prev', 'swiper-btn') } /> 
        </div> 
          
          { p.DataRelated.map (Card => <SwiperSlide><ProductCard id={ Card.id } name={ Card.name } price={ Card.price } star={ Card.star } images= {Card.images[0].url } category={ Card.category } rating={ p.rating } /></SwiperSlide>)}
        </Swiper>
      
      </div>
    </div>
  );
};

export default Related;