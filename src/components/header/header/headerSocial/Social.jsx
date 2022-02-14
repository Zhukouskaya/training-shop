import React from 'react';

import './headerSocial.css'

const Social = (p) => {
  
  return (
    <div className="header__info__right">
      <ul className="social__list">
        { p.social.map((img, index) => <li className='socil__item'><a target='_blank' href= { `https://www.${ p.social[index] }.com/` }><img img src={ p.social[index] } alt='img'/></a></li>) }
      </ul>
  </div>
  );
};

export default Social;