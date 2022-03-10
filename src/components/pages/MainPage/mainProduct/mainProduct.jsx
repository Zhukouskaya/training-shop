import React, { useState } from 'react';

// import Product from '../../clothes/productPage/Product';
import ProductSeeAll from './ProductSeeAll/ProductSeeAll';
import ProductCard from '../../clothes/productCard/ProductCard';

import { Link } from 'react-router-dom';

// import ProductTitle from './ProductTitle/ProductTitle'
import './ProductTitle/productTitle.css'
import './ProductBtn/productBtn.css'
import './../../clothes/product.css'

const MainProduct = (p) => {

  let particularsArrW =[];
  function isParticularsWomen (status) {
    if (status === 'new-arrivals') {
      particularsArrW = [...p.WomenDataProducts].filter(item => item.particulars.isNewArrivals === true);
    } else if (status === 'specials') {
      particularsArrW = [...p.WomenDataProducts].filter(item => item.particulars.isSpecial === true);
    } else if (status === 'bestsellers') {
      particularsArrW  = [...p.WomenDataProducts].filter(item => item.particulars.isBestseller === true);
    } else if (status === 'most-viewed') {
      particularsArrW  = [...p.WomenDataProducts].filter(item => item.particulars.isMostViewed === true);
    } else if (status === 'featured-products') {
      particularsArrW = [...p.WomenDataProducts].filter(item => item.particulars.isFeatured === true);
    }
    setParticularsW(particularsArrW);
  }
  
  let particularsArrM =[];
  function isParticularsMen (status) {
    if (status === 'new-arrivals') {
      particularsArrM = [...p.MenDataProducts].filter(item => item.particulars.isNewArrivals === true);
    } else if (status === 'specials') {
      particularsArrM = [...p.MenDataProducts].filter(item => item.particulars.isSpecial === true);
    } else if (status === 'bestsellers') {
      particularsArrM  = [...p.MenDataProducts].filter(item => item.particulars.isBestseller === true);
    } else if (status === 'most-viewed') {
      particularsArrM  = [...p.MenDataProducts].filter(item => item.particulars.isMostViewed === true);
    } else if (status === 'featured-products') {
      particularsArrM = [...p.MenDataProducts].filter(item => item.particulars.isFeatured === true);
    }
    setParticularsM(particularsArrM);
  }

    const [particularsW, setParticularsW] = useState( particularsArrW = [...p.WomenDataProducts].filter(item => item.particulars.isNewArrivals === true));
    const [particularsM, setParticularsM] = useState( particularsArrM = [...p.MenDataProducts].filter(item => item.particulars.isNewArrivals === true));
  return (
    <section className='main__product'>
      <section className='women' data-test-id='clothes-women'>
        {/* <ProductTitle link='women' title ='Women’s' DataProducts= { p.WomenDataProducts } onClick={ this.isParticulars } /> */}
        <div className='product__title'>
      <div className='product__title_text'>
        <Link to= '/women' DataProducts= { p.WomenDataProducts } className='product__title_text' data-test-id='menu-link-women'>Women’s</Link>
      </div>
      <div className='product_sort'>
        <button onClick={ ()=> isParticularsWomen('new-arrivals') } data-test-id='clothes-women-isNewArrivals' className='ptoduct__btn'>NEW ARRIVALS</button>
        <button onClick={ ()=> isParticularsWomen('specials') } data-test-id='clothes-women-isSpecial' className='ptoduct__btn'>SPECIALS</button>
        <button onClick={ ()=> isParticularsWomen('bestsellers') } data-test-id='clothes-women-isBestseller' className='ptoduct__btn'>BESTSELLERS</button>
        <button onClick={ ()=> isParticularsWomen('most-viewed') } data-test-id='clothes-women-isMostViewed' className='ptoduct__btn'>MOST VIEWED</button>
        <button onClick={ ()=> isParticularsWomen('featured-products') } data-test-id='clothes-women-isFeatured' className='ptoduct__btn'>FEATURED PRODUCTS</button>
      </div>
    </div>
         {/*<Product DataProducts= { p.WomenDataProducts } /> */}
        <section className='product'>
          { particularsW.map(Card => <ProductCard id={ Card.id } name={ Card.name } price={ Card.price } star={ Card.star } images={ Card.images[0].url } category={ Card.category } rating={ Card.rating } discount= { Card.discount}/>).slice(0,8) }
        </section>  
        <ProductSeeAll link='women'/>
      </section>
        <section className='men' data-test-id='clothes-men'>
        {/* <ProductTitle link='men' title ='Men’s' DataProducts= { p.MenDataProducts }  isParticulars= { isParticulars }/> */}
        <div className='product__title'>
      <div className='product__title_text'>
        <Link to= '/men' DataProducts= { p.MenDataProducts } className='product__title_text' data-test-id='menu-link-men'>Men’s</Link>
      </div>
      <div className='product_sort'>
        <button onClick={ ()=> isParticularsMen('new-arrivals', p.MenDataProducts) } data-test-id='clothes-men-isNewArrivals' className='ptoduct__btn'>NEW ARRIVALS</button>
        <button onClick={ ()=> isParticularsMen('specials', p.MenDataProducts) } data-test-id='clothes-men-isSpecial' className='ptoduct__btn'>SPECIALS</button>
        <button onClick={ ()=> isParticularsMen('bestsellers', p.MenDataProducts) } data-test-id='clothes-men-isBestseller' className='ptoduct__btn'>BESTSELLERS</button>
        <button onClick={ ()=> isParticularsMen('most-viewed', p.MenDataProducts) } data-test-id='clothes-men-isMostViewed' className='ptoduct__btn'>MOST VIEWED</button>
        <button onClick={ ()=> isParticularsMen('featured-products', p.MenDataProducts) } data-test-id='clothes-men-isFeatured' className='ptoduct__btn'>FEATURED PRODUCTS</button>
      </div>
    </div>
        {/* <Product DataProducts= { p.MenDataProducts } */}
        <section className='product'>
          { particularsM.map (Card => <ProductCard id={ Card.id } name={ Card.name } price={ Card.price } star={ Card.star } images={ Card.images[0].url } category={ Card.category } rating={ Card.rating } discount= { Card.discount}/>).slice(0,8) }
        </section>
        <ProductSeeAll link='men'/>
      </section>
    </section>
  );
};

export default MainProduct;