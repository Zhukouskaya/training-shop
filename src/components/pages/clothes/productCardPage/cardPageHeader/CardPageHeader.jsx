import React from 'react';
import ProductTitlePage from '../../productPage/productTitle/ProductTitlePage';

import starGold from './../../productCard/img/star-gold.svg'
import starGrey from './../../productCard/img/star-grey.svg'

import './cardPageHeader.css'

const CardPageHeader = (p) => {
  const starGoldArr = [ starGold, starGold, starGold, starGold, starGold, ];
  const starGreyArr = [ starGrey, starGrey, starGrey, starGrey, starGrey,];
  let rating = p.rating;
  const ratingArr = starGoldArr.slice(0, rating).concat(starGreyArr).slice(0, 5);

  return (
    <div className='card_page_header'>
      <ProductTitlePage title= { p.name } /> 
      <div className='title__info'>
        <div className='info_star'>
        { ratingArr.map (el => <img src= { el } alt= 'rating' />) }
          <p className='info_star_text'>{`${ p.reviews.length } Reviews`}</p>
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