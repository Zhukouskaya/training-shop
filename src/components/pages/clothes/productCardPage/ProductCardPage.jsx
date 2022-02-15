import React from 'react';
import CardPageHeader from './cardPageHeader/CardPageHeader';
import FotoBlock from './reviews/fotoBlock/FotoBlock';
import ReviewsBlock from './reviews/ReviewsBlock';

import './productCardPage.css'

const ProductCardPage = (p) => {
  return (
    <section className='product__card_page'>
      <CardPageHeader MenDataProducts= { p.MenDataProducts } />
      <div className='product__card_content'>
      <div className='product__card_page_left'>
        <FotoBlock />
      </div>
      <div className='product__card_page_right'>
      <ReviewsBlock />
      </div>
      </div>
    
    </section>
  );
};

export default ProductCardPage;