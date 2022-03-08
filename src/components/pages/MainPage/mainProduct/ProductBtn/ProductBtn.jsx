import React from 'react';

import './productBtn.css'

const ProductBtn = (p) => {

  return (
    <button onClick={ this.isParticulars(p.status) } className='ptoduct__btn'>{ p.text }</button>
  );
};

export default ProductBtn;