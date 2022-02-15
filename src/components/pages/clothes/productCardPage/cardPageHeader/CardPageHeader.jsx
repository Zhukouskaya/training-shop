import React from 'react';
import ProductTitlePage from '../../productPage/productTitle/ProductTitlePage';

import star from './../../productCard/img/star-gold.svg'

import './cardPageHeader.css'

const CardPageHeader = (p) => {
  return (
    <div className='card_page_header'>
      <ProductTitlePage title= 'Women’s tracksuit Q109' /> 
      <div className='title__info'>
        <div className='info_star'>
          <img src= { star } alt='star'/>
          <img src= { star } alt='star'/>
          <img src= { star } alt='star'/>
          <img src= { star } alt='star'/>
          <img src= { star } alt='star'/>
          <p className='info_star_text'>2 Reviews</p>
        </div>

        <div className='info__availability'>
          <div className='info__'>
            <p className='info_star_text'>SKU:</p>
            <p className='info_star_subtitle'>777</p>
          </div>
          <div className='info__'>
          <p className='info_star_text'>Availability:</p>
          <p className='info_star_subtitle'>In Stock</p>
          </div>
        </div>

      </div>

      
    </div>
  );
};

export default CardPageHeader;