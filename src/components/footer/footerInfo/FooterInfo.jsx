import React from 'react';

import './footerInfo.css';

import footer_img1 from './img/Stripe.svg' 
import footer_img2 from './img/AES256.svg' 
import footer_img3 from './img/paypal.svg' 
import footer_img4 from './img/visa.svg' 
import footer_img5 from './img/mastercard.svg' 
import footer_img6 from './img/discover.svg' 
import footer_img7 from './img/american-express.svg' 

const FooterInfo = () => {

  const images = [footer_img1, footer_img2, footer_img3, footer_img4, footer_img5, footer_img6, footer_img7]

  const footerInfoImages = images.map ((img, index) => <img src={images[index]} alt= 'footer__img'/>)
  return (
    <section className='footer__info'>
      <div className='footer__copyright'>Copyright © 2032 all rights reserved</div>
      <div className='footer__img'> 
        { footerInfoImages }
      </div>
      <div className='footer__link'>
        <a target='blank' href='https://clevertec.ru/study/frontend.html'>Clevertec.ru/training</a>
      </div>
    </section>
  );
};

export default FooterInfo;