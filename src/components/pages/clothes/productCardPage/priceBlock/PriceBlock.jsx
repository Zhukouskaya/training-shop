import React from 'react';

import cn from 'classnames'

import favorites from './img/favorites.svg'
import compare from './img/compare.svg'

import './priceBlock.css'

const PriceBlock = (p) => {
  return (
    <div className='price__block'>
      <div className='product__price_block'>
        { p.discount !== null ? <span className='price'> {`$ ${((p.price * (100 - +p.discount.replace(/[\D]+/g, '')))/100).toFixed(2) }`} </span> : null }
        <p className={cn('product__price', { active: p.discount !== null }) }>{ `$ ${ p.price }` }</p>
      </div>
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