import React from 'react';

import './assets/advantage.css';

import Support from './assets/img/support.svg';
import Return from './assets/img/return.svg';
import Shipping from './assets/img/shipping.svg';

const Advantage = () => {
  return (
    <section className='advantage'>
      <div className='advantage__block'>
        <img src={Shipping} alt="Shipping" />
        <div className='advantage__info'>
          <p className='advantage__title'>FREE SHIPPING</p>
          <p className='advantage__subtitle'>On all UA order or order above $100</p>
        </div>
      </div>
      <div className='advantage__block'>
        <img src={Return} alt="Return" />
        <div className='advantage__info'>
          <p className='advantage__title'>30 DAYS RETURN</p>
          <p className='advantage__subtitle'>Simply return it within 30 days for an exchange</p>
        </div>

      </div>
      <div className='advantage__block'>
        <img src={Support} alt="Support" />
        <div className='advantage__info'>
          <p className='advantage__title'>SUPPORT 24/7</p>
          <p className='advantage__subtitle'>Contact us 24 hours a day, 7 days a week</p>
        </div>

      </div>

    </section>
  );
};

export default Advantage;