import React from 'react';

import './banner.css';

import BannerSwiper from './bannerSwiper/BannerSwiper';

const Banner = () => {
  return (
    <section className="banner">
      <BannerSwiper />
      <div className="women__block">
        <div className='banner__title'>Women</div>
      </div>
      <div className="men__block">
        <div className='banner__title'>Men</div>
      </div>
      <div className="accessories__block">
        <div className='banner__title'>Accessories</div>
      </div>
    </section>
  );
};

export default Banner;