import React from 'react';

import starGold from './../../productCard/img/star-gold.svg'
import starGrey from './../../productCard/img/star-grey.svg'

import './reviews.css'
const Reviews = (p) => {
  const starGoldArr = [ starGold, starGold, starGold, starGold, starGold, ];
  const starGreyArr = [ starGrey, starGrey, starGrey, starGrey, starGrey,];
  let rating = p.rating;
  const ratingArr = starGoldArr.slice(0, rating).concat(starGreyArr).slice(0, 5);

  return (
    <div className='reviews'>
      <div className='reviews__'>
        <div className='reviews__name'>{ p.name }</div>
        <div className='info_star'>
        { ratingArr.map (el => <img src= { el } alt= 'rating' />) }
      </div>
      </div>
      
      <div className='reviews__text'>{ p.text }</div>
    </div>
  );
};

export default Reviews;