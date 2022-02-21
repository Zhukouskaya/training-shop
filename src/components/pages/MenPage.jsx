import React from 'react';
import ProductTitlePage from './clothes/productPage/productTitle/ProductTitlePage';
import ProductFilterPanel from './clothes/productPage/productFilterPanel/ProductFilterPanel';

import './womenPage.css'
import ProductCard from './clothes/productCard/ProductCard';

const MenPage = (p) => {
  return (
    <section className='men__product_page' data-test-id='products-page-men'>
      <ProductTitlePage title='Men'/>
      <ProductFilterPanel />
      <section className='product'>
      { p.MenDataProducts.map(Card => <ProductCard id={ Card.id } name={ Card.name } price={ Card.price } star={ Card.star } images={ Card.images[0].url } category= { Card.category } rating= { Number(p.rating) }/>) }
    </section>
    </section>
  );
};

export default MenPage;