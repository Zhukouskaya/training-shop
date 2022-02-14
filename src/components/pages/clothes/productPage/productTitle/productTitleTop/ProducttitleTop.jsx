import React from 'react';
import './productTitleTop.css'

import img from './tr.png'
import share from './share.svg'

const ProducttitleTop = (p) => {
  return (
    <div className='product__title_top'>
      <div className='title_top_text'>
        <span>Home</span>
        <img src = { img } alt ='img'></img>
        <span className='last'>{ p.title }</span>
      </div>
      <div className='title_top_share'>
        <button>
          <img src= { share } alt='share_image'/>
        </button>
        <p> Share</p>
      </div>
    </div>
  );
};

export default ProducttitleTop;