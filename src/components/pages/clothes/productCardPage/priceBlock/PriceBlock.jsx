import React from 'react';

import favorites from './img/favorites.svg'
import compare from './img/compare.svg'

import './priceBlock.css'

const PriceBlock = (p) => {
  return (
    <div className='price__block'>
      <p className='price'>{ `$ ${ p.price }` }</p>
      <button className='price__btn_black'>Add to card</button>
      <button className='price__btn'>
        <img src= { favorites } alt='price' />
      </button>
      <button className='price__btn'>
        <img src= { compare } alt='price' />
      </button>
    </div>
  );
};

export default PriceBlock;