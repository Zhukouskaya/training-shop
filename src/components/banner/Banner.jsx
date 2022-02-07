import React from 'react';
import './assets/style/banner.css';

const Banner = () => {
  return (
    <section className="banner">
      <div className="bannerBloсk">
        <div className='banner__title_container'>
          <div className='banner__subtitle'>Banner</div>
          <div className='banner__title'>Your Title text</div>
          </div>
      </div>
      <div className="womenBlock">
        <div className='banner__title _women'>Women</div>
      </div>
      <div className="menBlock">
        <div className='banner__title _men'>Men</div>
      </div>
      <div className="accessoriesBlock">
        <div className='banner__title _accessories'>Accessories</div>
      </div>
    </section>
  );
};

export default Banner;