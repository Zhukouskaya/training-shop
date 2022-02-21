import React from 'react';

import ProductCard from './../productCard/ProductCard';

import '../product.css'


const ProductMen = (p) => {
  return (
    <section className='product'>
      { p.MenDataProducts.map (Card => <ProductCard id={ Card.id } name={ Card.name } price={ Card.price } star={Card.star } images={ Card.images[0].url } category= { Card.category } rating={ p.rating }/>).slice(0,8) }
    </section>
  );
};

export default ProductMen;