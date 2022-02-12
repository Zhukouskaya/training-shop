import React from 'react';
import ProductMen from './clothes/productPage/ProductMen'
import ProductTitlePage from './clothes/productPage/productTitle/ProductTitlePage';
import ProductFilterPanel from './clothes/productPage/productFilterPanel/ProductFilterPanel';

const MenPage = () => {
  return (
    <section className='men__product_page'>
      <ProductTitlePage title='Men'/>
      <ProductFilterPanel />
      <ProductMen />
    </section>
  );
};

export default MenPage;