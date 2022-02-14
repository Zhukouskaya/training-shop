import React from 'react';

import ProductCard from './../productCard/ProductCard';

import '../product.css'

const ProductWomen = (p) => {

  return (
    <section className='product'>
      { p.WomenDataProducts.map (Card => <ProductCard id={ Card.id } name={ Card.name } price={ Card.price } star={ Card.star } image={Card.image } sex={ Card.sex }/>) }
    </section>
  )
};

export default ProductWomen;