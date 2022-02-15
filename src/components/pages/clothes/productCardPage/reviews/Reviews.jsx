import React from 'react';

import star from './../../productCard/img/star-gold.svg'

import './reviews.css'
const Reviews = (p) => {
  return (
    <div className='reviews'>
      <div className='reviews__'>
        <div className='reviews__name'>{ p.name }</div>
        <div className='info_star'>
          <img src= { star } alt='star'/>
          <img src= { star } alt='star'/>
          <img src= { star } alt='star'/>
          <img src= { star } alt='star'/>
          <img src= { star } alt='star'/>
      </div>
      </div>
      
      <div className='reviews__text'>{ p.text }</div>
    </div>
  );
};

export default Reviews;