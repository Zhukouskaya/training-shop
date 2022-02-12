import React from 'react';

import ProductMen from './../../clothes/productPage/ProductMen'
import ProductWomen from './../../clothes/productPage/ProductWomen';
import ProductSeeAll from './ProductSeeAll/ProductSeeAll';

import ProductTitle from './ProductTitle/ProductTitle'

const MainProduct = () => {
  return (
    <section className='mainProduct'>
      <section className='women' data-test-id='women-clothes'>
        <ProductTitle title ='Women’s'/>
        <ProductWomen/>
        <ProductSeeAll/>
      </section>
      <section className='men' data-test-id='men-clothes'>
        <ProductTitle title ='Men’s'/>
        <ProductMen/>
        <ProductSeeAll/>
      </section>
    </section>
  );
};

export default MainProduct;