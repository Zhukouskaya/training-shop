import React from 'react';

import './productCard.css'

const ProductCard = (p) => {
  return (
    <div className='productCard' id={p.id}>
      <img src={p.image} alt='product card'/>
      <p className='productName'>{p.name}</p>
      <div className='productInfo'> 
        <p className='productPrice'>{p.price}</p>
        <div className='productStar'>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;