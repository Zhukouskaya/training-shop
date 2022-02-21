import React from 'react';

import left from './../img/left.svg'
import right from './../img/right.svg'
import ProductCard from '../../productCard/ProductCard';

import './related.css'

const Related = (p) => {
  return (
    <div className='related'>
      <div className='related__title'>
        <p className='related__title_text'>RELATED PRODUCTS</p>
        <div className='related_arrow'>
          <button><img src= { left } alt='arrow' /></button>
          <button><img src= { right } alt='arrow' /></button>
        </div>
      </div>
      <div className='related__product'>
      { p.DataRelated.map (Card => <ProductCard id={ Card.id } name={ Card.name } price={ Card.price } star={ Card.star } images= {Card.images[0].url } category={ Card.category } rating={ p.rating } />).slice(0,4) }
      </div>
    </div>
  );
};

export default Related;