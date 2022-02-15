import React from 'react';

import star from './../../productCard/img/star-gold.svg'
import Reviews from './Reviews';

import './reviews.css'

const ReviewsBlock = (p) => {
  return (
    <div className='reviews__block'>
      <div className='reviews__title_block'>
        <p className='reviews__title'>REVIEWS</p>
        <button className='reviews__btn'>Write a review</button>
      </div>
    <div className='info_star'>
      <img src= { star } alt='star'/>
      <img src= { star } alt='star'/>
      <img src= { star } alt='star'/>
      <img src= { star } alt='star'/>
      <img src= { star } alt='star'/>
      <p className='info_star_text'>2 Reviews</p>
    </div>
    <Reviews name='Oleh Chabanov' text='On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment'/>
    <Reviews name='ShAmAn design' text='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti'/>
    </div>


  );
};

export default ReviewsBlock;