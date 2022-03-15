import React from 'react';

import './headerSocial.css'

const Social = (p) => {
  
  return (
    <div className="header__info__right">
      <ul className="social__list">
        { p.social.map((el, i) => <li key= { i } className='socil__item'><a target='_blank' href= { el.link }><img img src={ el.img } alt='img'/></a></li>) }
      </ul>
  </div>
  );
};

export default Social;