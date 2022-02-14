import React from 'react';

import './productTitlePage.css'
import ProducttitleTop from './productTitleTop/ProducttitleTop';

const ProductTitlePage = (p) => {
  return (
    <section className='product__title_pages'>
      <ProducttitleTop title={ p.title }/>
      <div className='product__title_name'> { p.title }</div>
    </section>
  );
};

export default ProductTitlePage;