import React from 'react';

import ProductBtn from '../ProductBtn/ProductBtn';

import { Link } from 'react-router-dom';

import './productTitle.css'

const ProductTitle = (p) => {
  return (
    <div className='product__title'>
      <div className='product__title_text'>
        <Link to={ `/${ p.link }` } className='product__title_text' data-test-id='menu-link-women'>{ p.title }</Link>
      </div>
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