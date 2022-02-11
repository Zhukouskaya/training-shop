import React from 'react';

import './headerSocial.css'

import facebook from './img/facebook.svg';
import twitter from './img/twitter.svg';
import instagram from './img/instagram.svg';
import pinterest from './img/pinterest.svg';

const Social = () => {

  const social = [facebook, twitter, instagram, pinterest]

  const socialItem = social.map ((img, index) => <li className='socil__item'><a target='_blank' href= {'https://www.`${social[index]}`.com/'}><img src={social[index]} /></a></li>)

  return (
    <div className="header__info__right">
      <ul className="social__list">
        { socialItem }
      </ul>
  </div>
  );
};

export default Social;