import React from 'react';

import './info.css'

const InfoItem = (p) => {
  return (
    <div className='info_item'>
      <img src= {p.img} alt='img' />
      <p className='info_item_text'> { p.text }</p>
    </div>
  );
};

export default InfoItem;