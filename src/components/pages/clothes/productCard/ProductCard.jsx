import React from 'react';

import { Link } from 'react-router-dom';
import './productCard.css'

import starGold from './img/star-gold.svg'
import starGrey from './img/star-grey.svg'

const ProductCard = (p) => {

  // function isStarGold (e) {
  //   const starSelection = e.document.querySelectorAll('product__star_img');
  //   starSelection.innerHTML = "src= { starGold }";
  // }

  const starGoldArr = [ starGold, starGold, starGold, starGold, starGold, ];
  const starGreydArr = [ starGrey, starGrey, starGrey, starGrey, starGrey,];

  return (
    <Link className='product__link' to={`/${ p.category }/${ p.id }`} data-test-id= { `clothes-card-${ p.category }` }> 
      <div className='product__card' id= { p.id }>
        <img className='product__card_img' src={`https://training.cleverland.by/shop${ p.images }`} alt="clothes"/>
        <p className='product__name'> { p.name }</p>
        <div className='product__info'> 
          <p className='product__price'> { `$ ${ p.price }` }</p>
          <div className='product__star'>
            {/* <img product__star_img src= { starGrey } alt='star'/>
            <img product__star_img src= { starGrey } alt='star'/>
            <img product__star_img src= { starGrey } alt='star'/>
            <img product__star_img src= { starGrey } alt='star'/>
            <img product__star_img src= { starGrey } alt='star'/> */}
            { starGoldArr.map (e => <img src= { starGold } alt= 'rating' />).slice(0,p.rating) }
            
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;