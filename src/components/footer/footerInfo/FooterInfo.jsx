import React from 'react';

import './footerInfo.css';

const FooterInfo = (p) => {

  return (
    <section className='footer__info'>
      <div className='footer__copyright'>Copyright © 2032 all rights reserved</div>
      <div className='footer__img'> 
        { p.images.map ((img, index) => <img key= { index }src={ p.images[index] } alt= 'footer__img'/>) }
      </div>
      <div className='footer__link'>
        <a target='blank' href='https://clevertec.ru/study/frontend.html'>Clevertec.ru/training</a>
      </div>
    </section>
  );
};

export default FooterInfo;