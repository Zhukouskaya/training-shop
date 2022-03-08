import React from 'react';

import { Link } from 'react-router-dom';

import './productTitleTop.css'

import img from './tr.png'
import share from './share.svg'

const ProducttitleTop = (p) => {
  return (
    <div className='product__title_top'>
      <div className='title_top_text'>
        <Link  to='/' className='title_top_text_home'>Home</Link>
        <img src = { img } alt ='img' />
        <Link  to={ `/${ p.title }` } className='last'>{ p.title }</Link>
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

{/* <Link to={ `/${ p.link }` } DataProducts= { p.MenDataProducts } className='product__title_text' data-test-id='menu-link-women'>Men’s</Link> */}

export default ProducttitleTop;