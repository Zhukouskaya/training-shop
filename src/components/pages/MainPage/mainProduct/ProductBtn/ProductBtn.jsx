import React from 'react';

import './productBtn.css'

const ProductBtn = (p) => {
  return (
    <button className='ptoductBtn'>{p.text}</button>
  );
};

export default ProductBtn;