import React from 'react';

import './banner.css';

import bannerBtnLeft from './img/bannerLeft.svg';
import bannerBtnRight from './img/bannerRight.svg';

const Banner = () => {
  return (
    <section className="banner">
      <div className="bannerBloсk">   
        <button className='banner__btn'>
          <img className='banner__btn__left' src={bannerBtnLeft} alt="bannerBtnLeft" />
        </button>
        <div className='banner__title_container'>
          <div className='banner__subtitle'>Banner</div>
          <div className='banner__title'>Your Title text</div>
        </div>
        <button className='banner__btn _right'>
          <img className='banner__btn__right' src={bannerBtnRight} alt="bannerBtnRight" />
        </button>
      </div>
      <div className="womenBlock">
        <div className='banner__title'>Women</div>
      </div>
      <div className="menBlock">
        <div className='banner__title'>Men</div>
      </div>
      <div className="accessoriesBlock">
        <div className='banner__title'>Accessories</div>
      </div>
    </section>
  );
};

export default Banner;