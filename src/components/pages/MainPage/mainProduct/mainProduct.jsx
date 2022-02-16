import React from 'react';

import ProductMen from './../../clothes/productPage/ProductMen'
import ProductWomen from './../../clothes/productPage/ProductWomen';
import ProductSeeAll from './ProductSeeAll/ProductSeeAll';

import ProductTitle from './ProductTitle/ProductTitle'

const MainProduct = (p) => {
  return (
    <section className='mainProduct'>
      <section className='women' data-test-id='clothes-women'>
        <ProductTitle link='women' title ='Women’s'/>
        <ProductWomen WomenDataProducts= { p.WomenDataProducts }/>
        <ProductSeeAll link='women'/>
      </section>
      <section className='men' data-test-id='clothes-men'>
        <ProductTitle link='men' title ='Men’s'/>
        <ProductMen MenDataProducts= { p.MenDataProducts }/>
        <ProductSeeAll link='men'/>
      </section>
    </section>
  );
};

export default MainProduct;