import React  from 'react';
import ProductTitle from './clothes/productPage/productTitle/ProductTitlePage';
import ProductFilterPanel from './clothes/productPage/productFilterPanel/ProductFilterPanel';

import './womenPage.css'
import ProductCard from './clothes/productCard/ProductCard';

const WomenPage = (p) => {
  return (
    <section className='women__product_page' data-test-id='products-page-women'>
      <ProductTitle title='Women'/>
      <ProductFilterPanel DataProducts= { p.WomenDataProducts }/>
      <section className='product'>
      { p.WomenDataProducts.map (Card => <ProductCard id={ Card.id } name={ Card.name } price={ Card.price } star={ Card.star } images={ Card.images[0].url } category={ Card.category } rating={ Card.rating } discount= { Card.discount}/>) }
      </section>
  </section>
  );
};

export default WomenPage;