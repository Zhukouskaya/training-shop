import React from 'react';

import { Link } from 'react-router-dom';

import starGold from './img/star-gold.svg'
import starGrey from './img/star-grey.svg'

import './productCard.css'

const ProductCard = (p) => {
  return (
    <Link className='product__link' to={`/${ p.sex }/${ p.id }`}> 
      <div className='product__card' id= { p.id }>
        <img src= { p.image } alt='product card'/>
        <p className='product__name'> { p.name }</p>
        <div className='product__info'> 
          <p className='product__price'> { p.price }</p>
          <div className='product__star'>
          <img src= { starGold } alt='star'/>
          <img src= { starGold } alt='star'/>
          <img src= { starGold } alt='star'/>
          <img src= { starGold } alt='star'/>
          <img src= { starGrey } alt='star'/>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;