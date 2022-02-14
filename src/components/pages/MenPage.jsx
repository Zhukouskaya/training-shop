import React from 'react';
import ProductMen from './clothes/productPage/ProductMen'
import ProductTitlePage from './clothes/productPage/productTitle/ProductTitlePage';
import ProductFilterPanel from './clothes/productPage/productFilterPanel/ProductFilterPanel';

const MenPage = (p) => {
  return (
    <section className='men__product_page'>
      <ProductTitlePage title='Men'/>
      <ProductFilterPanel />
      <ProductMen MenDataProducts= { p.MenDataProducts } />
    </section>
  );
};

export default MenPage;