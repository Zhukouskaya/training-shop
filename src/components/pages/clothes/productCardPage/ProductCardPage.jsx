import React from 'react';
import CardPageHeader from './cardPageHeader/CardPageHeader';
import FotoBlock from './reviews/fotoBlock/FotoBlock';
import ReviewsBlock from './reviews/ReviewsBlock';
import PayBlock from './cardPageHeader/payBlock/PayBlock';

import './productCardPage.css'
import Info from './info/Info';

const ProductCardPage = (p) => {
  return (
    <section className='product__card_page'>
      <CardPageHeader />
      <div className='product__card_content'>
        <div className='product__card_page_left'>
          <FotoBlock />
        </div>
        <div className='product__card_page_right'>
          <Info />
          <PayBlock imagesPage = { p.imagesPage }/>
          <div className='description'>Description</div>
          <ReviewsBlock  />
        </div>
      </div>
    </section>
  );
};

export default ProductCardPage;