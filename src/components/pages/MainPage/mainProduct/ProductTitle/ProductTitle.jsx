import React from 'react';

import ProductBtn from '../ProductBtn/ProductBtn';

import './productTitle.css'

const ProductTitle = (p) => {
  return (
    <div className='productTitle'>
      <div className='product__title'>{p.title}</div>
      <div className='product_sort'>
        <ProductBtn text = 'NEW ARRIVALS'/>
        <ProductBtn text = 'SPECIALS'/>
        <ProductBtn text = 'BESTSELLERS'/>
        <ProductBtn text = 'MOST VIEWED'/>
        <ProductBtn text = 'FEATURED PRODUCTS'/>
      </div>
      
    </div>
  );
};

export default ProductTitle;