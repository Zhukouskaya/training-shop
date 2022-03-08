import React from 'react';

import Reviews from './Reviews';
import starGold from './../../productCard/img/star-gold.svg'
import starGrey from './../../productCard/img/star-grey.svg'

import './reviews.css'

const ReviewsBlock = (p) => {
  const starGoldArr = [ starGold, starGold, starGold, starGold, starGold, ];
  const starGreyArr = [ starGrey, starGrey, starGrey, starGrey, starGrey,];
  let rating = p.rating;
  const ratingArr = starGoldArr.slice(0, rating).concat(starGreyArr).slice(0, 5);

  return (
    <div className='reviews__block'>
      <div className='reviews__title_block'>
        <p className='reviews__title'>REVIEWS</p>
        <button className='reviews__btn'>Write a review</button>
      </div>
    <div className='info_star'>
    { ratingArr.map (el => <img src= { el } alt= 'rating' />) }
      <p className='info_star_text'>{`${ p.reviews.length } Reviews`}</p>
    </div>
      { p.reviews.map(rev =>  <Reviews id= {rev.id } name= { rev.name } text= { rev.text } rating= { rev.rating } />)}
    </div>


  );
};

export default ReviewsBlock;