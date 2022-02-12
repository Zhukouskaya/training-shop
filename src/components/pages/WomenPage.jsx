import React from 'react';
import ProductWomen from './clothes/productPage/ProductWomen';
import ProductTitle from './clothes/productPage/productTitle/ProductTitlePage';
import ProductFilterPanel from './clothes/productPage/productFilterPanel/ProductFilterPanel';

const WomenPage = () => {
  return (
    <section className='women__product_page'>
    <ProductTitle title='Women'/>
    <ProductFilterPanel />
    <ProductWomen />
  </section>
  );
};

export default WomenPage;