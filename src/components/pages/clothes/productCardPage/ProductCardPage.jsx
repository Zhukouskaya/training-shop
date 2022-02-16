import React from 'react';

import './productCardPage.css'

import CardPageHeader from './cardPageHeader/CardPageHeader';
import FotoBlock from './fotoBlock/FotoBlock';
import ReviewsBlock from './reviews/ReviewsBlock';
import PayBlock from './payBlock/PayBlock';
import Info from './info/Info';
import AddInfo from './addInfo/AddInfo';
import PriceBlock from './priceBlock/PriceBlock';
import Assortment from './assortment/Assortment';
import Related from './related/Related';


const ProductCardPage = (p) => {
  return (
    <section className='product__card_page' data-test-id= { `product-page-${ p.sex }` }>
      <CardPageHeader />
      <div className='product__card_content'>
        <div className='product__card_page_left'>
          <FotoBlock />
        </div>
        <div className='product__card_page_right'>
          <Assortment />
          <PriceBlock price='$ 30.00'/>
          <Info />
          <PayBlock imagesPage = { p.imagesPage }/>
          <div className='description'>Description</div>
          <AddInfo />
          <ReviewsBlock  />
        </div>
      </div>
      <Related DataRelated= { p.DataRelated }/>
    </section>
  );
};

export default ProductCardPage;