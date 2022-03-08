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

  const colorUnique = [...new Set(p.images.map(unique => unique.color))]

  return (
    <section className='product__card_page' id= { p.id } data-test-id= { `product-page-${ p.category }` }>
      <CardPageHeader name= { p.name }  reviews= { p.reviews } rating= { p.rating }/>
      <div className='product__card_content'>
        <div className='product__card_page_left'>
          <FotoBlock images= { p.images } />
        </div>
        <div className='product__card_page_right'> 
          <Assortment sizes= { p.sizes } colorUnique= { colorUnique } />
          <PriceBlock price= { p.price } />
          <Info />
          <PayBlock imagesPage = { p.imagesPage } />
          <div className='description'>Description</div>
          <AddInfo  material= { p.material } sizes= { p.sizes } images= { p.images } colorUnique= { colorUnique }/>
          <ReviewsBlock reviews= { p.reviews } rating= { p.rating }/>
        </div>
      </div>
      <Related DataRelated= { p.DataRelated } />
    </section>
  );
};

export default ProductCardPage;