import React from 'react';

import { Link } from 'react-router-dom';
import './productCard.css'
import cn from 'classnames'

import starGold from './img/star-gold.svg'
import starGrey from './img/star-grey.svg'

const ProductCard = (p) => {

  const starGoldArr = [ starGold, starGold, starGold, starGold, starGold, ];
  const starGreyArr = [ starGrey, starGrey, starGrey, starGrey, starGrey,];
  let rating = p.rating;
  const ratingArr = starGoldArr.slice(0, rating).concat(starGreyArr).slice(0, 5);

  return (
    <Link className='product__link' to={`/${ p.category }/${ p.id }`} data-test-id= { `clothes-card-${ p.category }` }> 
      <div className='product__card' id= { p.id }>
        <img className='product__card_img' src={`https://training.cleverland.by/shop${ p.images }`} alt="clothes"/>
        { p.discount !== null ? <div className="product__discount">{ p.discount }</div> : null }
        <p className='product__name'> { p.name }</p>
        <div className='product__info'> 
        <div className='product__price_block'>
          {/* {p.discount !== null ? <span className='product__price'> {`$ ${((p.price * (100 - +p.discount.replace(/[\D]+/g, '')))/100).toFixed(2) }`} </span> : null } */}
          {/* <p className={cn('product__price', {active: p.discount !== null}) }>{ `$ ${ p.price }` }</p> */}
        <p className='product__price'>{ `$ ${ p.price }` }</p> 
        </div>
          <div className='product__star'>
            { ratingArr.map (star => <img src= { star } alt= 'rating' />) }
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;