import React from 'react';

import ProductCard from './../productCard/ProductCard';

import '../product.css'


const ProductMen = (p) => {
  return (
    <section className='product'>
      { p.MenDataProducts.map (Card => <ProductCard id={ Card.id } name={ Card.name } price={ Card.price } star={Card.star } image={ Card.image } sex={ Card.sex }/>) }
    </section>
  );
};

export default ProductMen;