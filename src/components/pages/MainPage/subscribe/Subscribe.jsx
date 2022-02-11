import React from 'react';

import './subscribe.css'

const Subscribe = () => {
  return (
    <section className='subscribe'>
    <div className='subscribe__img_women'></div>
    <div className='subscribe__info'>
      <div className='subscribe__subtitle'>Special Offer</div>
      <div className='subscribe__title'>Subscribe</div>
      <div className='subscribe__title'>And <span>Get 10% Off</span></div>
      <div className='subscribe__form'>
        <form>
          <input class="subscribe__input" type="email" id="email" required placeholder="Enter your email" /> 
          <button class="subscribe__btn" type="submit">Subscribe</button>
        </form>
      </div>

      
    </div>
    <div className='subscribe__img_men'></div>
      
    </section>
  );
};

export default Subscribe;