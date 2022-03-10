import React from 'react';
import ProductTitlePage from './clothes/productPage/productTitle/ProductTitlePage';
import ProductFilterPanel from './clothes/productPage/productFilterPanel/ProductFilterPanel';

import './womenPage.css'

const MenPage = (p) => {
  return (
    <section className='men__product_page' data-test-id='products-page-men'>
      <ProductTitlePage title='Men'/>
      <ProductFilterPanel DataProducts= { p.MenDataProducts }/>
    </section>
  );
};

export default MenPage;