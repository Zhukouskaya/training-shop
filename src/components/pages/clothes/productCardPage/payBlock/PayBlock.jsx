import React from 'react';

import './payBlock.css'

const PayBlock = (p) => {
  return (
    <div className='pay__block'>
      <div className='pay__title'>guaranteed safe checkout <span></span></div>
      <div className='pay__block_img'>
        { p.imagesPage.map ((img, index) => <img src={ p.imagesPage[index] } alt= 'pay__img'/>) }
      </div>
    </div>
  );
};

export default PayBlock;