import React from 'react';

import './productBtn.css'

const ProductBtn = (p) => {
  return (
    <button className='ptoduct__btn'>{p.text}</button>
  );
};

export default ProductBtn;